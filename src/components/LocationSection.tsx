import { focus, img } from "@/data/images";
import { advocate, directionsHref, mapEmbedSrc } from "@/data/site";
import { Reveal } from "./Reveal";

export function LocationSection() {
  const o = advocate.office;
  return (
    <section className="section-y bg-cream">
      <div className="shell">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          <Reveal className="col-span-12 lg:col-span-7">
            <div className="overflow-hidden rounded-bl-[64px]">
              <img
                src={img.thane}
                alt="Thane and Mumbai skyline in warm hazy daylight"
                width={1408}
                height={1104}
                loading="lazy"
                className={`aspect-[4/3] w-full object-cover md:aspect-[4/3] ${focus.thane}`}
              />
            </div>
          </Reveal>

          <Reveal delay={120} className="col-span-12 lg:col-span-4 lg:col-start-9">
            <p className="eyebrow text-brown">07 — The office</p>
            <h2 className="display-lg mt-6 text-ink">
              Thane <span className="italic text-brown">West.</span>
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
              className="btn-primary mt-8"
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}
