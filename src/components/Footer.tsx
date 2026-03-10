import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Doctors", href: "#doctors" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="font-heading text-2xl font-semibold tracking-tight text-background">
              Bright<span className="text-primary">Smile</span>
            </a>
            <p className="text-sm font-body text-background/50 mt-4 leading-relaxed max-w-xs">
              Modern dental care for the whole family. A calm space dedicated to your comfort and health.
            </p>
            <div className="flex gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center text-background/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-heading font-semibold text-background mb-5">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm font-body text-background/40 hover:text-background hover:translate-x-1 transition-all duration-300"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-heading font-semibold text-background mb-5">Contact</h4>
            <div className="space-y-4">
              {[
                { icon: MapPin, text: "123 Wellness Avenue, Suite 200, San Francisco, CA 94102" },
                { icon: Phone, text: "(555) 123-4567" },
                { icon: Mail, text: "hello@brightsmile.com" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <item.icon className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm font-body text-background/40">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-sm font-heading font-semibold text-background mb-5">Working Hours</h4>
            <div className="space-y-3 text-sm font-body text-background/40">
              <div className="flex justify-between">
                <span>Mon – Fri</span>
                <span className="text-background/60">8:00 AM – 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span className="text-background/60">9:00 AM – 3:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span className="text-background/60">Closed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs font-body text-background/30">
            © {new Date().getFullYear()} BrightSmile Dental Clinic. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs font-body text-background/30 hover:text-background/60 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs font-body text-background/30 hover:text-background/60 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
