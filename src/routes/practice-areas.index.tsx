import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { services } from "@/data/site";

export const Route = createFileRoute("/practice-areas/")({
  head: () => ({
    meta: [
      { title: "Practice Areas | Ravindra R. Naik, Advocate — Thane" },
      {
        name: "description",
        content:
          "Practice areas: labour law compliances, provident fund, ESIC, MLWF, professional tax, Shop Act / Gumasta, MSME Udyam, FSSAI, health trade licence, fire NOC and pollution control.",
      },
      { property: "og:title", content: "Practice Areas — Ravindra R. Naik, Advocate" },
      {
        property: "og:description",
        content: "Focused assistance across essential statutory and business requirements in Thane.",
      },
      { property: "og:url", content: "/practice-areas" },
    ],
    links: [{ rel: "canonical", href: "/practice-areas" }],
  }),
  component: PracticeAreas,
});

const groups = ["Labour & Employment", "Business Registration", "Licensing & Clearances"] as const;

function PracticeAreas() {
  return (
    <>
      <header className="grain relative isolate overflow-hidden bg-ink pb-24 pt-40 text-onink md:pt-52">
        <img
          src={img.documents}
          alt=""
          aria-hidden="true"
          className="absolute inset-y-0 right-0 -z-10 hidden h-full w-[44%] object-cover saturate-[0.5]"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/92 to-ink/45" aria-hidden="true" />
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 md:px-10">
          <p className="label-micro text-gold-dim">Practice / 01</p>
          <h1 className="mt-8 display-xl text-onink">Practice areas</h1>
          <p className="mt-10 max-w-xl border-l border-gold/60 pl-6 text-sm leading-relaxed text-onink-muted">
            Focused assistance across essential statutory and business requirements — grouped by the nature of
            the obligation.
          </p>
        </div>
      </header>


      <div className="bg-ivory py-24 md:py-32">
        <div className="mx-auto w-full max-w-[1600px] px-5 md:px-10">
          {groups.map((g, gi) => (
            <section key={g} className="mb-24 last:mb-0">
              <Reveal>
                <div className="flex items-baseline gap-6 border-b border-foreground/15 pb-5">
                  <span className="font-display text-4xl text-golddeep">0{gi + 1}</span>
                  <h2 className="label-micro text-muted-foreground">{g}</h2>
                </div>
              </Reveal>
              <div className="grid md:grid-cols-2">
                {services
                  .filter((s) => s.category === g)
                  .map((s, i) => (
                    <Reveal key={s.slug} delay={i * 70}>
                      <Link
                        to="/practice-areas/$slug"
                        params={{ slug: s.slug }}
                        data-cursor="view"
                        className="group flex h-full flex-col border-b border-foreground/12 py-10 pr-6 transition-colors duration-300 hover:bg-foreground/[0.03] md:pl-8 md:[&:nth-child(odd)]:border-r"
                      >
                        <span className="label-micro text-muted-foreground transition-colors group-hover:text-golddeep">
                          {s.index}
                        </span>
                        <h3 className="mt-5 font-display text-3xl font-light transition-transform duration-500 group-hover:translate-x-2">
                          {s.title}
                        </h3>
                        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                        <span className="label-micro mt-7 text-golddeep opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          View →
                        </span>
                      </Link>
                    </Reveal>
                  ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
