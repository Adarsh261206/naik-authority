import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { Reveal } from "@/components/Reveal";
import { PracticeList } from "@/components/PracticeList";
import { ComplianceMap } from "@/components/ComplianceMap";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ConsultForm } from "@/components/ConsultForm";
import { Faq } from "@/components/Faq";
import { Monogram } from "@/components/Monogram";
import { advocate, directionsHref, mapEmbedSrc, telHref } from "@/data/site";

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
        content: "Legal clarity. Business confidence. Statutory registrations, licences and compliance assistance.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        const el = heroRef.current;
        if (!el || y > window.innerHeight * 1.2) return;
        el.style.setProperty("--y", `${y * 0.18}px`);
        el.style.setProperty("--o", String(Math.max(0, 1 - y / (window.innerHeight * 0.85))));
        el.style.setProperty("--s", String(1 + y * 0.00012));
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {/* ACT 01 — HERO */}
      <section
        ref={heroRef}
        className="grain relative flex min-h-[92vh] items-end overflow-hidden bg-ink pb-16 pt-32 md:min-h-screen md:pb-14"
        style={{ ["--y" as string]: "0px", ["--o" as string]: "1", ["--s" as string]: "1" }}
      >
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
        <div
          className="pointer-events-none absolute right-[8%] top-[12%] hidden h-[70%] w-[26%] border border-onink/12 lg:block"
          style={{ transform: "scale(var(--s)) translateY(calc(var(--y) * -0.4))" }}
          aria-hidden="true"
        >
          <div className="absolute inset-6 border border-gold/15" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-[9rem] leading-none text-onink/[0.07]">RN</span>
          </div>
          <div className="absolute bottom-6 left-6 label-micro text-onink-muted/40">Est. Thane</div>
        </div>
        <div
          className="pointer-events-none absolute inset-y-0 left-[6%] hidden w-px rule-gold opacity-40 lg:block"
          aria-hidden="true"
        />

        <div
          className="relative z-10 mx-auto w-full max-w-[1600px] px-5 md:px-10"
          style={{ transform: "translateY(calc(var(--y) * -1))", opacity: "var(--o)" }}
        >
          <p className="label-micro text-gold-dim">{advocate.title}</p>
          <h1 className="mt-8 display-xl text-onink">
            Legal clarity.
            <br />
            <span className="text-onink/60">Business confidence.</span>
          </h1>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <p className="max-w-xl border-l border-gold/50 pl-6 text-sm leading-relaxed text-onink-muted md:text-base">
              Professional assistance across labour law, statutory registrations, licences and business
              compliance requirements.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                data-cursor="consult"
                className="border border-gold/60 px-7 py-5 label-micro text-gold transition-colors duration-200 hover:bg-gold hover:text-ink"
              >
                Start a consultation →
              </Link>
              <Link
                to="/practice-areas"
                className="border border-onink/20 px-7 py-5 label-micro text-onink transition-colors duration-200 hover:border-onink/60"
              >
                Explore practice areas
              </Link>
            </div>
          </div>

          <div className="mt-16 flex items-end justify-between border-t border-onink/12 pt-6">
            <p className="label-micro text-onink-muted/60">01 / Professional legal consultation</p>
            <div className="hidden flex-col items-center gap-3 md:flex">
              <span className="label-micro text-onink-muted/50">Scroll to explore</span>
              <span className="scroll-line h-10 w-px bg-gold/70" aria-hidden="true" />
            </div>
            <p className="label-micro text-onink-muted/60">
              Thane West · {advocate.office.pincode}
            </p>
          </div>
        </div>
      </section>

      {/* ACT 02 — INTRODUCTION */}
      <section className="bg-ivory py-28 md:py-40">
        <div className="mx-auto w-full max-w-[1600px] px-5 md:px-10">
          <div className="grid gap-14 lg:grid-cols-[3fr_2fr]">
            <Reveal>
              <p className="label-micro text-muted-foreground">Introduction / 01</p>
              <h2 className="mt-8 display-lg">
                Legal counsel,
                <br />
                without the complexity.
              </h2>
            </Reveal>
            <Reveal delay={120} className="lg:pt-24">
              <div className="border-l border-gold pl-8">
                <p className="text-lg leading-relaxed md:text-xl">
                  Businesses often encounter a maze of registrations, licences and statutory requirements. The
                  right guidance can make that process clearer, more structured and easier to navigate.
                </p>
                <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">
                  The practice of {advocate.name}, {advocate.qualification}, assists establishments in
                  identifying which requirements apply, preparing what is needed and proceeding through the
                  relevant process with clarity at each stage.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ACT 03 — PRACTICE AREAS */}
      <section id="practice" className="grain relative bg-ink py-24 text-onink md:py-32">
        <div className="relative z-10">
          <div className="mx-auto mb-16 w-full max-w-[1600px] px-5 md:px-10">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <p className="label-micro text-gold-dim">Practice / 02</p>
                <h2 className="mt-8 display-lg text-onink">Practice areas</h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-onink-muted">
                Focused assistance across essential statutory and business requirements.
              </p>
            </div>
          </div>
          <PracticeList />
        </div>
      </section>

      {/* COMPLIANCE MAP */}
      <section className="bg-sand py-28 md:py-36">
        <div className="mx-auto w-full max-w-[1600px] px-5 md:px-10">
          <Reveal>
            <p className="label-micro text-muted-foreground">Landscape / 03</p>
            <h2 className="mt-8 display-lg">The compliance landscape</h2>
            <p className="mt-8 max-w-lg text-sm leading-relaxed text-muted-foreground">
              A single business can sit at the intersection of several statutory requirements. Explore how
              they connect.
            </p>
          </Reveal>
          <div className="mt-20 text-foreground">
            <ComplianceMap />
          </div>
        </div>
      </section>

      {/* FEATURED DARK */}
      <section className="grain relative flex min-h-[85vh] items-center overflow-hidden bg-ink py-28">
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--gold) 10%, transparent), transparent 65%)" }}
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 md:px-10">
          <Reveal>
            <h2 className="display-lg text-onink">
              When compliance
              <br />
              gets complex,
              <br />
              <span className="text-gold">clarity matters.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-14 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <p className="label-micro text-onink-muted/70">Legal • Compliance • Advisory</p>
              <Link
                to="/contact"
                data-cursor="consult"
                className="self-start border border-gold/60 px-7 py-5 label-micro text-gold transition-colors duration-200 hover:bg-gold hover:text-ink"
              >
                Discuss your requirement →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ACT 04 — APPROACH */}
      <section id="approach" className="scroll-mt-24 bg-ivory py-28 md:py-40">
        <div className="mx-auto w-full max-w-[1600px] px-5 md:px-10">
          <Reveal>
            <p className="label-micro text-muted-foreground">Approach / 04</p>
            <h2 className="mt-8 display-lg">A clearer path forward</h2>
          </Reveal>
          <div className="mt-24">
            <ProcessTimeline />
          </div>
        </div>
      </section>

      {/* ACT 05 — ABOUT */}
      <section className="grain relative bg-ink py-28 text-onink md:py-40">
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr]">
            <Reveal>
              <p className="label-micro text-gold-dim">The advocate / 05</p>
              <h2 className="mt-8 display-lg text-onink">
                Ravindra
                <br />
                R. Naik
              </h2>
              <div className="mt-8 flex items-center gap-5">
                <Monogram size={56} />
                <div>
                  <p className="label-micro text-onink">{advocate.qualification}</p>
                  <p className="label-micro mt-2 text-onink-muted">{advocate.title}</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={140} className="lg:pt-28">
              <div className="border-l border-gold/60 pl-8">
                <p className="text-lg leading-relaxed text-onink">
                  A practice built around statutory registrations, licensing and labour-law compliance for
                  businesses operating in and around Thane.
                </p>
                <p className="mt-6 text-sm leading-relaxed text-onink-muted">
                  Each requirement is approached on its own facts — the activity, the premises, the persons
                  employed and the authority concerned.
                </p>
                <Link to="/about" className="label-micro mt-10 inline-block text-gold link-underline">
                  Read the profile →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="bg-sand py-28 md:py-36">
        <div className="mx-auto w-full max-w-[1600px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-end">
            <Reveal>
              <p className="label-micro text-muted-foreground">Office / 06</p>
              <h2 className="mt-8 display-xl">
                Thane
                <br />
                West
              </h2>
              <address className="mt-10 space-y-1 border-l border-gold pl-6 text-sm not-italic leading-relaxed">
                <p>{advocate.office.line1}</p>
                <p>{advocate.office.line2}</p>
                <p>{advocate.office.line3}</p>
                <p>
                  {advocate.office.city} — {advocate.office.pincode}
                </p>
              </address>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={directionsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-foreground/25 px-6 py-4 label-micro transition-colors duration-200 hover:border-foreground"
                >
                  Get directions →
                </a>
                <a
                  href={telHref}
                  className="border border-foreground/25 px-6 py-4 label-micro transition-colors duration-200 hover:border-foreground"
                >
                  Call office →
                </a>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div data-cursor="explore" className="border border-foreground/15 p-3">
                <iframe
                  title="Office location map"
                  src={mapEmbedSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[380px] w-full"
                  style={{ filter: "grayscale(1) contrast(1.05) brightness(0.92)" }}
                />
                <p className="label-micro mt-3 text-muted-foreground">Thane / {advocate.office.pincode}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ivory py-28 md:py-36">
        <div className="mx-auto w-full max-w-[1600px] px-5 md:px-10">
          <Reveal>
            <p className="label-micro text-muted-foreground">Questions / 07</p>
            <h2 className="mt-8 mb-16 display-lg">Common questions</h2>
          </Reveal>
          <Faq />
        </div>
      </section>

      {/* ACT 06 — CONSULT */}
      <section id="consult" className="grain relative bg-ink py-28 text-onink md:py-40">
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
            <Reveal>
              <p className="label-micro text-gold-dim">Consultation / 08</p>
              <h2 className="mt-8 display-lg text-onink">
                Have a legal
                <br />
                or compliance
                <br />
                requirement?
              </h2>
              <p className="mt-8 text-lg text-onink-muted">Let's understand what you need.</p>
            </Reveal>
            <Reveal delay={140}>
              <ConsultForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
