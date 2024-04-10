import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiX } from "react-icons/si";

export default function Navbar({ className }: { className: string }) {
  const socials = [
    {
      link: "https://www.linkedin.com/in/abhishekshewale/",
      label: "LinkedIn",
      Icon: FaLinkedin,
    },
    {
      link: "https://github.com/Abhishek-Shewale",
      label: "GitHub",
      Icon: FaGithub,
    },
    {
      link: "https://twitter.com/Abhishewale7",
      label: "Twitter(X)",
      Icon: SiX,
    },
  ];

  return (
    <nav
      className={cn(
        "py-10 flex justify-between items-center animate-move-down",
        className
      )}
    >
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        Abhishek Shewale 🧑🏽‍💻
      </h1>
      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link href={social.link} key={index} aria-label={social.label}>
              <Icon className="w-5 h-5 hover:scale-125 transition-all cursor-pointer" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
