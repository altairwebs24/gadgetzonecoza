import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How ordering works | Gadget Zone ZA" },
      {
        name: "description",
        content:
          "Gadget Zone ZA store policy: 50% deposit to confirm, final payment before dispatch, 2–3 day nationwide delivery, quality checks, warranty and returns.",
      },
      { property: "og:title", content: "How ordering works | Gadget Zone ZA" },
      { property: "og:description", content: "Deposit, payment, delivery, warranty and returns explained." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HowItWorks,
});

const STEPS = [
  { n: "01", t: "Order confirmation", d: "Place your order and pay a 50% deposit to secure your iPhone." },
  { n: "02", t: "Final payment", d: "Settle the remaining 50% once your device is ready for dispatch." },
  { n: "03", t: "Delivery", d: "Nationwide courier delivery within 2–3 working days, or collect in Centurion." },
  { n: "04", t: "Quality & warranty", d: "Every device is tested and 100% original, with warranty on qualifying units." },
];

function HowItWorks() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 py-14">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand">Store policy</span>
        <h1 className="mt-3 text-4xl font-bold md:text-5xl">How ordering works</h1>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <div key={step.n} className="rounded-3xl border border-border p-6">
              <span className="font-display text-3xl font-bold text-brand">{step.n}</span>
              <h2 className="mt-4 text-lg font-semibold">{step.t}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{step.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-3xl border border-border bg-secondary p-6 text-sm text-muted-foreground">
          <p className="font-semibold text-foreground">Returns</p>
          <p className="mt-1">
            Faulty devices may be returned within the agreed warranty period. Deposits secure stock and
            are non-refundable once an order is placed. Prices are subject to change without prior notice.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
