import iphoneX from "@/assets/phones/iphone-x.jpg";
import iphoneXr from "@/assets/phones/iphone-xr.jpg";
import iphone11 from "@/assets/phones/iphone-11.jpg";
import iphone12 from "@/assets/phones/iphone-12.jpg";
import iphone13 from "@/assets/phones/iphone-13.jpg";
import iphone14 from "@/assets/phones/iphone-14.jpg";
import iphone15 from "@/assets/phones/iphone-15.jpg";
import iphone16 from "@/assets/phones/iphone-16.jpg";
import iphone17 from "@/assets/phones/iphone-17.jpg";

export const PHONE_IMAGES: Record<string, string> = {
  "iphone-x": iphoneX,
  "iphone-xr": iphoneXr,
  "iphone-11": iphone11,
  "iphone-12": iphone12,
  "iphone-13": iphone13,
  "iphone-14": iphone14,
  "iphone-15": iphone15,
  "iphone-16": iphone16,
  "iphone-17": iphone17,
};

export const PHONE_IMAGE_KEYS = Object.keys(PHONE_IMAGES);

export type Product = {
  id: string;
  model: string;
  condition: "new" | "preowned";
  price_zar: number;
  image_key: string;
  image_path: string | null;
  sort_order: number;
  updated_at: string;
};

export function productImage(product: Product): string {
  if (product.image_path) {
    return `/api/public/product-image/${product.id}?v=${encodeURIComponent(product.updated_at)}`;
  }
  return PHONE_IMAGES[product.image_key] ?? PHONE_IMAGES["iphone-x"]!;
}

export const WHATSAPP_NUMBER = "27618372308";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function formatRand(value: number) {
  return `R ${value.toLocaleString("en-ZA")}`;
}