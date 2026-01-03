import { motion } from "framer-motion";
import { Phone, MapPin, FileSearch, Clock, CheckCircle, LucideIcon } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const stepIcons: LucideIcon[] = [Phone, MapPin, FileSearch, Clock, CheckCircle];

export function ProcessSection() {
  const { t } = useLanguage();

  const steps = t.process.steps.map((step, index) => ({
    icon: stepIcons[index],
    ...step,
  }));

  return (
    <section id="process" className="section-padding bg-card">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.process.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.process.subtitle}
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-border" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-center"
              >
                <div className="w-16 h-16 bg-background border-2 border-primary rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <step.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
