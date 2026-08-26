import { Link } from "@tanstack/react-router";
import { img } from "@/data/images";
import { advocate } from "@/data/site";

export function Hero() {
  return (
    <section className="relative bg-ivory pt-24 md:pt-28">
      {/* Mobile: image-first composition */}
      <div className="md:hidden">
        <div className="relative overflow-hidden">
          <img
            src={img.heroOffice}
            alt="Sunlit legal office with law books and documents on an oak desk"
            width={1280}
            height={1600}
            className="image-reveal h-[52vh] w-full object-cover"
          />
        </div>
        <div className="px-5 pb-16 pt-9">
          <p className="eyebrow text-brown">Advocate &amp; Legal Consultant</p>
          <h1 className="mt-5 display-xl text-ink">
            Legal counsel
            <br />
            with <span className="italic text-brown">clarity.</span>
          </h1>
          <p className="body-lead mt-6 max-w-sm">
            Professional legal and statutory compliance assistance for businesses.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <Link
              to="/contact"
              className="rounded-[3px] bg-espresso px-7 py-4 text-center text-sm text-cream"
            >
              Book a Consultation
            </Link>
            <Link
              to="/practice-areas"
              className="rounded-[3px] border border-ink/20 px-7 py-4 text-center text-sm text-ink"
            >
              Explore Practice Areas
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop composition */}
      <div className="hidden md:block">
        <div className="mx-auto grid w-full max-w-[1500px] grid-cols-12 items-center gap-8 px-10 pb-10 pt-6">
          <div className="col-span-5 pr-4">
            <p className="eyebrow fade-up text-brown">Advocate &amp; Legal Consultant</p>
            <h1 className="mt-7 display-xl fade-up text-ink" style={{ animationDelay: "80ms" }}>
              Legal counsel
              <br />
              with <span className="italic text-brown">clarity.</span>
            </h1>
            <p className="body-lead fade-up mt-8 max-w-md" style={{ animationDelay: "160ms" }}>
              Professional legal and statutory compliance assistance for businesses — labour law,
              registrations and licensing, handled with care.
            </p>
            <div className="fade-up mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: "240ms" }}>
              <Link
                to="/contact"
                className="rounded-[3px] bg-espresso px-8 py-4 text-sm text-cream transition-colors duration-200 hover:bg-brown"
              >
                Book a Consultation
              </Link>
              <Link
                to="/practice-areas"
                className="link-quiet py-4 text-sm text-ink"
              >
                Explore Practice Areas
              </Link>
            </div>
          </div>

          <div className="relative col-span-7">
            <div className="relative overflow-hidden rounded-tl-[70px] rounded-br-[70px]">
              <img
                src={img.heroOffice}
                alt="Sunlit legal office with law books and documents on an oak desk"
                width={1280}
                height={1600}
                className="image-reveal h-[74vh] max-h-[760px] w-full object-cover"
              />
            </div>

            {/* Overlapping secondary image */}
            <div className="fade-up absolute -left-24 bottom-14 hidden w-[230px] overflow-hidden rounded-[3px] shadow-[0_24px_60px_-30px_rgba(33,28,24,0.45)] lg:block" style={{ animationDelay: "500ms" }}>
              <img
                src={img.heroDetail}
                alt="Leather-bound legal books and papers in warm daylight"
                width={912}
                height={1104}
                loading="lazy"
                className="h-[300px] w-full object-cover"
              />
            </div>

            {/* Information card */}
            <div className="fade-up absolute right-8 top-10 rounded-[3px] bg-cream/95 px-7 py-6 backdrop-blur-sm" style={{ animationDelay: "620ms" }}>
              <p className="font-display text-2xl text-ink">{advocate.name}</p>
              <p className="mt-1 text-sm text-inkmuted">{advocate.qualification}</p>
              <p className="eyebrow mt-4 text-brown">{advocate.title}</p>
            </div>
          </div>
        </div>

        {/* Bottom information row */}
        <div className="mx-auto flex w-full max-w-[1500px] items-center justify-between border-t border-beige px-10 py-6 text-[11px] tracking-[0.18em] text-inkmuted uppercase">
          <span>Thane West</span>
          <span className="hidden md:block">Legal • Compliance • Advisory</span>
          <a href={`tel:${advocate.phone}`} className="link-quiet">
            {advocate.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
