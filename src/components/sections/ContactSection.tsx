import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/i18n/LanguageContext";

export function ContactSection() {
  const { toast } = useToast();
  const { t } = useLanguage();
  // Contact values (prefer translations when available, fallback to defaults)
  const emailValue = (t.contact as any).emailValue || "solutions@eksthlm.com";
  const emailHref = `mailto:${emailValue}`;

  const phoneValue = (t.contact as any).phoneValue || "+46 76 206 61 28";
  const phoneHref = (t.contact as any).phoneHref || "tel:+46762066128";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [services, setServices] = useState({
    quoteReview: false,
    planningSupport: false,
    projectLead: false,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: t.contact.form.successTitle,
      description: t.contact.form.successDescription,
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
    setServices({ quoteReview: false, planningSupport: false, projectLead: false });
  };

  return (
    <section id="contact" className="section-padding bg-card">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.contact.title}</h2>
            <p className="text-muted-foreground mb-8">
              {t.contact.subtitle}
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t.contact.email}</p>
                  <a href={emailHref} className="font-medium hover:text-primary transition-colors">
                    {emailValue}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t.contact.phone}</p>
                  <a href={phoneHref} className="font-medium hover:text-primary transition-colors">
                    {phoneValue}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t.contact.serviceArea}</p>
                  <p className="font-medium">{t.contact.serviceAreaValue}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="bg-background p-8 rounded-lg shadow-card">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="name">{t.contact.form.name} *</Label>
                  <Input id="name" name="name" required className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="email">{t.contact.form.email} *</Label>
                  <Input id="email" name="email" type="email" required className="mt-1.5" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="phone">{t.contact.form.phone}</Label>
                  <Input id="phone" name="phone" type="tel" className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="location">{t.contact.form.location}</Label>
                  <Input id="location" name="location" placeholder={t.contact.form.locationPlaceholder} className="mt-1.5" />
                </div>
              </div>

              <div className="mb-4">
                <Label htmlFor="projectType">{t.contact.form.projectType}</Label>
                <Select name="projectType">
                  <SelectTrigger className="mt-1.5">
                    <SelectValue placeholder={t.contact.form.selectProjectType} />
                  </SelectTrigger>
                  <SelectContent>
                    {t.contact.projectTypes.map((type) => (
                      <SelectItem key={type} value={type.toLowerCase().replace(/\s+/g, "-")}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="mb-4">
                <Label htmlFor="message">{t.contact.form.message} *</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="mt-1.5"
                  placeholder={t.contact.form.messagePlaceholder}
                />
              </div>

              <div className="mb-6">
                <Label className="mb-3 block">{t.contact.form.interestedIn}</Label>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="quoteReview"
                      checked={services.quoteReview}
                      onCheckedChange={(checked) =>
                        setServices({ ...services, quoteReview: checked as boolean })
                      }
                    />
                    <label htmlFor="quoteReview" className="text-sm cursor-pointer">
                      {t.contact.form.quoteReview}
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="planningSupport"
                      checked={services.planningSupport}
                      onCheckedChange={(checked) =>
                        setServices({ ...services, planningSupport: checked as boolean })
                      }
                    />
                    <label htmlFor="planningSupport" className="text-sm cursor-pointer">
                      {t.contact.form.planningSupport}
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="projectLead"
                      checked={services.projectLead}
                      onCheckedChange={(checked) =>
                        setServices({ ...services, projectLead: checked as boolean })
                      }
                    />
                    <label htmlFor="projectLead" className="text-sm cursor-pointer">
                      {t.contact.form.projectLead}
                    </label>
                  </div>
                </div>
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? t.contact.form.submitting : t.contact.form.submit}
                <Send size={16} />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
