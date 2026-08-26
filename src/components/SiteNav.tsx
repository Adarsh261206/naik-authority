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

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-beige bg-ivory/90 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div
        className={`mx-auto flex w-full max-w-[1500px] items-center justify-between px-5 transition-all duration-500 md:px-10 ${
          scrolled ? "h-16" : "h-20 md:h-24"
        }`}
      >
        <Link to="/" className="flex items-center gap-3" aria-label={`${advocate.name} — home`}>
          <Monogram size={scrolled ? 34 : 38} className="transition-all duration-500" />
          <span className="hidden sm:block leading-tight">
            <span className="block font-display text-lg text-ink">{advocate.name}</span>
            <span className="block text-[11px] tracking-[0.12em] text-inkmuted">{advocate.title}</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-10 lg:flex">
          {nav.map((item) => {
            const active = !("hash" in item) && pathname.startsWith(item.to);
            return (
              <Link
                key={item.label}
                to={item.to}
                {...("hash" in item ? { hash: item.hash } : {})}
                className={`link-quiet pb-1 text-sm transition-colors duration-200 ${
                  active ? "text-brown" : "text-inkmuted hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden rounded-[3px] bg-espresso px-6 py-3 text-sm text-cream transition-colors duration-200 hover:bg-brown lg:block"
          >
            Book Consultation
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[6px] rounded-[3px] border border-beige bg-cream/70 lg:hidden"
          >
            <span
              className={`block h-px w-5 bg-ink transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-5 bg-ink transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 -z-10 bg-ivory px-6 pt-28 transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="flex flex-col">
          {nav.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              {...("hash" in item ? { hash: item.hash } : {})}
              className="border-b border-beige py-6 font-display text-4xl font-light text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-10 rounded-[3px] bg-espresso px-6 py-4 text-center text-sm text-cream"
          >
            Book Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}
