
import React from 'react';
import TestimonialCard from '@/components/TestimonialCard';

const Testimonials = () => {
  // Testimonial data
  const testimonials = [
    {
      quote: "Working with this developer was a game-changer for our business. The web application delivered exceeded our expectations in terms of functionality and design.",
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc.",
      linkedInUrl: "https://linkedin.com",
      avatarUrl: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      quote: "I was impressed by the attention to detail and problem-solving skills. Our mobile app was delivered on time and our users love the intuitive interface.",
      name: "Michael Brown",
      role: "Product Manager",
      company: "InnovateCo",
      linkedInUrl: "https://linkedin.com",
      avatarUrl: "https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
      quote: "The e-commerce platform developed for us has significantly increased our conversion rates. The code is clean, well-documented, and easy to maintain.",
      name: "Emily Chen",
      role: "E-commerce Director",
      company: "FashionRetail",
      linkedInUrl: "https://linkedin.com",
      avatarUrl: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      quote: "Our API integration project was complex, but it was handled with great expertise. Communication was clear throughout the process.",
      name: "David Wilson",
      role: "CTO",
      company: "DataSync",
      linkedInUrl: "https://linkedin.com",
      avatarUrl: "https://randomuser.me/api/portraits/men/22.jpg"
    },
    {
      quote: "The redesign of our app's user interface led to a 40% increase in user engagement. I highly recommend this developer for UI/UX projects.",
      name: "Jessica Martinez",
      role: "Marketing Director",
      company: "AppLaunch",
      linkedInUrl: "https://linkedin.com",
      avatarUrl: "https://randomuser.me/api/portraits/women/17.jpg"
    },
    {
      quote: "We've worked together on multiple projects, and each one has been delivered with the same high quality and professionalism.",
      name: "Robert Taylor",
      role: "Project Manager",
      company: "TechSolutions",
      linkedInUrl: "https://linkedin.com",
      avatarUrl: "https://randomuser.me/api/portraits/men/52.jpg"
    }
  ];
  
  return (
    <div className="min-h-screen pt-20">
      {/* Testimonials Header */}
      <section className="bg-card py-16">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about working with me.
          </p>
        </div>
      </section>
      
      {/* Testimonials Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                linkedInUrl={testimonial.linkedInUrl}
                avatarUrl={testimonial.avatarUrl}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold mb-2 text-primary">25+</div>
              <div className="text-lg font-medium">Completed Projects</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold mb-2 text-primary">15+</div>
              <div className="text-lg font-medium">Happy Clients</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold mb-2 text-primary">5+</div>
              <div className="text-lg font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to join my growing list of satisfied clients?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Let's work together to bring your project ideas to life with the same quality and dedication.
          </p>
          <a 
            href="/contact" 
            className="px-6 py-3 rounded-md bg-white text-primary font-medium hover:bg-white/90 transition-colors"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
