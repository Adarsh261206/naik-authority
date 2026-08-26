import { Link } from "@tanstack/react-router";
import { advocate } from "@/data/site";
import { img } from "@/data/images";
import { Monogram } from "./Monogram";
import { Reveal } from "./Reveal";

export function AboutEditorial() {
  return (
    <section className="bg-ink grain">
      <div className="mx-auto grid max-w-[1600px] items-center gap-12 px-5 py-24 md:px-10 md:py-32 lg:grid-cols-[55%_45%]">
        <Reveal>
          <p className="label-micro text-gold-dim">05 — The advocate</p>
          <h2 className="mt-8 font-display text-[clamp(2.8rem,6vw,6.5rem)] font-light leading-[0.88] text-onink">
            {advocate.firstName}
            <br />
            {advocate.lastName}
          </h2>
          <p className="label-micro mt-6 text-gold">{advocate.qualification} · {advocate.title}</p>
          <div className="mt-8 h-px w-16 bg-gold/60" />
          <p className="mt-8 max-w-lg text-sm leading-relaxed text-onink-muted">
            Practising as an Advocate & Legal Consultant from Thane West, with assistance focused on labour law
            compliances, statutory registrations and business licensing for establishments.
          </p>
          <Link to="/about" className="label-micro mt-9 inline-block text-gold link-underline">
            More about the practice →
          </Link>
        </Reveal>
        <Reveal delay={120}>
          <figure className="relative">
            <img
              src={img.aboutChamber}
              alt="Advocate's chamber with law books, reading glasses and a warm lamp"
              width={1104}
              height={1408}
              loading="lazy"
              className="h-[60vh] w-full object-cover saturate-[0.65] md:h-[70vh]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/25" />
            <div className="absolute -left-4 bottom-8 border border-onink/15 bg-ink/60 px-6 py-5 backdrop-blur-md md:-left-10">
              <Monogram size={40} />
              <p className="label-micro mt-3 text-onink-muted/80">Thane West · India</p>
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
