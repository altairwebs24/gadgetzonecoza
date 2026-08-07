import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/public/product-image/$id")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

        const { data: product } = await supabaseAdmin
          .from("products")
          .select("image_path")
          .eq("id", params.id)
          .maybeSingle();

        if (!product?.image_path) {
          return new Response("Not found", { status: 404 });
        }

        const { data: file, error } = await supabaseAdmin.storage
          .from("product-images")
          .download(product.image_path);

        if (error || !file) {
          return new Response("Not found", { status: 404 });
        }

        return new Response(await file.arrayBuffer(), {
          headers: {
            "content-type": file.type || "image/jpeg",
            "cache-control": "public, max-age=31536000, immutable",
          },
        });
      },
    },
  },
});