import { useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import logo from "@/assets/gadgetzone-logo.jpeg";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Admin sign in | Gadget Zone ZA" },
      { name: "description", content: "Secure sign in for Gadget Zone ZA store administrators." },
      { property: "og:title", content: "Admin sign in | Gadget Zone ZA" },
      { property: "og:description", content: "Secure sign in for Gadget Zone ZA store administrators." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      if (mode === "signin") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Signed in");
        navigate({ to: "/admin" });
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/admin` },
        });
        if (error) throw error;
        toast.success("Account created — you're signed in");
        navigate({ to: "/admin" });
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setBusy(false);
    }
  }

  async function resetPassword() {
    if (!email) {
      toast.error("Enter your email address first");
      return;
    }
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    if (error) toast.error(error.message);
    else toast.success("Password reset link sent to your email");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary px-5 py-16">
      <div className="w-full max-w-md rounded-3xl border border-border bg-card p-8 shadow-float">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Gadget Zone ZA logo" width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
          <span className="font-display text-base font-bold">
            GADGET <span className="text-brand">ZONE</span> ZA
          </span>
        </Link>
        <h1 className="mt-8 text-3xl font-bold">
          {mode === "signin" ? "Admin sign in" : "Create admin account"}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Only the store's approved email addresses can manage products.
        </p>

        <form onSubmit={submit} className="mt-8 space-y-4">
          <div>
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1.5 h-11 w-full rounded-xl border border-border bg-secondary px-4 text-sm outline-none focus:border-brand"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium">Password</label>
            <input
              id="password"
              type="password"
              required
              minLength={8}
              autoComplete={mode === "signin" ? "current-password" : "new-password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1.5 h-11 w-full rounded-xl border border-border bg-secondary px-4 text-sm outline-none focus:border-brand"
            />
          </div>
          <button
            type="submit"
            disabled={busy}
            className="h-11 w-full rounded-xl bg-brand text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.01] disabled:opacity-60"
          >
            {busy ? "Please wait…" : mode === "signin" ? "Sign in" : "Create account"}
          </button>
        </form>

        <div className="mt-6 flex flex-col gap-2 text-sm">
          <button onClick={resetPassword} className="text-left font-medium text-brand hover:underline">
            Forgot password? Send reset link
          </button>
          <button
            onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
            className="text-left text-muted-foreground hover:text-foreground"
          >
            {mode === "signin" ? "No account yet? Create one" : "Already have an account? Sign in"}
          </button>
          <Link to="/" className="text-muted-foreground hover:text-foreground">← Back to store</Link>
        </div>
      </div>
    </div>
  );
}