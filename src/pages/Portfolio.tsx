
import React from 'react';
import ProjectCard from '@/components/ProjectCard';

const Portfolio = () => {
  // Project data
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with product management, shopping cart, and payment processing.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Travel Booking App",
      description: "A mobile application for booking flights, hotels, and activities in one place.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      technologies: ["Kotlin", "Firebase", "Google Maps API"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Health & Fitness Tracker",
      description: "A comprehensive fitness tracking application with workout plans, nutrition tracking, and progress analytics.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      technologies: ["React Native", "GraphQL", "AWS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Real Estate Listing Platform",
      description: "A property listing website with advanced search, virtual tours, and agent contact features.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      technologies: ["Next.js", "Tailwind CSS", "Postgres", "MapBox"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Task Management System",
      description: "A collaboration tool for teams with task assignment, progress tracking, and deadline management.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
      technologies: ["React", "Redux", "Express", "MongoDB"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Educational Platform",
      description: "An online learning platform with course management, video lectures, and progress tracking.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      technologies: ["Vue.js", "Firebase", "Cloudinary"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    }
  ];
  
  return (
    <div className="min-h-screen pt-20">
      {/* Portfolio Header */}
      <section className="bg-card py-16">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">My Work</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my projects and the technologies I've worked with.
          </p>
        </div>
      </section>
      
      {/* Portfolio Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Technologies Section */}
      <section className="section-padding bg-card">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Technologies I Work With</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-background px-4 py-3 rounded-full shadow-sm">React</div>
            <div className="bg-background px-4 py-3 rounded-full shadow-sm">Next.js</div>
            <div className="bg-background px-4 py-3 rounded-full shadow-sm">TypeScript</div>
            <div className="bg-background px-4 py-3 rounded-full shadow-sm">Node.js</div>
            <div className="bg-background px-4 py-3 rounded-full shadow-sm">Express</div>
            <div className="bg-background px-4 py-3 rounded-full shadow-sm">Kotlin</div>
            <div className="bg-background px-4 py-3 rounded-full shadow-sm">React Native</div>
            <div className="bg-background px-4 py-3 rounded-full shadow-sm">MongoDB</div>
            <div className="bg-background px-4 py-3 rounded-full shadow-sm">PostgreSQL</div>
            <div className="bg-background px-4 py-3 rounded-full shadow-sm">Firebase</div>
            <div className="bg-background px-4 py-3 rounded-full shadow-sm">GraphQL</div>
            <div className="bg-background px-4 py-3 rounded-full shadow-sm">Tailwind CSS</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
