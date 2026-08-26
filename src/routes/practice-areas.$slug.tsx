import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { disclaimerShort, getService, telHref, whatsappHref } from "@/data/site";
import { visualFor } from "@/data/images";

export const Route = createFileRoute("/practice-areas/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Unavailable" }, { name: "robots", content: "noindex" }] };
    }
    const s = loaderData.service;
    return {
      meta: [
        { title: `${s.title} | Ravindra R. Naik, Advocate — Thane` },
        { name: "description", content: s.short },
        { property: "og:title", content: `${s.title} — Ravindra R. Naik, Advocate` },
        { property: "og:description", content: s.short },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { property: "og:url", content: `/practice-areas/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/practice-areas/${params.slug}` }],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const related = service.related.map(getService).filter(Boolean);

  return (
    <>
      <header className="bg-ivory pt-28 md:pt-32">
        <div className="shell grid grid-cols-12 items-end gap-x-6 gap-y-10 pt-8 pb-16">
          <div className="col-span-12 lg:col-span-5">
            <Link
              to="/practice-areas"
              className="link-quiet text-xs tracking-[0.16em] uppercase text-inkmuted"
            >
              ← Practice areas
            </Link>
            <p className="eyebrow mt-8 text-brown">
              {service.index} — {service.category}
            </p>
            <h1 className="mt-5 display-lg text-ink">{service.title}</h1>
            <p className="body-lead mt-7 max-w-md">{service.short}</p>
          </div>
          <div className="col-span-12 overflow-hidden rounded-tr-[60px] lg:col-span-6 lg:col-start-7">
            <img
              src={visualFor(service.slug).src}
              alt={visualFor(service.slug).alt}
              width={1408}
              height={1104}
              className={`image-reveal aspect-[4/3] w-full object-cover ${visualFor(service.slug).focus}`}
            />
          </div>
        </div>
      </header>

      <section className="bg-paper section-y">
        <div className="shell grid  gap-14 lg:grid-cols-[58%_42%] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow text-brown">Overview</p>
              <p className="body-lead mt-5">{service.overview}</p>
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-14">
                <p className="eyebrow text-brown">Context</p>
                <ul className="mt-5 space-y-5">
                  {service.context.map((c) => (
                    <li
                      key={c}
                      className="border-t border-beige pt-5 text-base leading-relaxed text-inkmuted"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-14">
                <p className="eyebrow text-brown">Commonly required</p>
                <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                  {service.requirements.map((r, i) => (
                    <li
                      key={r}
                      className="flex gap-4 border-t border-beige pt-4 text-sm leading-relaxed text-inkmuted"
                    >
                      <span className="text-xs text-brown">0{i + 1}</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <p className="mt-14 max-w-2xl text-xs leading-relaxed text-inkmuted/80">
              {disclaimerShort}
            </p>
          </div>

          <div>
            <Reveal>
              <div className="rounded-[3px] bg-espresso p-8 md:p-10">
                <p className="eyebrow text-bronze">Consultation</p>
                <p className="mt-4 font-display text-3xl font-light text-ondark">
                  Discuss this requirement.
                </p>
                <div className="mt-8 grid gap-3">
                  <Link to="/contact" className="btn-on-dark w-full">
                    Book a Consultation
                  </Link>
                  <a
                    href={telHref}
                    className="inline-flex h-14 items-center justify-center rounded-[3px] border border-ondark/25 px-8 text-sm text-ondark transition-colors hover:border-bronze hover:text-bronze"
                  >
                    Call
                  </a>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-14 items-center justify-center rounded-[3px] border border-ondark/25 px-8 text-sm text-ondark transition-colors hover:border-bronze hover:text-bronze"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-12">
                <p className="eyebrow text-brown">Related areas</p>
                <div className="mt-5">
                  {related.map((r) => (
                    <Link
                      key={r!.slug}
                      to="/practice-areas/$slug"
                      params={{ slug: r!.slug }}
                      className="group flex items-center gap-5 border-b border-beige py-5"
                    >
                      <img
                        src={visualFor(r!.slug).src}
                        alt={visualFor(r!.slug).alt}
                        width={400}
                        height={300}
                        loading="lazy"
                        className="h-14 w-20 shrink-0 rounded-[3px] object-cover"
                      />
                      <span className="font-display text-xl font-light text-ink transition-colors group-hover:text-brown">
                        {r!.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
