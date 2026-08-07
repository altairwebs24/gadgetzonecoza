import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProductGrid } from "@/components/product-grid";
import { productsQuery } from "@/lib/products";

export const Route = createFileRoute("/pre-owned")({
  head: () => ({
    meta: [
      { title: "Pre-Owned iPhones | Gadget Zone ZA" },
      {
        name: "description",
        content:
          "Fully tested pre-owned iPhones at honest prices. Choose colour and storage, add to cart and get nationwide delivery in 2–3 working days.",
      },
      { property: "og:title", content: "Pre-Owned iPhones | Gadget Zone ZA" },
      { property: "og:description", content: "Clean, tested, 100% original pre-owned iPhones from R1 200." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: PreOwnedPage,
});

function PreOwnedPage() {
  const { data, isLoading } = useQuery(productsQuery);
  const products = (data ?? []).filter((p) => p.condition === "preowned");

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-5 py-12">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand">Pre-owned</span>
        <h1 className="mt-3 text-4xl font-bold md:text-5xl">Pre-Owned iPhones</h1>
        <p className="mt-3 max-w-xl text-sm text-muted-foreground">
          Fully tested, clean devices at prices that make sense. Same iPhones, smaller number.
        </p>
        <div className="mt-10">
          {isLoading ? (
            <p className="py-20 text-center text-sm text-muted-foreground">Loading…</p>
          ) : (
            <ProductGrid products={products} searchLabel="Search pre-owned iPhones" />
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
