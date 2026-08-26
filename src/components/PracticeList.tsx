import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { services } from "@/data/site";

export function PracticeList() {
  const [openMobile, setOpenMobile] = useState<string | null>(null);

  return (
    <div className="border-t border-onink/12">
      {services.map((s) => {
        const open = openMobile === s.slug;
        return (
          <div key={s.slug} className="border-b border-onink/12">
            {/* Desktop row */}
            <Link
              to="/practice-areas/$slug"
              params={{ slug: s.slug }}
              data-cursor="view"
              className="group relative hidden items-center gap-8 px-5 py-8 transition-[padding,background-color] duration-300 hover:bg-onink/[0.03] hover:py-11 md:flex md:px-10"
            >
              <span className="absolute left-0 top-0 h-full w-px scale-y-0 bg-gold transition-transform duration-500 ease-out group-hover:scale-y-100" />
              <span className="label-micro w-14 shrink-0 text-onink-muted/60 transition-colors duration-300 group-hover:text-gold">
                {s.index}
              </span>
              <span className="w-[40%] shrink-0 font-display text-3xl font-light text-onink transition-transform duration-500 ease-out group-hover:translate-x-3 lg:text-[2.6rem]">
                {s.title}
              </span>
              <span className="max-w-xl flex-1 text-sm leading-relaxed text-onink-muted opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {s.short}
              </span>
              <span className="label-micro shrink-0 translate-x-[-8px] text-gold opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                View →
              </span>
            </Link>

            {/* Mobile accordion */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setOpenMobile(open ? null : s.slug)}
                aria-expanded={open}
                className="flex w-full items-baseline gap-4 px-5 py-6 text-left"
              >
                <span className={`label-micro shrink-0 ${open ? "text-gold" : "text-onink-muted/60"}`}>
                  {s.index}
                </span>
                <span className="flex-1 font-display text-2xl font-light text-onink">{s.title}</span>
                <span className={`text-gold transition-transform duration-300 ${open ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              <div
                className="grid overflow-hidden transition-[grid-template-rows] duration-400 ease-out"
                style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
              >
                <div className="min-h-0">
                  <div className="border-l border-gold/40 px-5 pb-8 pl-5 ml-5 text-sm leading-relaxed text-onink-muted">
                    <p>{s.short}</p>
                    <p className="mt-3 text-onink-muted/80">{s.context[0]}</p>
                    <div className="mt-5 flex flex-wrap gap-4">
                      <Link
                        to="/practice-areas/$slug"
                        params={{ slug: s.slug }}
                        className="label-micro text-gold"
                      >
                        Read more →
                      </Link>
                      <Link to="/contact" className="label-micro text-onink-muted">
                        Consult →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
