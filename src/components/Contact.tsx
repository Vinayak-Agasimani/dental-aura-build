"use client";

import { useEffect } from "react";
import AnimatedSection from "./AnimatedSection";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

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
                  content: "XYZ",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  content: "124-456-7890",
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: "hello@brightsmile.com",
                },
                {
                  icon: Clock,
                  title: "Working Hours",
                  content:
                    "Mon – Fri: 8:00 AM – 6:00 PM\nSaturday: 9:00 AM – 3:00 PM\nSunday: Closed",
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
                    <h4 className="text-sm font-heading font-semibold text-foreground mb-1">
                      {item.title}
                    </h4>

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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122797.54575368523!2d74.3920523972656!3d15.886879200000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf61bcaf406483%3A0xfeddaf7a42e3274a!2sTHE%20DENTIST!5e0!3m2!1sen!2sin!4v1773431481540!5m2!1sen!2sin"
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


          {/* Calendly Booking Card */}
          <AnimatedSection delay={0.2}>
            <div className="bg-background rounded-3xl border border-border/50 shadow-sm p-8">

              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                Book an Appointment
              </h3>

              <p className="text-sm font-body text-muted-foreground mb-6">
                Schedule your visit instantly using the calendar below.
              </p>

              <div className="rounded-2xl overflow-hidden border border-border/40">
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/vintechlabs04/30min"
                  style={{
                    width: "100%",
                    height: "620px",
                  }}
                />
              </div>

            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}