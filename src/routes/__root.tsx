import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";
import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { addressOneLine, advocate } from "@/data/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ivory px-6">
      <div className="max-w-md text-center">
        <p className="font-display text-8xl font-light text-ink">404</p>
        <p className="mt-6 text-sm text-inkmuted">This page could not be found</p>
        <Link to="/" className="btn-primary mt-8">
          Return home →
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: unknown; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-ivory px-6">
      <div className="max-w-md text-center">
        <h1 className="font-display text-4xl font-light text-ink">This page didn't load</h1>
        <p className="mt-6 text-sm text-inkmuted">Please try again or return to the homepage.</p>
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-primary"
          >
            Try again
          </button>
          <a href="/" className="btn-secondary">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${advocate.firm} | ${advocate.name} | Advocate & Legal Consultant | Thane` },
      {
        name: "description",
        content:
          "Advocate & Legal Consultant in Thane assisting businesses with labour law, statutory registrations, licences and compliance requirements.",
      },
      { name: "author", content: advocate.name },
      { name: "theme-color", content: "#F5F1E8" },
      { property: "og:site_name", content: advocate.firm },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/logo.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Inter:wght@300;400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: advocate.firm,
          description: `${advocate.title} assisting businesses with labour law, statutory registrations, licences and compliance requirements.`,
          founder: {
            "@type": "Person",
            name: advocate.name,
            jobTitle: advocate.title,
          },
          telephone: advocate.phoneIntl,
          email: advocate.email,
          areaServed: "Thane, Maharashtra, India",
          address: {
            "@type": "PostalAddress",
            streetAddress: `${advocate.office.line1}, ${advocate.office.line2}, ${advocate.office.line3}`,
            addressLocality: advocate.office.city,
            postalCode: advocate.office.pincode,
            addressRegion: advocate.office.state,
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <QueryClientProvider client={queryClient}>
      <SiteNav />
      <main key={pathname} className="page-in min-h-screen">
        {/* Required: nested routes render here. */}
        <Outlet />
      </main>
      <SiteFooter />
      <FloatingActions />
      <span className="sr-only">{addressOneLine}</span>
    </QueryClientProvider>
  );
}
