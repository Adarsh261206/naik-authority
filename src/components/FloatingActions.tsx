import { Link } from "@tanstack/react-router";
import { telHref, whatsappHref } from "@/data/site";

export function FloatingActions() {
  return (
    <>
      {/* Desktop: single restrained consultation tab */}
      <Link
        to="/contact"
        data-cursor="consult"
        className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 origin-right rotate-180 border border-gold/40 bg-ink/70 px-4 py-5 label-micro text-gold backdrop-blur-sm transition-colors duration-200 hover:bg-gold hover:text-ink lg:block"
        style={{ writingMode: "vertical-rl" }}
      >
        Consultation
      </Link>

      {/* Mobile: sticky action bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-onink/15 bg-ink/95 backdrop-blur-md lg:hidden">
        <a href={telHref} className="py-4 text-center label-micro text-onink-muted">
          Call
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="border-x border-onink/15 py-4 text-center label-micro text-onink-muted"
        >
          WhatsApp
        </a>
        <Link to="/contact" className="py-4 text-center label-micro text-gold">
          Consult
        </Link>
      </div>
      <div className="h-[52px] lg:hidden" aria-hidden="true" />
    </>
  );
}
