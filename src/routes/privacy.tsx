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
      { property: "og:description", content: "How enquiry information shared with this office is handled." },
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
      <header className="grain relative bg-ink pb-24 pt-40 text-onink md:pt-52">
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 md:px-10">
          <p className="label-micro text-golddeep">Legal / Privacy</p>
          <h1 className="mt-8 display-lg text-onink">Privacy policy</h1>
        </div>
      </header>
      <div className="bg-ivory py-24 md:py-32">
        <div className="mx-auto w-full max-w-3xl px-5 md:px-10">
          {sections.map((s, i) => (
            <section key={s.h} className="border-t border-foreground/12 py-10 first:border-t-0">
              <p className="label-micro text-golddeep">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-4 font-display text-3xl font-light">{s.h}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.p}</p>
            </section>
          ))}
          <a href={mailHref} className="label-micro text-golddeep link-underline">
            {advocate.email}
          </a>
        </div>
      </div>
    </>
  );
}
