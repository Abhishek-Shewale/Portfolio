"use client";
import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/Cardhover";
import {
  SiReact,
  SiPython,
  SiMysql,
  SiGithub,
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      text: "React.js",
      Icon: SiReact,
    },
    {
      text: "Node.js",
      Icon: SiNodedotjs,
    },
    {
      text: "MongoDB",
      Icon: SiMongodb,
    },
    {
      text: "express.js",
      Icon: SiExpress,
    },
    {
      text: "Tailwind",
      Icon: SiTailwindcss,
    },
    {
      text: "Javascript",
      Icon: SiJavascript,
    },
    {
      text: "Python",
      Icon: SiPython,
    },
    {
      text: "SQL",
      Icon: SiMysql,
    },
    {
      text: "GitHub",
      Icon: SiGithub,
    },
  ];

  return (
    <div className="max-w-5x mx-auto -mt-24 px-8">
      <Title
        text="Skills 💎"
        className="mt-5 flex flex-col items-center justify-center -rotate-6"
      />
      <HoverEffect className="mt-10 mb-10" items={skills} />
    </div>
  );
}
