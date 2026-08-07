import { supabase } from "@/integrations/supabase/client";
import type { Product } from "@/lib/phone-images";

export const productsQuery = {
  queryKey: ["products"] as const,
  queryFn: async (): Promise<Product[]> => {
    const { data, error } = await supabase.from("products").select("*").order("sort_order");
    if (error) throw error;
    return data as unknown as Product[];
  },
};
