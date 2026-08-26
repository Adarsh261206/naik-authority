import { createFileRoute } from "@tanstack/react-router";
import { advocate } from "@/data/site";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer | Ravindra R. Naik, Advocate — Thane" },
      {
        name: "description",
        content:
          "Disclaimer for the website of Advocate Ravindra R. Naik: the content is informational and is not advertising, solicitation or legal advice.",
      },
      { property: "og:title", content: "Disclaimer — Ravindra R. Naik, Advocate" },
      { property: "og:description", content: "Website content is informational and not legal advice." },
      { property: "og:url", content: "/disclaimer" },
    ],
    links: [{ rel: "canonical", href: "/disclaimer" }],
  }),
  component: Disclaimer,
});

const sections = [
  {
    h: "No solicitation",
    p: "This website is not intended to be an advertisement or solicitation. The contents are provided for informational purposes only and should not be construed as an attempt to solicit work or advertise services.",
  },
  {
    h: "Not legal advice",
    p: "The information on this website is general in nature and is not a substitute for legal advice on a specific matter. Applicability of any statutory requirement depends on the particular facts and circumstances.",
  },
  {
    h: "No advocate–client relationship",
    p: "Accessing this website or submitting an enquiry does not by itself create an advocate–client relationship.",
  },
  {
    h: "Accuracy",
    p: "While reasonable care is taken, statutory positions and procedures may change. No representation is made regarding the completeness or current accuracy of the content.",
  },
  {
    h: "External links",
    p: "Links to third-party services, where present, are provided for convenience. No responsibility is assumed for their content.",
  },
];

function Disclaimer() {
  return (
    <>
      <header className="grain relative bg-ink pb-24 pt-40 text-onink md:pt-52">
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 md:px-10">
          <p className="label-micro text-gold-dim">Legal / Disclaimer</p>
          <h1 className="mt-8 display-lg text-onink">Disclaimer</h1>
        </div>
      </header>
      <div className="bg-ivory py-24 md:py-32">
        <div className="mx-auto w-full max-w-3xl px-5 md:px-10">
          {sections.map((s, i) => (
            <section key={s.h} className="border-t border-foreground/12 py-10 first:border-t-0">
              <p className="label-micro text-gold-dim">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-4 font-display text-3xl font-light">{s.h}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.p}</p>
            </section>
          ))}
          <p className="mt-6 text-xs text-muted-foreground">
            © 2026 {advocate.name}. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
