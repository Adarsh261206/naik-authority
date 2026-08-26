import { stripPanels } from "@/data/images";

export function ImageStrip() {
  return (
    <section aria-label="Practice imagery" className="relative bg-ink pb-20 pt-16">
      <div className="mx-auto flex max-w-[1600px] items-baseline justify-between px-5 pb-8 md:px-10">
        <p className="label-micro text-onink-muted/70">The work</p>
        <p className="label-micro text-onink-muted/40">Scroll →</p>
      </div>
      <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-4 md:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {stripPanels.map((p, i) => (
          <figure
            key={p.label}
            data-cursor="view"
            className="group relative h-[58vh] min-h-[360px] w-[72vw] shrink-0 snap-start overflow-hidden md:w-[24vw] md:min-w-[240px]"
            style={{ marginTop: i % 2 === 1 ? "2.5rem" : 0 }}
          >
            <img
              src={p.src}
              alt={p.alt}
              width={900}
              height={1350}
              loading="lazy"
              className="h-full w-full object-cover saturate-[0.55] brightness-[0.8] transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:saturate-100 group-hover:brightness-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent" />
            <span className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-700 group-hover:w-full" />
            <figcaption className="absolute bottom-5 left-5 label-micro text-onink/90">{p.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
