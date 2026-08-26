import { gallery } from "@/data/images";
import { Reveal } from "./Reveal";

const heights = [
  "h-[420px] md:h-[560px]",
  "h-[300px] md:h-[340px]",
  "h-[300px] md:h-[400px]",
  "h-[300px] md:h-[430px]",
  "h-[300px] md:h-[330px]",
  "h-[360px] md:h-[480px]",
];

const offsets = ["", "md:mt-16", "", "md:mt-10", "", "md:-mt-6"];

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

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {gallery.map((g, i) => (
            <Reveal key={g.label} delay={(i % 3) * 90} className={`group ${offsets[i] ?? ""}`}>
              <div className={`relative w-full overflow-hidden rounded-[3px] ${heights[i] ?? "h-[360px]"}`}>
                <img
                  src={g.src}
                  alt={g.alt}
                  width={1200}
                  height={1200}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/55 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
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
