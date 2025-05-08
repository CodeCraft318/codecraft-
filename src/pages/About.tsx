
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
                  Hi, I'm <span className="font-semibold">David Chen</span>, a passionate freelance developer with over 5 years of experience building web and mobile applications.
                </p>
                <p>
                  I specialize in creating modern, responsive, and user-friendly applications using the latest technologies. My approach combines technical expertise with a deep understanding of user experience design.
                </p>
                <p>
                  When I'm not coding, I enjoy hiking, reading tech blogs, and contributing to open-source projects. I believe in continuous learning and staying updated with the latest trends in technology.
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
      
      {/* Skills Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-10 text-center">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="bg-card rounded-lg p-6 shadow">
                <h3 className="text-xl font-semibold mb-4">Education & Experience</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4 py-1">
                    <div className="text-sm text-muted-foreground">2018 - Present</div>
                    <div className="font-medium">Freelance Developer</div>
                    <div className="text-sm">Building web and mobile applications for clients worldwide</div>
                  </div>
                  <div className="border-l-2 border-primary pl-4 py-1">
                    <div className="text-sm text-muted-foreground">2016 - 2018</div>
                    <div className="font-medium">Senior Developer at TechCorp</div>
                    <div className="text-sm">Led development of various web applications</div>
                  </div>
                  <div className="border-l-2 border-primary pl-4 py-1">
                    <div className="text-sm text-muted-foreground">2014 - 2016</div>
                    <div className="font-medium">BSc in Computer Science</div>
                    <div className="text-sm">University of Technology</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Tools Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-10 text-center">Tools & Technologies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="flex flex-col items-center p-4 rounded-lg hover:bg-card transition-colors"
              >
                <div className="w-16 h-16 mb-3 flex items-center justify-center">
                  <img 
                    src={tool.icon} 
                    alt={tool.name}
                    className="max-w-full max-h-full"
                  />
                </div>
                <span className="font-medium">{tool.name}</span>
              </div>
            ))}
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
