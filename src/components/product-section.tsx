import { useState } from "react";
import { formatRand, productImage, whatsappLink, type Product } from "@/lib/phone-images";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  products: Product[];
};

export function ProductSection({ id, eyebrow, title, description, products }: Props) {
  const [query, setQuery] = useState("");
  const filtered = products.filter((p) => p.model.toLowerCase().includes(query.toLowerCase()));

  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-20 px-5 py-16">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand">{eyebrow}</span>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">{title}</h2>
          <p className="mt-3 max-w-lg text-sm text-muted-foreground">{description}</p>
        </div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search a model…"
          aria-label={`Search ${title}`}
          className="h-11 w-full rounded-full border border-border bg-secondary px-5 text-sm outline-none transition-colors focus:border-brand md:w-64"
        />
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <article
            key={product.id}
            className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-float"
          >
            <div className="flex aspect-square items-center justify-center bg-secondary p-6">
              <img
                src={productImage(product)}
                alt={`${product.model} ${product.condition === "new" ? "brand new" : "pre-owned"}`}
                loading="lazy"
                width={800}
                height={800}
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col gap-1 p-5">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                {product.condition === "new" ? "Brand new" : "Pre-owned"}
              </span>
              <h3 className="text-lg font-semibold">{product.model}</h3>
              <p className="mt-1 text-2xl font-bold text-brand">{formatRand(product.price_zar)}</p>
              <a
                href={whatsappLink(
                  `Hi Gadget Zone ZA, I want to order the ${product.model} (${
                    product.condition === "new" ? "Brand New" : "Pre-Owned"
                  }) for ${formatRand(product.price_zar)}.`,
                )}
                target="_blank"
                rel="noreferrer"
                className="mt-4 rounded-full bg-ink py-2.5 text-center text-sm font-semibold text-background transition-colors hover:bg-brand"
              >
                Order now
              </a>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-sm text-muted-foreground">No models match “{query}”.</p>
      )}
    </section>
  );
}