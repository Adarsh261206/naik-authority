import { createFileRoute } from "@tanstack/react-router";
import { advocate, mailHref } from "@/data/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Ravindra R. Naik, Advocate — Thane" },
      {
        name: "description",
        content:
          "Privacy policy describing how enquiry information shared with the office of Advocate Ravindra R. Naik is handled.",
      },
      { property: "og:title", content: "Privacy Policy — Ravindra R. Naik, Advocate" },
      {
        property: "og:description",
        content: "How enquiry information shared with this office is handled.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

const sections = [
  {
    h: "Information collected",
    p: "Information submitted through the consultation form — such as name, phone number, email address, organization and the description of the requirement — is used solely to respond to the enquiry.",
  },
  {
    h: "Use of information",
    p: "Details shared are used to understand the enquiry and to communicate regarding it. They are not sold or rented.",
  },
  {
    h: "Confidentiality",
    p: "Communications are treated with professional confidentiality in accordance with applicable professional obligations.",
  },
  {
    h: "Third-party services",
    p: "This website embeds a map service for locating the office. Such services may collect data as per their own policies.",
  },
  {
    h: "Retention",
    p: "Enquiry information is retained only for as long as is necessary for the purpose for which it was shared.",
  },
  {
    h: "Contact",
    p: "For any question relating to this policy, write to the office using the email address listed below.",
  },
];

function Privacy() {
  return (
    <>
      <header className="bg-ivory pb-16 pt-36 md:pt-48">
        <div className="shell ">
          <p className="eyebrow text-brown">Legal — Privacy</p>
          <h1 className="mt-6 display-lg text-ink">Privacy policy</h1>
        </div>
      </header>
      <div className="bg-paper section-y">
        <div className="mx-auto w-full max-w-3xl px-5">
          {sections.map((s, i) => (
            <section key={s.h} className="border-t border-beige py-10 first:border-t-0 first:pt-0">
              <p className="eyebrow text-brown">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-4 font-display text-3xl font-light text-ink">{s.h}</h2>
              <p className="mt-4 text-base leading-relaxed text-inkmuted">{s.p}</p>
            </section>
          ))}
          <a href={mailHref} className="link-quiet mt-6 inline-block text-sm text-ink">
            {advocate.email}
          </a>
        </div>
      </div>
    </>
  );
}
