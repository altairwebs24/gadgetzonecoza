import { Link } from "@tanstack/react-router";
import { catalogEntry, formatRand, productImage, type Product } from "@/lib/phone-images";

export function ProductCard({ product }: { product: Product }) {
  const colors = catalogEntry(product.model).colors;
  return (
    <Link
      to="/product/$slug"
      params={{ slug: product.slug }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-float"
    >
      <div className="aspect-square overflow-hidden bg-secondary">
        <img
          src={productImage(product)}
          alt={`${product.model} ${product.condition === "new" ? "brand new" : "pre-owned"}`}
          loading="lazy"
          width={800}
          height={800}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1 p-4">
        <h3 className="text-base font-semibold leading-tight">{product.model}</h3>
        <p className="text-sm text-muted-foreground">From {formatRand(product.price_zar)}</p>
        <div className="mt-2 flex items-center gap-1.5">
          {colors.slice(0, 5).map((c) => (
            <span
              key={c.name}
              title={c.name}
              className="h-3.5 w-3.5 rounded-full border border-border"
              style={{ backgroundColor: c.hex }}
            />
          ))}
        </div>
      </div>
    </Link>
  );
}
