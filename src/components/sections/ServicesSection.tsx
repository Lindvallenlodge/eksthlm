import { motion } from "framer-motion";
import { ClipboardList, Calculator, FileCheck, Compass, LucideIcon } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const serviceIcons: LucideIcon[] = [ClipboardList, Calculator, FileCheck, Compass];

export function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    { icon: serviceIcons[0], ...t.services.projectManagement },
    { icon: serviceIcons[1], ...t.services.costManagement },
    { icon: serviceIcons[2], ...t.services.quoteControl },
    { icon: serviceIcons[3], ...t.services.designPlanning },
  ];

  return (
    <section id="services" className="section-padding bg-card">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.services.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-8 rounded-lg shadow-card hover:shadow-elevated transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <ul className="space-y-2">
                {service.points.map((point) => (
                  <li key={point} className="text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1.5">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12 text-lg text-muted-foreground italic"
        >
          {t.services.differentiator}
        </motion.p>
      </div>
    </section>
  );
}
