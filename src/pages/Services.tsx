
import React from 'react';
import ServiceCard from '@/components/ServiceCard';
import { Code, Globe, Rocket, Settings, Smartphone, Database, Cloud, Palette } from 'lucide-react';

const Services = () => {
  // Services data
  const services = [
    {
      title: "Web Application Development",
      description: "Custom web applications built with React, Next.js, and other modern frameworks. Responsive designs, interactive UIs, and optimized performance.",
      icon: Globe,
      pricing: "$3,000+"
    },
    {
      title: "Mobile App Development",
      description: "Native Android applications using Kotlin. From concept to deployment, ensuring a seamless user experience across devices.",
      icon: Smartphone,
      pricing: "$4,000+"
    },
    {
      title: "API Development & Integration",
      description: "RESTful and GraphQL APIs built with Node.js, Express, and more. Seamlessly connect your applications with third-party services.",
      icon: Code,
      pricing: "$2,000+"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design focusing on creating intuitive, accessible, and visually appealing interfaces that enhance user engagement.",
      icon: Palette,
      pricing: "$1,500+"
    },
    {
      title: "Database Design & Management",
      description: "Efficient database architecture using MongoDB, PostgreSQL, Firebase, and more. Data modeling, optimization, and management.",
      icon: Database,
      pricing: "$1,800+"
    },
    {
      title: "Cloud Solutions",
      description: "Deployment and management of applications on AWS, Google Cloud, or Azure. Scalable, secure, and cost-effective solutions.",
      icon: Cloud,
      pricing: "$2,500+"
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing maintenance, updates, and technical support for existing applications. Keep your software running smoothly.",
      icon: Settings,
      pricing: "$800+/month"
    },
    {
      title: "Performance Optimization",
      description: "Identify and resolve performance bottlenecks in your applications. Improve load times, responsiveness, and user experience.",
      icon: Rocket,
      pricing: "$1,200+"
    }
  ];
  
  return (
    <div className="min-h-screen pt-20">
      {/* Services Header */}
      <section className="bg-card py-16">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">My Services</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I offer a comprehensive range of development services to help businesses establish a strong digital presence.
          </p>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                pricing={service.pricing}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-10 text-center">My Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Discovery</h3>
              <p className="text-muted-foreground">
                Understanding your requirements, goals, and business needs.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Planning</h3>
              <p className="text-muted-foreground">
                Designing architecture, selecting technologies, and creating a roadmap.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-muted-foreground">
                Building your solution with regular updates and transparent communication.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold text-primary">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Delivery</h3>
              <p className="text-muted-foreground">
                Deploying, testing, and handing over a complete solution.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">How long does it take to build a web application?</h3>
              <p className="text-muted-foreground">
                The timeline depends on the complexity and scope of the project. A simple website might take 2-3 weeks, while a complex web application could take 2-3 months or more.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Do you provide ongoing support?</h3>
              <p className="text-muted-foreground">
                Yes, I offer maintenance and support packages to ensure your application continues to run smoothly after launch.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">What technologies do you work with?</h3>
              <p className="text-muted-foreground">
                I specialize in modern JavaScript frameworks like React and Next.js, Node.js for backend, Kotlin for Android, and various database solutions.
              </p>
            </div>
            <div className="bg-card rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">How do payments work?</h3>
              <p className="text-muted-foreground">
                I typically work with a 50% upfront deposit and the remaining 50% upon completion for small projects. For larger projects, I offer milestone-based payment schedules.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
