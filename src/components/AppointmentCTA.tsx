import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { ArrowRight, Phone } from "lucide-react";

export default function AppointmentCTA() {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-secondary/30 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-light text-foreground mb-6 leading-tight">
            Book Your Dental{" "}
            <span className="font-normal text-primary">Checkup Today</span>
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-10 max-w-lg mx-auto">
            Take the first step towards a healthier smile. Our team is ready to
            provide you with personalized, gentle care.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:bg-primary/90 transition-all duration-300"
            >
              Book Appointment
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-8 py-4 text-sm font-medium text-foreground shadow-sm hover:bg-muted transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Call Clinic
            </a>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
