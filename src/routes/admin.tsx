import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";
import { formatRand, productImage, type Product } from "@/lib/phone-images";
import { fileToDataUrl } from "@/lib/image-upload";

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
        <OrdersPanel />
        <AddProductPanel onChange={refresh} />
        {(products ?? []).map((product) => (
          <AdminRow key={product.id} product={product} onChange={refresh} />
        ))}
      </main>
    </div>
  );
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function AddProductPanel({ onChange }: { onChange: () => void }) {
  const [model, setModel] = useState("");
  const [condition, setCondition] = useState<"new" | "preowned">("new");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);

  async function addProduct() {
    if (!model.trim() || !price) {
      toast.error("Model and price are required");
      return;
    }
    setBusy(true);
    const slug = `${slugify(model)}-${condition}`;
    const { data: inserted, error } = await supabase
      .from("products")
      .insert({
        model: model.trim(),
        condition,
        price_zar: Number(price),
        slug,
        sort_order: 999,
      })
      .select("id")
      .single();

    if (error || !inserted) {
      setBusy(false);
      toast.error(error?.message ?? "Could not add product");
      return;
    }

    if (file) {
      try {
        const dataUrl = await fileToDataUrl(file);
        const { error: imageError } = await supabase
          .from("products")
          .update({ image_data_url: dataUrl })
          .eq("id", inserted.id);
        if (imageError) throw new Error(imageError.message);
      } catch (err) {
        setBusy(false);
        toast.error(err instanceof Error ? err.message : "Could not upload the photo");
        return;
      }
    }

    setBusy(false);
    setModel("");
    setPrice("");
    setFile(null);
    toast.success("Product added");
    onChange();
  }

  return (
    <section className="rounded-2xl border border-border bg-background p-6">
      <h2 className="text-lg font-bold">Add a product</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <label className="text-sm">
          <span className="mb-1 block text-xs uppercase tracking-widest text-muted-foreground">Model</span>
          <input
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="iPhone 15 Pro"
            className="h-11 w-full rounded-xl border border-border bg-secondary px-3 text-sm outline-none focus:border-brand"
          />
        </label>
        <label className="text-sm">
          <span className="mb-1 block text-xs uppercase tracking-widest text-muted-foreground">Price (ZAR)</span>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="12000"
            className="h-11 w-full rounded-xl border border-border bg-secondary px-3 text-sm outline-none focus:border-brand"
          />
        </label>
        <label className="text-sm">
          <span className="mb-1 block text-xs uppercase tracking-widest text-muted-foreground">Condition</span>
          <select
            value={condition}
            onChange={(e) => setCondition(e.target.value as "new" | "preowned")}
            className="h-11 w-full rounded-xl border border-border bg-secondary px-3 text-sm outline-none focus:border-brand"
          >
            <option value="new">Brand new</option>
            <option value="preowned">Pre-owned</option>
          </select>
        </label>
        <label className="text-sm">
          <span className="mb-1 block text-xs uppercase tracking-widest text-muted-foreground">Photo</span>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            className="h-11 w-full rounded-xl border border-border bg-secondary px-3 py-2 text-xs"
          />
        </label>
      </div>
      <button
        onClick={addProduct}
        disabled={busy}
        className="mt-4 h-11 rounded-xl bg-brand px-6 text-sm font-semibold text-primary-foreground disabled:opacity-60"
      >
        {busy ? "Adding…" : "Add product"}
      </button>
    </section>
  );
}

type OrderRow = {
  id: string;
  customer_name: string;
  phone: string;
  email: string | null;
  address: string;
  notes: string | null;
  items: unknown;
  total_zar: number;
  status: string;
  created_at: string;
};

function OrdersPanel() {
  const { data: orders, isLoading } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const { data, error } = await supabase.from("orders").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      return data as OrderRow[];
    },
  });

  const list = orders ?? [];
  const revenue = list.reduce((n, o) => n + (o.total_zar ?? 0), 0);
  const now = Date.now();
  const last30 = list.filter((o) => now - new Date(o.created_at).getTime() < 30 * 864e5).length;

  return (
    <section className="rounded-2xl border border-border bg-background p-6">
      <h2 className="text-lg font-bold">Orders</h2>
      <div className="mt-4 grid grid-cols-3 gap-3">
        <Stat label="Total orders" value={isLoading ? "…" : String(list.length)} />
        <Stat label="Last 30 days" value={isLoading ? "…" : String(last30)} />
        <Stat label="Order value" value={isLoading ? "…" : formatRand(revenue)} />
      </div>

      <div className="mt-5 space-y-3">
        {list.slice(0, 20).map((o) => (
          <div key={o.id} className="rounded-xl border border-border p-4 text-sm">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-semibold">{o.customer_name}</span>
              <span className="text-xs text-muted-foreground">{new Date(o.created_at).toLocaleString("en-ZA")}</span>
            </div>
            <p className="text-xs text-muted-foreground">
              {o.phone}
              {o.email ? ` · ${o.email}` : ""}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">{o.address}</p>
            <ul className="mt-2 space-y-0.5 text-xs">
              {(Array.isArray(o.items) ? (o.items as Array<Record<string, unknown>>) : []).map((it, idx) => (
                <li key={idx}>
                  {String(it['qty'])} × {String(it['model'])} — {String(it['storage'])}, {String(it['color'])}
                </li>
              ))}
            </ul>
            <p className="mt-2 font-semibold">{formatRand(o.total_zar)}</p>
          </div>
        ))}
        {!isLoading && list.length === 0 && <p className="text-sm text-muted-foreground">No orders yet.</p>}
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-secondary p-4">
      <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
      <p className="mt-1 text-xl font-bold">{value}</p>
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
    let dataUrl: string;
    try {
      dataUrl = await fileToDataUrl(file);
    } catch (err) {
      setBusy(false);
      toast.error(err instanceof Error ? err.message : "Could not read that image");
      return;
    }
    const { error } = await supabase
      .from("products")
      .update({ image_data_url: dataUrl })
      .eq("id", product.id);
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
      .update({ image_key: key, image_path: null, image_data_url: null })
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
      {(product.image_path || product.image_data_url) && (
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