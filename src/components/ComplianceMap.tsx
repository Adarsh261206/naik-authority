import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { services } from "@/data/site";

const R = 210;
const CX = 320;
const CY = 320;

export function ComplianceMap() {
  const [active, setActive] = useState(0);
  const nodes = services.map((s, i) => {
    const angle = (i / services.length) * Math.PI * 2 - Math.PI / 2;
    return { ...s, x: CX + Math.cos(angle) * R, y: CY + Math.sin(angle) * R };
  });
  const current = nodes[active] ?? nodes[0]!;

  return (
    <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
      {/* Radial — desktop / tablet */}
      <div className="relative hidden md:block">
        <svg
          viewBox="0 0 640 640"
          className="h-auto w-full"
          role="img"
          aria-label="Diagram connecting a business to statutory compliance areas"
        >
          <circle cx={CX} cy={CY} r={R} fill="none" stroke="currentColor" className="text-foreground/10" />
          <circle cx={CX} cy={CY} r={R * 0.55} fill="none" stroke="currentColor" className="text-foreground/[0.06]" />
          {nodes.map((n, i) => (
            <line
              key={`l-${n.slug}`}
              x1={CX}
              y1={CY}
              x2={n.x}
              y2={n.y}
              stroke="currentColor"
              className={i === active ? "text-gold" : "text-foreground/12"}
              strokeWidth={i === active ? 1.2 : 0.6}
            />
          ))}
          <text
            x={CX}
            y={CY + 6}
            textAnchor="middle"
            className="fill-current text-foreground"
            style={{ fontFamily: "var(--font-display)", fontSize: 30 }}
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
              <circle
                cx={n.x}
                cy={n.y}
                r={i === active ? 7 : 4}
                className={i === active ? "fill-gold" : "fill-current text-foreground/35"}
                style={{ transition: "r 250ms ease-out" }}
              />
              <text
                x={n.x + (n.x > CX + 4 ? 16 : n.x < CX - 4 ? -16 : 0)}
                y={n.y + (Math.abs(n.x - CX) < 5 ? (n.y < CY ? -18 : 26) : 4)}
                textAnchor={n.x > CX + 4 ? "start" : n.x < CX - 4 ? "end" : "middle"}
                className={i === active ? "fill-gold" : "fill-current text-muted-foreground"}
                style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase" }}
              >
                {n.node}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* Detail panel */}
      <div className="hidden md:block">
        <p className="label-micro text-gold-dim">
          {current.index} / {current.category}
        </p>
        <h3 className="mt-5 font-display text-4xl font-light text-foreground">{current.title}</h3>
        <div className="mt-6 h-px w-16 bg-gold/60" />
        <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">{current.overview}</p>
        <Link
          to="/practice-areas/$slug"
          params={{ slug: current.slug }}
          className="label-micro mt-8 inline-block text-foreground link-underline"
        >
          Explore this area →
        </Link>
      </div>

      {/* Mobile vertical timeline */}
      <ol className="md:hidden">
        {services.map((s) => (
          <li key={s.slug} className="relative border-l border-onink/15 pb-8 pl-6">
            <span className="absolute -left-[3.5px] top-2 h-[7px] w-[7px] rounded-full bg-gold" />
            <p className="label-micro text-gold-dim">{s.index}</p>
            <p className="mt-2 font-display text-2xl text-foreground">{s.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
