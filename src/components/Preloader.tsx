import { useEffect, useState } from "react";
import { advocate } from "@/data/site";

export function Preloader() {
  const [done, setDone] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("rn-intro") === "1") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      sessionStorage.setItem("rn-intro", "1");
      return;
    }
    setDone(false);
    const t = window.setTimeout(() => {
      sessionStorage.setItem("rn-intro", "1");
      setDone(true);
    }, 1350);
    return () => window.clearTimeout(t);
  }, []);

  if (done) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-ink grain"
      style={{ animation: "page-in 300ms ease-out both" }}
      aria-hidden="true"
    >
      <div className="text-center">
        <div className="font-display text-6xl font-light text-onink">{advocate.monogram}</div>
        <div className="mx-auto mt-6 h-px w-40 overflow-hidden bg-onink/10">
          <div
            className="h-px bg-gold"
            style={{ animation: "page-in 1100ms ease-out both", width: "100%" }}
          />
        </div>
        <div className="label-micro mt-6 text-onink-muted">{advocate.name}</div>
        <div className="label-micro mt-2 text-gold-dim">{advocate.title}</div>
      </div>
    </div>
  );
}
