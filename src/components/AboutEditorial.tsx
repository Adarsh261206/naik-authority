import { Link } from "@tanstack/react-router";
import { focus, img } from "@/data/images";
import { advocate } from "@/data/site";
import { Reveal } from "./Reveal";

export function AboutEditorial() {
  return (
    <section className="section-y bg-paper">
      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-tr-[64px]">
            <img
              src={img.about}
              alt="Advocate's chamber with a pale oak desk, cane chair and bundled case files"
              width={1600}
              height={1104}
              loading="lazy"
              className={`aspect-[4/3] w-full object-cover md:aspect-[21/9] ${focus.about}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/15 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-12">
              <h2 className="display-lg text-ondark">Ravindra R. Naik</h2>
              <p className="mt-4 text-sm tracking-[0.14em] uppercase text-ondarkmuted">
                {advocate.qualification} · {advocate.title}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-12 items-start gap-x-6 gap-y-6">
          <Reveal delay={100} className="col-span-12 lg:col-span-6">
            <p className="body-lead">
              Practising from Thane West, with assistance focused on labour law compliances,
              statutory registrations and business licensing for establishments across Thane and
              Mumbai.
            </p>
          </Reveal>
          <div className="col-span-12 lg:col-span-3 lg:col-start-10 lg:text-right">
            <Link to="/about" className="link-quiet text-sm text-ink">
              More about the practice →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
