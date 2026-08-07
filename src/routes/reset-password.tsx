import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/reset-password")({
  head: () => ({
    meta: [
      { title: "Reset password | Gadget Zone ZA" },
      { name: "description", content: "Choose a new password for your Gadget Zone ZA admin account." },
      { property: "og:title", content: "Reset password | Gadget Zone ZA" },
      { property: "og:description", content: "Choose a new password for your Gadget Zone ZA admin account." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ResetPassword,
});

function ResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    const { error } = await supabase.auth.updateUser({ password });
    setBusy(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Password updated");
    navigate({ to: "/admin" });
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary px-5">
      <form onSubmit={submit} className="w-full max-w-md rounded-3xl border border-border bg-card p-8 shadow-float">
        <h1 className="text-3xl font-bold">Set a new password</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Open this page from the reset link in your email, then choose a new password.
        </p>
        <label htmlFor="new-password" className="mt-6 block text-sm font-medium">New password</label>
        <input
          id="new-password"
          type="password"
          required
          minLength={8}
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1.5 h-11 w-full rounded-xl border border-border bg-secondary px-4 text-sm outline-none focus:border-brand"
        />
        <button
          type="submit"
          disabled={busy}
          className="mt-6 h-11 w-full rounded-xl bg-brand text-sm font-semibold text-primary-foreground disabled:opacity-60"
        >
          {busy ? "Updating…" : "Update password"}
        </button>
        <Link to="/auth" className="mt-4 block text-sm text-muted-foreground hover:text-foreground">
          ← Back to sign in
        </Link>
      </form>
    </div>
  );
}