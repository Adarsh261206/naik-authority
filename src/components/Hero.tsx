import { Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { advocate, telHref } from "@/data/site";
import { img } from "@/data/images";
import { Monogram } from "./Monogram";

const chapters = [
  { n: "01", label: "Legal counsel" },
  { n: "02", label: "Compliance" },
  { n: "03", label: "Consultation" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const y = window.scrollY;
        if (y > window.innerHeight * 1.3) return;
        el.style.setProperty("--ty", `${y * -0.12}px`);
        el.style.setProperty("--is", String(1 + y * 0.00009));
        el.style.setProperty("--iy", `${y * 0.05}px`);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-ink grain"
      style={{ ["--ty" as string]: "0px", ["--is" as string]: "1", ["--iy" as string]: "0px" }}
    >
      {/* MOBILE */}
      <div className="lg:hidden">
        <div className="relative h-[52vh] min-h-[320px] w-full overflow-hidden">
          <img
            src={img.heroDesk}
            alt="Dark legal desk with law books, documents and a fountain pen"
            width={1280}
            height={1600}
            fetchPriority="high"
            className="h-full w-full object-cover object-center"
            style={{ animation: "hero-mask 1200ms cubic-bezier(0.16,1,0.3,1) both" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-ink/50" />
          <div className="absolute left-5 top-5 flex items-center gap-3">
            <Monogram size={34} />
            <span className="label-micro text-onink-muted/80">Thane West · India</span>
          </div>
        </div>
        <div className="px-5 pb-12 pt-8">
          <p className="label-micro text-gold">{advocate.title}</p>
          <h1 className="mt-5 font-display text-[3.4rem] font-light leading-[0.92] text-onink">
            Law
            <br />
            with
            <br />
            <span className="italic text-gold-dim">clarity.</span>
          </h1>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-onink-muted">
            Professional legal and statutory compliance assistance for businesses.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block border border-gold/50 px-7 py-4 label-micro text-gold"
          >
            Start consultation →
          </Link>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="relative hidden h-[100svh] min-h-[720px] lg:block">
        {/* image right */}
        <div
          className="absolute inset-y-0 right-0 w-[58%] overflow-hidden"
          style={{
            clipPath: "polygon(9% 0, 100% 0, 100% 100%, 0 100%)",
            animation: "hero-mask 1400ms cubic-bezier(0.16,1,0.3,1) both",
          }}
        >
          <img
            src={img.heroDesk}
            alt="Dark legal desk with law books, documents and a fountain pen"
            width={1280}
            height={1600}
            fetchPriority="high"
            className="h-full w-full object-cover"
            style={{ transform: "scale(var(--is)) translateY(var(--iy))", transformOrigin: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/25 to-ink/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
        </div>

        {/* vertical gold rule */}
        <div
          className="absolute left-[46%] top-0 z-10 w-px origin-top bg-gold/45"
          style={{ height: "72%", animation: "rule-draw 1400ms 300ms cubic-bezier(0.16,1,0.3,1) both" }}
        />

        {/* copy */}
        <div
          className="relative z-20 mx-auto flex h-full w-full max-w-[1600px] flex-col justify-center px-10"
          style={{ transform: "translateY(var(--ty))" }}
        >
          <div className="max-w-[46%]" style={{ animation: "rise-in 900ms 200ms cubic-bezier(0.16,1,0.3,1) both" }}>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-gold/60" />
              <p className="label-micro text-gold">{advocate.title}</p>
            </div>
            <h1 className="mt-8 font-display text-[clamp(4.5rem,8.5vw,9.5rem)] font-light leading-[0.86] tracking-[-0.02em] text-onink">
              Law
              <br />
              with
              <br />
              <span className="italic text-gold-dim">clarity.</span>
            </h1>
            <p className="mt-9 max-w-sm text-sm leading-relaxed text-onink-muted">
              Professional legal and statutory compliance assistance for businesses.
            </p>
            <div className="mt-10 flex items-center gap-8">
              <Link
                to="/contact"
                data-cursor="consult"
                className="border border-gold/50 px-7 py-4 label-micro text-gold transition-colors duration-300 hover:bg-gold hover:text-ink"
              >
                Request a consultation →
              </Link>
              <a href={telHref} className="label-micro text-onink-muted link-underline hover:text-onink">
                {advocate.phone}
              </a>
            </div>
          </div>
        </div>

        {/* floating credential panel */}
        <div
          className="absolute right-[8%] top-[22%] z-20 border border-onink/15 bg-ink/40 px-8 py-7 backdrop-blur-md"
          style={{ animation: "rise-in 900ms 900ms cubic-bezier(0.16,1,0.3,1) both" }}
        >
          <div className="flex items-center gap-4">
            <Monogram size={38} />
            <div>
              <p className="font-display text-xl leading-none text-onink">{advocate.name}</p>
              <p className="label-micro mt-2 text-gold-dim">{advocate.qualification}</p>
            </div>
          </div>
          <div className="mt-5 h-px w-full bg-onink/12" />
          <p className="label-micro mt-4 text-onink-muted/80">Advocate</p>
        </div>

        <div
          className="absolute right-[8%] top-[14%] z-20 label-micro text-onink-muted/70"
          style={{ animation: "rise-in 900ms 1100ms cubic-bezier(0.16,1,0.3,1) both" }}
        >
          Thane West · India
        </div>
        <div className="absolute left-10 top-[18%] z-20 label-micro rotate-180 text-onink-muted/50 [writing-mode:vertical-rl]">
          01 / Practice
        </div>

        {/* chapter indicators */}
        <div className="absolute inset-x-0 bottom-0 z-20 border-t border-onink/10 bg-ink/30 backdrop-blur-sm">
          <div className="mx-auto grid w-full max-w-[1600px] grid-cols-3 px-10">
            {chapters.map((c) => (
              <div key={c.n} className="flex items-baseline gap-4 border-l border-onink/10 py-6 pl-6 first:border-l-0 first:pl-0">
                <span className="label-micro text-gold-dim">{c.n}</span>
                <span className="label-micro text-onink-muted">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
