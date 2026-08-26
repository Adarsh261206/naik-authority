import { useState } from "react";
import { faqs } from "@/data/site";
import { Reveal } from "./Reveal";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-paper section-y">
      <div className="shell">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <Reveal className="col-span-12 lg:col-span-4">
            <p className="eyebrow text-brown">08 — Questions</p>
            <h2 className="display-lg mt-6 text-ink">
              Common <span className="italic text-brown">questions.</span>
            </h2>
          </Reveal>

          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="border-b border-beige first:border-t">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-2xl font-light text-ink md:text-3xl">
                      {f.q}
                    </span>
                    <span
                      className={`mt-2 shrink-0 text-brown transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-500 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="measure pb-7 text-base leading-relaxed text-inkmuted">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
