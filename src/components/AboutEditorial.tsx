import { Link } from "@tanstack/react-router";
import { img } from "@/data/images";
import { Monogram } from "./Monogram";
import { advocate } from "@/data/site";
import { Reveal } from "./Reveal";

export function AboutEditorial() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1500px] px-5 md:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-tr-[70px]">
            <img
              src={img.about}
              alt="Advocate's chamber with a pale oak desk, cane chair and bundled case files"
              width={1600}
              height={1104}
              loading="lazy"
              className="h-[52vh] min-h-[320px] w-full object-cover md:h-[70vh]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-espresso/10 to-transparent" />
            <div className="absolute bottom-8 left-6 md:bottom-12 md:left-12">
              <h2 className="display-lg text-ondark">
                Ravindra
                <br />
                R. Naik
              </h2>
              <p className="mt-4 text-sm text-ondark">{advocate.qualification}</p>
              <p className="eyebrow mt-1 text-bronze">{advocate.title}</p>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-[auto_1fr_auto] md:items-start md:gap-16">
          <Monogram size={56} />
          <Reveal delay={100}>
            <p className="body-lead max-w-2xl">
              Practising from Thane West, with assistance focused on labour law compliances, statutory
              registrations and business licensing for establishments across Thane and Mumbai.
            </p>
          </Reveal>
          <Link to="/about" className="link-quiet self-center text-sm text-ink">
            More about the practice →
          </Link>
        </div>
      </div>
    </section>
  );
}
