import { createFileRoute } from "@tanstack/react-router";
import { ConsultForm } from "@/components/ConsultForm";
import { Reveal } from "@/components/Reveal";
import { advocate, directionsHref, mailHref, mapEmbedSrc, telHref, whatsappHref } from "@/data/site";
import { img } from "@/data/images";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Ravindra R. Naik, Advocate — Thane West" },
      {
        name: "description",
        content:
          "Contact Advocate Ravindra R. Naik in Thane West for labour law, statutory registration, licensing and business compliance consultation.",
      },
      { property: "og:title", content: "Contact — Ravindra R. Naik, Advocate & Legal Consultant" },
      { property: "og:description", content: "Request a consultation. Office at Sawarkar Nagar, Thane West." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="grain relative isolate overflow-hidden bg-ink pb-28 pt-40 text-onink md:pt-52">
        <img
          src={img.consultation}
          alt=""
          aria-hidden="true"
          className="absolute inset-y-0 right-0 -z-10 hidden h-full w-[40%] object-cover saturate-[0.5] lg:block"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/94 to-ink/45" aria-hidden="true" />
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="label-micro text-gold-dim">Consultation / 01</p>
              <h1 className="mt-8 display-lg text-onink">
                Have a legal
                <br />
                or compliance
                <br />
                requirement?
              </h1>
              <p className="mt-8 text-lg text-onink-muted">Let's understand what you need.</p>
              <div className="mt-12 space-y-4 border-l border-gold/50 pl-6">
                <a href={telHref} className="block label-micro text-onink link-underline">
                  {advocate.phone}
                </a>
                <a href={mailHref} className="block break-all label-micro text-onink link-underline">
                  {advocate.email}
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block label-micro text-gold link-underline"
                >
                  Message on WhatsApp →
                </a>
              </div>
            </div>
            <Reveal delay={100}>
              <ConsultForm />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-24 md:py-32">
        <div className="mx-auto w-full max-w-[1600px] px-5 md:px-10">
          <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-end">
            <Reveal>
              <p className="label-micro text-muted-foreground">Office / 02</p>
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
                  className="border border-foreground/25 px-6 py-4 label-micro transition-colors hover:border-foreground"
                >
                  Get directions →
                </a>
                <a
                  href={telHref}
                  className="border border-foreground/25 px-6 py-4 label-micro transition-colors hover:border-foreground"
                >
                  Call office →
                </a>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div data-cursor="explore" className="border border-foreground/15 p-3">
                <iframe
                  title="Office location map"
                  src={mapEmbedSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[400px] w-full"
                  style={{ filter: "grayscale(1) contrast(1.05) brightness(0.92)" }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
