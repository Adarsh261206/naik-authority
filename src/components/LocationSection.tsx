import { img } from "@/data/images";
import { advocate, directionsHref, mapEmbedSrc } from "@/data/site";
import { Reveal } from "./Reveal";

export function LocationSection() {
  const o = advocate.office;
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1500px] px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[58%_42%] lg:gap-16">
          <Reveal>
            <div className="overflow-hidden rounded-bl-[60px]">
              <img
                src={img.thane}
                alt="Thane and Mumbai skyline in warm hazy daylight"
                width={1408}
                height={1104}
                loading="lazy"
                className="h-[42vh] min-h-[280px] w-full object-cover md:h-[60vh]"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="lg:pl-4">
              <p className="eyebrow text-brown">07 — The office</p>
              <h2 className="mt-6 display-lg text-ink">
                Thane
                <br />
                <span className="italic text-brown">West.</span>
              </h2>
              <address className="mt-8 not-italic text-base leading-relaxed text-inkmuted">
                {o.line1}
                <br />
                {o.line2}
                <br />
                {o.line3}
                <br />
                {o.city} — {o.pincode}
              </address>
              <a
                href={directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-[3px] bg-espresso px-7 py-4 text-sm text-cream transition-colors hover:bg-brown"
              >
                Get Directions
              </a>
              <div className="mt-8 overflow-hidden rounded-[3px] border border-beige">
                <iframe
                  title="Office location map"
                  src={mapEmbedSrc}
                  loading="lazy"
                  className="h-56 w-full grayscale-[0.3]"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
