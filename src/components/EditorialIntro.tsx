import { Reveal } from "./Reveal";
import { img } from "@/data/images";

export function EditorialIntro() {
  return (
    <section className="bg-sand">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-24 md:px-10 md:py-32 lg:grid-cols-[40%_60%] lg:gap-16">
        <Reveal>
          <p className="label-micro text-golddeep">01 — Introduction</p>
          <h2 className="mt-8 font-display text-[clamp(2.6rem,4.6vw,4.6rem)] font-light leading-[0.95] text-foreground">
            Clear advice.
            <br />
            <span className="italic">Structured action.</span>
          </h2>
          <div className="mt-8 h-px w-16 bg-gold/70" />
          <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">
            Businesses often encounter multiple registrations, licences and statutory requirements.
            Professional guidance can help bring structure and clarity to that process.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <figure className="group relative overflow-hidden">
            <img
              src={img.introOffice}
              alt="Minimal legal office interior with a desk, documents and daylight"
              width={1408}
              height={1056}
              loading="lazy"
              className="h-[46vh] w-full object-cover saturate-[0.7] transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:saturate-100 md:h-[62vh]"
            />
            <figcaption className="label-micro absolute bottom-4 left-4 bg-ink/60 px-3 py-2 text-onink/90 backdrop-blur-sm">
              Legal / 01
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
