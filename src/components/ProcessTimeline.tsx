import { useState } from "react";
import { process } from "@/data/site";
import { processImages } from "@/data/images";

export function ProcessTimeline() {
  const [active, setActive] = useState(0);

  return (
    <div>
      {/* Desktop */}
      <div className="hidden md:block">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <figure className="relative overflow-hidden">
            {process.map((p, i) => (
              <img
                key={p.n}
                src={processImages[i]}
                alt=""
                aria-hidden="true"
                width={900}
                height={1350}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover saturate-[0.6] transition-opacity duration-700"
                style={{ opacity: i === active ? 1 : 0 }}
              />
              ))}
            <div className="h-[46vh] w-full" />
            <figcaption className="label-micro absolute bottom-4 left-4 bg-ink/60 px-3 py-1.5 text-onink/90 backdrop-blur-sm">
              {process[active]?.n} / {process[active]?.title}
            </figcaption>
          </figure>

          <ol className="border-t border-foreground/12">
            {process.map((p, i) => {
              const on = i === active;
              return (
                <li key={p.n} className="border-b border-foreground/12">
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="relative flex w-full items-baseline gap-6 py-6 text-left"
                  >
                    <span
                      className={`absolute left-0 top-0 h-full w-px origin-top bg-gold transition-transform duration-500 ${on ? "scale-y-100" : "scale-y-0"}`}
                    />
                    <span className={`label-micro w-8 shrink-0 ${on ? "text-golddeep" : "text-muted-foreground"}`}>
                      {p.n}
                    </span>
                    <span className="flex-1">
                      <span className="block font-display text-3xl font-light text-foreground">{p.title}</span>
                      <span
                        className={`mt-2 block text-sm leading-relaxed text-muted-foreground transition-opacity duration-500 ${on ? "opacity-100" : "opacity-45"}`}
                      >
                        {p.body}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      {/* Mobile */}
      <ol className="md:hidden">
        {process.map((p, i) => (
          <li key={p.n} className="relative border-l border-foreground/15 pb-8 pl-6">
            <span className="absolute -left-[3.5px] top-2 h-[7px] w-[7px] rounded-full bg-gold" />
            <p className="label-micro text-golddeep">{p.n}</p>
            <p className="mt-2 font-display text-2xl text-foreground">{p.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            <img
              src={processImages[i]}
              alt=""
              aria-hidden="true"
              width={900}
              height={1350}
              loading="lazy"
              className="mt-3 h-28 w-full object-cover saturate-[0.6]"
            />
          </li>
        ))}
      </ol>
    </div>
  );
}
