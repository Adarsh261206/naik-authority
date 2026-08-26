export const advocate = {
  name: "Ravindra R. Naik",
  firstName: "Ravindra",
  lastName: "R. Naik",
  monogram: "RN",
  qualification: "B.A. LL.B.",
  title: "Advocate & Legal Consultant",
  phone: "9867223036",
  phoneIntl: "+919867223036",
  email: "naikravindra153@gmail.com",
  whatsappMessage: "Hello, I would like to discuss a legal/compliance requirement.",
  office: {
    line1: "01, Ground Floor, Astavinayak Building",
    line2: "Near Manpasand Sweet",
    line3: "Sawarkar Nagar",
    city: "Thane West",
    pincode: "400606",
    state: "Maharashtra",
    country: "India",
  },
} as const;

export const telHref = `tel:${advocate.phone}`;
export const mailHref = `mailto:${advocate.email}`;
export const whatsappHref = `https://wa.me/${advocate.phoneIntl.replace("+", "")}?text=${encodeURIComponent(
  advocate.whatsappMessage,
)}`;
export const addressOneLine = `${advocate.office.line1}, ${advocate.office.line2}, ${advocate.office.line3}, ${advocate.office.city} - ${advocate.office.pincode}`;
export const directionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  addressOneLine,
)}`;
export const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(addressOneLine)}&z=15&output=embed`;

export const nav = [
  { label: "Practice", to: "/practice-areas" },
  { label: "Approach", to: "/#approach" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export type Service = {
  slug: string;
  index: string;
  title: string;
  short: string;
  node: string;
  category: "Labour & Employment" | "Business Registration" | "Licensing & Clearances";
  overview: string;
  context: string[];
  requirements: string[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "labour-law-licenses",
    index: "01",
    title: "Labour Law Licenses / Compliances",
    short: "Assistance with labour-law registrations, licences and periodic compliance obligations.",
    node: "Labour",
    category: "Labour & Employment",
    overview:
      "Establishments employing workers may fall under one or more labour legislations, each with its own registration, record-keeping and return-filing obligations.",
    context: [
      "Applicability generally depends on the nature of the establishment, the number of persons employed and the state in which the business operates.",
      "Obligations are usually continuing in nature rather than one-time, and may include registers, displays and periodic returns.",
    ],
    requirements: [
      "Establishment and constitution documents",
      "Details of employees engaged",
      "Address proof of the premises",
      "Existing registrations, if any",
    ],
    related: ["provident-fund-act", "esic-act", "mlwf-act"],
  },
  {
    slug: "provident-fund-act",
    index: "02",
    title: "Provident Fund Act",
    short: "Registration and ongoing compliance support under the Employees' Provident Fund framework.",
    node: "PF",
    category: "Labour & Employment",
    overview:
      "The Employees' Provident Funds framework provides for a contributory retirement benefit for eligible employees, administered through employer registration and monthly filings.",
    context: [
      "Applicability is generally linked to the class of establishment and the number of employees engaged.",
      "Employers typically maintain employee records, deposit contributions and file monthly electronic returns.",
    ],
    requirements: [
      "Establishment registration documents",
      "Employee particulars and wage details",
      "Bank account and signatory details",
      "Digital signature or e-sign of the authorised signatory",
    ],
    related: ["esic-act", "labour-law-licenses", "professional-tax"],
  },
  {
    slug: "esic-act",
    index: "03",
    title: "ESIC Act",
    short: "Employer registration, employee coverage and return support under the ESI framework.",
    node: "ESIC",
    category: "Labour & Employment",
    overview:
      "The Employees' State Insurance framework provides medical and related benefits to covered employees, funded by employer and employee contributions.",
    context: [
      "Coverage generally depends on employee count and wage thresholds notified for the area of operation.",
      "Registered employers usually maintain employee insurance numbers and file periodic contribution returns.",
    ],
    requirements: [
      "Constitution and address documents of the establishment",
      "List of employees with wage particulars",
      "Bank details of the establishment",
      "Details of the authorised signatory",
    ],
    related: ["provident-fund-act", "labour-law-licenses", "mlwf-act"],
  },
  {
    slug: "mlwf-act",
    index: "04",
    title: "MLWF Act",
    short: "Maharashtra Labour Welfare Fund contribution and filing assistance.",
    node: "MLWF",
    category: "Labour & Employment",
    overview:
      "The Maharashtra Labour Welfare Fund requires certain establishments to contribute periodically towards welfare activities for employees.",
    context: [
      "Contributions are generally payable at notified intervals along with a statement of employees.",
      "Applicability is linked to the type of establishment and persons employed in Maharashtra.",
    ],
    requirements: [
      "Establishment details and registration numbers",
      "Employee list for the contribution period",
      "Wage records",
    ],
    related: ["professional-tax", "labour-law-licenses", "shop-act-gumasta"],
  },
  {
    slug: "professional-tax",
    index: "05",
    title: "Professional Tax",
    short: "Enrolment, registration and periodic return assistance for professional tax.",
    node: "P. Tax",
    category: "Labour & Employment",
    overview:
      "Professional tax is a state levy applicable to persons engaged in a profession, trade or employment, with separate enrolment and registration certificates.",
    context: [
      "Employers generally deduct professional tax from salaries and remit it, while the business itself may require enrolment.",
      "Return frequency can vary depending on the tax liability of the establishment.",
    ],
    requirements: [
      "PAN of the business and signatory",
      "Address proof of the place of business",
      "Employee salary particulars",
      "Bank account details",
    ],
    related: ["shop-act-gumasta", "mlwf-act", "provident-fund-act"],
  },
  {
    slug: "shop-act-gumasta",
    index: "06",
    title: "Shop Act / Gumasta",
    short: "Registration of shops and commercial establishments under the state Shops Act.",
    node: "Shop Act",
    category: "Business Registration",
    overview:
      "Shops and commercial establishments generally require registration with the local authority, commonly referred to as the Gumasta licence in Maharashtra.",
    context: [
      "The registration records the identity of the establishment and the persons employed.",
      "It is frequently sought by banks and other authorities as proof of a business premises.",
    ],
    requirements: [
      "Identity and address proof of the proprietor / partners / directors",
      "Proof of premises such as an agreement or utility bill",
      "Photograph of the establishment",
      "Details of employees, if any",
    ],
    related: ["msme-udyam-registration", "professional-tax", "health-trade-licence"],
  },
  {
    slug: "msme-udyam-registration",
    index: "07",
    title: "MSME / Udyam Registration",
    short: "Udyam registration support for micro, small and medium enterprises.",
    node: "MSME",
    category: "Business Registration",
    overview:
      "Udyam registration is the recognition process for micro, small and medium enterprises, based on investment and turnover criteria.",
    context: [
      "The registration is commonly used when dealing with institutions, buyers and government departments.",
      "Details are largely self-declared and linked with PAN and GST records where applicable.",
    ],
    requirements: [
      "Aadhaar of the proprietor / authorised partner or director",
      "PAN of the enterprise",
      "Business activity and bank details",
      "Investment and turnover particulars",
    ],
    related: ["shop-act-gumasta", "fssai-food-licence", "pollution-control-act"],
  },
  {
    slug: "fssai-food-licence",
    index: "08",
    title: "FSSAI / Food Licence",
    short: "Registration and licence assistance for food businesses.",
    node: "FSSAI",
    category: "Licensing & Clearances",
    overview:
      "Food businesses are generally required to obtain a registration or licence under the food safety framework, depending on scale and nature of activity.",
    context: [
      "The applicable category — basic registration, state licence or central licence — depends on turnover and activity.",
      "Licences are issued for a period and require timely renewal.",
    ],
    requirements: [
      "Identity and address proof of the applicant",
      "Proof of premises",
      "Details of food category and activity",
      "Layout or equipment particulars where applicable",
    ],
    related: ["health-trade-licence", "shop-act-gumasta", "fire-noc"],
  },
  {
    slug: "health-trade-licence",
    index: "09",
    title: "Health Trade Licence / MCGM",
    short: "Health trade licence assistance for establishments under municipal jurisdiction.",
    node: "Health",
    category: "Licensing & Clearances",
    overview:
      "Certain trades that may affect public health require a licence from the municipal authority before commencing or continuing operations.",
    context: [
      "Requirements and inspections are administered by the concerned municipal corporation.",
      "Premises conditions and supporting clearances are commonly examined during processing.",
    ],
    requirements: [
      "Proof of premises and occupancy",
      "Constitution documents of the business",
      "Layout plan where required",
      "Related clearances such as food or fire, where applicable",
    ],
    related: ["fssai-food-licence", "fire-noc", "shop-act-gumasta"],
  },
  {
    slug: "fire-noc",
    index: "10",
    title: "Fire NOC",
    short: "Assistance with fire safety no-objection certificate applications.",
    node: "Fire",
    category: "Licensing & Clearances",
    overview:
      "A fire no-objection certificate certifies that the premises meet the fire safety requirements prescribed by the concerned authority.",
    context: [
      "Applicability commonly depends on the type of occupancy, built-up area and height of the premises.",
      "Inspection of installed fire safety systems typically forms part of the process.",
    ],
    requirements: [
      "Building and premises documents",
      "Approved layout or plan",
      "Details of fire safety installations",
      "Occupancy details",
    ],
    related: ["health-trade-licence", "pollution-control-act", "fssai-food-licence"],
  },
  {
    slug: "pollution-control-act",
    index: "11",
    title: "Pollution Control Act",
    short: "Consent and compliance assistance under pollution control legislation.",
    node: "Pollution",
    category: "Licensing & Clearances",
    overview:
      "Industrial and certain commercial activities may require consent to establish and consent to operate from the state pollution control board.",
    context: [
      "Category classification of the activity influences the applicable process and conditions.",
      "Consents are granted for a period and carry continuing conditions.",
    ],
    requirements: [
      "Details of the activity and premises",
      "Project or capacity particulars",
      "Effluent or emission details where applicable",
      "Existing approvals, if any",
    ],
    related: ["fire-noc", "msme-udyam-registration", "health-trade-licence"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export const process = [
  { n: "01", title: "Understand", body: "Discuss the requirement." },
  { n: "02", title: "Assess", body: "Identify applicable requirements." },
  { n: "03", title: "Prepare", body: "Organize the relevant documentation and process." },
  { n: "04", title: "Proceed", body: "Move forward with the required compliance or registration." },
  { n: "05", title: "Follow through", body: "Clarify the next steps." },
] as const;

export const faqs = [
  {
    q: "What is Udyam Registration?",
    a: "Udyam registration is the recognition process for micro, small and medium enterprises. Classification is based on investment and turnover criteria, and the registration is commonly relied upon when dealing with institutions and government departments.",
  },
  {
    q: "What is the Shop Act / Gumasta requirement?",
    a: "Shops and commercial establishments generally register with the local authority. The registration records the establishment and the persons employed, and is frequently requested as proof of a business premises.",
  },
  {
    q: "What type of businesses may require FSSAI licensing?",
    a: "Businesses involved in manufacturing, processing, storage, distribution or sale of food generally require a registration or licence. The applicable category depends on the scale and nature of the activity.",
  },
  {
    q: "How can businesses approach statutory compliance requirements?",
    a: "A practical approach is to first identify which legislations apply to the establishment, then map the registrations, records and periodic filings each one requires, and finally maintain a calendar for renewals and returns.",
  },
  {
    q: "Which requirements apply to my business?",
    a: "Applicability depends on facts such as the activity, premises, number of persons employed and location. These are best assessed in a consultation with reference to your specific circumstances.",
  },
] as const;

export const disclaimerShort =
  "The information on this website is general in nature and is not a substitute for legal advice on a specific matter.";
