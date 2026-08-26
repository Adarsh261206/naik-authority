import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { serviceAlt, serviceImage } from "@/data/images";
import { services } from "@/data/site";
import { Reveal } from "./Reveal";

export function PracticeShowcase() {
  const [active, setActive] = useState(0);
  const current = services[active] ?? services[0]!;

  return (
    <section id="practice" className="bg-paper py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1500px] px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[38%_62%] lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow text-brown">02 — The practice</p>
              <h2 className="mt-6 display-lg text-ink">
                Areas
                <br />
                of practice
              </h2>
            </Reveal>

            {/* Preview image (desktop) */}
            <Reveal delay={120}>
              <div className="relative mt-10 hidden aspect-[4/5] w-full overflow-hidden rounded-tl-[48px] lg:block">
                {services.map((s, i) => (
                  <img
                    key={s.slug}
                    src={serviceImage[s.slug]}
                    alt={serviceAlt[s.slug] ?? s.title}
                    width={1200}
                    height={1500}
                    loading="lazy"
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${
                      i === active ? "scale-100 opacity-100" : "scale-105 opacity-0"
                    }`}
                  />
                ))}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-espresso/70 to-transparent p-6">
                  <p className="text-xs tracking-[0.16em] uppercase text-ondark">{current.category}</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="border-t border-beige">
            {services.map((s, i) => {
              const isActive = i === active;
              return (
                <Link
                  key={s.slug}
                  to="/practice-areas/$slug"
                  params={{ slug: s.slug }}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group block border-b border-beige py-6 md:py-7"
                >
                  <div className="flex items-start gap-5 md:gap-8">
                    <span
                      className={`mt-2 shrink-0 text-xs tracking-[0.16em] transition-colors ${
                        isActive ? "text-brown" : "text-inkmuted/70"
                      }`}
                    >
                      {s.index}
                    </span>
                    <div className="flex-1">
                      <h3
                        className={`font-display text-2xl font-light transition-transform duration-500 ease-out md:text-[2.1rem] ${
                          isActive ? "translate-x-2 text-brown" : "text-ink"
                        }`}
                      >
                        {s.title}
                      </h3>
                      <p
                        className={`overflow-hidden text-sm leading-relaxed text-inkmuted transition-all duration-500 ease-out ${
                          isActive ? "mt-3 max-h-24 opacity-100" : "max-h-0 opacity-0 lg:max-h-0"
                        }`}
                      >
                        {s.short}
                      </p>
                      {/* Mobile inline image */}
                      <div className="mt-4 overflow-hidden rounded-[3px] lg:hidden">
                        <img
                          src={serviceImage[s.slug]}
                          alt={serviceAlt[s.slug] ?? s.title}
                          width={1200}
                          height={800}
                          loading="lazy"
                          className="h-36 w-full object-cover"
                        />
                      </div>
                    </div>
                    <span
                      className={`mt-2 shrink-0 text-brown transition-all duration-300 ${
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
