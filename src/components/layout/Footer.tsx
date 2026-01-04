import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import logoImg from "@/assets/logo-eksthlm.png";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logoImg} 
                alt="EkSthlm logo" 
                className="h-10 w-auto object-contain rounded-lg"
              />
              <span className="text-xl font-semibold">EkSthlm</span>
            </div>
            <p className="text-background/70 max-w-sm mb-6">
              {t.footer.tagline}
            </p>
            <p className="text-sm text-background/50">
              {t.footer.serviceArea}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-background/70 hover:text-background transition-colors">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-background/70 hover:text-background transition-colors">
                  {t.nav.portfolio}
                </Link>
              </li>
              <li>
                <Link to="/#process" className="text-background/70 hover:text-background transition-colors">
                  {t.nav.howItWorks}
                </Link>
              </li>
              <li>
                <Link to="/#packages" className="text-background/70 hover:text-background transition-colors">
                  {t.nav.packages}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.contact}</h4>
            <ul className="space-y-2 text-background/70">
              <li>
                <a href="mailto:hello@eksthlm.se" className="hover:text-background transition-colors">
                  hello@eksthlm.se
                </a>
              </li>
              <li>
                <a href="tel:+46762066128" className="hover:text-background transition-colors">
                  +46 76 206 61 28
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm text-background/50">
          <p>© {new Date().getFullYear()} EkSthlm. {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
