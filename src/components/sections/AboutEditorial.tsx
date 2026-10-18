import { Link } from "@tanstack/react-router";
import { focus, img } from "@/data/images";
import { advocate } from "@/data/site";
import { Reveal } from "../common/Reveal";
import { Certificates } from "./Certificates";

export function AboutEditorial() {
  return (
    <>
      <section className="section-y bg-paper">
        <div className="shell">
          <div className="grid grid-cols-12 items-center gap-x-6 gap-y-12 lg:gap-x-16">
            <Reveal className="col-span-12 lg:col-span-6">
              <div className="overflow-hidden rounded-tr-[64px]">
                <img
                  src={img.ravindraPortrait}
                  alt="Adv. Ravindra R. Naik at his chamber desk in Thane West"
                  width={1180}
                  height={1046}
                  loading="lazy"
                  className={`aspect-[6/5] w-full object-cover ${focus.portrait}`}
                />
              </div>
            </Reveal>

            <div className="col-span-12 lg:col-span-5 lg:col-start-8">
              <Reveal delay={80}>
                <p className="eyebrow text-brown">The practice</p>
                <h2 className="display-xl mt-6 text-ink">{advocate.firm}</h2>
                <p className="mt-5 font-display text-4xl font-light text-ink md:text-5xl">
                  {advocate.name}
                </p>
                <p className="mt-4 text-sm tracking-[0.14em] uppercase text-inkmuted">
                  {advocate.qualification} · {advocate.title}
                </p>
              </Reveal>
              <Reveal delay={140}>
                <p className="body-lead mt-8">
                  Practising from Thane West, with assistance focused on labour law compliances,
                  statutory registrations and business licensing for establishments across Thane and
                  Mumbai.
                </p>
                <Link to="/about" className="link-quiet mt-8 inline-block text-sm text-ink">
                  More about the practice →
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Certificates className="bg-ivory section-y" />
    </>
  );
}
