import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function PackagesSection() {
  const { t } = useLanguage();

  const packages = [
    { ...t.packages.quoteReview, featured: false },
    { ...t.packages.designSupport, featured: true },
    { ...t.packages.fullProject, featured: false },
  ];

  return (
    <section id="packages" className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.packages.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.packages.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-lg ${
                pkg.featured
                  ? "bg-primary text-primary-foreground shadow-elevated"
                  : "bg-card shadow-card"
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded-full">
                  {t.packages.mostPopular}
                </div>
              )}

              <h3 className="text-xl font-semibold mb-4">{pkg.title}</h3>
              {pkg.price && (
                <p className={`text-2xl font-bold mb-4 ${pkg.featured ? "" : "text-primary"}`}>
                  {pkg.price}
                </p>
              )}
              <p className={`mb-6 ${pkg.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                {pkg.description}
              </p>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check size={18} className={pkg.featured ? "text-accent mt-0.5" : "text-primary mt-0.5"} />
                    <span className={pkg.featured ? "text-primary-foreground/90" : ""}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link to="/#contact">
                <Button
                  variant={pkg.featured ? "accent" : "outline"}
                  className="w-full"
                >
                  {t.packages.getStarted}
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
