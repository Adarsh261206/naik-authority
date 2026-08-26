import { useEffect, useRef, useState } from "react";
import { process } from "@/data/site";

export function ProcessTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const total = r.height + window.innerHeight * 0.6;
        const p = (window.innerHeight * 0.8 - r.top) / total;
        setProgress(Math.min(1, Math.max(0, p)));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const activeIndex = Math.min(process.length - 1, Math.floor(progress * process.length));

  return (
    <div ref={ref}>
      {/* Desktop horizontal */}
      <div className="hidden lg:block">
        <div className="relative h-px w-full bg-foreground/12">
          <div
            className="absolute left-0 top-0 h-px bg-gold transition-[width] duration-300 ease-out"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
        <div className="grid grid-cols-5">
          {process.map((p, i) => {
            const on = i <= activeIndex;
            return (
              <div key={p.n} className="border-r border-foreground/10 px-6 pt-8 last:border-r-0">
                <span
                  className={`h-2 w-2 -mt-9 mb-7 block rounded-full transition-colors duration-300 ${on ? "bg-gold" : "bg-foreground/20"}`}
                />
                <p
                  className={`font-display text-5xl leading-none transition-colors duration-500 ${on ? "text-gold" : "text-foreground/20"}`}
                >
                  {p.n}
                </p>
                <h3 className="mt-6 label-micro text-foreground">{p.title}</h3>
                <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile vertical */}
      <ol className="lg:hidden">
        {process.map((p, i) => (
          <li key={p.n} className="relative border-l border-foreground/12 pb-10 pl-6">
            <span
              className={`absolute -left-[4px] top-1.5 h-2 w-2 rounded-full ${i <= activeIndex ? "bg-gold" : "bg-foreground/20"}`}
            />
            <p className={`font-display text-4xl ${i <= activeIndex ? "text-gold" : "text-foreground/25"}`}>
              {p.n}
            </p>
            <h3 className="mt-3 label-micro text-foreground">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
