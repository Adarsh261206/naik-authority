import { useState } from "react";
import { disclaimerShort, faqs } from "@/data/site";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div>
      <div className="border-t border-foreground/12">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="border-b border-foreground/12">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-start gap-6 py-7 text-left transition-colors duration-200 hover:text-foreground/70"
              >
                <span className={`label-micro mt-2 shrink-0 ${isOpen ? "text-golddeep" : "text-muted-foreground"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 font-display text-2xl font-light md:text-3xl">{f.q}</span>
                <span
                  className={`mt-2 shrink-0 text-golddeep transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              <div
                className="grid overflow-hidden transition-[grid-template-rows] duration-500 ease-out"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="min-h-0">
                  <p className="max-w-3xl pb-8 pl-[3.4rem] text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <p className="mt-8 max-w-2xl text-xs leading-relaxed text-muted-foreground">{disclaimerShort}</p>
    </div>
  );
}
