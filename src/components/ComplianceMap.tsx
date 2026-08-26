import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { serviceAlt, serviceImage } from "@/data/images";
import { services } from "@/data/site";
import { Reveal } from "./Reveal";

const R = 200;
const C = 260;

export function ComplianceMap() {
  const [active, setActive] = useState(0);
  const nodes = services.map((s, i) => {
    const a = (i / services.length) * Math.PI * 2 - Math.PI / 2;
    return { ...s, x: C + Math.cos(a) * R, y: C + Math.sin(a) * R };
  });
  const current = nodes[active] ?? nodes[0]!;

  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1500px] px-5 md:px-10">
        <Reveal>
          <p className="eyebrow text-brown">04 — The landscape</p>
          <h2 className="mt-6 display-lg max-w-2xl text-ink">
            One business,
            <br />
            many <span className="italic text-brown">obligations.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid items-center gap-14 lg:grid-cols-[1fr_1fr]">
          <div className="hidden md:block">
            <svg
              viewBox="0 0 520 520"
              className="h-auto w-full max-w-[560px]"
              role="img"
              aria-label="Diagram connecting a business to eleven statutory compliance areas"
            >
              <circle cx={C} cy={C} r={R} fill="none" stroke="var(--beige)" />
              <circle cx={C} cy={C} r={R * 0.6} fill="none" stroke="var(--beige)" />
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
                y={C + 8}
                textAnchor="middle"
                fill="var(--ink)"
                style={{ fontFamily: "var(--font-display)", fontSize: 30 }}
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
                  <circle cx={n.x} cy={n.y} r={14} fill="transparent" />
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r={i === active ? 6 : 3.5}
                    fill={i === active ? "var(--bronze)" : "var(--ink-muted)"}
                    style={{ transition: "r 300ms ease-out" }}
                  />
                  <text
                    x={n.x + (n.x > C + 4 ? 14 : n.x < C - 4 ? -14 : 0)}
                    y={n.y + (Math.abs(n.x - C) < 5 ? (n.y < C ? -16 : 24) : 4)}
                    textAnchor={n.x > C + 4 ? "start" : n.x < C - 4 ? "end" : "middle"}
                    fill={i === active ? "var(--brown)" : "var(--ink-muted)"}
                    style={{ fontSize: 12, fontFamily: "var(--font-sans)" }}
                  >
                    {n.node}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          <div className="hidden md:block">
            <div className="overflow-hidden rounded-tl-[40px]">
              <img
                src={serviceImage[current.slug]}
                alt={serviceAlt[current.slug] ?? current.title}
                width={1200}
                height={800}
                loading="lazy"
                className="h-[280px] w-full object-cover transition-opacity duration-500"
                key={current.slug}
              />
            </div>
            <p className="eyebrow mt-8 text-brown">{current.category}</p>
            <h3 className="mt-4 display-md text-ink">{current.title}</h3>
            <p className="body-lead mt-5 max-w-md">{current.overview}</p>
            <Link
              to="/practice-areas/$slug"
              params={{ slug: current.slug }}
              className="link-quiet mt-7 inline-block text-sm text-ink"
            >
              Explore this area →
            </Link>
          </div>

          {/* Mobile list */}
          <ol className="md:hidden">
            {services.map((s) => (
              <li key={s.slug} className="border-b border-beige py-5">
                <p className="text-xs tracking-[0.16em] text-brown">{s.index}</p>
                <p className="mt-1 font-display text-2xl text-ink">{s.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-inkmuted">{s.short}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
