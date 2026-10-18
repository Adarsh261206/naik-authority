import { createFileRoute, Link } from "@tanstack/react-router";
import { Monogram } from "@/components/common/Monogram";
import { Reveal } from "@/components/common/Reveal";
import { Certificates } from "@/components/sections/Certificates";
import { advocate, mailHref, services, telHref } from "@/data/site";
import { focus, img } from "@/data/images";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: `About | ${advocate.firm} — ${advocate.name}, Advocate & Legal Consultant — Thane`,
      },
      {
        name: "description",
        content:
          "Profile of Adv. Ravindra R. Naik, B.A. LL.B., Advocate & Legal Consultant and founder of RN Associate, based in Thane West, assisting businesses with statutory registrations, licensing and labour law compliance.",
      },
      {
        property: "og:title",
        content: `About — ${advocate.firm}, ${advocate.name}, Advocate & Legal Consultant`,
      },
      {
        property: "og:description",
        content:
          "Advocate & Legal Consultant, Thane West. Statutory registrations, licences and compliance.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <header className="bg-ivory pt-28 md:pt-32">
        <div className="shell ">
          <div className="grid grid-cols-12 items-end gap-x-6 gap-y-10 pt-8 pb-16">
            <div className="col-span-12 lg:col-span-5">
              <p className="eyebrow text-brown">The advocate</p>
              <h1 className="mt-6 display-xl text-ink">{advocate.firm}</h1>
              <p className="mt-6 font-display text-5xl font-light text-ink md:text-6xl">
                {advocate.name}
              </p>
              <p className="mt-8 text-base text-inkmuted">
                {advocate.qualification} · {advocate.title}
              </p>
            </div>
            <div className="col-span-12 overflow-hidden rounded-tl-[60px] lg:col-span-6 lg:col-start-7">
              <img
                src={img.ravindraPortrait}
                alt="Adv. Ravindra R. Naik seated at his chamber desk in Thane West"
                width={1180}
                height={1046}
                className={`image-reveal aspect-[6/5] w-full object-cover ${focus.portrait}`}
              />
            </div>
          </div>
        </div>
      </header>

      <section className="bg-paper section-y">
        <div className="shell grid  gap-12 lg:grid-cols-[58%_42%] lg:gap-16">
          <Reveal>
            <p className="body-lead">
              Practising from Thane West, the office of {advocate.firm} assists businesses with
              labour law compliances, statutory registrations and licensing requirements.
            </p>
            <p className="body-lead mt-5">
              Each engagement begins with understanding the activity, the premises and the people
              employed, since these determine which statutes apply and what documentation is
              required.
            </p>
            <p className="body-lead mt-5">
              The intention is simple: clear advice, organised documentation and a process that is
              easy to follow.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="border-t border-beige pt-8">
              <Monogram size={52} />
              <p className="eyebrow mt-6 text-brown">Professional details</p>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="text-inkmuted">Firm</dt>
                  <dd className="font-display text-2xl text-ink">{advocate.firm}</dd>
                </div>
                <div>
                  <dt className="text-inkmuted">Name</dt>
                  <dd className="font-display text-2xl text-ink">{advocate.name}</dd>
                </div>
                <div>
                  <dt className="text-inkmuted">Qualification</dt>
                  <dd className="text-ink">{advocate.qualification}</dd>
                </div>
                <div>
                  <dt className="text-inkmuted">Designation</dt>
                  <dd className="text-ink">{advocate.title}</dd>
                </div>
                <div>
                  <dt className="text-inkmuted">Location</dt>
                  <dd className="text-ink">{advocate.office.city}</dd>
                </div>
              </dl>
              <div className="mt-7 space-y-1">
                <a href={telHref} className="link-quiet block text-sm text-ink">
                  {advocate.phone}
                </a>
                <a href={mailHref} className="link-quiet block break-all text-sm text-ink">
                  {advocate.email}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Certificates />

      <section className="bg-paper section-y">
        <div className="shell ">
          <p className="eyebrow text-brown">Areas of assistance</p>
          <div className="mt-10 grid gap-x-16 md:grid-cols-2">
            {services.map((s) => (
              <Link
                key={s.slug}
                to="/practice-areas/$slug"
                params={{ slug: s.slug }}
                className="group flex items-baseline gap-5 border-b border-beige py-5"
              >
                <span className="text-xs tracking-[0.16em] text-inkmuted/70">{s.index}</span>
                <span className="font-display text-2xl font-light text-ink transition-colors group-hover:text-brown">
                  {s.title}
                </span>
              </Link>
            ))}
          </div>
          <Link to="/contact" className="btn-primary mt-12">
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
