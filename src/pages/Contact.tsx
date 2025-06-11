import React from "react";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Contact Header */}
      <section className="bg-card py-16">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear
            from you!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-card">
                  <div className="bg-primary/10 p-3 rounded-md">
                    <Mail className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      codecraft318@gmail.com
                    </p>
                    <Button
                      variant="link"
                      className="p-0 h-auto mt-1 text-primary"
                      asChild
                    >
                      <a href="mailto:hello@devportfolio.com">
                        Send an email <Send size={14} className="ml-1" />
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-card">
                  <div className="bg-primary/10 p-3 rounded-md">
                    <Phone className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-muted-foreground">+91 8424955003</p>
                    <Button
                      variant="link"
                      className="p-0 h-auto mt-1 text-primary"
                      asChild
                    >
                      <a href="https://wa.me/8424955003">
                        WhatsApp me <Send size={14} className="ml-1" />
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-card">
                  <div className="bg-primary/10 p-3 rounded-md">
                    <MapPin className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Mumbai, Kalyan(East)
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Available for remote work worldwide
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Monday - Friday
                    </span>
                    <span>9:00 AM - 6:00 PM </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span>By appointment</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section
      <section className="h-64 md:h-96">
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098455!2d-122.50764017532033!3d37.75781499602537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1652813756195!5m2!1sen!2sus"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section> */}
    </div>
  );
};

export default Contact;
