
import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import evcharg from '../assets/image/Evcharg.png';
import foof from '../assets/image/food.png';
import travel from '../assets/image/Travel.png';
import travelCompanion from '../assets/image/travel.jpeg';

import gemini from '../assets/image/gemini.jpeg';
import littleLemon from '../assets/image/littleLemon.jpeg';
const Portfolio = () => {
  // Project data
  const projects = [
    {
      title: "EV Charging Station Finder App",
      description: "The EV Charging Station Finder App is designed to be the ultimate solution for locating nearby EV charging stations effortlessly.",
      image: evcharg,
      technologies: ["React", "Google Maps API",],
      githubUrl: "https://github.com/OmkarKalvitkar/EV-Charging-Station-Finder-App",
      liveUrl: "https://example.com"
    },
    {
      title: "TravelCompanion App",
      description: "TravelCompanion is a mobile application built using Jetpack Compose. It integrates Firebase Authentication for secure user management and allows users to select travel destinations using Google Maps.",
      image: travelCompanion,
      technologies: ["Kotlin", "Firebase", "Google Maps API"],
      githubUrl: "https://github.com/NoobCoderraj/TravelCompanion",
      liveUrl: "https://example.com"
    },
    {
      title: "Health & Fitness Tracker",
      description: "A comprehensive fitness tracking application with workout plans, nutrition tracking, and progress analytics.",
      image: travel,
      technologies: ["React Native"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Google Gemini Clone",
      description: "This project replicates the UI and functionality of the real Google Gemini search interface using React JS.",
      image: gemini,
      technologies: ["React Native"],
      githubUrl: "https://github.com/NoobCoderraj/Google-Gemini",
      liveUrl: "https://example.com"
    },

    {
      title: "Little Lemon",
      description: "This app is developed using React Native and Firebase Authentication, providing a seamless experience for ordering a variety of delicious Indian foods.",
      image: littleLemon,
      technologies: ["React Native"],
      githubUrl: "https://github.com/NoobCoderraj/LittleLemon",
      liveUrl: "https://example.com"
    },

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
      {/* <section className="section-padding bg-card">
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
      </section> */}
    </div>
  );
};

export default Portfolio;
