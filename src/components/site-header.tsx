import { Link } from "@tanstack/react-router";
import logo from "@/assets/gadgetzone-logo.jpeg";
import { whatsappLink } from "@/lib/phone-images";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Gadget Zone ZA logo" width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
          <span className="font-display text-lg font-bold tracking-tight">
            GADGET <span className="text-brand">ZONE</span> ZA
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
          <a href="#brand-new" className="transition-colors hover:text-brand">Brand New</a>
          <a href="#pre-owned" className="transition-colors hover:text-brand">Pre-Owned</a>
          <a href="#how-it-works" className="transition-colors hover:text-brand">How it works</a>
          <a href="#contact" className="transition-colors hover:text-brand">Contact</a>
        </nav>
        <a
          href={whatsappLink("Hi Gadget Zone ZA, I'd like to order an iPhone.")}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-ink px-5 py-2 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
        >
          Order on WhatsApp
        </a>
      </div>
    </header>
  );
}