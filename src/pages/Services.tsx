import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ClipboardList, Calculator, FileCheck, Compass, Check, LucideIcon } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const serviceIcons: LucideIcon[] = [ClipboardList, Calculator, FileCheck, Compass];

export default function Services() {
  const { t, language } = useLanguage();

  const services = t.servicesPage.items.map((item, index) => ({
    icon: serviceIcons[index],
    ...item,
  }));

  return (
    <>
      <Helmet>
        <title>{language === "sv" ? "Tjänster | EkSthlm - Renoveringsprojektledning" : language === "es" ? "Servicios | EkSthlm - Gestión de Proyectos de Renovación" : "Services | EkSthlm - Renovation Project Management"}</title>
        <meta
          name="description"
          content={language === "sv"
            ? "Professionella renoveringsprojekttjänster i Stockholm. Projektledning, kostnadskontroll, offertgranskning och 3D-designplanering."
            : language === "es"
            ? "Servicios profesionales de gestión de proyectos de renovación en Estocolmo. Gestión de proyectos, control de costos, revisión de presupuestos y planificación de diseño 3D."
            : "Professional renovation project management services in Stockholm. Project management, cost control, quote review, and 3D design planning."
          }
        />
        <meta property="og:title" content={`${t.servicesPage.title} | EkSthlm`} />
        <meta property="og:description" content={t.servicesPage.subtitle} />
        <link rel="canonical" href="https://eksthlm.com/services" />
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.servicesPage.title}</h1>
              <p className="text-lg text-muted-foreground mb-4">
                {t.servicesPage.subtitle}
              </p>
              <p className="text-muted-foreground italic">
                {t.servicesPage.differentiator}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="space-y-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-lg p-8 md:p-12 shadow-card"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left - Icon and Title */}
                    <div>
                      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <service.icon className="text-primary" size={28} />
                      </div>
                      <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <p className="text-sm text-accent font-medium">{service.ideal}</p>
                    </div>

                    {/* Right - Features */}
                    <div className="lg:col-span-2">
                      <h3 className="font-semibold mb-4">{t.servicesPage.whatsIncluded}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-2">
                            <Check size={18} className="text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
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
              <h2 className="text-3xl font-bold mb-4">{t.servicesPage.ctaTitle}</h2>
              <p className="text-muted-foreground mb-8">
                {t.servicesPage.ctaSubtitle}
              </p>
              <Link to="/#contact">
                <Button variant="hero" size="xl">
                  {t.servicesPage.ctaButton}
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
