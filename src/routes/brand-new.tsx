import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProductGrid } from "@/components/product-grid";
import { productsQuery } from "@/lib/products";

export const Route = createFileRoute("/brand-new")({
  head: () => ({
    meta: [
      { title: "Brand New iPhones | Gadget Zone ZA" },
      {
        name: "description",
        content:
          "Sealed brand new iPhones from X to 17 Pro Max. Pick your colour and storage, add to cart and get 2–3 day nationwide delivery in South Africa.",
      },
      { property: "og:title", content: "Brand New iPhones | Gadget Zone ZA" },
      { property: "og:description", content: "Sealed, unused and 100% original iPhones delivered nationwide." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: BrandNewPage,
});

function BrandNewPage() {
  const { data, isLoading } = useQuery(productsQuery);
  const products = (data ?? []).filter((p) => p.condition === "new");

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 py-12">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand">New (brand new)</span>
        <h1 className="mt-3 text-4xl font-bold md:text-5xl">Brand New iPhones</h1>
        <p className="mt-3 max-w-xl text-sm text-muted-foreground">
          Sealed, unused and 100% original — straight from the box to your hand.
        </p>
        <div className="mt-10">
          {isLoading ? (
            <p className="py-20 text-center text-sm text-muted-foreground">Loading…</p>
          ) : (
            <ProductGrid products={products} searchLabel="Search brand new iPhones" />
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
