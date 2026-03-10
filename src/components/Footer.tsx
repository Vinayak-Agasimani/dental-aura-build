const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Doctors", href: "#doctors" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="font-heading text-xl font-semibold tracking-tight text-background">
              Bright<span className="text-primary">Smile</span>
            </a>
            <p className="text-sm font-body text-background/60 mt-4 leading-relaxed max-w-xs">
              Modern dental care for the whole family. A calm space dedicated to your comfort and health.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-heading font-medium text-background mb-4">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm font-body text-background/50 hover:text-background transition-colors duration-300"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-heading font-medium text-background mb-4">Contact</h4>
            <div className="space-y-3 text-sm font-body text-background/50">
              <p>123 Wellness Avenue, Suite 200</p>
              <p>San Francisco, CA 94102</p>
              <p>(555) 123-4567</p>
              <p>hello@brightsmile.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8">
          <p className="text-xs font-body text-background/40 text-center">
            © {new Date().getFullYear()} BrightSmile Dental Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
