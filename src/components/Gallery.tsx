import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const images = [
  { label: "Reception Area", color: "from-secondary to-sky-soft" },
  { label: "Treatment Room", color: "from-sky-soft to-primary/20" },
  { label: "Modern Equipment", color: "from-primary/10 to-secondary" },
  { label: "Patient Lounge", color: "from-secondary to-primary/10" },
  { label: "Consultation", color: "from-sky-soft to-secondary" },
  { label: "Sterilization", color: "from-primary/20 to-sky-soft" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-body font-medium text-primary tracking-wide uppercase mb-4">
            Gallery
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-light text-foreground">
            Inside Our{" "}
            <span className="font-normal text-primary">Clinic</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {images.map((img, i) => (
            <AnimatedSection key={img.label} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3, delay: 0.05 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${img.color}`} />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs font-body font-medium text-foreground/70 bg-card/80 px-3 py-1.5 rounded-full">
                    {img.label}
                  </span>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
