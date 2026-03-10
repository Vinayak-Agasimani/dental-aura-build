import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { ArrowRight, Phone, Calendar } from "lucide-react";
import patientCare from "@/assets/patient-care.jpg";

export default function AppointmentCTA() {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background image */}
          <img
            src={patientCare}
            alt="Professional dental care"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/80 to-foreground/60" />

          {/* Content */}
          <div className="relative z-10 px-8 py-16 sm:px-16 sm:py-24">
            <AnimatedSection className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 border border-primary/30 px-4 py-1.5 mb-6">
                <Calendar className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-body font-medium text-primary tracking-wide">
                  Same-Day Appointments Available
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-light text-primary-foreground mb-6 leading-tight">
                Book Your Dental{" "}
                <span className="font-semibold text-primary">Checkup Today</span>
              </h2>
              <p className="text-primary-foreground/70 font-body leading-relaxed mb-10 max-w-lg">
                Take the first step towards a healthier smile. Our team is ready to
                provide you with personalized, gentle care in our state-of-the-art facility.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:bg-primary/90 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Book Appointment
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="tel:+15551234567"
                  className="inline-flex items-center gap-2 rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 backdrop-blur-sm px-8 py-4 text-sm font-medium text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4" />
                  Call Clinic
                </a>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
