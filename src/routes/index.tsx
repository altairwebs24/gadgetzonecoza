import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroSlideshow } from "@/components/hero-slideshow";
import { ProductSection } from "@/components/product-section";
import type { Product } from "@/lib/phone-images";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gadget Zone ZA | Brand New & Pre-Owned iPhones in Centurion" },
      {
        name: "description",
        content:
          "Shop brand new and pre-owned iPhones from X to 17 Pro Max at Gadget Zone ZA. 100% original, 2–3 day nationwide delivery across South Africa.",
      },
      { property: "og:title", content: "Gadget Zone ZA | Brand New & Pre-Owned iPhones" },
      {
        property: "og:description",
        content: "iPhone X to iPhone 17 Pro Max — brand new and pre-owned, delivered nationwide.",
      },
    ],
  }),
  component: Index,
});

const STEPS = [
  { n: "01", t: "Order confirmation", d: "Place your order and pay a 50% deposit to secure your iPhone." },
  { n: "02", t: "Final payment", d: "Settle the remaining 50% once your device is ready for dispatch." },
  { n: "03", t: "Delivery", d: "Nationwide courier delivery within 2–3 working days, or collect in Centurion." },
  { n: "04", t: "Quality & warranty", d: "Every device is tested and 100% original, with warranty on qualifying units." },
];

function Index() {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("sort_order", { ascending: true });
      if (error) throw error;
      return data as Product[];
    },
  });

  const products = data ?? [];
  const brandNew = products.filter((p) => p.condition === "new");
  const preOwned = products.filter((p) => p.condition === "preowned");

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSlideshow />

        {isLoading ? (
          <p className="py-24 text-center text-sm text-muted-foreground">Loading the price list…</p>
        ) : (
          <>
            <ProductSection
              id="brand-new"
              eyebrow="New (brand new)"
              title="Brand New iPhones"
              description="Sealed, unused and 100% original — straight from the box to your hand."
              products={brandNew}
            />
            <div className="border-y border-border bg-secondary">
              <ProductSection
                id="pre-owned"
                eyebrow="Pre-owned"
                title="Pre-Owned iPhones"
                description="Fully tested, clean devices at prices that make sense. Same iPhones, smaller number."
                products={preOwned}
              />
            </div>
          </>
        )}

        <section id="how-it-works" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand">Store policy</span>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">How ordering works</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <div key={step.n} className="rounded-3xl border border-border p-6">
                <span className="font-display text-3xl font-bold text-brand">{step.n}</span>
                <h3 className="mt-4 text-lg font-semibold">{step.t}</h3>
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
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
