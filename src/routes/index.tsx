import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { EditorialIntro } from "@/components/EditorialIntro";
import { PracticeShowcase } from "@/components/PracticeShowcase";
import { Gallery } from "@/components/Gallery";
import { CinematicStatement } from "@/components/CinematicStatement";
import { ComplianceMap } from "@/components/ComplianceMap";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { AboutEditorial } from "@/components/AboutEditorial";
import { LocationSection } from "@/components/LocationSection";
import { Faq } from "@/components/Faq";
import { ConsultSection } from "@/components/ConsultForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ravindra R. Naik — Advocate & Legal Consultant, Thane West" },
      {
        name: "description",
        content:
          "Advocate & Legal Consultant in Thane West assisting businesses with labour law compliances, statutory registrations and licensing.",
      },
      { property: "og:title", content: "Ravindra R. Naik — Advocate & Legal Consultant" },
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
