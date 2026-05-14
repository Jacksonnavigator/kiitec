import { Suspense, useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { CanonicalLink } from "./CanonicalLink";
import { DocumentTitle } from "./DocumentTitle";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { OrganizationJsonLd } from "./OrganizationJsonLd";
import { PageFallback } from "./PageFallback";

export function Layout() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    if (!id) return;
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [pathname, hash]);

  return (
    <>
      <a
        className="skip-link"
        href="#main-content"
        onClick={() => {
          queueMicrotask(() => {
            document.getElementById("main-content")?.focus({ preventScroll: true });
          });
        }}
      >
        Skip to main content
      </a>
      <DocumentTitle />
      <CanonicalLink />
      <OrganizationJsonLd />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Suspense fallback={<PageFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
