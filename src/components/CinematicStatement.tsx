import { Link } from "@tanstack/react-router";
import { img } from "@/data/images";

export function CinematicStatement() {
  return (
    <section className="relative isolate overflow-hidden bg-espresso">
      <img
        src={img.statement}
        alt="Warm golden-hour light across a legal office desk and bookshelves"
        width={1600}
        height={1008}
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-espresso via-espresso/70 to-espresso/20" />
      <div className="mx-auto w-full max-w-[1500px] px-5 py-28 md:px-10 md:py-40">
        <h2 className="display-lg max-w-3xl text-ondark">
          When compliance
          <br />
          gets complex,
          <br />
          <span className="italic text-bronze">clarity matters.</span>
        </h2>
        <Link
          to="/contact"
          className="mt-10 inline-block rounded-[3px] bg-cream px-8 py-4 text-sm text-espresso transition-colors duration-200 hover:bg-bronze hover:text-cream"
        >
          Discuss your requirement
        </Link>
      </div>
    </section>
  );
}
