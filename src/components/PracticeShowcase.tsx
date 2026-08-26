import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { defaultServiceVisual, visualFor } from "@/data/images";
import { services } from "@/data/site";
import { Reveal } from "./Reveal";

export function PracticeShowcase() {
  const [active, setActive] = useState(0);
  const current = services[active] ?? services[0]!;

  return (
    <section id="practice" className="section-y bg-paper">
      <div className="shell">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-12 lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="eyebrow text-brown">02 — The practice</p>
              <h2 className="display-lg mt-6 text-ink">
                Areas
                <br />
                of practice
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative mt-12 hidden aspect-[4/5] w-full overflow-hidden rounded-tl-[48px] lg:block">
                {/* default frame keeps the section legible before any hover */}
                <img
                  src={defaultServiceVisual.src}
                  alt={defaultServiceVisual.alt}
                  width={1200}
                  height={1500}
                  loading="lazy"
                  className={`absolute inset-0 h-full w-full object-cover ${defaultServiceVisual.focus}`}
                />
                {services.map((s, i) => {
                  const v = visualFor(s.slug);
                  return (
                    <img
                      key={s.slug}
                      src={v.src}
                      alt={v.alt}
                      width={1200}
                      height={1500}
                      loading="lazy"
                      className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-500 ease-out ${v.focus} ${
                        i === active ? "scale-100 opacity-100" : "scale-[1.03] opacity-0"
                      }`}
                    />
                  );
                })}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/70 to-transparent p-6">
                  <p className="text-xs tracking-[0.16em] uppercase text-ondark">
                    {current.category}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="col-span-12 border-t border-beige lg:col-span-7 lg:col-start-6">
            {services.map((s, i) => {
              const isActive = i === active;
              return (
                <Link
                  key={s.slug}
                  to="/practice-areas/$slug"
                  params={{ slug: s.slug }}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group block border-b border-beige py-6"
                >
                  <div className="grid grid-cols-[3rem_minmax(0,1fr)_1.5rem] items-start gap-4 md:gap-6">
                    <span
                      className={`pt-3 text-xs tracking-[0.16em] transition-colors ${
                        isActive ? "text-brown" : "text-inkmuted/70"
                      }`}
                    >
                      {s.index}
                    </span>
                    <div className="min-w-0">
                      <h3
                        className={`font-display text-2xl font-light transition-colors duration-300 md:text-[2rem] ${
                          isActive ? "text-brown" : "text-ink"
                        }`}
                      >
                        {s.title}
                      </h3>
                      <p
                        className={`overflow-hidden text-sm leading-relaxed text-inkmuted transition-all duration-500 ease-out ${
                          isActive
                            ? "mt-3 max-h-24 opacity-100"
                            : "mt-3 max-h-24 opacity-100 lg:mt-0 lg:max-h-0 lg:opacity-0"
                        }`}
                      >
                        {s.short}
                      </p>
                    </div>
                    <span
                      className={`pt-3 text-brown transition-all duration-300 ${
                        isActive ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
                      }`}
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
