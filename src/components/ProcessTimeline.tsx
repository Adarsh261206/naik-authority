import { processImages } from "@/data/images";
import { process } from "@/data/site";
import { Reveal } from "./Reveal";

export function ProcessTimeline() {
  return (
    <section id="approach" className="section-y scroll-mt-24 bg-ivory">
      <div className="shell">
        <Reveal>
          <p className="eyebrow text-brown">05 — The approach</p>
          <h2 className="display-lg mt-6 text-ink">
            A clearer path <span className="italic text-brown">forward.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-5">
          {process.map((p, i) => {
            const frame = processImages[i]!;
            return (
              <Reveal key={p.n} delay={i * 90} className="col-span-1">
                <div className="flex h-full flex-col border-t border-beige pt-6">
                  <div className="overflow-hidden rounded-[3px]">
                    <img
                      src={frame.src}
                      alt=""
                      aria-hidden="true"
                      width={1408}
                      height={1104}
                      loading="lazy"
                      className={`aspect-[4/3] w-full object-cover ${frame.focus}`}
                    />
                  </div>
                  <p className="mt-6 text-xs tracking-[0.18em] text-brown">{p.n}</p>
                  <h3 className="mt-2 font-display text-2xl text-ink">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-inkmuted">{p.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
