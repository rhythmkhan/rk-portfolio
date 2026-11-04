/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SmoothScroll, { SCROLL_TO_TOP_EVENT } from "./components/SmoothScroll";
import { AppPage, getBlogSlugFromLocation, getPageFromLocation } from "./lib/routes";
import AboutPage from "./pages/AboutPage";
import BlogArticlePage from "./pages/BlogArticlePage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import PrivacyPage from "./pages/PrivacyPage";
import PricingPage from "./pages/PricingPage";
import ServicesPage from "./pages/ServicesPage";
import TermsPage from "./pages/TermsPage";

function WhatsAppIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="w-5 h-5 text-white relative z-10"
      fill="currentColor"
    >
      <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.82c0 1.92.56 3.8 1.62 5.4L2 22l4.95-1.77a9.86 9.86 0 0 0 5.08 1.39h.01c5.43 0 9.83-4.4 9.83-9.82A9.8 9.8 0 0 0 12.04 2Zm5.72 13.89c-.24.67-1.4 1.28-1.93 1.37-.5.08-1.12.12-1.8-.1-.42-.13-.95-.3-1.64-.6-2.88-1.24-4.75-4.13-4.9-4.32-.14-.2-1.18-1.56-1.18-2.96 0-1.4.73-2.09.99-2.38.27-.29.58-.36.78-.36.2 0 .39 0 .56.01.18.01.43-.07.67.5.25.59.84 2.03.91 2.18.08.15.12.33.02.53-.1.2-.15.33-.3.5-.15.18-.31.39-.45.52-.15.15-.3.3-.13.59.17.3.77 1.26 1.65 2.04 1.13 1 2.08 1.32 2.37 1.47.3.15.47.13.64-.08.18-.2.74-.86.94-1.15.2-.3.4-.24.67-.14.28.1 1.76.83 2.07.98.3.15.5.22.57.35.07.13.07.74-.17 1.4Z" />
    </svg>
  );
}

export default function App() {
  const [currentLocation, setCurrentLocation] = useState(() => ({
    pathname: window.location.pathname,
    hash: window.location.hash,
  }));
  const [currentPage, setCurrentPage] = useState<AppPage>(() =>
    getPageFromLocation(window.location),
  );
  const currentBlogSlug = getBlogSlugFromLocation(currentLocation);

  useEffect(() => {
    const syncRoute = () => {
      setCurrentLocation({
        pathname: window.location.pathname,
        hash: window.location.hash,
      });
      setCurrentPage(getPageFromLocation(window.location));
      window.scrollTo(0, 0);
    };

    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const link = target.closest("a[href]");
      if (!(link instanceof HTMLAnchorElement)) {
        return;
      }

      const href = link.getAttribute("href");
      if (!href || href.startsWith("#") || link.target === "_blank" || link.hasAttribute("download")) {
        return;
      }

      const nextUrl = new URL(link.href, window.location.origin);
      if (nextUrl.origin !== window.location.origin) {
        return;
      }

      if (nextUrl.pathname === window.location.pathname && nextUrl.hash === window.location.hash) {
        return;
      }

      event.preventDefault();
      window.history.pushState({}, "", `${nextUrl.pathname}${nextUrl.hash}`);
      syncRoute();
    };

    window.addEventListener("popstate", syncRoute);
    window.addEventListener("hashchange", syncRoute);
    document.addEventListener("click", handleDocumentClick);

    return () => {
      window.removeEventListener("popstate", syncRoute);
      window.removeEventListener("hashchange", syncRoute);
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  let pageContent = <HomePage />;

  if (currentPage === "about") {
    pageContent = <AboutPage />;
  } else if (currentPage === "service") {
    pageContent = <ServicesPage />;
  } else if (currentPage === "contact") {
    pageContent = <ContactPage />;
  } else if (currentPage === "blog") {
    pageContent = currentBlogSlug ? (
      <BlogArticlePage slug={currentBlogSlug} />
    ) : (
      <BlogPage />
    );
  } else if (currentPage === "pricing") {
    pageContent = <PricingPage />;
  } else if (currentPage === "terms") {
    pageContent = <TermsPage />;
  } else if (currentPage === "privacy") {
    pageContent = <PrivacyPage />;
  }

  return (
    <div id="top" className="font-sans antialiased">
      <SmoothScroll />
      <Header currentPage={currentPage} />
      {pageContent}
      <Footer />

      {/* Floating Elements */}
      <a
        href="https://wa.me/8801978304389"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col items-center gap-4 bg-white/5 p-2 rounded-l-lg border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/8 hover:border-white/20"
      >
        <span className="group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(180deg,#25D366_0%,#17b857_100%)] shadow-[0_16px_32px_rgba(15,23,42,0.38)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_20px_40px_rgba(37,211,102,0.28)]">
          <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.28),transparent_42%)] opacity-80 transition-opacity duration-300 group-hover:opacity-100"></span>
          <WhatsAppIcon />
        </span>
        <span className="h-10 w-px bg-white/20"></span>
        <span className="text-[10px] rotate-90 whitespace-nowrap text-muted font-bold tracking-widest py-8">
          BUY NOW / SITES
        </span>
      </a>
      <div className="fixed bottom-6 right-4 sm:bottom-10 sm:right-10 z-50 flex flex-col gap-3">
        <button
          className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-brand shadow-lg transition-transform hover:scale-110"
          onClick={() => window.dispatchEvent(new Event(SCROLL_TO_TOP_EVENT))}
        >
          <ArrowUp className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
}
