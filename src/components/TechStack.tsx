import React, { useRef, useEffect } from 'react';

interface TechItemProps {
  name: string;
  icon: string;
}

const TechStack: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const technologies: TechItemProps[] = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
    { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
    {
      name: "Tailwind CSS",
      icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
    }

    ,
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  ];

  const allTechnologies = [...technologies, ...technologies];

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    const animate = () => {
      if (scrollElement.scrollLeft >= scrollElement.scrollWidth / 2) {
        scrollElement.scrollLeft = 0;
      } else {
        scrollElement.scrollLeft += 1;
      }
      requestAnimationFrame(animate);
    };

    const animation = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <div className="w-full overflow-hidden py-12 bg-card">
      <div className="container-custom mb-6">
        <h2 className="text-xl md:text-2xl font-semibold text-center">
          Tech Stack & Tools
        </h2>
      </div>
      <div
        ref={scrollRef}
        className="flex overflow-x-hidden whitespace-nowrap custom-scrollbar"
      >
        <div className="flex gap-12 py-4 px-6 animate-pulse-slow">
          {allTechnologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-center justify-center gap-3">
              <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <span className="text-sm text-muted-foreground">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
