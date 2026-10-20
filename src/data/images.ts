import hero from "@/assets/hero-ravindra-naik.png";
import library from "@/assets/v3-library.jpg";
import documents from "@/assets/v3-documents.jpg";
import consultation from "@/assets/v3-business.jpg";
import commercial from "@/assets/v3-commercial.jpg";
import establishment from "@/assets/v3-establishment.jpg";
import records from "@/assets/v3-records.jpg";
import statement from "@/assets/v3-statement.jpg";
import about from "@/assets/v3-about.jpg";
import thane from "@/assets/v3-thane.jpg";
import ravindraPortrait from "@/assets/ravindra-naik.png";
import certPosh from "@/assets/cert-posh.png";
import certFssai from "@/assets/cert-fssai.png";

export const img = {
  hero,
  library,
  documents,
  consultation,
  commercial,
  establishment,
  records,
  statement,
  about,
  thane,
  ravindraPortrait,
};

/** Deliberate focal points — never rely on the default centre crop. */
export const focus = {
  hero: "object-[50%_45%]",
  library: "object-[55%_70%]",
  documents: "object-[58%_55%]",
  consultation: "object-[50%_45%]",
  commercial: "object-[48%_40%]",
  establishment: "object-[62%_45%]",
  records: "object-[55%_50%]",
  statement: "object-[42%_55%]",
  about: "object-[60%_55%]",
  thane: "object-[50%_35%]",
  portrait: "object-[50%_40%]",
} as const;

export const certificates = [
  {
    src: certPosh,
    title: "POSH Train-the-Trainer",
    issuer: "Embrace Life",
    detail: "Certificate No. EM/MG/PW/1040 — certified to facilitate POSH sessions.",
    alt: "Certificate of Achievement from Embrace Life for the POSH Train-the-Trainer programme, awarded to Adv. Ravindra Ramchandra Naik",
  },
  {
    src: certFssai,
    title: "Food Safety Supervisor",
    issuer: "FSSAI — FoSTaC (Advance Catering)",
    detail: "Certificate No. ACACOVID2004027556 — competence certified under FSSAI.",
    alt: "FSSAI Food Safety Supervisor Certificate of Competence awarded to Ravindra Ramchandra Naik for Advance Catering training",
  },
] as const;

type ServiceVisual = { src: string; alt: string; focus: string };

const legalDocuments: ServiceVisual = {
  src: documents,
  alt: "Statutory registration forms, a stamped certificate and file folders on a warm oak desk",
  focus: focus.documents,
};
const businessRecords: ServiceVisual = {
  src: records,
  alt: "Tied bundles of statutory registers and business records on wooden shelves",
  focus: focus.records,
};
const advisory: ServiceVisual = {
  src: consultation,
  alt: "Business owners reviewing compliance documents across a wooden conference table",
  focus: focus.consultation,
};
const establishmentStreet: ServiceVisual = {
  src: establishment,
  alt: "Commercial establishments and shopfronts along a sunlit Indian street",
  focus: focus.establishment,
};
const commercialBuilding: ServiceVisual = {
  src: commercial,
  alt: "Modern Indian commercial office building facade in warm daylight",
  focus: focus.commercial,
};

/** Every service points at a semantically relevant frame from one collection. */
export const serviceVisual: Record<string, ServiceVisual> = {
  "labour-law-licenses": legalDocuments,
  "provident-fund-act": businessRecords,
  "esic-act": advisory,
  "mlwf-act": businessRecords,
  "professional-tax": legalDocuments,
  "shop-act-gumasta": establishmentStreet,
  "msme-udyam-registration": advisory,
  "fssai-food-licence": establishmentStreet,
  "health-trade-licence": establishmentStreet,
  "fire-noc": commercialBuilding,
  "pollution-control-act": commercialBuilding,
};

export const defaultServiceVisual: ServiceVisual = {
  src: library,
  alt: "Open statute volume on a reading table in a warm sunlit law library",
  focus: focus.library,
};

export function visualFor(slug: string): ServiceVisual {
  return serviceVisual[slug] ?? defaultServiceVisual;
}

/** Curated sequence: legal → documents → consultation → commercial → chamber → city. */
export const gallery = [
  {
    src: library,
    focus: focus.library,
    label: "Legal / 01",
    caption: "Reference & research",
    alt: "Sunlit law library with tall shelves of legal volumes and an open statute book",
  },
  {
    src: documents,
    focus: focus.documents,
    label: "Advisory / 02",
    caption: "Statutory documentation",
    alt: "Registration forms, a stamped certificate and folders on a warm oak desk",
  },
  {
    src: consultation,
    focus: focus.consultation,
    label: "Counsel / 03",
    caption: "Consultation",
    alt: "Business owners in discussion over printed documents at a wooden table",
  },
  {
    src: commercial,
    focus: focus.commercial,
    label: "Business / 04",
    caption: "Commercial premises",
    alt: "Modern Indian commercial office building facade in warm daylight",
  },
  {
    src: about,
    focus: focus.about,
    label: "Practice / 05",
    caption: "The chamber",
    alt: "Advocate's chamber with an oak desk, cane chair and bundled case files",
  },
  {
    src: thane,
    focus: focus.thane,
    label: "Thane / 06",
    caption: "Where we practise",
    alt: "Thane and Mumbai skyline in warm hazy daylight",
  },
];

export const processImages = [
  { src: consultation, focus: focus.consultation, alt: "" },
  { src: documents, focus: focus.documents, alt: "" },
  { src: records, focus: focus.records, alt: "" },
  { src: establishment, focus: focus.establishment, alt: "" },
  { src: library, focus: focus.library, alt: "" },
];
