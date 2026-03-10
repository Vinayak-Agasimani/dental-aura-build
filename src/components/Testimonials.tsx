import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Emily Thompson",
    text: "I've always been nervous about the dentist, but BrightSmile changed that completely. The team is incredibly gentle and the environment feels more like a spa than a clinic.",
    rating: 5,
  },
  {
    name: "Marcus Rivera",
    text: "Dr. Chen did an amazing job with my braces. The whole process was smooth, and the results exceeded my expectations. Truly world-class orthodontic care.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    text: "My kids actually look forward to their dental visits now! Dr. Osei has a wonderful way with children. The clinic is clean, modern, and welcoming.",
    rating: 5,
  },
  {
    name: "David & Laura Kim",
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
    <section id="testimonials" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-body font-medium text-primary tracking-wide uppercase mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-light text-foreground">
            What Our Patients{" "}
            <span className="font-normal text-primary">Say</span>
          </h2>
        </AnimatedSection>

        <div className="max-w-2xl mx-auto">
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
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-lg sm:text-xl font-heading font-light text-foreground leading-relaxed mb-8">
                "{t.text}"
              </blockquote>
              <p className="text-sm font-body font-medium text-foreground">
                {t.name}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-primary w-6" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors duration-300"
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
