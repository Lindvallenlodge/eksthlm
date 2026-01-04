import { useState, type MouseEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageContext";
import logoImg from "@/assets/logo-eksthlm.png";

// Calendly popup support (requires Calendly widget script on the page)
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { label: t.nav.services, href: "/services" },
    { label: t.nav.portfolio, href: "/portfolio" },
    { label: t.nav.howItWorks, href: "/#process" },
    { label: t.nav.packages, href: "/#packages" },
    { label: t.nav.contact, href: "/#contact" },
  ];

  const calendlyUrl = "https://calendly.com/solutions-eksthlm/30min";

  const handleCalendlyClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Prefer Calendly popup (keeps visitor on-page). If widget isn't loaded, fall back to a normal new tab.
    if (window.Calendly?.initPopupWidget) {
      e.preventDefault();
      window.Calendly.initPopupWidget({ url: calendlyUrl });
      return;
    }

    // Widget not available (e.g., script not loaded yet) -> open in new tab.
    e.preventDefault();
    window.open(calendlyUrl, "_blank", "noopener,noreferrer");
  };

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);

    if (href.startsWith("/#")) {
      const sectionId = href.replace("/#", "");
      if (location.pathname === "/") {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="container-wide">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logoImg}
              alt="EkSthlm logo"
              className="h-10 w-auto object-contain rounded-lg"
            />
            <span className="text-xl font-semibold tracking-tight">EkSthlm</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={(e) => {
                  if (item.href.startsWith("/#")) {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }
                }}
              >
                <Button variant="nav" size="sm">
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Right side: Language Switcher + CTA */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <Button variant="hero" size="default" asChild>
              <a href={calendlyUrl} onClick={handleCalendlyClick}>
                {t.nav.bookCall}
              </a>
            </Button>
          </div>

          {/* Mobile: Language + Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button
              className="p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="container-wide py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={(e) => {
                    if (item.href.startsWith("/#")) {
                      e.preventDefault();
                    }
                    handleNavClick(item.href);
                  }}
                  className="py-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Button variant="hero" className="w-full mt-2" asChild>
                <a
                  href={calendlyUrl}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    handleCalendlyClick(e);
                  }}
                >
                  {t.nav.bookCall}
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
