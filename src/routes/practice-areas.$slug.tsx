import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { disclaimerShort, getService, services, telHref, whatsappHref } from "@/data/site";

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
      <header className="grain relative isolate overflow-hidden bg-ink pb-24 pt-40 text-onink md:pt-52">
        <img
          src={serviceImage[service.slug]}
          alt={serviceAlt[service.slug] ?? service.title}
          width={900}
          height={1350}
          className="absolute inset-y-0 right-0 -z-10 hidden h-full w-[46%] object-cover saturate-[0.55] md:block"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/92 to-ink/40" aria-hidden="true" />
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 md:px-10">
          <Link to="/practice-areas" className="label-micro text-onink-muted link-underline">
            ← Practice areas
          </Link>
          <p className="label-micro mt-10 text-gold-dim">
            {service.index} / {service.category}
          </p>
          <h1 className="mt-8 display-lg max-w-[60%] text-onink">{service.title}</h1>
          <p className="mt-10 max-w-xl border-l border-gold/60 pl-6 text-base leading-relaxed text-onink-muted">
            {service.short}
          </p>
        </div>
      </header>


      <div className="bg-ivory py-24 md:py-32">
        <div className="mx-auto w-full max-w-[1600px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <Reveal>
                <h2 className="display-md">Overview</h2>
                <p className="mt-8 max-w-2xl text-lg leading-relaxed">{service.overview}</p>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="mt-20 display-md">Business context</h2>
                <ul className="mt-8 max-w-2xl space-y-6">
                  {service.context.map((c, i) => (
                    <li key={c} className="flex gap-6 border-t border-foreground/12 pt-6">
                      <span className="label-micro shrink-0 text-golddeep">0{i + 1}</span>
                      <p className="text-sm leading-relaxed text-muted-foreground">{c}</p>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={150}>
                <h2 className="mt-20 display-md">Commonly relevant documents</h2>
                <ul className="mt-8 max-w-2xl">
                  {service.requirements.map((r) => (
                    <li key={r} className="border-b border-foreground/12 py-5 text-sm text-muted-foreground">
                      {r}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 max-w-2xl text-xs leading-relaxed text-muted-foreground">
                  Requirements vary with the facts of each establishment. {disclaimerShort}
                </p>
              </Reveal>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="grain relative bg-ink p-8 text-onink md:p-10">
                <div className="relative z-10">
                  <p className="label-micro text-gold-dim">Consultation</p>
                  <p className="mt-6 font-display text-3xl font-light">
                    Discuss this requirement.
                  </p>
                  <div className="mt-8 flex flex-col gap-3">
                    <Link
                      to="/contact"
                      data-cursor="consult"
                      className="border border-gold/60 px-6 py-4 text-center label-micro text-gold transition-colors hover:bg-gold hover:text-ink"
                    >
                      Request consultation →
                    </Link>
                    <a href={telHref} className="border border-onink/20 px-6 py-4 text-center label-micro">
                      Call office
                    </a>
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-onink/20 px-6 py-4 text-center label-micro"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <p className="label-micro text-muted-foreground">Related areas</p>
                <ul className="mt-6">
                  {related.map((r) => (
                    <li key={r!.slug}>
                      <Link
                        to="/practice-areas/$slug"
                        params={{ slug: r!.slug }}
                        className="group flex items-baseline gap-4 border-b border-foreground/12 py-5"
                      >
                        <span className="label-micro text-golddeep">{r!.index}</span>
                        <span className="font-display text-xl transition-transform duration-300 group-hover:translate-x-1">
                          {r!.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link to="/practice-areas" className="label-micro mt-8 inline-block text-golddeep link-underline">
                  All {services.length} practice areas →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
