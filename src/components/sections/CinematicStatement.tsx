import { Link } from "@tanstack/react-router";
import { focus, img } from "@/data/images";

export function CinematicStatement() {
  return (
    <section className="relative isolate overflow-hidden bg-espresso">
      <img
        src={img.statement}
        alt="Case files and law reports on a long chamber table in warm golden light"
        width={1600}
        height={1000}
        loading="lazy"
        className={`absolute inset-0 -z-10 h-full w-full object-cover ${focus.statement}`}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#241c17]/92 via-[#241c17]/70 to-[#241c17]/25" />
      <div className="shell py-28 md:py-40">
        <h2 className="display-lg max-w-3xl text-ondark">
          When compliance
          <br />
          gets complex,
          <br />
          <span className="italic text-bronze">clarity matters.</span>
        </h2>
        <Link to="/contact" className="btn-on-dark mt-10">
          Discuss your requirement
        </Link>
      </div>
    </section>
  );
}
