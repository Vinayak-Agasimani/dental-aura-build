import AnimatedSection from "./AnimatedSection";
import { Shield, Heart, Award } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Trust & Safety",
    description: "Every procedure follows the highest standards of sterilization and patient care.",
  },
  {
    icon: Heart,
    title: "Gentle Approach",
    description: "We understand dental anxiety. Our team is trained to make every visit comfortable.",
  },
  {
    icon: Award,
    title: "Clinical Excellence",
    description: "Over 15 years of dedicated practice with continuous education and modern techniques.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="max-w-2xl mx-auto text-center mb-20">
          <p className="text-sm font-body font-medium text-primary tracking-wide uppercase mb-4">
            About Our Clinic
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-light text-foreground mb-6">
            A Space Designed Around{" "}
            <span className="font-normal text-primary">Your Comfort</span>
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed">
            Founded with a simple belief: dental care should feel like wellness, not a procedure.
            Our clinic blends modern technology with a warm, calming environment where families
            feel genuinely at ease.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.15}>
              <div className="text-center group">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-medium text-foreground mb-3">
                  {v.title}
                </h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">
                  {v.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
