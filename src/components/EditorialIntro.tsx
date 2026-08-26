import { img } from "@/data/images";
import { Reveal } from "./Reveal";

export function EditorialIntro() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1500px] px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[58%_42%] lg:gap-20">
          <Reveal>
            <h2 className="display-lg text-ink">
              Legal guidance
              <br />
              that brings <span className="italic text-brown">clarity.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="lg:pt-4">
              <p className="body-lead">
                The practice assists businesses with labour law compliances, statutory registrations,
                licences and the recurring filings that follow them.
              </p>
              <p className="body-lead mt-5">
                Requirements differ with the activity, the premises and the number of people employed.
                Each matter begins by establishing what actually applies — then organising the
                documentation and the process around it.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Layered composition */}
        <div className="relative mt-16 md:mt-24">
          <Reveal>
            <div className="overflow-hidden rounded-tr-[60px]">
              <img
                src={img.office}
                alt="Bright modern Indian office interior with people working"
                width={1504}
                height={1008}
                loading="lazy"
                className="h-[45vh] min-h-[300px] w-full object-cover md:h-[64vh]"
              />
            </div>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-6 md:absolute md:-bottom-14 md:right-10 md:mt-0 md:w-[300px]">
              <div className="overflow-hidden rounded-[3px]">
                <img
                  src={img.documents}
                  alt="Statutory forms and folders on a pale desk"
                  width={1408}
                  height={1008}
                  loading="lazy"
                  className="h-[180px] w-full object-cover md:h-[210px]"
                />
              </div>
              <p className="mt-3 text-xs tracking-[0.14em] uppercase text-inkmuted">
                Registrations · Records · Returns
              </p>
            </div>
          </Reveal>
        </div>
        <div className="h-0 md:h-16" />
      </div>
    </section>
  );
}
