import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <AnimatedSection className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-body font-medium text-primary tracking-wide uppercase mb-4">
            Contact Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-light text-foreground">
            Get in{" "}
            <span className="font-normal text-primary">Touch</span>
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Contact info */}
          <AnimatedSection>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-heading font-medium text-foreground mb-1">Address</h4>
                  <p className="text-sm font-body text-muted-foreground">
                    123 Wellness Avenue, Suite 200<br />San Francisco, CA 94102
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-heading font-medium text-foreground mb-1">Phone</h4>
                  <p className="text-sm font-body text-muted-foreground">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-heading font-medium text-foreground mb-1">Email</h4>
                  <p className="text-sm font-body text-muted-foreground">hello@brightsmile.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-heading font-medium text-foreground mb-1">Working Hours</h4>
                  <p className="text-sm font-body text-muted-foreground">
                    Mon – Fri: 8:00 AM – 6:00 PM<br />
                    Saturday: 9:00 AM – 3:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-border/50 mt-8">
                <iframe
                  title="Clinic Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019574157691!2d-122.41941868468117!3d37.77492977975892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d3a3f0e7%3A0x3223e26f6e50dceb!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-body font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-body font-medium text-foreground mb-2">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                  placeholder="(555) 000-0000"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-body font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              {submitted ? (
                <div className="rounded-xl bg-accent/10 border border-accent/20 px-4 py-3 text-sm font-body text-accent">
                  Thank you! We'll be in touch soon.
                </div>
              ) : (
                <button
                  type="submit"
                  className="w-full rounded-xl bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:bg-primary/90 transition-all duration-300"
                >
                  Send Message
                </button>
              )}
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
