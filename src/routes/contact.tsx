import { createFileRoute } from "@tanstack/react-router";
import { ConsultForm } from "@/components/ConsultForm";
import { Reveal } from "@/components/Reveal";
import {
  advocate,
  directionsHref,
  mailHref,
  mapEmbedSrc,
  telHref,
  whatsappHref,
} from "@/data/site";
import { focus, img } from "@/data/images";

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
      {
        property: "og:description",
        content: "Request a consultation. Office at Sawarkar Nagar, Thane West.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const o = advocate.office;
  return (
    <>
      <header className="bg-ivory pt-28 md:pt-32">
        <div className="shell grid grid-cols-12 items-end gap-x-6 gap-y-10 pt-8 pb-16">
          <div className="col-span-12 lg:col-span-5">
            <p className="eyebrow text-brown">Consultation</p>
            <h1 className="mt-6 display-xl text-ink">
              Let&apos;s
              <br />
              <span className="italic text-brown">talk.</span>
            </h1>
            <p className="body-lead mt-8 max-w-md">
              Share a short outline of your requirement and it will be reviewed before the
              consultation.
            </p>
          </div>
          <div className="col-span-12 overflow-hidden rounded-tr-[60px] lg:col-span-6 lg:col-start-7">
            <img
              src={img.consultation}
              alt="Business owners reviewing compliance documents across a wooden table"
              width={1408}
              height={1104}
              className={`image-reveal aspect-[4/3] w-full object-cover ${focus.consultation}`}
            />
          </div>
        </div>
      </header>

      <section className="bg-paper section-y">
        <div className="shell grid  gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <ConsultForm variant="light" />
          </Reveal>
          <Reveal delay={120}>
            <div className="border-t border-beige pt-8">
              <p className="eyebrow text-brown">Office</p>
              <address className="mt-6 not-italic text-base leading-relaxed text-inkmuted">
                {o.line1}
                <br />
                {o.line2}
                <br />
                {o.line3}
                <br />
                {o.city} — {o.pincode}
              </address>
              <div className="mt-7 space-y-1">
                <a href={telHref} className="link-quiet block font-display text-3xl text-ink">
                  {advocate.phone}
                </a>
                <a href={mailHref} className="link-quiet block break-all text-sm text-inkmuted">
                  {advocate.email}
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  WhatsApp
                </a>
                <a
                  href={directionsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Get Directions
                </a>
              </div>
              <div className="mt-8 overflow-hidden rounded-[3px] border border-beige">
                <iframe
                  title="Office location map"
                  src={mapEmbedSrc}
                  loading="lazy"
                  className="h-64 w-full"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
