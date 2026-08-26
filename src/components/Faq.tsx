import { useState } from "react";
import { faqs } from "@/data/site";
import { Reveal } from "./Reveal";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1500px] px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[36%_64%] lg:gap-16">
          <Reveal>
            <p className="eyebrow text-brown">08 — Questions</p>
            <h2 className="mt-6 display-lg text-ink">
              Common
              <br />
              <span className="italic text-brown">questions.</span>
            </h2>
          </Reveal>

          <div>
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
                    <span className="font-display text-2xl font-light text-ink md:text-3xl">{f.q}</span>
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
                      <p className="max-w-2xl pb-7 text-base leading-relaxed text-inkmuted">{f.a}</p>
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
