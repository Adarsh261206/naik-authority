import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { ImageStrip } from "@/components/ImageStrip";
import { EditorialIntro } from "@/components/EditorialIntro";
import { PracticeShowcase } from "@/components/PracticeShowcase";
import { ComplianceOrbit } from "@/components/ComplianceOrbit";
import { CinematicStatement } from "@/components/CinematicStatement";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { AboutEditorial } from "@/components/AboutEditorial";
import { LocationSection } from "@/components/LocationSection";
import { Faq } from "@/components/Faq";
import { ConsultForm } from "@/components/ConsultForm";
import { Reveal } from "@/components/Reveal";
import { advocate, mailHref, telHref } from "@/data/site";
import { img } from "@/data/images";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${advocate.name} | Advocate & Legal Consultant | Thane` },
      {
        name: "description",
        content:
          "Ravindra R. Naik, B.A. LL.B. — Advocate & Legal Consultant in Thane West. Assistance across labour law, provident fund, ESIC, professional tax, Shop Act, MSME, FSSAI and licensing compliance.",
      },
      { property: "og:title", content: `${advocate.name} — Advocate & Legal Consultant, Thane` },
      {
        property: "og:description",
        content: "Law with clarity. Statutory registrations, licences and business compliance assistance in Thane West.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <ImageStrip />
      <EditorialIntro />
      <PracticeShowcase />
      <ComplianceOrbit />
      <CinematicStatement />

      {/* PROCESS */}
      <section id="approach" className="bg-sand">
        <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
          <Reveal>
            <p className="label-micro text-golddeep">04 — The approach</p>
            <h2 className="mt-6 max-w-2xl font-display text-[clamp(2.4rem,4.4vw,4.4rem)] font-light leading-[0.95] text-foreground">
              A clearer
              <br />
              <span className="italic">path forward.</span>
            </h2>
          </Reveal>
          <div className="mt-14">
            <ProcessTimeline />
          </div>
        </div>
      </section>

      <AboutEditorial />
      <LocationSection />

      {/* FAQ */}
      <section className="bg-sand">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-5 pb-24 md:px-10 md:pb-32 lg:grid-cols-[34%_66%]">
          <Reveal>
            <p className="label-micro text-golddeep">07 — Questions</p>
            <h2 className="mt-6 font-display text-[clamp(2.2rem,3.6vw,3.6rem)] font-light leading-[0.95] text-foreground">
              Frequently
              <br />
              <span className="italic">asked.</span>
            </h2>
          </Reveal>
          <Faq />
        </div>
      </section>

      {/* FINAL CTA + FORM */}
      <section id="consult" className="relative isolate overflow-hidden bg-ink grain">
        <img
          src={img.library}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute right-0 top-0 -z-10 hidden h-full w-[38%] object-cover opacity-40 saturate-[0.5] lg:block"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/95 to-ink/40" />
        <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
          <p className="label-micro text-gold-dim">08 — Consultation</p>
          <h2 className="mt-8 font-display text-[clamp(2.6rem,6vw,6.5rem)] font-light leading-[0.88] text-onink">
            Have a
            <br />
            legal or
            <br />
            compliance
            <br />
            <span className="italic text-gold-dim">requirement?</span>
          </h2>
          <div
            className="mt-10 h-px w-full max-w-lg origin-left bg-gold/50"
            style={{ animation: "rule-draw 1s ease-out both" }}
          />
          <p className="mt-8 max-w-md text-sm leading-relaxed text-onink-muted">Let's understand what you need.</p>
          <div className="mt-6 flex flex-wrap gap-8">
            <a href={telHref} className="label-micro text-onink link-underline">
              {advocate.phone}
            </a>
            <a href={mailHref} className="label-micro text-onink link-underline">
              {advocate.email}
            </a>
          </div>

          <div className="mt-16 max-w-4xl">
            <ConsultForm />
          </div>

          <Link to="/practice-areas" className="label-micro mt-12 inline-block text-gold link-underline">
            Browse practice areas →
          </Link>
        </div>
      </section>
    </>
  );
}
