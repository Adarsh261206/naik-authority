import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { visualFor } from "@/data/images";
import { services } from "@/data/site";
import { Reveal } from "./Reveal";

const R = 210;
const C = 280;

export function ComplianceMap() {
  const [active, setActive] = useState(0);
  const nodes = services.map((s, i) => {
    const a = (i / services.length) * Math.PI * 2 - Math.PI / 2;
    return { ...s, x: C + Math.cos(a) * R, y: C + Math.sin(a) * R };
  });
  const current = nodes[active] ?? nodes[0]!;
  const visual = visualFor(current.slug);

  return (
    <section className="section-y bg-cream">
      <div className="shell">
        <Reveal>
          <p className="eyebrow text-brown">04 — The landscape</p>
          <h2 className="display-lg mt-6 max-w-2xl text-ink">
            One business,
            <br />
            many <span className="italic text-brown">obligations.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-12 items-center gap-x-6 gap-y-12">
          <div className="col-span-12 hidden md:block lg:col-span-7">
            <svg
              viewBox="0 0 560 560"
              className="h-auto w-full"
              role="img"
              aria-label="Diagram connecting a business to eleven statutory compliance areas"
            >
              <circle cx={C} cy={C} r={R} fill="none" stroke="var(--beige)" />
              <circle cx={C} cy={C} r={R * 0.55} fill="none" stroke="var(--beige)" />
              {nodes.map((n, i) => (
                <line
                  key={`l-${n.slug}`}
                  x1={C}
                  y1={C}
                  x2={n.x}
                  y2={n.y}
                  stroke={i === active ? "var(--bronze)" : "var(--beige)"}
                  strokeWidth={i === active ? 1.2 : 0.8}
                />
              ))}
              <text
                x={C}
                y={C + 10}
                textAnchor="middle"
                fill="var(--ink)"
                style={{ fontFamily: "var(--font-display)", fontSize: 38 }}
              >
                Business
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
                    r={i === active ? 6 : 3.5}
                    fill={i === active ? "var(--bronze)" : "var(--ink-muted)"}
                    style={{ transition: "r 300ms ease-out" }}
                  />
                  <text
                    x={n.x + (n.x > C + 4 ? 16 : n.x < C - 4 ? -16 : 0)}
                    y={n.y + (Math.abs(n.x - C) < 5 ? (n.y < C ? -18 : 26) : 4)}
                    textAnchor={n.x > C + 4 ? "start" : n.x < C - 4 ? "end" : "middle"}
                    fill={i === active ? "var(--brown)" : "var(--ink-muted)"}
                    style={{ fontSize: 13, fontFamily: "var(--font-sans)" }}
                  >
                    {n.node}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          <div className="col-span-12 hidden md:block lg:col-span-4 lg:col-start-9">
            <div className="overflow-hidden rounded-tl-[40px]">
              <img
                key={visual.src}
                src={visual.src}
                alt={visual.alt}
                width={1408}
                height={1104}
                loading="lazy"
                className={`aspect-[4/3] w-full object-cover ${visual.focus}`}
              />
            </div>
            <p className="eyebrow mt-8 text-brown">{current.category}</p>
            <h3 className="display-md mt-4 text-ink">{current.title}</h3>
            <p className="body-lead mt-5">{current.overview}</p>
            <Link
              to="/practice-areas/$slug"
              params={{ slug: current.slug }}
              className="link-quiet mt-7 inline-block text-sm text-ink"
            >
              Explore this area →
            </Link>
          </div>

          {/* Mobile: clean vertical sequence */}
          <ol className="col-span-12 md:hidden">
            {services.map((s) => (
              <li key={s.slug} className="border-b border-beige py-6 first:border-t first:pt-6">
                <p className="text-xs tracking-[0.16em] text-brown">{s.index}</p>
                <p className="mt-2 font-display text-2xl text-ink">{s.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-inkmuted">{s.short}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
