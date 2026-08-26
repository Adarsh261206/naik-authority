import { Link } from "@tanstack/react-router";
import { Monogram } from "./Monogram";
import { advocate, disclaimerShort, mailHref, nav, telHref } from "@/data/site";

export function SiteFooter() {
  const o = advocate.office;
  return (
    <footer className="bg-[#1b1511] pb-28 pt-20 md:pb-14">
      <div className="mx-auto w-full max-w-[1500px] px-5 md:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <Monogram size={44} tone="light" />
              <div>
                <p className="font-display text-2xl text-ondark">{advocate.name}</p>
                <p className="text-xs tracking-[0.14em] text-ondarkmuted">
                  {advocate.qualification} · {advocate.title}
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="eyebrow text-bronze">Navigate</p>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    {...("hash" in item ? { hash: item.hash } : {})}
                    className="link-quiet text-sm text-ondarkmuted"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-bronze">Office</p>
            <address className="mt-5 not-italic text-sm leading-relaxed text-ondarkmuted">
              {o.line1}
              <br />
              {o.line2}, {o.line3}
              <br />
              {o.city} — {o.pincode}
            </address>
            <div className="mt-5 space-y-1">
              <a href={telHref} className="link-quiet block text-sm text-ondark">
                {advocate.phone}
              </a>
              <a href={mailHref} className="link-quiet block text-sm text-ondark">
                {advocate.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-ondark/12 pt-8">
          <p className="max-w-3xl text-xs leading-relaxed text-ondarkmuted/80">{disclaimerShort}</p>
          <div className="mt-5 flex flex-col gap-3 text-xs text-ondarkmuted/70 sm:flex-row sm:items-center sm:justify-between">
            <span>
              © {new Date().getFullYear()} {advocate.name}
            </span>
            <span className="flex gap-6">
              <Link to="/privacy" className="link-quiet">
                Privacy
              </Link>
              <Link to="/disclaimer" className="link-quiet">
                Disclaimer
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
