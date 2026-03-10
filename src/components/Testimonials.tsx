import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Emily Thompson",
    role: "Patient since 2020",
    text: "I've always been nervous about the dentist, but BrightSmile changed that completely. The team is incredibly gentle and the environment feels more like a spa than a clinic.",
    rating: 5,
  },
  {
    name: "Marcus Rivera",
    role: "Orthodontic Patient",
    text: "Dr. Chen did an amazing job with my braces. The whole process was smooth, and the results exceeded my expectations. Truly world-class orthodontic care.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Family Patient",
    text: "My kids actually look forward to their dental visits now! Dr. Osei has a wonderful way with children. The clinic is clean, modern, and welcoming.",
    rating: 5,
  },
  {
    name: "David & Laura Kim",
    role: "Patients since 2022",
    text: "We've been coming here as a family for three years. The consistency of care and attention to detail is remarkable. Highly recommend for anyone looking for a family dentist.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-secondary/20 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <AnimatedSection className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-body font-medium text-primary tracking-wide uppercase mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-light text-foreground">
            What Our Patients{" "}
            <span className="font-semibold text-primary">Say</span>
          </h2>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-3xl border border-border/50 shadow-lg p-8 sm:p-12 relative">
            {/* Quote icon */}
            <div className="absolute top-6 right-8 opacity-10">
              <Quote className="w-16 h-16 text-primary" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="flex justify-center gap-1 mb-8">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-lg sm:text-xl font-heading font-light text-foreground leading-relaxed mb-8">
                  "{t.text}"
                </blockquote>
                <div>
                  <p className="text-base font-heading font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-sm font-body text-muted-foreground mt-1">
                    {t.role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 hover:shadow-md transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-primary w-8" : "bg-border w-2 hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 hover:shadow-md transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
