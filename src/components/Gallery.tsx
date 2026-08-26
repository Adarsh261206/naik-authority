import { gallery } from "@/data/images";
import { Reveal } from "./Reveal";

const shapes = [
  "md:col-span-4 md:row-span-2 aspect-[3/4] md:aspect-[3/4.4]",
  "md:col-span-3 aspect-[4/3]",
  "md:col-span-5 aspect-[16/10]",
  "md:col-span-3 aspect-square md:rounded-full overflow-hidden",
  "md:col-span-5 aspect-[16/9]",
  "md:col-span-4 aspect-[4/5]",
];

export function Gallery() {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1500px] px-5 md:px-10">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 className="display-lg text-ink">
              The practice
              <br />
              in <span className="italic text-brown">frames.</span>
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-inkmuted">
              Documents, premises and people — the everyday context in which compliance questions
              actually arise.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
          {gallery.map((g, i) => (
            <Reveal key={g.label} delay={i * 70} className={`${shapes[i % shapes.length]} group relative`}>
              <div className={`relative h-full w-full overflow-hidden ${i === 3 ? "md:rounded-full" : "rounded-[3px]"}`}>
                <img
                  src={g.src}
                  alt={g.alt}
                  width={1200}
                  height={1200}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-espresso/0 transition-colors duration-500 group-hover:bg-espresso/20" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-[10px] tracking-[0.22em] uppercase text-ondark">{g.label}</p>
                  <p className="mt-1 font-display text-xl text-ondark">{g.caption}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
