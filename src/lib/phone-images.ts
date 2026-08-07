import { CATALOG, type ColorOption } from "@/lib/catalog";

export type { ColorOption };

export type Product = {
  id: string;
  slug: string;
  model: string;
  condition: "new" | "preowned";
  price_zar: number;
  image_key: string;
  image_path: string | null;
  sort_order: number;
  updated_at: string;
};

export function catalogEntry(model: string) {
  return (
    CATALOG[model] ?? {
      images: [],
      colors: [{ name: "Black", hex: "#1c1c1e" }],
      storage: ["128GB"],
      description: `${model} — 100% original, tested and ready to ship nationwide.`,
    }
  );
}

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E";

/** Gallery of photos for a product: admin upload first (if any), then catalog photos. */
export function productImages(product: Product): string[] {
  const shots = catalogEntry(product.model).images;
  if (product.image_path) {
    return [
      `/api/public/product-image/${product.id}?v=${encodeURIComponent(product.updated_at)}`,
      ...shots,
    ];
  }
  return shots.length ? shots : [PLACEHOLDER];
}

export function productImage(product: Product): string {
  return productImages(product)[0] ?? PLACEHOLDER;
}

/** Storage tiers with the price for each, derived from the base price. */
export function storageTiers(product: Product) {
  const step = product.condition === "new" ? 800 : 200;
  return catalogEntry(product.model).storage.map((label, i) => ({
    label,
    price: product.price_zar + i * step,
  }));
}

export const WHATSAPP_NUMBER = "27618372308";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function formatRand(value: number) {
  return `R ${value.toLocaleString("en-ZA")}`;
}

export function conditionLabel(condition: Product["condition"]) {
  return condition === "new" ? "Brand New" : "Pre-Owned";
}
