import { useState } from "react";
import { certificates } from "@/data/images";
import { advocate } from "@/data/site";
import { Reveal } from "../common/Reveal";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export function Certificates({ className = "bg-cream section-y" }: { className?: string }) {
  const [activeCert, setActiveCert] = useState<(typeof certificates)[number] | null>(null);

  return (
    <section className={className}>
      <div className="shell">
        <Reveal>
          <p className="eyebrow text-brown">Credentials</p>
          <div className="mt-6 max-w-2xl">
            <h2 className="display-lg text-ink">
              Certifications <span className="italic text-brown">&amp;</span> training
            </h2>
            <p className="mt-5 text-base text-inkmuted">
              Professional certifications held by {advocate.name} in areas directly supporting the
              advisory work of the practice.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {certificates.map((cert, i) => (
            <Reveal key={cert.src} delay={i * 100}>
              <figure className="border-t border-beige pt-8">
                <button
                  type="button"
                  onClick={() => setActiveCert(cert)}
                  className="group block w-full cursor-zoom-in overflow-hidden rounded-[3px] border border-beige bg-paper"
                  aria-label={`View full size: ${cert.title} certificate`}
                >
                  <img
                    src={cert.src}
                    alt={cert.alt}
                    loading="lazy"
                    className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </button>
                <figcaption className="mt-6">
                  <p className="font-display text-3xl font-light text-ink">{cert.title}</p>
                  <p className="mt-2 text-sm tracking-[0.12em] uppercase text-brown">
                    {cert.issuer}
                  </p>
                  <p className="mt-3 text-sm text-inkmuted">{cert.detail}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={!!activeCert} onOpenChange={(open) => !open && setActiveCert(null)}>
        <DialogContent className="max-w-5xl border-beige bg-ivory p-4 md:p-6">
          <DialogTitle className="sr-only">{activeCert?.title}</DialogTitle>
          {activeCert ? (
            <>
              <img
                src={activeCert.src}
                alt={activeCert.alt}
                className="mx-auto max-h-[75vh] w-auto"
              />
              <p className="text-center text-sm text-inkmuted">
                {activeCert.title} — {activeCert.issuer}
              </p>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
