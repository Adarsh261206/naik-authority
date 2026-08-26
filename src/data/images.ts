import heroDesk from "@/assets/hero-desk.jpg";
import library from "@/assets/strip-library.jpg";
import documents from "@/assets/strip-documents.jpg";
import architecture from "@/assets/strip-architecture.jpg";
import consultation from "@/assets/strip-consultation.jpg";
import establishment from "@/assets/strip-establishment.jpg";
import industry from "@/assets/strip-industry.jpg";
import records from "@/assets/strip-records.jpg";
import introOffice from "@/assets/intro-office.jpg";
import statement from "@/assets/statement.jpg";
import aboutChamber from "@/assets/about-chamber.jpg";
import thaneCity from "@/assets/thane-city.jpg";

export const img = {
  heroDesk,
  library,
  documents,
  architecture,
  consultation,
  establishment,
  industry,
  records,
  introOffice,
  statement,
  aboutChamber,
  thaneCity,
};

export const serviceImage: Record<string, string> = {
  "labour-law-licenses": industry,
  "provident-fund-act": records,
  "esic-act": consultation,
  "mlwf-act": records,
  "professional-tax": documents,
  "shop-act-gumasta": establishment,
  "msme-udyam-registration": architecture,
  "fssai-food-licence": establishment,
  "health-trade-licence": establishment,
  "fire-noc": architecture,
  "pollution-control-act": industry,
};

export const serviceAlt: Record<string, string> = {
  "labour-law-licenses": "Industrial workshop interior representing labour law compliance",
  "provident-fund-act": "Payroll records and statements on a dark desk",
  "esic-act": "Professional consultation over employment documents",
  "mlwf-act": "Ledgers and financial records on a desk",
  "professional-tax": "Close-up of a printed statutory document",
  "shop-act-gumasta": "Indian commercial establishment shopfront at dusk",
  "msme-udyam-registration": "Modern Indian office building facade",
  "fssai-food-licence": "Indian commercial establishment at dusk",
  "health-trade-licence": "Commercial establishment street front",
  "fire-noc": "Architectural detail of a modern building facade",
  "pollution-control-act": "Light industrial premises interior",
};

export const stripPanels = [
  { src: library, label: "01 / Legal counsel", alt: "Dark wood law library with a shaft of warm light" },
  { src: documents, label: "02 / Documentation", alt: "Close-up of a printed legal document" },
  { src: industry, label: "03 / Labour law", alt: "Industrial workshop interior" },
  { src: establishment, label: "04 / Registrations", alt: "Indian commercial establishment at dusk" },
  { src: consultation, label: "05 / Advisory", alt: "Consultation across a desk with documents" },
  { src: architecture, label: "06 / Clearances", alt: "Architectural facade detail at dusk" },
  { src: records, label: "07 / Compliance", alt: "Payroll and financial records on a dark desk" },
];

export const processImages = [library, records, documents, architecture, consultation];
