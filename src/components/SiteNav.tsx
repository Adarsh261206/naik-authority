import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Monogram } from "./Monogram";
import { advocate, nav } from "@/data/site";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "border-b border-onink/10 bg-ink/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex w-full max-w-[1600px] items-center justify-between px-5 transition-all duration-500 md:px-10 ${
          scrolled ? "h-16" : "h-20 md:h-24"
        }`}
      >
        <Link to="/" className="flex items-center gap-3" aria-label={`${advocate.name} — home`}>
          <Monogram size={scrolled ? 34 : 40} className="transition-all duration-500" />
          <span className="hidden sm:block">
            <span className="block font-display text-base leading-none text-onink">{advocate.name}</span>
            <span className="label-micro mt-1 block text-onink-muted/70">{advocate.title}</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => {
            const active = !("hash" in item) && pathname.startsWith(item.to);
            return (
              <Link
                key={item.label}
                to={item.to}
                {...("hash" in item ? { hash: item.hash } : {})}
                className={`label-micro link-underline pb-1 transition-colors duration-200 ${
                  active ? "text-gold" : "text-onink-muted hover:text-onink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <span className="label-micro hidden text-onink-muted/60 xl:block">Thane, India</span>
          <Link
            to="/contact"
            data-cursor="consult"
            className="hidden border border-gold/50 px-5 py-3 label-micro text-gold transition-colors duration-200 hover:bg-gold hover:text-ink lg:block"
          >
            Book a consultation →
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] border border-onink/15 lg:hidden"
          >
            <span
              className={`block h-px w-4 bg-onink transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-4 bg-onink transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      <div
        className={`grain fixed inset-0 top-0 -z-10 bg-ink px-6 pt-28 transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="relative z-10 flex flex-col">
          {nav.map((item, i) => (
            <Link
              key={item.label}
              to={item.to}
              {...("hash" in item ? { hash: item.hash } : {})}
              className="border-b border-onink/10 py-6 font-display text-4xl font-light text-onink"
            >
              <span className="label-micro mr-4 align-middle text-gold-dim">0{i + 1}</span>
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-10 border border-gold/50 px-6 py-4 text-center label-micro text-gold"
          >
            Book a consultation →
          </Link>
        </nav>
      </div>
    </header>
  );
}
