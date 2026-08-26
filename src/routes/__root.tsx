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
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Cursor } from "@/components/Cursor";
import { Preloader } from "@/components/Preloader";
import { FloatingActions } from "@/components/FloatingActions";
import { addressOneLine, advocate } from "@/data/site";

function NotFoundComponent() {
  return (
    <div className="grain flex min-h-screen items-center justify-center bg-ink px-6">
      <div className="relative z-10 max-w-md text-center">
        <p className="font-display text-8xl font-light text-onink">404</p>
        <div className="mx-auto mt-6 h-px w-16 bg-gold/60" />
        <p className="label-micro mt-6 text-onink-muted">This page could not be found</p>
        <Link to="/" className="label-micro mt-8 inline-block border border-gold/50 px-6 py-4 text-gold">
          Return home →
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="grain flex min-h-screen items-center justify-center bg-ink px-6">
      <div className="relative z-10 max-w-md text-center">
        <h1 className="font-display text-4xl font-light text-onink">This page didn't load</h1>
        <div className="mx-auto mt-6 h-px w-16 bg-gold/60" />
        <p className="mt-6 text-sm text-onink-muted">Please try again or return to the homepage.</p>
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="label-micro border border-gold/50 px-6 py-4 text-gold"
          >
            Try again
          </button>
          <a href="/" className="label-micro border border-onink/20 px-6 py-4 text-onink">
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
      { title: `${advocate.name} | Advocate & Legal Consultant | Thane` },
      {
        name: "description",
        content:
          "Advocate & Legal Consultant in Thane assisting businesses with labour law, statutory registrations, licences and compliance requirements.",
      },
      { name: "author", content: advocate.name },
      { name: "theme-color", content: "#0A0A0A" },
      { property: "og:site_name", content: advocate.name },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
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
          name: advocate.name,
          description: `${advocate.title} assisting businesses with labour law, statutory registrations, licences and compliance requirements.`,
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
      <Preloader />
      <Cursor />
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
