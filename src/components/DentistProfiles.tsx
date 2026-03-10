import { useRef } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { ChevronLeft, ChevronRight } from "lucide-react";

const doctors = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Lead Dentist & Founder",
    quals: "DDS, MS Prosthodontics",
    experience: "15+ years",
    intro: "Passionate about restorative dentistry and building long-term patient relationships grounded in trust.",
    color: "from-primary/10 to-secondary",
  },
  {
    name: "Dr. James Chen",
    role: "Orthodontist",
    quals: "DMD, Cert. Orthodontics",
    experience: "12 years",
    intro: "Specializing in modern alignment techniques, Dr. Chen makes the path to a perfect smile comfortable and clear.",
    color: "from-secondary to-sky-soft",
  },
  {
    name: "Dr. Amara Osei",
    role: "Pediatric Dentist",
    quals: "BDS, MPH Pediatric Dent.",
    experience: "10 years",
    intro: "Dedicated to making dental visits fun for kids, building healthy habits that last a lifetime.",
    color: "from-sky-soft to-secondary",
  },
];

export default function DentistProfiles() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const amount = dir === "left" ? -400 : 400;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section id="doctors" className="py-24 lg:py-32 bg-card overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="flex items-end justify-between mb-16">
          <div className="max-w-lg">
            <p className="text-sm font-body font-medium text-primary tracking-wide uppercase mb-4">
              Our Doctors
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-light text-foreground">
              Meet the{" "}
              <span className="font-normal text-primary">Team</span>
            </h2>
          </div>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </AnimatedSection>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4 lg:px-[max(2rem,calc((100vw-1400px)/2+2rem))]"
        style={{ scrollbarWidth: "none" }}
      >
        {doctors.map((doc, i) => (
          <motion.div
            key={doc.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="snap-start shrink-0 w-[340px] sm:w-[400px]"
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="bg-background rounded-2xl border border-border/50 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className={`h-48 bg-gradient-to-br ${doc.color} flex items-center justify-center`}>
                <div className="w-24 h-24 rounded-full bg-card/80 flex items-center justify-center font-heading text-2xl font-light text-foreground">
                  {doc.name.split(" ").map(n => n[0]).join("")}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-lg font-heading font-medium text-foreground mb-1">
                  {doc.name}
                </h3>
                <p className="text-sm font-body text-primary mb-4">{doc.role}</p>
                <div className="flex items-center gap-4 text-xs font-body text-muted-foreground mb-4">
                  <span>{doc.quals}</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span>{doc.experience}</span>
                </div>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">
                  {doc.intro}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
