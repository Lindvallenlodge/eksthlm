import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

import bathroomBefore from "@/assets/portfolio-bathroom-before.jpg";
import bathroomAfter from "@/assets/portfolio-bathroom-after.jpg";
import kitchenBefore from "@/assets/portfolio-kitchen-before.jpg";
import kitchenAfter from "@/assets/portfolio-kitchen-after.jpg";
import apartmentBefore from "@/assets/portfolio-apartment-before.jpg";
import apartmentAfter from "@/assets/portfolio-apartment-after.jpg";

const projectImages = [
  { id: "bathroom-sodermalm", before: bathroomBefore, after: bathroomAfter },
  { id: "kitchen-ostermalm", before: kitchenBefore, after: kitchenAfter },
  { id: "apartment-vasastan", before: apartmentBefore, after: apartmentAfter },
];

export function PortfolioPreview() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const { t } = useLanguage();

  const projects = t.portfolio.projects.map((project, index) => ({
    ...project,
    ...projectImages[index],
  }));

  return (
    <section className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.portfolioPreview.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.portfolioPreview.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg aspect-[4/5]"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Before/After Images */}
              <div className="absolute inset-0">
                <img
                  src={project.before}
                  alt={`${project.title} - ${t.portfolioPreview.before}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    hoveredId === project.id ? "opacity-0" : "opacity-100"
                  }`}
                />
                <img
                  src={project.after}
                  alt={`${project.title} - ${t.portfolioPreview.after}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    hoveredId === project.id ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

              {/* Label */}
              <div className="absolute top-4 left-4">
                <span className="bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1 rounded-full">
                  {hoveredId === project.id ? t.portfolioPreview.after : t.portfolioPreview.before}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2 text-xs text-background/80">
                  <span>{project.location}</span>
                  <span>•</span>
                  <span>{project.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/portfolio">
            <Button variant="outline" size="lg">
              {t.portfolioPreview.viewAll}
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
