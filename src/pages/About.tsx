
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Download, Code, Globe, Rocket, Settings } from 'lucide-react';

const About = () => {
  // Skills data
  const skills = [
    { name: "Frontend Development", level: 90 },
    { name: "Backend Development", level: 85 },
    { name: "Mobile Development", level: 80 },
    { name: "UI/UX Design", level: 75 },
    { name: "DevOps", level: 70 },
  ];

  // Tools data
  const tools = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* About Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Developer portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold">
                About Me
              </h1>
              <div className="space-y-4">
                <p className="text-lg">
                  We are <span className="font-semibold">CodeCraft</span>, a dedicated team of developers specializing in building high-quality mobile applications, robust backend systems, and modern web solutions.
                </p>
                <p>
                  Our expertise lies in delivering scalable, user-centric applications using the latest technologies and industry best practices. We combine strong technical skills with thoughtful design to create seamless digital experiences.
                </p>
                <p>
                  At CodeCraft, we are passionate about innovation, collaboration, and continuous improvement. We stay ahead of the curve to ensure the solutions we build are both future-ready and impactful.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <Button asChild>
                  <Link to="/contact">Get In Touch</Link>
                </Button>
                <Button asChild variant="outline">
                  <a href="#" download>
                    <Download size={16} className="mr-2" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>



      
      {/* Meet Our Developers Section */}
<section className="section-padding bg-card">
  <div className="container-custom">
    <h2 className="text-3xl font-bold mb-10 text-center">Meet Our Developers</h2>

    <div className="flex flex-col gap-12">

      {/* Raj - Frontend Developer */}
      <div className="bg-background p-6 rounded-lg shadow">
        <p className="text-lg font-semibold text-primary mb-1">Frontend Developer</p>
        <h3 className="text-2xl font-bold mb-4">Raj Chauhan</h3>
        <div className="space-y-4">
          {[
            { name: "HTML & CSS", level: 95 },
            { name: "Android", level: 95 },
            { name: "JavaScript", level: 90 },
            { name: "React Native", level: 85 },
            { name: "React.js", level: 85 },
            { name: "UI Design", level: 80 },
          ].map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between text-sm mb-1">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-muted h-2 rounded-full">
                <div className="h-full bg-primary rounded-full" style={{ width: `${skill.level}%` }} />
              </div>
            </div>
          ))}
        </div>

        <h4 className="text-xl font-semibold mt-6 mb-2">Education & Experience</h4>
        <ul className="space-y-2 text-sm">
          <li><strong>2025–Present:</strong> Freelance Frontend Developer — Responsive websites</li>
          <li><strong>2024–Present:</strong> React Native Developer at UB IT Solution</li>
          <li><strong>2020–2024:</strong> BE in Computer Engineering</li>
        </ul>
      </div>

      {/* Omkar - Backend Developer */}
      <div className="bg-background p-6 rounded-lg shadow">
        <p className="text-lg font-semibold text-primary mb-1">Backend Developer</p>
        <h3 className="text-2xl font-bold mb-4">Omkar Kalvitkar</h3>
        <div className="space-y-4">
          {[
            { name: "Kotlin", level: 90 },
            { name: ".NET Core", level: 85 },
            { name: "SQL Server", level: 85 },
            { name: "Database Management", level: 85 },
            { name: "API Design", level: 80 },
          ].map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between text-sm mb-1">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-muted h-2 rounded-full">
                <div className="h-full bg-primary rounded-full" style={{ width: `${skill.level}%` }} />
              </div>
            </div>
          ))}
        </div>

        <h4 className="text-xl font-semibold mt-6 mb-2">Education & Experience</h4>
        <ul className="space-y-2 text-sm">
          <li><strong>2025–Present:</strong> Freelance Backend Developer — Server-side apps</li>
          <li><strong>2024:</strong> Software Developer at SmartIdentification</li>
          <li><strong>2020–2024:</strong> BE in Computer Engineering</li>
        </ul>
      </div>

    </div>
  </div>
</section>




      
      {/* Approach Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-10 text-center">My Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                <Code className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
              <p className="text-muted-foreground">
                I write maintainable, well-documented, and efficient code that follows best practices.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                <Globe className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">User-Centric</h3>
              <p className="text-muted-foreground">
                I prioritize user experience, ensuring applications are intuitive and accessible.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm">
              <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
                <Rocket className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Performance</h3>
              <p className="text-muted-foreground">
                I optimize applications for speed, efficiency, and scalability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
