import { useState } from "react";
import { ProductCard } from "@/components/product-card";
import type { Product } from "@/lib/phone-images";

export function ProductGrid({ products, searchLabel }: { products: Product[]; searchLabel: string }) {
  const [query, setQuery] = useState("");
  const filtered = products.filter((p) => p.model.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search a model…"
        aria-label={searchLabel}
        className="h-11 w-full rounded-full border border-border bg-secondary px-5 text-sm outline-none transition-colors focus:border-brand md:w-72"
      />
      <div className="mt-8 grid grid-cols-2 gap-4 md:gap-6">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="mt-10 text-center text-sm text-muted-foreground">No models match “{query}”.</p>
      )}
    </div>
  );
}
