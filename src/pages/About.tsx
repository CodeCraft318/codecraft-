import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Download, Code, Globe, Rocket, Settings } from 'lucide-react';
import AboutmeImg from '../assets/image/about.jpg';

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
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
  
            {/* Image */}
            <div className="max-w-md w-full">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={AboutmeImg}
                  alt="aboutme"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500 ease-in-out"
                />
              </div>
            </div>
  
            {/* Text Block (Fully Center-Aligned) */}
            <div className="max-w-xl w-full space-y-6 text-center">
              <h1 className="text-3xl md:text-4xl font-bold">About Us</h1>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  We are <span className="text-primary font-semibold">CodeCraft</span> — a passionate duo of developers committed to crafting exceptional digital experiences. From high-performance mobile apps to robust backend architectures and responsive web platforms, we bring ideas to life with precision and purpose.
                </p>
                <p>
                  With deep expertise in the latest technologies and a strong eye for user-centric design, we deliver scalable, secure, and modern solutions that not only meet your goals — but exceed expectations.
                </p>
                <p>
                  Innovation, collaboration, and continuous improvement are the pillars of our work. At CodeCraft, we don't just build products — we engineer impact.
                </p>
              </div>
  
              {/* Buttons centered below text */}
              <div className="flex flex-wrap justify-center gap-3 pt-4">
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
    
  
  
  

{/* Skills Section - Frontend Developer */}
<section className="section-padding bg-card">
  <div className="container-custom">
    <h2 className="text-3xl font-bold mb-2 text-center">Frontend Developer</h2>
    <p className="text-center text-primary text-2xl font-semibold mb-10">Raj Chauhan</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="space-y-6">
        {[
          { name: "HTML & CSS", level: 95 },
          { name: "Android", level: 95 },
          { name: "JavaScript", level: 80 },
          { name: "React Native", level: 90 },
          { name: "UI Design", level: 80 },
        ].map((skill, index) => (
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
              <div className="text-sm text-muted-foreground">2025 - Present</div>
              <div className="font-medium">Freelance Frontend Developer</div>
              <div className="text-sm">Responsive websites</div>
            </div>
            <div className="border-l-2 border-primary pl-4 py-1">
              <div className="text-sm text-muted-foreground">2024 - Present</div>
              <div className="font-medium">React Native Developer at UB IT Solution</div>
            </div>
            <div className="border-l-2 border-primary pl-4 py-1">
              <div className="text-sm text-muted-foreground">2020 - 2024</div>
              <div className="font-medium">BE in Computer Engineering</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Skills Section - Backend Developer */}
<section className="section-padding bg-card">
  <div className="container-custom">
    <h2 className="text-3xl font-bold mb-2 text-center">Backend Developer</h2>
    <p className="text-center text-primary text-2xl font-semibold mb-10">Omkar Kalvitkar</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="space-y-6">
        {[
          { name: "Kotlin", level: 90 },
          { name: ".NET Core", level: 85 },
          { name: "SQL Server", level: 85 },
          { name: "Database Management", level: 85 },
          { name: "API Design", level: 80 },
        ].map((skill, index) => (
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
              <div className="text-sm text-muted-foreground">2025 - Present</div>
              <div className="font-medium">Freelance Backend Developer</div>
              <div className="text-sm">Server-side applications</div>
            </div>
            <div className="border-l-2 border-primary pl-4 py-1">
              <div className="text-sm text-muted-foreground">2024</div>
              <div className="font-medium">Software Developer at SmartIdentification</div>
            </div>
            <div className="border-l-2 border-primary pl-4 py-1">
              <div className="text-sm text-muted-foreground">2020 - 2024</div>
              <div className="font-medium">BE in Computer Engineering</div>
            </div>
          </div>
        </div>
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