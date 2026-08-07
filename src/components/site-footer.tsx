import { Link } from "@tanstack/react-router";
import { whatsappLink } from "@/lib/phone-images";

export function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-border bg-ink text-background">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-3">
        <div>
          <h2 className="font-display text-2xl font-bold">
            GADGET <span className="text-brand">ZONE</span> ZA
          </h2>
          <p className="mt-3 text-sm text-background/70">
            We sell top-notch iPhones. Prices are subject to change without prior notice.
          </p>
        </div>
        <div className="text-sm">
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand">Visit us</h3>
          <p className="mt-3 text-background/80">120 Ellman st, Sunderland Ridge, Centurion, 0157</p>
          <p className="mt-3 text-background/80">Mon – Sat · 08:00 – 17:00</p>
        </div>
        <div className="text-sm">
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-brand">Talk to us</h3>
          <p className="mt-3">
            <a href={whatsappLink("Hi Gadget Zone ZA")} target="_blank" rel="noreferrer" className="hover:text-brand">
              WhatsApp +27 61 837 2308
            </a>
          </p>
          <p className="mt-2">
            <a href="mailto:gadgetzone.tech.za@gmail.com" className="text-background/80 hover:text-brand">
              gadgetzone.tech.za@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-background/15">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-6 text-xs text-background/60">
          <span>© {new Date().getFullYear()} Gadget Zone ZA. All rights reserved.</span>
          <Link
            to="/admin"
            className="rounded-full border border-background/30 px-4 py-2 font-semibold text-background/80 transition-colors hover:border-brand hover:text-brand"
          >
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}