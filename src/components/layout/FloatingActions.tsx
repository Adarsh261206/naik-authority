import { Link } from "@tanstack/react-router";
import { telHref, whatsappHref } from "@/data/site";

export function FloatingActions() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-beige bg-cream/95 backdrop-blur-md md:hidden">
      <a
        href={telHref}
        className="py-4 text-center text-[11px] tracking-[0.18em] uppercase text-ink"
      >
        Call
      </a>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="border-x border-beige py-4 text-center text-[11px] tracking-[0.18em] uppercase text-ink"
      >
        WhatsApp
      </a>
      <Link
        to="/contact"
        className="bg-espresso py-4 text-center text-[11px] tracking-[0.18em] uppercase text-cream"
      >
        Consult
      </Link>
    </div>
  );
}
