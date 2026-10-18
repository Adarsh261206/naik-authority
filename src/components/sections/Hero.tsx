import { Link } from "@tanstack/react-router";
import { focus, img } from "@/data/images";
import { advocate } from "@/data/site";

export function Hero() {
  return (
    <section className="bg-ivory">
      {/* Mobile: image-first composition */}
      <div className="md:hidden">
        <div className="overflow-hidden pt-20">
          <img
            src={img.heroOffice}
            alt="Advocate's desk with case files, contracts and law volumes in warm morning light"
            width={1280}
            height={1600}
            className={`image-reveal h-[46vh] min-h-[300px] w-full object-cover ${focus.heroOffice}`}
          />
        </div>
        <div className="shell pt-10 pb-16">
          <p className="eyebrow text-brown">Advocate &amp; Legal Consultant</p>
          <h1 className="display-xl mt-6 text-ink">
            Legal counsel
            <br />
            with <span className="italic text-brown">clarity.</span>
          </h1>
          <p className="body-lead mt-6">
            Professional legal and statutory compliance assistance for businesses — labour law,
            registrations and licensing.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <Link to="/contact" className="btn-primary w-full">
              Book a Consultation
            </Link>
            <Link to="/practice-areas" className="btn-secondary w-full">
              Explore Practice Areas
            </Link>
          </div>
          <dl className="mt-12 border-t border-beige pt-6 text-[11px] tracking-[0.18em] uppercase text-inkmuted">
            <div className="flex items-center justify-between">
              <dt className="sr-only">Office</dt>
              <dd>Thane West</dd>
              <dt className="sr-only">Phone</dt>
              <dd>
                <a href={`tel:${advocate.phone}`} className="link-quiet">
                  {advocate.phone}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Desktop: 5 / 7 grid, one dominant photographic visual */}
      <div className="hidden md:flex md:min-h-[min(92vh,900px)] md:flex-col md:justify-center md:pt-24">
        <div className="shell">
          <div className="grid grid-cols-12 items-center gap-x-6">
            <div className="col-span-12 lg:col-span-5">
              <p className="eyebrow fade-up text-brown">Advocate &amp; Legal Consultant</p>
              <h1 className="display-xl fade-up mt-6 text-ink" style={{ animationDelay: "80ms" }}>
                Legal counsel
                <br />
                with <span className="italic text-brown">clarity.</span>
              </h1>
              <p className="body-lead fade-up measure mt-8" style={{ animationDelay: "160ms" }}>
                Professional legal and statutory compliance assistance for businesses — labour law
                compliances, statutory registrations and licensing, handled with care.
              </p>
              <div
                className="fade-up mt-10 flex flex-wrap items-center gap-4"
                style={{ animationDelay: "240ms" }}
              >
                <Link to="/contact" className="btn-primary">
                  Book a Consultation
                </Link>
                <Link to="/practice-areas" className="btn-secondary">
                  Explore Practice Areas
                </Link>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <div className="overflow-hidden rounded-tl-[64px]">
                <img
                  src={img.heroOffice}
                  alt="Advocate's desk with case files, contracts and law volumes in warm morning light"
                  width={1280}
                  height={1600}
                  className={`image-reveal aspect-[4/3] w-full object-cover ${focus.heroOffice}`}
                />
              </div>
            </div>
          </div>

          {/* Bottom information row — aligned to the same grid */}
          <div className="mt-12 grid grid-cols-12 items-baseline gap-x-6 border-t border-beige pt-6 text-[11px] tracking-[0.18em] uppercase text-inkmuted">
            <span className="col-span-5">
              {advocate.firm} · {advocate.name}
            </span>
            <span className="col-span-4">Legal • Compliance • Advisory</span>
            <span className="col-span-3 flex justify-between">
              <span>Thane West</span>
              <a href={`tel:${advocate.phone}`} className="link-quiet">
                {advocate.phone}
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
