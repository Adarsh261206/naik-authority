import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/common/Reveal";
import { services } from "@/data/site";
import { focus, img, visualFor } from "@/data/images";

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
        content:
          "Statutory registrations, licences and labour law compliance assistance for businesses.",
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
        <div className="shell grid grid-cols-12 items-end gap-x-6 gap-y-10 pt-8 pb-16">
          <div className="col-span-12 lg:col-span-5">
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
          <div className="col-span-12 overflow-hidden rounded-tr-[60px] lg:col-span-6 lg:col-start-7">
            <img
              src={img.documents}
              alt="Statutory registration forms, a stamped certificate and folders on a warm oak desk"
              width={1408}
              height={1104}
              className={`image-reveal aspect-[4/3] w-full object-cover ${focus.documents}`}
            />
          </div>
        </div>
      </header>

      <section className="bg-paper section-y">
        <div className="shell ">
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
                            src={visualFor(s.slug).src}
                            alt={visualFor(s.slug).alt}
                            width={800}
                            height={600}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        <div>
                          <span className="text-xs tracking-[0.16em] text-inkmuted/70">
                            {s.index}
                          </span>
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
