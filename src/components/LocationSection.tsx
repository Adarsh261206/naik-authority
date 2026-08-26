import { advocate, directionsHref, mapEmbedSrc } from "@/data/site";
import { img } from "@/data/images";

export function LocationSection() {
  const o = advocate.office;
  return (
    <section className="bg-sand">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
        <p className="label-micro text-golddeep">06 — The office</p>
        <div className="mt-6 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <figure className="relative overflow-hidden">
            <img
              src={img.thaneCity}
              alt="Thane and Mumbai skyline at blue hour"
              width={1600}
              height={1100}
              loading="lazy"
              className="h-[46vh] w-full object-cover saturate-[0.55] md:h-[64vh]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
            <figcaption className="absolute bottom-6 left-6 font-display text-[clamp(2.6rem,6vw,6rem)] font-light leading-[0.86] text-onink">
              Thane
              <br />
              <span className="italic text-gold-dim">West.</span>
            </figcaption>
          </figure>

          <div className="flex flex-col justify-between gap-8">
            <address className="not-italic">
              <p className="label-micro text-muted-foreground">Address</p>
              <p className="mt-4 font-display text-2xl font-light leading-snug text-foreground">
                {o.line1}
                <br />
                {o.line2}
                <br />
                {o.line3}
                <br />
                {o.city} — {o.pincode}
              </p>
              <a
                href={directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="label-micro mt-7 inline-block text-foreground link-underline"
              >
                Get directions →
              </a>
            </address>
            <div className="overflow-hidden border border-foreground/10">
              <iframe
                title="Office location map"
                src={mapEmbedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-56 w-full grayscale contrast-125 invert-[0.92] hue-rotate-180"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
