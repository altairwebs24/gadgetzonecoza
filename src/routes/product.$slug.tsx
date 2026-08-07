import { useMemo, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ProductCard } from "@/components/product-card";
import { productsQuery } from "@/lib/products";
import { useCart } from "@/lib/cart";
import {
  catalogEntry,
  conditionLabel,
  formatRand,
  productImages,
  storageTiers,
  whatsappLink,
  type Product,
} from "@/lib/phone-images";

export const Route = createFileRoute("/product/$slug")({
  head: ({ params }) => {
    const name = params.slug
      .replace(/^(new|pre-owned)-/, "")
      .replace(/-/g, " ")
      .replace(/\biphone\b/i, "iPhone");
    return {
      meta: [
        { title: `${name} | Gadget Zone ZA` },
        { name: "description", content: `Buy the ${name} from Gadget Zone ZA — choose colour and storage, add to cart and get nationwide delivery in 2–3 working days.` },
        { property: "og:title", content: `${name} | Gadget Zone ZA` },
        { property: "og:description", content: `Buy the ${name} from Gadget Zone ZA with fast nationwide delivery.` },
        { property: "og:type", content: "product" },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { slug } = Route.useParams();
  const { data, isLoading } = useQuery(productsQuery);
  const product = (data ?? []).find((p) => p.slug === slug);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        {isLoading ? (
          <p className="py-32 text-center text-sm text-muted-foreground">Loading…</p>
        ) : product ? (
          <ProductDetail product={product} all={data ?? []} />
        ) : (
          <div className="py-32 text-center">
            <p className="text-sm text-muted-foreground">We couldn't find that phone.</p>
            <Link to="/brand-new" className="mt-4 inline-block text-sm font-semibold text-brand">
              Browse all iPhones
            </Link>
          </div>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}

function ProductDetail({ product, all }: { product: Product; all: Product[] }) {
  const entry = catalogEntry(product.model);
  const images = productImages(product);
  const tiers = storageTiers(product);
  const navigate = useNavigate();
  const { add } = useCart();

  const [shot, setShot] = useState(0);
  const [storage, setStorage] = useState(tiers[0]?.label ?? "");
  const [color, setColor] = useState(entry.colors[0]?.name ?? "");
  const [qty, setQty] = useState(1);

  const price = tiers.find((t) => t.label === storage)?.price ?? product.price_zar;

  const related = useMemo(
    () => all.filter((p) => p.condition === product.condition && p.id !== product.id).slice(0, 4),
    [all, product],
  );

  const payload = {
    slug: product.slug,
    model: product.model,
    condition: product.condition,
    color,
    storage,
    price,
    image: images[0] ?? "",
    qty,
  };

  return (
    <>
      <nav className="mx-auto max-w-6xl px-5 pt-6 text-xs text-muted-foreground">
        <Link to="/" className="hover:text-brand">Home</Link>
        <span className="px-2">/</span>
        <Link to={product.condition === "new" ? "/brand-new" : "/pre-owned"} className="hover:text-brand">
          {conditionLabel(product.condition)}
        </Link>
        <span className="px-2">/</span>
        <span className="text-foreground">{product.model}</span>
      </nav>

      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-8 md:grid-cols-2">
        <div>
          <div className="overflow-hidden rounded-2xl bg-secondary">
            <img
              src={images[shot] ?? images[0]}
              alt={`${product.model} ${conditionLabel(product.condition)}`}
              width={1080}
              height={1080}
              className="aspect-square w-full object-cover"
            />
          </div>
          {images.length > 1 && (
            <div className="mt-3 flex gap-3">
              {images.map((src, i) => (
                <button
                  key={src}
                  onClick={() => setShot(i)}
                  aria-label={`View photo ${i + 1}`}
                  className={`h-16 w-16 overflow-hidden rounded-xl border-2 ${
                    i === shot ? "border-brand" : "border-border"
                  }`}
                >
                  <img src={src} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand">
            {conditionLabel(product.condition)}
          </span>
          <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">{product.model}</h1>
          <p className="mt-3 text-2xl font-semibold">{formatRand(price)}</p>

          <hr className="my-6 border-border" />

          <fieldset>
            <legend className="text-sm font-semibold">
              Storage <span className="font-normal text-muted-foreground">{storage}</span>
            </legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {tiers.map((t) => (
                <button
                  key={t.label}
                  onClick={() => setStorage(t.label)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    storage === t.label ? "border-ink bg-ink text-background" : "border-border hover:border-ink"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-6">
            <legend className="text-sm font-semibold">
              Colour <span className="font-normal text-muted-foreground">{color}</span>
            </legend>
            <div className="mt-3 flex flex-wrap gap-3">
              {entry.colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setColor(c.name)}
                  title={c.name}
                  aria-label={c.name}
                  className={`h-9 w-9 rounded-full border-2 transition-transform ${
                    color === c.name ? "border-brand scale-110" : "border-border"
                  }`}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
          </fieldset>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="flex h-12 items-center rounded-full border border-border">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity" className="px-4 text-lg">
                −
              </button>
              <span className="w-8 text-center text-sm font-semibold">{qty}</span>
              <button onClick={() => setQty((q) => q + 1)} aria-label="Increase quantity" className="px-4 text-lg">
                +
              </button>
            </div>
            <button
              onClick={() => {
                add(payload);
                toast.success(`${product.model} added to your cart`);
              }}
              className="h-12 flex-1 rounded-full bg-ink px-8 text-sm font-semibold text-background transition-colors hover:bg-brand"
            >
              Add to cart
            </button>
          </div>

          <button
            onClick={() => {
              add(payload);
              navigate({ to: "/cart" });
            }}
            className="mt-3 h-12 w-full rounded-full bg-brand text-sm font-semibold text-primary-foreground"
          >
            Buy it now
          </button>

          <a
            href={whatsappLink(
              `Hi Gadget Zone ZA, I want to order the ${product.model} (${conditionLabel(product.condition)}) — ${storage}, ${color} for ${formatRand(price)}.`,
            )}
            target="_blank"
            rel="noreferrer"
            className="mt-3 block rounded-full border border-border py-3 text-center text-sm font-semibold transition-colors hover:border-ink"
          >
            Ask on WhatsApp
          </a>

          <p className="mt-8 text-sm leading-relaxed text-muted-foreground">{entry.description}</p>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mx-auto max-w-6xl px-5 pb-20">
          <h2 className="text-3xl font-bold">You may also like</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
