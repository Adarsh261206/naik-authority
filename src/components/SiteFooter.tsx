import { Link } from "@tanstack/react-router";
import {
  advocate,
  directionsHref,
  disclaimerShort,
  mailHref,
  nav,
  services,
  telHref,
  whatsappHref,
} from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="grain relative bg-ink text-onink">
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <div className="font-display text-[6rem] leading-[0.8] text-onink/90">RN</div>
            <div className="mt-6 h-px w-24 bg-gold/60" />
            <p className="mt-6 font-display text-2xl text-onink">{advocate.name}</p>
            <p className="label-micro mt-2 text-onink-muted">
              {advocate.qualification} • {advocate.title}
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="label-micro text-gold-dim">Navigate</p>
            <ul className="mt-6 space-y-3">
              {nav.map((i) => (
                <li key={i.label}>
                  <Link to={i.to} className="link-underline text-sm text-onink-muted hover:text-onink">
                    {i.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/disclaimer" className="link-underline text-sm text-onink-muted hover:text-onink">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="link-underline text-sm text-onink-muted hover:text-onink">
                  Privacy
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <p className="label-micro text-gold-dim">Practice</p>
            <ul className="mt-6 space-y-3">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    to="/practice-areas/$slug"
                    params={{ slug: s.slug }}
                    className="link-underline text-sm text-onink-muted hover:text-onink"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/practice-areas" className="link-underline text-sm text-gold">
                  All practice areas →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="label-micro text-gold-dim">Office</p>
            <address className="mt-6 space-y-1 text-sm not-italic text-onink-muted">
              <p>{advocate.office.line1}</p>
              <p>{advocate.office.line2}</p>
              <p>{advocate.office.line3}</p>
              <p>
                {advocate.office.city} — {advocate.office.pincode}
              </p>
            </address>
            <div className="mt-6 space-y-2 text-sm">
              <a href={telHref} className="block link-underline text-onink hover:text-gold">
                {advocate.phone}
              </a>
              <a href={mailHref} className="block break-all link-underline text-onink hover:text-gold">
                {advocate.email}
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block link-underline text-onink-muted hover:text-gold"
              >
                WhatsApp
              </a>
              <a
                href={directionsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="block link-underline text-onink-muted hover:text-gold"
              >
                Get directions →
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 h-px w-full bg-gold/25" />
        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <p className="max-w-2xl text-xs leading-relaxed text-onink-muted/80">{disclaimerShort}</p>
          <p className="label-micro shrink-0 text-onink-muted/60">
            © 2026 {advocate.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
