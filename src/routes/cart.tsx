import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useCart } from "@/lib/cart";
import { conditionLabel, formatRand, whatsappLink } from "@/lib/phone-images";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your cart | Gadget Zone ZA" },
      { name: "description", content: "Review the iPhones in your Gadget Zone ZA cart and check out over WhatsApp." },
      { property: "og:title", content: "Your cart | Gadget Zone ZA" },
      { property: "og:description", content: "Review your selected iPhones and complete your order." },
      { property: "og:type", content: "website" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { items, total, setQty, remove, clear } = useCart();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [busy, setBusy] = useState(false);

  const itemLines =
    items
      .map((i) => `• ${i.qty} × ${i.model} (${conditionLabel(i.condition)}) — ${i.storage}, ${i.color} — ${formatRand(i.price * i.qty)}`)
      .join("\n");

  async function checkout() {
    if (!name.trim() || !phone.trim() || !address.trim()) {
      toast.error("Please fill in your name, phone number and delivery address.");
      return;
    }
    setBusy(true);
    const { error } = await supabase.from("orders").insert({
      customer_name: name.trim(),
      phone: phone.trim(),
      email: email.trim() || null,
      address: address.trim(),
      notes: notes.trim() || null,
      items: items.map((i) => ({
        slug: i.slug,
        model: i.model,
        condition: i.condition,
        storage: i.storage,
        color: i.color,
        price: i.price,
        qty: i.qty,
      })),
      total_zar: total,
    });
    setBusy(false);
    if (error) {
      toast.error("Could not save your order. Please try again.");
      return;
    }

    const message =
      `Hi Gadget Zone ZA, I'd like to order:\n${itemLines}\nTotal: ${formatRand(total)}\n\n` +
      `Name: ${name.trim()}\nPhone: ${phone.trim()}` +
      (email.trim() ? `\nEmail: ${email.trim()}` : "") +
      `\nDelivery address: ${address.trim()}` +
      (notes.trim() ? `\nNotes: ${notes.trim()}` : "");

    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    toast.success("Order details sent — finish on WhatsApp.");
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-5 py-12">
        <h1 className="text-4xl font-bold">Your cart</h1>

        {items.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-sm text-muted-foreground">Your cart is empty.</p>
            <Link to="/brand-new" className="mt-4 inline-block rounded-full bg-ink px-6 py-3 text-sm font-semibold text-background">
              Shop iPhones
            </Link>
          </div>
        ) : (
          <>
            <ul className="mt-8 space-y-4">
              {items.map((i) => (
                <li key={i.key} className="flex gap-4 rounded-2xl border border-border p-4">
                  <img src={i.image} alt={i.model} width={200} height={200} className="h-24 w-24 rounded-xl bg-secondary object-cover" />
                  <div className="flex-1">
                    <Link to="/product/$slug" params={{ slug: i.slug }} className="font-semibold hover:text-brand">
                      {i.model}
                    </Link>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      {conditionLabel(i.condition)} · {i.storage} · {i.color}
                    </p>
                    <p className="mt-1 font-semibold">{formatRand(i.price)}</p>
                    <div className="mt-2 flex items-center gap-3">
                      <div className="flex h-9 items-center rounded-full border border-border">
                        <button onClick={() => setQty(i.key, i.qty - 1)} aria-label="Decrease quantity" className="px-3">−</button>
                        <span className="w-6 text-center text-sm">{i.qty}</span>
                        <button onClick={() => setQty(i.key, i.qty + 1)} aria-label="Increase quantity" className="px-3">+</button>
                      </div>
                      <button onClick={() => remove(i.key)} className="text-xs font-semibold text-muted-foreground hover:text-brand">
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-border bg-secondary p-6">
              <div className="flex items-center justify-between text-lg font-bold">
                <span>Total</span>
                <span>{formatRand(total)}</span>
              </div>

              <div className="mt-6 space-y-3">
                <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Your details</h2>
                <Field label="Full name" value={name} onChange={setName} placeholder="e.g. Thabo Nkosi" required />
                <Field label="Phone number" value={phone} onChange={setPhone} placeholder="e.g. 072 123 4567" type="tel" required />
                <Field label="Email (optional)" value={email} onChange={setEmail} placeholder="you@email.com" type="email" />
                <label className="block">
                  <span className="text-xs font-semibold">Delivery address *</span>
                  <textarea
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    rows={3}
                    maxLength={500}
                    placeholder="Street, suburb, city, postal code"
                    className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:border-brand"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold">Order notes (optional)</span>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={2}
                    maxLength={500}
                    className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:border-brand"
                  />
                </label>
              </div>

              <p className="mt-2 text-xs text-muted-foreground">
                Orders are confirmed with a 50% deposit. Delivery nationwide in 2–3 working days.
              </p>
              <button
                onClick={checkout}
                disabled={busy}
                className="mt-5 block w-full rounded-full bg-ink py-3 text-center text-sm font-semibold text-background transition-colors hover:bg-brand disabled:opacity-60"
              >
                {busy ? "Placing order…" : "Continue to WhatsApp checkout"}
              </button>
              <button onClick={clear} className="mt-3 w-full text-xs font-semibold text-muted-foreground hover:text-brand">
                Clear cart
              </button>
            </div>
          </>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold">
        {label} {required ? "*" : null}
      </span>
      <input
        type={type}
        value={value}
        maxLength={120}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:border-brand"
      />
    </label>
  );
}
