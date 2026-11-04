import { Menu, X } from "lucide-react";
import { useState } from "react";
import { AppPage, pageRoutes } from "../lib/routes";

type HeaderProps = {
  currentPage: AppPage;
};

const navLinkClass = (isActive: boolean) =>
  [
    "relative inline-flex items-center py-1 font-medium transition-colors",
    "after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-full after:origin-left after:bg-brand after:transition-transform after:duration-300",
    isActive
      ? "text-brand after:scale-x-100"
      : "text-white hover:text-brand after:scale-x-0 hover:after:scale-x-100",
  ].join(" ");

export default function Header({ currentPage }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="brand-dot relative h-3 w-3 rounded-full bg-brand"></div>
          <a
            href={pageRoutes.home}
            className="text-xl sm:text-2xl font-bold tracking-tight"
            onClick={closeMobileMenu}
          >
            Rhythm
          </a>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href={pageRoutes.home} className={navLinkClass(currentPage === "home")}>
            Home
          </a>
          <a href={pageRoutes.about} className={navLinkClass(currentPage === "about")}>
            About
          </a>
          <a href={pageRoutes.service} className={navLinkClass(currentPage === "service")}>
            Services
          </a>
          <a href={pageRoutes.blog} className={navLinkClass(currentPage === "blog")}>
            Blog
          </a>
          <a href={pageRoutes.pricing} className={navLinkClass(currentPage === "pricing")}>
            Pricing
          </a>
          <a href={pageRoutes.contact} className={navLinkClass(currentPage === "contact")}>
            Contact
          </a>
        </nav>

        {/* Social & Menu */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://www.instagram.com/seratul.alim"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.246 2.242 1.308 3.607.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.365-.333 2.632-1.308 3.607-.975.975-2.242 1.246-3.607 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.365-.062-2.632-.333-3.607-1.308-.975-.975-1.247-2.242-1.308-3.607-.058-1.266-.069-1.646-.069-4.85s.011-3.584.069-4.85c.062-1.365.333-2.632 1.308-3.607.975-.975 2.242-1.247 3.607-1.308 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/seratul-alim"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </a>
            <a
              href="https://github.com/seratul-alim"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 .5C5.65.5.5 5.66.5 12.03c0 5.1 3.3 9.42 7.88 10.95.58.1.79-.25.79-.56 0-.28-.01-1.2-.02-2.17-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.78 2.7 1.27 3.36.97.1-.75.4-1.27.74-1.56-2.56-.29-5.26-1.29-5.26-5.75 0-1.27.45-2.3 1.18-3.11-.12-.29-.51-1.47.11-3.07 0 0 .97-.31 3.17 1.19a10.9 10.9 0 0 1 5.78 0c2.2-1.5 3.17-1.19 3.17-1.19.62 1.6.23 2.78.11 3.07.74.81 1.18 1.84 1.18 3.11 0 4.47-2.7 5.46-5.28 5.75.41.36.78 1.05.78 2.12 0 1.53-.01 2.77-.01 3.15 0 .31.21.67.8.56A11.54 11.54 0 0 0 23.5 12.03C23.5 5.66 18.35.5 12 .5Z"></path>
              </svg>
            </a>
            <a
              href="https://x.com/seratulalimkhan"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.25l-4.9-7.01L5.94 22H2.83l7.24-8.28L.8 2h6.4l4.43 6.35L18.9 2Zm-1.1 18h1.72L6.27 3.9H4.42L17.8 20Z"></path>
              </svg>
            </a>
          </div>
          <button
            className="md:hidden w-10 h-10 bg-brand rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(255,0,102,0.25)]"
            type="button"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((current) => !current)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </div>
      {isMobileMenuOpen ? (
        <div className="md:hidden border-t border-white/5 bg-black/95 backdrop-blur-md">
          <nav className="max-w-7xl mx-auto px-5 py-5 flex flex-col gap-4">
            <a
              href={pageRoutes.home}
              className={navLinkClass(currentPage === "home")}
              onClick={closeMobileMenu}
            >
              Home
            </a>
            <a
              href={pageRoutes.about}
              className={navLinkClass(currentPage === "about")}
              onClick={closeMobileMenu}
            >
              About
            </a>
            <a
              href={pageRoutes.service}
              className={navLinkClass(currentPage === "service")}
              onClick={closeMobileMenu}
            >
              Services
            </a>
            <a
              href={pageRoutes.blog}
              className={navLinkClass(currentPage === "blog")}
              onClick={closeMobileMenu}
            >
              Blog
            </a>
            <a
              href={pageRoutes.pricing}
              className={navLinkClass(currentPage === "pricing")}
              onClick={closeMobileMenu}
            >
              Pricing
            </a>
            <a
              href={pageRoutes.contact}
              className={navLinkClass(currentPage === "contact")}
              onClick={closeMobileMenu}
            >
              Contact
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
