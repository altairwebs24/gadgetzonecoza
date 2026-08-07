import { createFileRoute, Link } from "@tanstack/react-router";
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

  const message =
    "Hi Gadget Zone ZA, I'd like to order:\n" +
    items
      .map((i) => `• ${i.qty} × ${i.model} (${conditionLabel(i.condition)}) — ${i.storage}, ${i.color} — ${formatRand(i.price * i.qty)}`)
      .join("\n") +
    `\nTotal: ${formatRand(total)}`;

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
              <p className="mt-2 text-xs text-muted-foreground">
                Orders are confirmed with a 50% deposit. Delivery nationwide in 2–3 working days.
              </p>
              <a
                href={whatsappLink(message)}
                target="_blank"
                rel="noreferrer"
                className="mt-5 block rounded-full bg-ink py-3 text-center text-sm font-semibold text-background transition-colors hover:bg-brand"
              >
                Checkout on WhatsApp
              </a>
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
