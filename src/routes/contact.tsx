import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { whatsappLink } from "@/lib/phone-images";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Gadget Zone ZA | Centurion iPhone store" },
      {
        name: "description",
        content:
          "Visit Gadget Zone ZA at 120 Ellman st, Sunderland Ridge, Centurion, or message us on WhatsApp at +27 61 837 2308. Open Mon–Sat, 08:00–17:00.",
      },
      { property: "og:title", content: "Contact Gadget Zone ZA" },
      { property: "og:description", content: "Store address, hours and WhatsApp contact for Gadget Zone ZA." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-5 py-14">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand">Get in touch</span>
        <h1 className="mt-3 text-4xl font-bold md:text-5xl">Contact us</h1>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <div className="rounded-3xl border border-border p-6">
            <h2 className="font-semibold">Store</h2>
            <p className="mt-2 text-sm text-muted-foreground">120 Ellman st, Sunderland Ridge, Centurion, 0157</p>
            <p className="mt-2 text-sm text-muted-foreground">Mon – Sat · 08:00 – 17:00</p>
          </div>
          <div className="rounded-3xl border border-border p-6">
            <h2 className="font-semibold">Talk to us</h2>
            <p className="mt-2 text-sm">
              <a href={whatsappLink("Hi Gadget Zone ZA")} target="_blank" rel="noreferrer" className="text-brand">
                WhatsApp +27 61 837 2308
              </a>
            </p>
            <p className="mt-2 text-sm">
              <a href="mailto:gadgetzone.tech.za@gmail.com" className="text-muted-foreground hover:text-brand">
                gadgetzone.tech.za@gmail.com
              </a>
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
