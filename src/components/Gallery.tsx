import { gallery } from "@/data/images";
import { Reveal } from "./Reveal";

export function Gallery() {
  return (
    <section className="section-y bg-ivory">
      <div className="shell">
        <Reveal>
          <div className="grid grid-cols-12 items-end gap-x-6 gap-y-6">
            <h2 className="display-lg col-span-12 text-ink lg:col-span-6">
              The practice in <span className="italic text-brown">frames.</span>
            </h2>
            <p className="col-span-12 text-sm leading-relaxed text-inkmuted lg:col-span-4 lg:col-start-9">
              Documents, premises and people — the everyday context in which compliance questions
              actually arise.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-12 gap-6">
          {gallery.map((g, i) => (
            <Reveal
              key={g.label}
              delay={(i % 3) * 90}
              className={`group col-span-12 sm:col-span-6 lg:col-span-4 ${
                i % 3 === 1 ? "lg:mt-12" : ""
              }`}
            >
              <figure className="relative w-full overflow-hidden rounded-[3px]">
                <img
                  src={g.src}
                  alt={g.alt}
                  width={1200}
                  height={1500}
                  loading="lazy"
                  className={`aspect-[4/5] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04] ${g.focus}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <figcaption className="absolute inset-x-5 bottom-5 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-[10px] tracking-[0.22em] uppercase text-ondarkmuted">
                    {g.label}
                  </p>
                  <p className="mt-1 font-display text-xl text-ondark">{g.caption}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
