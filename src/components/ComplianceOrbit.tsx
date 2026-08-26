import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { services } from "@/data/site";
import { img, serviceAlt, serviceImage } from "@/data/images";

const CX = 320;
const CY = 320;
const R1 = 150;
const R2 = 250;

export function ComplianceOrbit() {
  const [active, setActive] = useState(0);
  const nodes = services.map((s, i) => {
    const ring = i % 2 === 0 ? R1 : R2;
    const angle = (i / services.length) * Math.PI * 2 - Math.PI / 2;
    return { ...s, x: CX + Math.cos(angle) * ring, y: CY + Math.sin(angle) * ring };
  });
  const current = nodes[active] ?? nodes[0]!;

  return (
    <section className="relative isolate overflow-hidden bg-sand">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
        <p className="label-micro text-golddeep">03 — Compliance landscape</p>
        <h2 className="mt-6 max-w-2xl font-display text-[clamp(2.2rem,3.8vw,3.8rem)] font-light leading-[1] text-foreground">
          One business. <span className="italic">Many statutes.</span>
        </h2>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Orbit */}
          <div className="relative hidden md:block">
            <div className="absolute inset-0 overflow-hidden rounded-full opacity-[0.14]">
              <img
                src={img.statement}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="h-full w-full scale-110 object-cover blur-[6px]"
              />
            </div>
            <svg
              viewBox="0 0 640 640"
              className="relative h-auto w-full"
              role="img"
              aria-label="Diagram connecting a business to eleven statutory compliance areas"
            >
              <circle cx={CX} cy={CY} r={R1} fill="none" stroke="currentColor" className="text-foreground/12" />
              <circle cx={CX} cy={CY} r={R2} fill="none" stroke="currentColor" className="text-foreground/[0.08]" />
              {nodes.map((n, i) => (
                <line
                  key={`l-${n.slug}`}
                  x1={CX}
                  y1={CY}
                  x2={n.x}
                  y2={n.y}
                  stroke="currentColor"
                  className={i === active ? "text-gold" : "text-foreground/10"}
                  strokeWidth={i === active ? 1.4 : 0.5}
                />
              ))}
              <circle cx={CX} cy={CY} r={54} className="fill-current text-foreground" />
              <text
                x={CX}
                y={CY + 4}
                textAnchor="middle"
                className="fill-current text-sand"
                style={{ fontSize: 11, letterSpacing: "0.22em" }}
              >
                BUSINESS
              </text>
              {nodes.map((n, i) => (
                <g
                  key={n.slug}
                  tabIndex={0}
                  role="button"
                  aria-label={n.title}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  style={{ cursor: "pointer" }}
                >
                  <circle cx={n.x} cy={n.y} r={16} fill="transparent" />
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r={i === active ? 7 : 3.5}
                    className={i === active ? "fill-gold" : "fill-current text-foreground/40"}
                    style={{ transition: "r 250ms ease-out" }}
                  />
                  <text
                    x={n.x + (n.x > CX + 4 ? 14 : n.x < CX - 4 ? -14 : 0)}
                    y={n.y + (Math.abs(n.x - CX) < 5 ? (n.y < CY ? -16 : 24) : 4)}
                    textAnchor={n.x > CX + 4 ? "start" : n.x < CX - 4 ? "end" : "middle"}
                    className={i === active ? "fill-current text-golddeep" : "fill-current text-muted-foreground"}
                    style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase" }}
                  >
                    {n.node}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          {/* Detail */}
          <div className="hidden md:block">
            <figure className="relative overflow-hidden">
              <img
                key={current.slug}
                src={serviceImage[current.slug]}
                alt={serviceAlt[current.slug] ?? current.title}
                width={900}
                height={1350}
                loading="lazy"
                className="h-56 w-full object-cover saturate-[0.65]"
                style={{ animation: "page-in 500ms ease-out both" }}
              />
              <figcaption className="label-micro absolute bottom-3 left-3 bg-ink/60 px-3 py-1.5 text-onink/90 backdrop-blur-sm">
                {current.index} / {current.node}
              </figcaption>
            </figure>
            <h3 className="mt-7 font-display text-3xl font-light text-foreground">{current.title}</h3>
            <div className="mt-5 h-px w-14 bg-gold/70" />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">{current.overview}</p>
            <Link
              to="/practice-areas/$slug"
              params={{ slug: current.slug }}
              className="label-micro mt-7 inline-block text-foreground link-underline"
            >
              Explore this area →
            </Link>
          </div>

          {/* Mobile */}
          <ol className="md:hidden">
            {services.map((s) => (
              <li key={s.slug} className="relative border-l border-foreground/15 pb-8 pl-6">
                <span className="absolute -left-[3.5px] top-2 h-[7px] w-[7px] rounded-full bg-gold" />
                <p className="label-micro text-golddeep">{s.index}</p>
                <p className="mt-2 font-display text-2xl text-foreground">{s.title}</p>
                <img
                  src={serviceImage[s.slug]}
                  alt={serviceAlt[s.slug] ?? s.title}
                  width={900}
                  height={1350}
                  loading="lazy"
                  className="mt-3 h-32 w-full object-cover saturate-[0.6]"
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
