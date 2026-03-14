import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Phone } from "lucide-react";
import heroFamily from "@/assets/hero-family.jpg";

const ToothModel = lazy(() => import("./ToothModel"));

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background pt-16">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroFamily}
          alt="Happy family at dental clinic"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
      </div>

      {/* Soft gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-[500px] h-[500px] rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-[400px] h-[400px] rounded-full bg-sky-soft/15 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text content */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 mb-6">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
                <span className="text-xs font-body font-medium text-primary tracking-wide uppercase">
                  Now Accepting New Patients
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-light leading-[1.1] text-foreground mb-6 text-balance">
                Healthy Smiles{" "}
                <span className="font-semibold bg-gradient-to-r from-primary to-sky-medium bg-clip-text text-transparent">
                  Start Here
                </span>
              </h1>
              <p className="text-lg font-body text-muted-foreground leading-relaxed mb-10 max-w-md">
                Professional dental care for you and your family.
                A calm, modern space designed around your comfort.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:bg-primary/90 transition-all duration-300 hover:-translate-y-0.5"
              >
                Book Appointment
              </a>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center gap-2 justify-center rounded-xl border border-border bg-card/80 backdrop-blur-sm px-8 py-4 text-sm font-medium text-foreground shadow-sm hover:bg-card hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex items-center gap-6 mt-12 pt-8 border-t border-border/50"
            >
              {[
                { value: "15+", label: "Years Experience" },
                { value: "10K+", label: "Happy Patients" },
                { value: "98%", label: "Satisfaction Rate" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-xl font-heading font-semibold text-foreground">{stat.value}</p>
                  <p className="text-xs font-body text-muted-foreground mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* 3D Tooth */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="h-[350px] sm:h-[450px] lg:h-[500px] hidden lg:block"
          >
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-secondary animate-pulse-soft" />
                </div>
              }
            >
              <ToothModel />
            </Suspense>
          </motion.div> */}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-5 h-5 text-muted-foreground animate-scroll-hint" />
      </motion.div>
    </section>
  );
}
