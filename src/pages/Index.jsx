
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import TechStack from '@/components/TechStack';
import { Code, ArrowRight, Globe, Settings, Rocket } from 'lucide-react';
import { Card, CardDescription, CardContent } from '@/components/ui/card';
import profileImg from '../assets/image/homeImg.jpg'; // adjust path based on your file

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center pt-16 code-bg">
        <div className="container-custom flex flex-col md:flex-row items-center gap-12 animate-fade-in">
          <div className="flex-1 space-y-6">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary inline-block text-sm font-medium">
              Full-Stack Developer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              I build apps that <br />
              <span className="text-gradient">solve real problems</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Freelance software and web developer specializing in creating beautiful,
              functional applications that drive business growth and enhance user experience.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg">
                <Link to="/contact">
                  Hire Me
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/portfolio">
                  View My Work <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
              <img
                src={profileImg}
                alt="Developer"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500 ease-in-out"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Tech Stack Section */}
      <TechStack />

      {/* Services Preview Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">My Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I provide end-to-end development services to help businesses thrive in the digital world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-in">
            <Card className="card-hover">
              <CardContent className="pt-6">
                <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                  <Globe className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                <CardDescription>
                  Modern, responsive web applications built with React, Next.js, and other cutting-edge technologies.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="pt-6">
                <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                  <Rocket className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Mobile App Development</h3>
                <CardDescription>
                  Native Android applications using Kotlin, and cross-platform solutions with React Native.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="pt-6">
                <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                  <Code className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">API Development</h3>
                <CardDescription>
                  Robust and scalable backend APIs built with ASP.NET Core, Entity Framework, and modern Microsoft technologies.                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline">
              <Link to="/services">
                View All Services <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to bring your ideas to life?</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Let's collaborate to create something exceptional that solves real problems and delivers value.
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link to="/contact">
              Let's Work Together
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
