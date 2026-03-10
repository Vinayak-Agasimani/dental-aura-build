import AnimatedSection from "./AnimatedSection";
import { Shield, Heart, Award } from "lucide-react";
import clinicReception from "@/assets/clinic-reception.jpg";

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
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image */}
          <AnimatedSection>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/10">
                <img
                  src={clinicReception}
                  alt="BrightSmile dental clinic modern reception area"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-card rounded-2xl shadow-xl border border-border/50 p-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-heading font-semibold text-foreground">15+</p>
                    <p className="text-xs font-body text-muted-foreground">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Text content */}
          <AnimatedSection delay={0.2}>
            <p className="text-sm font-body font-medium text-primary tracking-wide uppercase mb-4">
              About Our Clinic
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-light text-foreground mb-6">
              A Space Designed Around{" "}
              <span className="font-semibold text-primary">Your Comfort</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Founded with a simple belief: dental care should feel like wellness, not a procedure.
              Our clinic blends modern technology with a warm, calming environment where families
              feel genuinely at ease.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              We invest in the latest equipment and ongoing training to deliver exceptional results
              with the gentlest touch. Every detail — from our serene waiting lounge to our
              state-of-the-art treatment rooms — is designed with your comfort in mind.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "10,000+", label: "Patients Treated" },
                { value: "15,000+", label: "Procedures" },
                { value: "4.9★", label: "Patient Rating" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-secondary/50">
                  <p className="text-lg font-heading font-semibold text-foreground">{stat.value}</p>
                  <p className="text-xs font-body text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.15}>
              <div className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300">
                  <v.icon className="w-7 h-7 text-primary" />
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
