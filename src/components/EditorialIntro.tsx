import { focus, img } from "@/data/images";
import { Reveal } from "./Reveal";

export function EditorialIntro() {
  return (
    <section className="section-y bg-cream">
      <div className="shell">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10">
          <Reveal className="col-span-12 lg:col-span-6">
            <h2 className="display-lg text-ink">
              Legal guidance
              <br />
              that brings <span className="italic text-brown">clarity.</span>
            </h2>
          </Reveal>
          <Reveal delay={120} className="col-span-12 lg:col-span-5 lg:col-start-8">
            <p className="body-lead">
              The practice assists businesses with labour law compliances, statutory registrations,
              licences and the recurring filings that follow them.
            </p>
            <p className="body-lead mt-5">
              Requirements differ with the activity, the premises and the number of people employed.
              Each matter begins by establishing what actually applies — then organising the
              documentation and the process around it.
            </p>
          </Reveal>
        </div>

        <Reveal delay={180}>
          <div className="mt-16 overflow-hidden rounded-tr-[64px] md:mt-24">
            <img
              src={img.consultation}
              alt="Business owners reviewing compliance documents across a wooden conference table"
              width={1408}
              height={1104}
              loading="lazy"
              className={`aspect-[16/9] w-full object-cover md:aspect-[21/9] ${focus.consultation}`}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
