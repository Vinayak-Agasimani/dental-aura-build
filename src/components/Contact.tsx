import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

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
          <h2 className="text-3xl sm:text-4xl font-heading font-light text-foreground mb-4">
            Get in{" "}
            <span className="font-semibold text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground font-body">
            Ready to schedule your visit? Reach out and our team will get back to you promptly.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Contact info */}
          <AnimatedSection>
            <div className="space-y-6">
              {[
                {
                  icon: MapPin,
                  title: "Address",
                  content: "123 Wellness Avenue, Suite 200\nSan Francisco, CA 94102",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  content: "(555) 123-4567",
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: "hello@brightsmile.com",
                },
                {
                  icon: Clock,
                  title: "Working Hours",
                  content: "Mon – Fri: 8:00 AM – 6:00 PM\nSaturday: 9:00 AM – 3:00 PM\nSunday: Closed",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-background transition-colors duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/10 to-secondary flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-heading font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm font-body text-muted-foreground whitespace-pre-line">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-border/50 shadow-sm mt-4">
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
            <div className="bg-background rounded-3xl border border-border/50 shadow-sm p-8">
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                Send Us a Message
              </h3>
              <p className="text-sm font-body text-muted-foreground mb-8">
                Fill out the form below and we'll respond within 24 hours.
              </p>
              <form onSubmit={handleSubmit} className="space-y-5">
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
                    className="w-full rounded-xl border border-border bg-card px-4 py-3.5 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
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
                    className="w-full rounded-xl border border-border bg-card px-4 py-3.5 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                    placeholder="(555) 000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-body font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-border bg-card px-4 py-3.5 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                {submitted ? (
                  <div className="rounded-xl bg-accent/10 border border-accent/20 px-5 py-4 text-sm font-body text-accent flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    Thank you! We'll be in touch soon.
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:bg-primary/90 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                )}
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
