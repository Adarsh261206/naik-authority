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
        <div className="mx-auto grid w-full max-w-[1500px] items-end gap-10 px-5 py-14 md:px-10 lg:grid-cols-[45%_55%] lg:gap-16">
          <div>
            <p className="eyebrow text-brown">Consultation</p>
            <h1 className="mt-6 display-xl text-ink">
              Let&apos;s
              <br />
              <span className="italic text-brown">talk.</span>
            </h1>
            <p className="body-lead mt-8 max-w-md">
              Share a short outline of your requirement and it will be reviewed before the consultation.
            </p>
          </div>
          <div className="overflow-hidden rounded-tr-[60px]">
            <img
              src={img.consultation}
              alt="Documents and notes across a pale oak consultation table"
              width={1408}
              height={1008}
              className="image-reveal h-[38vh] min-h-[240px] w-full object-cover md:h-[52vh]"
            />
          </div>
        </div>
      </header>

      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-[1500px] gap-14 px-5 md:px-10 lg:grid-cols-2 lg:gap-20">
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
                  className="rounded-[3px] border border-ink/20 px-6 py-4 text-sm text-ink transition-colors hover:border-ink"
                >
                  WhatsApp
                </a>
                <a
                  href={directionsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[3px] border border-ink/20 px-6 py-4 text-sm text-ink transition-colors hover:border-ink"
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
