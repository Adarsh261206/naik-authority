import { Link } from "@tanstack/react-router";
import { img } from "@/data/images";

export function CinematicStatement() {
  return (
    <section className="relative isolate flex min-h-[92svh] items-end overflow-hidden bg-ink">
      <img
        src={img.statement}
        alt="Dark law office at night with case files under a single lamp"
        width={1920}
        height={1088}
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover saturate-[0.6]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
      <div className="mx-auto w-full max-w-[1600px] px-5 pb-20 md:px-10 md:pb-28">
        <h2 className="font-display text-[clamp(2.8rem,7vw,7.5rem)] font-light leading-[0.9] text-onink">
          When
          <br />
          compliance
          <br />
          gets complex,
          <br />
          <span className="italic text-gold-dim">clarity matters.</span>
        </h2>
        <Link
          to="/contact"
          data-cursor="consult"
          className="label-micro mt-12 inline-block border-b border-gold/60 pb-2 text-gold"
        >
          Discuss your requirement →
        </Link>
      </div>
    </section>
  );
}
