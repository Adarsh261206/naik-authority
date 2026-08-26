import { useEffect, useRef, useState } from "react";

type Mode = "default" | "link" | "view" | "consult" | "explore";

const LABEL: Record<Mode, string> = {
  default: "",
  link: "",
  view: "VIEW",
  consult: "CONSULT",
  explore: "EXPLORE",
};

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<Mode>("default");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    document.documentElement.classList.add("cursor-hidden");
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let cx = x;
    let cy = y;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      setVisible(true);
      const target = (e.target as HTMLElement | null)?.closest?.("[data-cursor],a,button");
      const attr = target?.getAttribute("data-cursor") as Mode | null;
      setMode(attr ?? (target ? "link" : "default"));
    };
    const onLeave = () => setVisible(false);

    const tick = () => {
      cx += (x - cx) * 0.2;
      cy += (y - cy) * 0.2;
      if (dot.current) dot.current.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.documentElement.classList.remove("cursor-hidden");
    };
  }, []);

  const labelled = LABEL[mode] !== "";
  const size = labelled ? 76 : mode === "link" ? 34 : 12;

  return (
    <div
      ref={dot}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden items-center justify-center rounded-full border border-gold/70 text-[9px] tracking-[0.28em] text-gold transition-[width,height,background-color,opacity] duration-300 ease-out md:flex"
      style={{
        width: size,
        height: size,
        opacity: visible ? 1 : 0,
        backgroundColor: labelled ? "color-mix(in oklab, var(--gold) 12%, transparent)" : "transparent",
        backdropFilter: labelled ? "blur(2px)" : undefined,
      }}
    >
      {LABEL[mode]}
    </div>
  );
}
