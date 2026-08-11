import { useEffect, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Eye, EyeOff } from "lucide-react";
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
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState<"checking" | "ready" | "invalid">("checking");

  useEffect(() => {
    let active = true;

    async function establishSession() {
      const url = new URL(window.location.href);
      const hash = new URLSearchParams(url.hash.replace(/^#/, ""));
      const code = url.searchParams.get("code");
      const tokenHash = url.searchParams.get("token_hash") ?? hash.get("token_hash");
      const accessToken = hash.get("access_token");
      const refreshToken = hash.get("refresh_token");
      const errorDescription = url.searchParams.get("error_description") ?? hash.get("error_description");

      if (errorDescription) return { error: errorDescription };

      if (accessToken && refreshToken) {
        const { error } = await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken,
        });
        if (error) return { error: error.message };
      } else if (tokenHash) {
        const { error } = await supabase.auth.verifyOtp({ type: "recovery", token_hash: tokenHash });
        if (error) return { error: error.message };
      } else if (code) {
        const { error } = await supabase.auth.exchangeCodeForSession(code);
        if (error) return { error: error.message };
      }

      const { data } = await supabase.auth.getSession();
      if (!data.session) return { error: "This reset link is invalid or has expired. Request a new one." };
      return { error: null };
    }

    establishSession().then(({ error }) => {
      if (!active) return;
      if (error) {
        setStatus("invalid");
        toast.error(error);
      } else {
        setStatus("ready");
        window.history.replaceState({}, "", "/reset-password");
      }
    });

    return () => {
      active = false;
    };
  }, []);

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
          {status === "checking"
            ? "Checking your reset link…"
            : status === "invalid"
              ? "This reset link is invalid or has expired. Go back to sign in and request a new link."
              : "Choose a new password for your account."}
        </p>
        <label htmlFor="new-password" className="mt-6 block text-sm font-medium">New password</label>
        <div className="relative mt-1.5">
          <input
            id="new-password"
            type={show ? "text" : "password"}
            required
            minLength={8}
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-11 w-full rounded-xl border border-border bg-secondary pl-4 pr-12 text-sm outline-none focus:border-brand"
          />
          <button
            type="button"
            onClick={() => setShow((v) => !v)}
            aria-label={show ? "Hide password" : "Show password"}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            {show ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        <button
          type="submit"
          disabled={busy || status !== "ready"}
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