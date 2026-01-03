import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

import bathroomBefore from "@/assets/portfolio-bathroom-before.jpg";
import bathroomAfter from "@/assets/portfolio-bathroom-after.jpg";
import kitchenBefore from "@/assets/portfolio-kitchen-before.jpg";
import kitchenAfter from "@/assets/portfolio-kitchen-after.jpg";
import apartmentBefore from "@/assets/portfolio-apartment-before.jpg";
import apartmentAfter from "@/assets/portfolio-apartment-after.jpg";
import heroImg from "@/assets/hero-renovation.jpg";

type TabType = "before" | "during" | "after";

const projectImages = [
  { id: "bathroom-sodermalm", before: bathroomBefore, during: heroImg, after: bathroomAfter },
  { id: "kitchen-ostermalm", before: kitchenBefore, during: heroImg, after: kitchenAfter },
  { id: "apartment-vasastan", before: apartmentBefore, during: heroImg, after: apartmentAfter },
];

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    location: string;
    scope: string;
    duration: string;
    budget: string;
    materials: readonly string[];
    whatWeDid: readonly string[];
    outcome: readonly string[];
  };
  images: {
    before: string;
    during: string;
    after: string;
  };
}

function ProjectCard({ project, images }: ProjectCardProps) {
  const [activeTab, setActiveTab] = useState<TabType>("before");
  const { t } = useLanguage();

  const tabLabels: Record<TabType, string> = {
    before: t.portfolioPreview.before,
    during: t.portfolio.during,
    after: t.portfolioPreview.after,
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-card rounded-lg overflow-hidden shadow-card"
    >
      {/* Image Gallery */}
      <div className="relative aspect-[16/10]">
        <img
          src={images[activeTab]}
          alt={`${project.title} - ${tabLabels[activeTab]}`}
          className="w-full h-full object-cover"
        />
        
        {/* Tabs */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-background/90 backdrop-blur-sm rounded-full p-1">
          {(["before", "during", "after"] as TabType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                activeTab === tab
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tabLabels[tab]}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>

        {/* Facts Row */}
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6 pb-6 border-b border-border">
          <span>{project.location}</span>
          <span>•</span>
          <span>{project.scope}</span>
          <span>•</span>
          <span>{project.duration}</span>
          {project.budget && (
            <>
              <span>•</span>
              <span>{project.budget}</span>
            </>
          )}
        </div>

        {/* Materials */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
            {t.portfolio.keyMaterials}
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.materials.map((material) => (
              <span
                key={material}
                className="bg-secondary text-secondary-foreground text-sm px-3 py-1 rounded-full"
              >
                {material}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* What we did */}
          <div>
            <h3 className="font-semibold mb-3">{t.portfolio.whatWeDid}</h3>
            <ul className="space-y-2">
              {project.whatWeDid.map((item) => (
                <li key={item} className="text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Outcome */}
          <div>
            <h3 className="font-semibold mb-3">{t.portfolio.outcome}</h3>
            <ul className="space-y-2">
              {project.outcome.map((item) => (
                <li key={item} className="text-muted-foreground flex items-start gap-2">
                  <span className="text-accent mt-1">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Portfolio() {
  const { t, language } = useLanguage();

  const projects = t.portfolio.projects.map((project, index) => ({
    ...project,
    images: projectImages[index],
  }));

  return (
    <>
      <Helmet>
        <title>{language === "sv" ? "Portfolio | EkSthlm - Renoveringsprojekt Stockholm" : language === "es" ? "Portfolio | EkSthlm - Proyectos de Renovación Estocolmo" : "Portfolio | EkSthlm - Renovation Projects Stockholm"}</title>
        <meta
          name="description"
          content={language === "sv" 
            ? "Se vår portfolio med badrum-, köks- och lägenhetsrenoveringar i Stockholm. Före och efter-transformationer med detaljerade fallstudier."
            : language === "es"
            ? "Explore nuestro portfolio de proyectos de renovación de baños, cocinas y apartamentos en Estocolmo. Transformaciones antes y después con estudios de caso detallados."
            : "Browse our portfolio of bathroom, kitchen, and apartment renovation projects in Stockholm. Before and after transformations with detailed case studies."
          }
        />
        <meta property="og:title" content="Portfolio | EkSthlm" />
        <meta property="og:description" content={t.portfolio.pageSubtitle} />
        <link rel="canonical" href="https://eksthlm.com/portfolio" />
      </Helmet>

      <Header />

      <main className="pt-20">
        {/* Hero */}
        <section className="section-padding bg-card">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.portfolio.pageTitle}</h1>
              <p className="text-lg text-muted-foreground">
                {t.portfolio.pageSubtitle}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="space-y-12">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} images={project.images} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-card">
          <div className="container-narrow text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4">{t.portfolio.ctaTitle}</h2>
              <p className="text-muted-foreground mb-8">
                {t.portfolio.ctaSubtitle}
              </p>
              <Link to="/#contact">
                <Button variant="hero" size="xl">
                  {t.portfolio.ctaButton}
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
