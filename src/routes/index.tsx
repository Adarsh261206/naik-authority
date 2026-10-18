import { createFileRoute } from "@tanstack/react-router";
import { advocate } from "@/data/site";
import { Hero } from "@/components/sections/Hero";
import { EditorialIntro } from "@/components/sections/EditorialIntro";
import { PracticeShowcase } from "@/components/sections/PracticeShowcase";
import { Gallery } from "@/components/sections/Gallery";
import { CinematicStatement } from "@/components/sections/CinematicStatement";
import { ComplianceMap } from "@/components/sections/ComplianceMap";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { AboutEditorial } from "@/components/sections/AboutEditorial";
import { LocationSection } from "@/components/sections/LocationSection";
import { Faq } from "@/components/sections/Faq";
import { ConsultSection } from "@/components/sections/ConsultForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${advocate.firm} | ${advocate.name} — Advocate & Legal Consultant, Thane West` },
      {
        name: "description",
        content:
          "Advocate & Legal Consultant in Thane West assisting businesses with labour law compliances, statutory registrations and licensing.",
      },
      {
        property: "og:title",
        content: `${advocate.firm} — ${advocate.name}, Advocate & Legal Consultant`,
      },
      {
        property: "og:description",
        content:
          "Legal counsel with clarity — labour law compliances, registrations and licensing for businesses in Thane and Mumbai.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main>
      <Hero />
      <EditorialIntro />
      <PracticeShowcase />
      <Gallery />
      <CinematicStatement />
      <ComplianceMap />
      <ProcessTimeline />
      <AboutEditorial />
      <LocationSection />
      <Faq />
      <ConsultSection />
    </main>
  );
}
