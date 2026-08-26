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
import { FloatingActions } from "@/components/FloatingActions";
import { addressOneLine, advocate } from "@/data/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ivory px-6">
      <div className="max-w-md text-center">
        <p className="font-display text-8xl font-light text-ink">404</p>
        <p className="mt-6 text-sm text-inkmuted">This page could not be found</p>
        <Link to="/" className="mt-8 inline-block rounded-[3px] bg-espresso px-6 py-4 text-sm text-cream">
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
            className="rounded-[3px] bg-espresso px-6 py-4 text-sm text-cream"
          >
            Try again
          </button>
          <a href="/" className="rounded-[3px] border border-ink/20 px-6 py-4 text-sm text-ink">
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
      { name: "theme-color", content: "#F5F1E8" },
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
