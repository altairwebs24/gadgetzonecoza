import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";
import { formatRand, productImage, type Product } from "@/lib/phone-images";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Store admin | Gadget Zone ZA" },
      { name: "description", content: "Manage Gadget Zone ZA iPhone prices and product photos." },
      { property: "og:title", content: "Store admin | Gadget Zone ZA" },
      { property: "og:description", content: "Manage Gadget Zone ZA iPhone prices and product photos." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data: isAdmin } = useQuery({
    queryKey: ["is-admin", user?.id],
    enabled: !!user,
    queryFn: async () => {
      const { data, error } = await supabase.from("admin_emails").select("email");
      if (error) return false;
      return (data?.length ?? 0) > 0;
    },
  });

  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data, error } = await supabase.from("products").select("*").order("sort_order");
      if (error) throw error;
      return data as Product[];
    },
  });

  if (loading) return <Centered>Loading…</Centered>;

  if (!user) {
    return (
      <Centered>
        <p className="mb-4">You need to sign in to manage the store.</p>
        <Link to="/auth" className="rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-primary-foreground">
          Go to sign in
        </Link>
      </Centered>
    );
  }

  if (isAdmin === false) {
    return (
      <Centered>
        <p className="mb-4">This account ({user.email}) is not a store admin.</p>
        <button
          onClick={async () => {
            await supabase.auth.signOut();
            navigate({ to: "/auth" });
          }}
          className="rounded-full border border-border px-6 py-2.5 text-sm font-semibold"
        >
          Sign out
        </button>
      </Centered>
    );
  }

  const refresh = () => queryClient.invalidateQueries({ queryKey: ["products"] });

  return (
    <div className="min-h-screen bg-secondary">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-5">
          <div>
            <h1 className="text-2xl font-bold">Store admin</h1>
            <p className="text-sm text-muted-foreground">Signed in as {user.email}</p>
          </div>
          <div className="flex gap-2">
            <Link to="/" className="rounded-full border border-border px-5 py-2 text-sm font-semibold">
              View store
            </Link>
            <button
              onClick={async () => {
                await supabase.auth.signOut();
                navigate({ to: "/auth" });
              }}
              className="rounded-full bg-ink px-5 py-2 text-sm font-semibold text-background"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl space-y-4 px-5 py-10">
        {(products ?? []).map((product) => (
          <AdminRow key={product.id} product={product} onChange={refresh} />
        ))}
      </main>
    </div>
  );
}

function Centered({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-secondary px-5 text-center text-sm">
      {children}
    </div>
  );
}

function AdminRow({ product, onChange }: { product: Product; onChange: () => void }) {
  const [price, setPrice] = useState(String(product.price_zar));
  const [busy, setBusy] = useState(false);

  async function savePrice() {
    setBusy(true);
    const { error } = await supabase
      .from("products")
      .update({ price_zar: Number(price) })
      .eq("id", product.id);
    setBusy(false);
    if (error) toast.error(error.message);
    else {
      toast.success(`${product.model} price updated`);
      onChange();
    }
  }

  async function uploadImage(file: File) {
    setBusy(true);
    const path = `${product.id}/${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.\-_]/g, "")}`;
    const { error: uploadError } = await supabase.storage
      .from("product-images")
      .upload(path, file, { upsert: true, contentType: file.type });
    if (uploadError) {
      setBusy(false);
      toast.error(uploadError.message);
      return;
    }
    const { error } = await supabase.from("products").update({ image_path: path }).eq("id", product.id);
    setBusy(false);
    if (error) toast.error(error.message);
    else {
      toast.success("Photo updated");
      onChange();
    }
  }

  async function setImageKey(key: string) {
    setBusy(true);
    const { error } = await supabase
      .from("products")
      .update({ image_key: key, image_path: null })
      .eq("id", product.id);
    setBusy(false);
    if (error) toast.error(error.message);
    else {
      toast.success("Photo updated");
      onChange();
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-border bg-card p-4">
      <img
        src={productImage(product)}
        alt={product.model}
        loading="lazy"
        width={800}
        height={800}
        className="h-20 w-20 rounded-xl bg-secondary object-contain p-1"
      />
      <div className="min-w-40 flex-1">
        <p className="font-semibold">{product.model}</p>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          {product.condition === "new" ? "Brand new" : "Pre-owned"} · {formatRand(product.price_zar)}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <input
          aria-label={`Price for ${product.model}`}
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="h-10 w-28 rounded-xl border border-border bg-secondary px-3 text-sm outline-none focus:border-brand"
        />
        <button
          onClick={savePrice}
          disabled={busy}
          className="h-10 rounded-xl bg-brand px-4 text-sm font-semibold text-primary-foreground disabled:opacity-60"
        >
          Save
        </button>
      </div>
      {product.image_path && (
        <button
          onClick={() => setImageKey(product.image_key)}
          disabled={busy}
          className="h-10 rounded-xl border border-border px-4 text-sm font-semibold"
        >
          Use default photo
        </button>
      )}
      <label className="h-10 cursor-pointer rounded-xl border border-border px-4 text-sm font-semibold leading-10">
        Upload photo
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) uploadImage(file);
          }}
        />
      </label>
    </div>
  );
}