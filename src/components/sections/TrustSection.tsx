import { motion } from "framer-motion";
import { Shield, Award, Target } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function TrustSection() {
  const { t } = useLanguage();

  const trustItems = [
    { icon: Shield, ...t.trust.contractor },
    { icon: Award, ...t.trust.trackRecord },
    { icon: Target, ...t.trust.customerFirst },
  ];

  return (
    <section className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.trust.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.trust.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
