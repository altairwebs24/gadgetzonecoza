import { Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart";

export function SiteHeader() {
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/gadgetzone-logo.jpeg" alt="Gadget Zone ZA logo" width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
          <span className="font-display text-base font-bold tracking-tight sm:text-lg">
            GADGET <span className="text-brand">ZONE</span> ZA
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
          <Link to="/brand-new" activeProps={{ className: "text-brand" }} className="transition-colors hover:text-brand">
            Brand New
          </Link>
          <Link to="/pre-owned" activeProps={{ className: "text-brand" }} className="transition-colors hover:text-brand">
            Pre-Owned
          </Link>
          <Link to="/how-it-works" activeProps={{ className: "text-brand" }} className="transition-colors hover:text-brand">
            How it works
          </Link>
          <Link to="/contact" activeProps={{ className: "text-brand" }} className="transition-colors hover:text-brand">
            Contact
          </Link>
        </nav>
        <Link to="/cart" aria-label="Open cart" className="relative rounded-full border border-border p-2.5 transition-colors hover:border-ink">
          <ShoppingBag className="h-5 w-5" />
          {count > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand px-1 text-[11px] font-bold text-primary-foreground">
              {count}
            </span>
          )}
        </Link>
      </div>
      <nav className="flex items-center justify-center gap-6 border-t border-border/70 py-2 text-xs font-semibold uppercase tracking-widest md:hidden">
        <Link to="/brand-new" activeProps={{ className: "text-brand" }}>Brand New</Link>
        <Link to="/pre-owned" activeProps={{ className: "text-brand" }}>Pre-Owned</Link>
        <Link to="/how-it-works" activeProps={{ className: "text-brand" }}>Info</Link>
        <Link to="/contact" activeProps={{ className: "text-brand" }}>Contact</Link>
      </nav>
    </header>
  );
}
