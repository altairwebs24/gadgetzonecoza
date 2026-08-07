import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { CATALOG } from "@/lib/catalog";
import { whatsappLink } from "@/lib/phone-images";

const SLIDES = [
  { key: "iPhone 17 Pro Max", title: "iPhone 17 Pro Max", tag: "Just landed" },
  { key: "iPhone 16 Pro", title: "iPhone 16 Pro", tag: "Best seller" },
  { key: "iPhone 15 Pro", title: "iPhone 15 Pro", tag: "Titanium" },
  { key: "iPhone 13 Pro Max", title: "iPhone 13 Pro Max", tag: "Great value" },
  { key: "iPhone 11 Pro Max", title: "iPhone 11 Pro Max", tag: "Budget king" },
];

export function HeroSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % SLIDES.length), 3500);
    return () => clearInterval(id);
  }, []);

  const current = SLIDES[active]!;

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-accent blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Centurion · Nationwide delivery
          </span>
          <h1 className="mt-6 text-5xl font-bold leading-[0.95] md:text-7xl">
            Top-notch
            <br />
            <span className="text-gradient-brand">iPhones</span>
            <br />
            for less.
          </h1>
          <p className="mt-6 max-w-md text-base text-muted-foreground">
            Brand new and carefully checked pre-owned iPhones — from the iPhone X all the way to the
            iPhone 17 Pro Max. 100% original, delivered in 2–3 days.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/brand-new"
              className="rounded-full bg-brand px-7 py-3 text-sm font-semibold text-primary-foreground shadow-float transition-transform hover:scale-[1.03]"
            >
              Shop brand new
            </Link>
            <Link
              to="/pre-owned"
              className="rounded-full border border-ink px-7 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-background"
            >
              Shop pre-owned
            </Link>
          </div>
        </div>

        <div className="relative flex h-[380px] items-center justify-center md:h-[520px]">
          <div className="absolute inset-8 rounded-[3rem] bg-secondary" />
          {SLIDES.map((slide, index) => (
            <img
              key={slide.key}
              src={CATALOG[slide.key]?.images[0]}
              alt={slide.title}
              width={800}
              height={800}
              className={`absolute h-full w-auto max-w-full rounded-[2.5rem] object-cover transition-all duration-700 ${
                index === active
                  ? "animate-float-phone opacity-100 scale-100"
                  : "pointer-events-none opacity-0 scale-90"
              }`}
            />
          ))}
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-4">
            <div className="rounded-full bg-ink/90 px-5 py-2 text-center text-sm font-semibold text-background backdrop-blur">
              {current.title} · <span className="text-brand">{current.tag}</span>
            </div>
          </div>
          <div className="absolute -bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
            {SLIDES.map((slide, index) => (
              <button
                key={slide.key}
                aria-label={`Show ${slide.title}`}
                onClick={() => setActive(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === active ? "w-8 bg-brand" : "w-3 bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="overflow-hidden border-t border-border bg-ink py-3">
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.25em] text-background">
          {Array.from({ length: 2 }).map((_, dup) => (
            <span key={dup} className="flex gap-10">
              <span>100% Original</span>
              <span className="text-brand">Fast delivery 2–3 days</span>
              <span>Customer satisfaction</span>
              <span className="text-brand">50% deposit to order</span>
              <span>Nationwide South Africa</span>
              <span className="text-brand">
                <a href={whatsappLink("Hi Gadget Zone ZA")} target="_blank" rel="noreferrer">
                  +27 61 837 2308
                </a>
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}