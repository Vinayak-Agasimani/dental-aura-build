import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import DentistProfiles from "@/components/DentistProfiles";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import AppointmentCTA from "@/components/AppointmentCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <DentistProfiles />
      <Testimonials />
      <Gallery />
      <AppointmentCTA />
      <Contact />
      <Footer />
    </div>
  );
}
