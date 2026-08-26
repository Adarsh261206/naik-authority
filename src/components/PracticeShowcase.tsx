import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { services } from "@/data/site";
import { serviceAlt, serviceImage } from "@/data/images";

export function PracticeShowcase() {
  const [active, setActive] = useState<number>(0);
  const current = services[active] ?? services[0]!;

  return (
    <section id="practice" className="relative bg-ink grain">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-24 md:px-10 md:py-32 lg:grid-cols-[40%_60%]">
        {/* Left statement + preview image */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="label-micro text-gold-dim">02 — The practice</p>
          <h2 className="mt-8 font-display text-[clamp(2.6rem,4.4vw,4.4rem)] font-light leading-[0.95] text-onink">
            Business
            <br />
            compliance
            <br />
            requires
            <br />
            <span className="italic text-gold-dim">clarity.</span>
          </h2>
          <div className="relative mt-10 hidden aspect-[4/3] w-full overflow-hidden lg:block">
            {services.map((s, i) => (
              <img
                key={s.slug}
                src={serviceImage[s.slug]}
                alt={serviceAlt[s.slug] ?? s.title}
                width={900}
                height={1350}
                loading="lazy"
                aria-hidden={i !== active}
                className="absolute inset-0 h-full w-full object-cover saturate-[0.6] transition-opacity duration-700"
                style={{ opacity: i === active ? 1 : 0 }}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
            <p className="label-micro absolute bottom-4 left-4 text-onink/90">
              {current.index} / {current.node}
            </p>
          </div>
        </div>

        {/* Rows */}
        <div className="border-t border-onink/12">
          {services.map((s, i) => {
            const on = i === active;
            return (
              <div key={s.slug} className="border-b border-onink/12">
                <Link
                  to="/practice-areas/$slug"
                  params={{ slug: s.slug }}
                  data-cursor="explore"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group relative block px-1 py-7 transition-colors duration-300 hover:bg-onink/[0.03] md:px-4"
                >
                  <span
                    className={`absolute left-0 top-0 h-full w-px origin-top bg-gold transition-transform duration-500 ${on ? "scale-y-100" : "scale-y-0"}`}
                  />
                  <div className="flex items-center gap-5">
                    <span className={`label-micro w-8 shrink-0 ${on ? "text-gold" : "text-onink-muted/50"}`}>
                      {s.index}
                    </span>
                    <span className="flex-1 font-display text-2xl font-light leading-tight text-onink transition-transform duration-500 group-hover:translate-x-2 md:text-[2.1rem]">
                      {s.title}
                    </span>
                    <span
                      className={`label-micro shrink-0 text-gold transition-opacity duration-300 ${on ? "opacity-100" : "opacity-0"}`}
                    >
                      →
                    </span>
                  </div>
                  <div
                    className="grid overflow-hidden transition-[grid-template-rows] duration-500 ease-out"
                    style={{ gridTemplateRows: on ? "1fr" : "0fr" }}
                  >
                    <div className="min-h-0">
                      <div className="flex gap-5 pl-13 pt-5">
                        <img
                          src={serviceImage[s.slug]}
                          alt={serviceAlt[s.slug] ?? s.title}
                          width={900}
                          height={1350}
                          loading="lazy"
                          className="h-24 w-32 shrink-0 object-cover saturate-[0.6] lg:hidden"
                        />
                        <p className="max-w-md text-sm leading-relaxed text-onink-muted">{s.short}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
          <Link to="/practice-areas" className="label-micro mt-10 inline-block text-gold link-underline">
            All practice areas →
          </Link>
        </div>
      </div>
    </section>
  );
}
