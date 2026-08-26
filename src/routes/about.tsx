import { createFileRoute, Link } from "@tanstack/react-router";
import { Monogram } from "@/components/Monogram";
import { Reveal } from "@/components/Reveal";
import { advocate, mailHref, services, telHref } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Ravindra R. Naik, Advocate & Legal Consultant — Thane" },
      {
        name: "description",
        content:
          "Profile of Ravindra R. Naik, B.A. LL.B., Advocate & Legal Consultant based in Thane West, assisting businesses with statutory registrations, licensing and labour law compliance.",
      },
      { property: "og:title", content: "About — Ravindra R. Naik, Advocate & Legal Consultant" },
      {
        property: "og:description",
        content: "Advocate & Legal Consultant, Thane West. Statutory registrations, licences and compliance.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <header className="grain relative bg-ink pb-28 pt-40 text-onink md:pt-56">
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />
        <div
          className="pointer-events-none absolute right-[8%] top-[22%] hidden h-[60%] w-[22%] border border-onink/12 lg:block"
          aria-hidden="true"
        >
          <div className="absolute inset-5 border border-gold/15" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-[8rem] leading-none text-onink/[0.08]">RN</span>
          </div>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 md:px-10">
          <p className="label-micro text-gold-dim">The advocate / 01</p>
          <h1 className="mt-8 display-xl text-onink">
            Ravindra
            <br />
            R. Naik
          </h1>
          <div className="mt-12 flex items-center gap-6">
            <Monogram size={64} />
            <div>
              <p className="label-micro text-onink">{advocate.qualification}</p>
              <p className="label-micro mt-2 text-onink-muted">{advocate.title}</p>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-ivory py-24 md:py-36">
        <div className="mx-auto w-full max-w-[1600px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[3fr_2fr]">
            <Reveal>
              <h2 className="display-md">
                A practice focused on
                <br />
                statutory clarity.
              </h2>
              <div className="mt-10 max-w-2xl border-l border-gold pl-8">
                <p className="text-lg leading-relaxed">
                  The practice assists businesses and establishments with labour law compliances, statutory
                  registrations and licensing requirements — from identifying what applies, to preparing the
                  documentation, to proceeding with the concerned authority.
                </p>
                <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
                  Work is carried out on the facts of each matter: the nature of the activity, the premises,
                  the persons employed and the authority concerned. The intent is a process that a business
                  owner can follow and understand at every stage.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="border-t border-foreground/15 pt-6">
                <p className="label-micro text-muted-foreground">Professional details</p>
                <dl className="mt-8 space-y-6 text-sm">
                  <Row k="Name" v={advocate.name} />
                  <Row k="Qualification" v={advocate.qualification} />
                  <Row k="Designation" v={advocate.title} />
                  <Row k="Area served" v="Thane & Mumbai Metropolitan Region" />
                </dl>
                <div className="mt-10 space-y-3">
                  <a href={telHref} className="block label-micro link-underline">
                    {advocate.phone}
                  </a>
                  <a href={mailHref} className="block break-all label-micro link-underline">
                    {advocate.email}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="grain relative bg-ink py-24 text-onink md:py-32">
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 md:px-10">
          <p className="label-micro text-gold-dim">Areas of assistance / 02</p>
          <div className="mt-12 grid gap-x-12 gap-y-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                to="/practice-areas/$slug"
                params={{ slug: s.slug }}
                className="group flex items-baseline gap-4 border-b border-onink/12 py-5"
              >
                <span className="label-micro text-onink-muted/50 group-hover:text-gold">{s.index}</span>
                <span className="font-display text-xl text-onink transition-transform duration-300 group-hover:translate-x-1">
                  {s.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-24 md:py-32">
        <div className="mx-auto w-full max-w-[1600px] px-5 md:px-10">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <p className="label-micro text-muted-foreground">Office / 03</p>
              <address className="mt-8 space-y-1 border-l border-gold pl-6 text-sm not-italic leading-relaxed">
                <p>{advocate.office.line1}</p>
                <p>{advocate.office.line2}</p>
                <p>{advocate.office.line3}</p>
                <p>
                  {advocate.office.city} — {advocate.office.pincode}
                </p>
              </address>
            </div>
            <Link
              to="/contact"
              data-cursor="consult"
              className="self-start border border-foreground px-7 py-5 label-micro transition-colors duration-200 hover:bg-foreground hover:text-ivory"
            >
              Request consultation →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-6 border-b border-foreground/12 pb-4">
      <dt className="label-micro text-muted-foreground">{k}</dt>
      <dd className="text-right">{v}</dd>
    </div>
  );
}
