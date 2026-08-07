import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroSlideshow } from "@/components/hero-slideshow";
import { ProductCard } from "@/components/product-card";
import { productsQuery } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gadget Zone ZA | Brand New & Pre-Owned iPhones in Centurion" },
      {
        name: "description",
        content:
          "Shop brand new and pre-owned iPhones from X to 17 Pro Max at Gadget Zone ZA. Pick your colour and storage, 100% original, 2–3 day nationwide delivery.",
      },
      { property: "og:title", content: "Gadget Zone ZA | Brand New & Pre-Owned iPhones" },
      {
        property: "og:description",
        content: "iPhone X to iPhone 17 Pro Max — brand new and pre-owned, delivered nationwide.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  const { data, isLoading } = useQuery(productsQuery);
  const products = data ?? [];
  const brandNew = products.filter((p) => p.condition === "new").slice(-6).reverse();
  const preOwned = products.filter((p) => p.condition === "preowned").slice(-6).reverse();

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSlideshow />

        {isLoading ? (
          <p className="py-24 text-center text-sm text-muted-foreground">Loading the store…</p>
        ) : (
          <>
            <Showcase
              eyebrow="New (brand new)"
              title="Brand New iPhones"
              description="Sealed, unused and 100% original — straight from the box to your hand."
              to="/brand-new"
              products={brandNew}
            />
            <div className="border-y border-border bg-secondary">
              <Showcase
                eyebrow="Pre-owned"
                title="Pre-Owned iPhones"
                description="Fully tested, clean devices at prices that make sense. Same iPhones, smaller number."
                to="/pre-owned"
                products={preOwned}
              />
            </div>
          </>
        )}

        <section className="mx-auto max-w-6xl px-5 py-16 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Ordering is simple</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground">
            50% deposit to confirm, the balance before dispatch, and nationwide courier delivery in
            2–3 working days.
          </p>
          <Link
            to="/how-it-works"
            className="mt-6 inline-block rounded-full bg-ink px-7 py-3 text-sm font-semibold text-background transition-colors hover:bg-brand"
          >
            See how it works
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Showcase({
  eyebrow,
  title,
  description,
  to,
  products,
}: {
  eyebrow: string;
  title: string;
  description: string;
  to: "/brand-new" | "/pre-owned";
  products: import("@/lib/phone-images").Product[];
}) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand">{eyebrow}</span>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">{title}</h2>
          <p className="mt-3 max-w-lg text-sm text-muted-foreground">{description}</p>
        </div>
        <Link to={to} className="rounded-full border border-ink px-6 py-2.5 text-sm font-semibold transition-colors hover:bg-ink hover:text-background">
          View all
        </Link>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-4 md:gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
