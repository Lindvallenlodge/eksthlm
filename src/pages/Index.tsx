import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { PackagesSection } from "@/components/sections/PackagesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { useLanguage } from "@/i18n/LanguageContext";

const Index = () => {
  const { language } = useLanguage();

  const title = language === "sv" 
    ? "EkSthlm | Renoveringsprojektledning Stockholm" 
    : language === "es"
    ? "EkSthlm | Gestión de Proyectos de Renovación Estocolmo"
    : "EkSthlm | Renovation Project Management Stockholm";
  
  const description = language === "sv"
    ? "Nordisk klarhet i fastigheter. Oberoende kundrepresentation för badrum-, köks- och lägenhetsrenoveringar i Stockholm. Kostnadskontroll, kvalitetsöversikt och transparent projektledning."
    : "Nordic clarity in real estate. Independent customer representation for bathroom, kitchen, and apartment renovation projects in Stockholm. Cost control, quality oversight, and transparent project management.";

  const ogDescription = language === "sv"
    ? "Oberoende kundrepresentation för renoveringsprojekt—tydlig omfattning, rättvist pris och ett resultat som matchar den ursprungliga visionen."
    : "Independent customer representation for renovation projects—tight scope, fair cost, and a result that matches the original vision.";

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://eksthlm.com" />
      </Helmet>

      <Header />
      
      <main>
        <HeroSection />
        <ServicesSection />
        <TrustSection />
        <PortfolioPreview />
        <ProcessSection />
        <PackagesSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;
