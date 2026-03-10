import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import {
  Sparkles,
  CircleDot,
  SmilePlus,
  Stethoscope,
  Sun,
  Baby,
} from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Teeth Cleaning",
    description: "Professional cleaning to remove plaque and tartar, keeping your smile bright and healthy.",
  },
  {
    icon: CircleDot,
    title: "Dental Implants",
    description: "Permanent, natural-looking replacements for missing teeth with the latest implant technology.",
  },
  {
    icon: SmilePlus,
    title: "Braces",
    description: "Modern orthodontic solutions including clear aligners for a straighter, confident smile.",
  },
  {
    icon: Stethoscope,
    title: "Root Canal",
    description: "Gentle root canal therapy to save damaged teeth and eliminate pain with minimal discomfort.",
  },
  {
    icon: Sun,
    title: "Teeth Whitening",
    description: "Safe, effective whitening treatments to restore your smile's natural radiance.",
  },
  {
    icon: Baby,
    title: "Kids Dentistry",
    description: "Fun, friendly dental visits designed to build healthy habits from an early age.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="max-w-2xl mx-auto text-center mb-20">
          <p className="text-sm font-body font-medium text-primary tracking-wide uppercase mb-4">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-light text-foreground mb-6">
            Comprehensive{" "}
            <span className="font-normal text-primary">Dental Care</span>
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed">
            From preventive check-ups to advanced treatments, we offer a full spectrum
            of dental services for every member of your family.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, delay: 0.05 }}
                className="group bg-card rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-heading font-medium text-foreground mb-3">
                  {s.title}
                </h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">
                  {s.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
