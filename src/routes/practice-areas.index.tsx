import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { services } from "@/data/site";
import { img, serviceAlt, serviceImage } from "@/data/images";

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
        content: "Statutory registrations, licences and labour law compliance assistance for businesses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/practice-areas" },
    ],
    links: [{ rel: "canonical", href: "/practice-areas" }],
  }),
  component: PracticeIndex,
});

const groups = ["Labour & Employment", "Business Registration", "Licensing & Clearances"] as const;

function PracticeIndex() {
  return (
    <>
      <header className="bg-ivory pt-28 md:pt-32">
        <div className="mx-auto grid w-full max-w-[1500px] items-end gap-10 px-5 py-14 md:px-10 lg:grid-cols-[45%_55%] lg:gap-16">
          <div>
            <p className="eyebrow text-brown">Practice</p>
            <h1 className="mt-6 display-xl text-ink">
              Practice
              <br />
              <span className="italic text-brown">areas.</span>
            </h1>
            <p className="body-lead mt-8 max-w-md">
              Eleven areas of statutory assistance, grouped by the kind of obligation they create.
            </p>
          </div>
          <div className="overflow-hidden rounded-tr-[60px]">
            <img
              src={img.documents}
              alt="Statutory forms, registers and folders arranged on a pale desk"
              width={1408}
              height={1008}
              className="image-reveal h-[38vh] min-h-[240px] w-full object-cover md:h-[52vh]"
            />
          </div>
        </div>
      </header>

      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1500px] px-5 md:px-10">
          {groups.map((g, gi) => (
            <div key={g} className="mb-16 last:mb-0">
              <div className="flex items-baseline gap-5 border-b border-beige pb-5">
                <span className="font-display text-4xl font-light text-brown">0{gi + 1}</span>
                <h2 className="eyebrow text-inkmuted">{g}</h2>
              </div>
              <div className="grid gap-x-14 md:grid-cols-2">
                {services
                  .filter((s) => s.category === g)
                  .map((s, i) => (
                    <Reveal key={s.slug} delay={i * 60}>
                      <Link
                        to="/practice-areas/$slug"
                        params={{ slug: s.slug }}
                        className="group flex gap-6 border-b border-beige py-7"
                      >
                        <div className="relative h-24 w-28 shrink-0 overflow-hidden rounded-[3px]">
                          <img
                            src={serviceImage[s.slug]}
                            alt={serviceAlt[s.slug] ?? s.title}
                            width={800}
                            height={600}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        <div>
                          <span className="text-xs tracking-[0.16em] text-inkmuted/70">{s.index}</span>
                          <h3 className="mt-1 font-display text-2xl font-light text-ink transition-colors group-hover:text-brown">
                            {s.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-inkmuted">{s.short}</p>
                        </div>
                      </Link>
                    </Reveal>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
