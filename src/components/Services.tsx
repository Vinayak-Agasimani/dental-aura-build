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
    <section id="services" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-secondary/20 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <AnimatedSection className="max-w-2xl mx-auto text-center mb-20">
          <p className="text-sm font-body font-medium text-primary tracking-wide uppercase mb-4">
            Our Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-light text-foreground mb-6">
            Comprehensive{" "}
            <span className="font-semibold text-primary">Dental Care</span>
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
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, delay: 0.05 }}
                className="group bg-card rounded-2xl p-8 border border-border/50 shadow-sm hover:shadow-xl hover:shadow-primary/8 hover:border-primary/20 transition-all duration-500 relative overflow-hidden"
              >
                {/* Subtle gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary flex items-center justify-center mb-6 group-hover:shadow-md group-hover:shadow-primary/10 transition-all duration-300">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-base font-heading font-semibold text-foreground mb-3">
                    {s.title}
                  </h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
