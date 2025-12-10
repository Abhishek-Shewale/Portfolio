import React from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiNextdotjs,
  SiFirebase,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiOracle,
  SiTailwindcss,
  SiVercel,
  SiNpm,
  SiGithub,
  SiPostman,
  SiGit,
} from "react-icons/si";

const TechStack = () => {
  const technologies = [
    // Web Technologies
    { icon: SiHtml5, color: "#FF5722", name: "HTML5" },
    { icon: SiCss3, color: "#2196F3", name: "CSS3" },
    { icon: SiJavascript, color: "#F7DF1E", name: "JavaScript" },
    // Frameworks/Libraries
    { icon: SiReact, color: "#61DAFB", name: "React" },
    { icon: SiNextdotjs, color: "#FFFFFF", name: "Next.js" },
    { icon: SiNodedotjs, color: "#339933", name: "Node.js" },
    { icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind CSS" },
    // Databases
    { icon: SiFirebase, color: "#FFCA28", name: "Firebase" },
    { icon: SiMongodb, color: "#47A248", name: "MongoDB" },
    { icon: SiOracle, color: "#F80000", name: "Oracle" },
    // Cloud Platforms
    { icon: SiVercel, color: "#E5E7EB", name: "Vercel" },
    // Developer Tools
    { icon: SiNpm, color: "#CB3837", name: "npm" },
    { icon: SiGithub, color: "#FFFFFF", name: "GitHub" },
    { icon: SiPostman, color: "#FF6C37", name: "Postman" },
    { icon: SiGit, color: "#F05032", name: "Git" },
  ].filter((tech) => tech.icon); // Filter out any undefined icons

  // Create three copies to ensure smooth infinite scrolling
  const extendedTechnologies = [
    ...technologies,
    ...technologies,
    ...technologies,
  ];

  return (
    <div className="w-full overflow-hidden py-4 bg-gradient-to-r from-slate-900/50 via-transparent to-slate-900/50">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -1 * technologies.length * 96], // Multiply by item width (96px)
        }}
        transition={{
          x: {
            duration: 30,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          },
        }}
      >
        {extendedTechnologies.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={index}
              className="inline-flex flex-col items-center mx-6 group"
            >
              <div className="relative">
                <Icon
                  className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: tech.color }}
                />
                <motion.div
                  className="absolute -inset-2 rounded-full opacity-20"
                  style={{ backgroundColor: tech.color }}
                  initial={{ opacity: 0 }}
                  whileHover={{
                    opacity: 0.15,
                    scale: 1.2,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                />
              </div>
              <span className="mt-1 text-xs font-medium text-blue-200/70">
                {tech.name}
              </span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default TechStack;
