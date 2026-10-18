# Naik Authority

**Ravindra R. Naik · B.A. LL.B. · Advocate & Legal Consultant, Thane West**

A high-end digital presence for an Indian advocate and legal consultant — a single-page editorial website built with TanStack Start (React 19) and deployed as a serverless application on Vercel.

The site helps businesses navigate statutory registrations, labour-law compliance and licensing — from Udyam and Gumasta registrations to FSSAI, Fire NOC and Pollution Control consents.

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | [TanStack Start](https://tanstack.com/start/latest) (SSR + file-based routing) |
| UI | React 19, TypeScript |
| Styling | Tailwind CSS v4, tw-animate-css |
| Components | shadcn/ui (Radix UI primitives) |
| Forms | react-hook-form + zod |
| Data fetching | TanStack Query |
| Build | Vite 8 + Nitro |
| Package manager | [Bun](https://bun.sh) |
| Deployment | Vercel (serverless functions) |

## Pages

- **Home** — full editorial landing experience
- **Practice Areas** — index plus a dedicated page for every service
- **About** — profile and approach
- **Contact** — consultation enquiry form (react-hook-form + zod)
- **Disclaimer** / **Privacy** — legal pages

## Homepage Sections

- Hero with brand monogram
- Editorial introduction
- Practice showcase (11 service areas)
- Gallery
- Cinematic statement
- Compliance map (statutory requirements at a glance)
- Process timeline — Understand → Assess → Prepare → Proceed → Follow through
- About editorial
- Location section with embedded Google Map of the Thane West office
- FAQ accordion
- Consultation enquiry form

## Practice Areas

**Labour & Employment**

1. Labour Law Licenses / Compliances
2. Provident Fund Act
3. ESIC Act
4. MLWF Act
5. Professional Tax

**Business Registration**

6. Shop Act / Gumasta
7. MSME / Udyam Registration

**Licensing & Clearances**

8. FSSAI / Food Licence
9. Health Trade Licence (MCGM)
10. Fire NOC
11. Pollution Control Act

---

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) `>= 1.3`
- Node.js `>= 22`

### Install

```sh
bun install
```

### Development

```sh
bun run dev
```

Start the Vite dev server with hot module replacement at `http://localhost:3000`.

### Production build

```sh
bun run build
```

Builds the client and server bundles; running with `VERCEL=1` (or on Vercel) emits a `.vercel/output` deployment directory.

### Preview the production build

```sh
bun run preview
```

### Lint

```sh
bun run lint
```

## Project Structure

```
src/
├── assets/          # Photography, portrait & certificate imagery
├── components/
│   ├── common/      # Shared primitives (Reveal, Monogram)
│   ├── layout/      # Site chrome (SiteNav, SiteFooter, FloatingActions)
│   ├── sections/    # Page sections (Hero, AboutEditorial, Certificates, Faq, ...)
│   └── ui/          # shadcn/ui primitives
├── data/            # Site content: advocate profile, services, FAQs, process
├── hooks/           # Shared hooks
├── lib/             # Utilities & SSR error handling
├── routes/          # File-based TanStack Router routes
├── server.ts        # Custom SSR server entry (error wrapper)
├── router.tsx       # Router setup
├── start.ts         # App bootstrap
└── styles.css       # Tailwind entry
```

## Deployment

The project is configured for zero-config deployment on Vercel:

- `vercel.json` pins the `tanstack-start` framework preset
- `nitro/vite` in `vite.config.ts` produces the serverless output (`.vercel/output`)
- `packageManager: bun@…` ensures Vercel installs with Bun

Import the repository at [vercel.com/new](https://vercel.com/new) and deploy — every push to `main` triggers a production deployment automatically.

Alternatively, from the project root:

```sh
vercel login
vercel --prod
```

---

## Contact

| | |
| --- | --- |
| **Advocate** | Ravindra R. Naik, B.A. LL.B. |
| **Phone** | [9867223036](tel:9867223036) |
| **Email** | [naikravindra153@gmail.com](mailto:naikravindra153@gmail.com) |
| **Office** | 01, Ground Floor, Astavinayak Building, Near Manpasand Sweet, Sawarkar Nagar, Thane West — 400606 |

> The information on this website is general in nature and is not a substitute for legal advice on a specific matter.
