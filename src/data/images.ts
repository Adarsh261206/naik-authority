import heroOffice from "@/assets/v2-hero-office.jpg";
import heroDetail from "@/assets/v2-hero-detail.jpg";
import library from "@/assets/v2-library.jpg";
import documents from "@/assets/v2-documents.jpg";
import consultation from "@/assets/v2-consultation.jpg";
import architecture from "@/assets/v2-architecture.jpg";
import establishment from "@/assets/v2-establishment.jpg";
import industry from "@/assets/v2-industry.jpg";
import records from "@/assets/v2-records.jpg";
import office from "@/assets/v2-office.jpg";
import statement from "@/assets/v2-statement.jpg";
import about from "@/assets/v2-about.jpg";
import thane from "@/assets/v2-thane.jpg";

export const img = {
  heroOffice,
  heroDetail,
  library,
  documents,
  consultation,
  architecture,
  establishment,
  industry,
  records,
  office,
  statement,
  about,
  thane,
};

export const serviceImage: Record<string, string> = {
  "labour-law-licenses": industry,
  "provident-fund-act": records,
  "esic-act": consultation,
  "mlwf-act": records,
  "professional-tax": documents,
  "shop-act-gumasta": establishment,
  "msme-udyam-registration": office,
  "fssai-food-licence": establishment,
  "health-trade-licence": establishment,
  "fire-noc": architecture,
  "pollution-control-act": industry,
};

export const serviceAlt: Record<string, string> = {
  "labour-law-licenses": "Light-filled workshop floor with machinery and workers",
  "provident-fund-act": "Payroll ledgers and tied file bundles on a bright desk",
  "esic-act": "Two people reviewing documents across a light wooden table",
  "mlwf-act": "Open register and bundled records in warm daylight",
  "professional-tax": "Statutory forms, folders and a pen arranged on a pale desk",
  "shop-act-gumasta": "Commercial shopfronts along a sunlit street",
  "msme-udyam-registration": "Bright modern Indian office interior",
  "fssai-food-licence": "Commercial establishment street front in daylight",
  "health-trade-licence": "Retail and commercial premises on a clean street",
  "fire-noc": "Modern commercial building facade in warm light",
  "pollution-control-act": "Industrial workshop interior with daylight",
};

export const gallery = [
  {
    src: library,
    label: "Legal / 01",
    caption: "Reference & research",
    alt: "Sunlit law library with tall shelves of legal volumes",
  },
  {
    src: documents,
    label: "Advisory / 02",
    caption: "Statutory documentation",
    alt: "Registration forms and folders arranged on a pale desk",
  },
  {
    src: consultation,
    label: "Counsel / 03",
    caption: "Consultation",
    alt: "Hands reviewing printed documents across a wooden table",
  },
  {
    src: architecture,
    label: "Business / 04",
    caption: "Commercial premises",
    alt: "Modern commercial building facade in warm light",
  },
  {
    src: office,
    label: "Practice / 05",
    caption: "Establishments",
    alt: "Bright modern Indian office interior",
  },
  {
    src: thane,
    label: "Thane / 06",
    caption: "Where we practise",
    alt: "Thane and Mumbai skyline in warm hazy daylight",
  },
];

export const processImages = [consultation, documents, records, establishment, library];
