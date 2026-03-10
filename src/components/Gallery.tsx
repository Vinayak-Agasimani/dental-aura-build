import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import clinicReception from "@/assets/clinic-reception.jpg";
import treatmentRoom from "@/assets/treatment-room.jpg";
import dentalEquipment from "@/assets/dental-equipment.jpg";
import waitingLounge from "@/assets/waiting-lounge.jpg";
import patientCare from "@/assets/patient-care.jpg";
import sterilizationRoom from "@/assets/sterilization-room.jpg";

const images = [
  { label: "Reception Area", src: clinicReception },
  { label: "Treatment Room", src: treatmentRoom },
  { label: "Modern Equipment", src: dentalEquipment },
  { label: "Patient Lounge", src: waitingLounge },
  { label: "Patient Care", src: patientCare },
  { label: "Sterilization", src: sterilizationRoom },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-body font-medium text-primary tracking-wide uppercase mb-4">
            Gallery
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-light text-foreground mb-4">
            Inside Our{" "}
            <span className="font-semibold text-primary">Clinic</span>
          </h2>
          <p className="text-muted-foreground font-body">
            A glimpse into our modern, state-of-the-art dental facility.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {images.map((img, i) => (
            <AnimatedSection key={img.label} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-shadow duration-500"
              >
                <img
                  src={img.src}
                  alt={`BrightSmile Clinic - ${img.label}`}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                  <span className="text-sm font-body font-medium text-primary-foreground">
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
