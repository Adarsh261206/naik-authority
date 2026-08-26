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
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
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
      <header className="bg-ivory pb-16 pt-36 md:pt-48">
        <div className="mx-auto w-full max-w-[1500px] px-5 md:px-10">
          <p className="eyebrow text-brown">Legal — Disclaimer</p>
          <h1 className="mt-6 display-lg text-ink">Disclaimer</h1>
        </div>
      </header>
      <div className="bg-paper py-20 md:py-28">
        <div className="mx-auto w-full max-w-3xl px-5 md:px-10">
          {sections.map((s, i) => (
            <section key={s.h} className="border-t border-beige py-10 first:border-t-0 first:pt-0">
              <p className="eyebrow text-brown">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-4 font-display text-3xl font-light text-ink">{s.h}</h2>
              <p className="mt-4 text-base leading-relaxed text-inkmuted">{s.p}</p>
            </section>
          ))}
          <p className="mt-6 text-xs text-inkmuted">
            {advocate.name}, {advocate.qualification} — {advocate.title}
          </p>
        </div>
      </div>
    </>
  );
}
