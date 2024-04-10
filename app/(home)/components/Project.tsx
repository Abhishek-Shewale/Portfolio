"use client";
import React from "react";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/DirectionImageHover";

export default function Project() {
  const projects = [
    {
      title: "Scrap App",
      tech: [SiReact, SiNodedotjs, SiMongodb, SiCss3],
      link: "",
      cover: "/ScrapApp.png",
      background: "bg-green-500",
    },
    {
      title: "HealthBooker",
      tech: [SiReact, SiTailwindcss, SiNextdotjs, SiMongodb],
      link: "",
      cover: "/HB.png",
      background: "bg-indigo-500",
    },
    {
      title: " Job Portal",
      tech: [SiReact, SiTailwindcss, SiNextdotjs, SiMongodb],
      link: "",
      cover: "/JobPortal.png",
      background: "bg-red-500",
    },
    {
      title: "Balaji Homeopathy",
      tech: [SiHtml5, SiCss3, SiJavascript],
      link: "",
      cover: "/BalajiHomeopathy.png",
      background: "bg-gray-500",
    },
  ];

  return (
    <div>
      <div className="py-10 p-5 sm:p-0">
        <Title
          text="Projects 🚀"
          className="mb-5 flex flex-col items-center justify-center rotate-6"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 p-20 gap-5">
          {projects.map((project, index) => {
            return (
              <Link href={project.link} key={index}>
                <div
                  className={cn(
                    "p-5 rounded-md space-y-5 mb-10 gap-3",
                    project.background
                  )}
                >
                  <DirectionAwareHover
                    imageUrl={project.cover}
                    className="w-full space-y-5 cursor-pointer"
                  >
                    <div className="space-y-5">
                      <h1 className="text-2xl font-bold ">{project.title}</h1>
                      <div className="flex items-center gap-5 ">
                        {project.tech.map((Icon, index) => {
                          const TechIcon = Icon;
                          return <TechIcon key={index} className="w-8 h-8" />;
                        })}
                      </div>
                    </div>
                  </DirectionAwareHover>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
