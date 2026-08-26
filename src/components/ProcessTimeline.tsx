import { processImages } from "@/data/images";
import { process } from "@/data/site";
import { Reveal } from "./Reveal";

export function ProcessTimeline() {
  return (
    <section id="approach" className="scroll-mt-24 bg-ivory py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1500px] px-5 md:px-10">
        <Reveal>
          <p className="eyebrow text-brown">05 — The approach</p>
          <h2 className="mt-6 display-lg text-ink">
            A clearer
            <br />
            path <span className="italic text-brown">forward.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-5 md:gap-6">
          {process.map((p, i) => (
            <Reveal key={p.n} delay={i * 90} className="md:pt-0">
              <div className="border-t border-beige pt-6">
                <div className="overflow-hidden rounded-[3px]">
                  <img
                    src={processImages[i]}
                    alt=""
                    aria-hidden="true"
                    width={1000}
                    height={700}
                    loading="lazy"
                    className="h-28 w-full object-cover md:h-24"
                  />
                </div>
                <p className="mt-5 text-xs tracking-[0.18em] text-brown">{p.n}</p>
                <h3 className="mt-2 font-display text-2xl text-ink">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-inkmuted">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
