"use client";
import Hero from "./sections/Hero";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Code2,
  Terminal,
  Globe,
  Tools,
  BookOpen,
  Award,
  User,
  Calendar,
  MapPin,
  Star,
  Laptop,
  Server,
  Database,
  Palette,
} from "lucide-react";
import { TbTools } from "react-icons/tb";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 px-4 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-blue-500/5"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
            transition: {
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        />
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            className="flex items-center justify-center gap-3 mb-12"
            variants={scaleIn}
          >
            <User className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 font-playfair">
              About Me
            </h2>
          </motion.div>
          <motion.div
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-blue-500/10 hover:border-blue-500/20 transition-all duration-300"
            variants={scaleIn}
          >
            <p className="text-gray-300 text-lg leading-relaxed font-inter">
              As a{" "}
              <span className="font-semibold text-blue-400">
                Full Stack Engineer
              </span>{" "}
              with{" "}
              <span className="font-semibold underline decoration-blue-400/50">
                1.9+ years of hands-on experience
              </span>{" "}
              I specialize in{" "}
              <span className="italic text-blue-300">
                MERN Stack Development and AI model optimization
              </span>
              . My journey in tech is backed by a strong educational foundation
              in Computer Applications, where I consistently maintained high
              academic performance. I combine my theoretical knowledge with
              practical expertise to deliver scalable and efficient web
              solutions.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Experience Timeline Section */}
      <motion.section
        id="experience"
        className="py-20 px-4 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-purple-500/5"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
            transition: {
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        />
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            className="flex items-center justify-center gap-3 mb-8"
            variants={scaleIn}
          >
            <BookOpen className="w-8 h-8 text-purple-400" />
            <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 font-playfair">
              Journey
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>

            <div className="space-y-12">
              {/* Current Role - Left to Right */}
              <motion.div
                className="relative flex items-center justify-between"
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-5/12">
                  <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                    <div className="flex items-center gap-2 mb-3">
                      <Briefcase className="w-5 h-5 text-blue-400" />
                      <h3 className="text-xl font-semibold text-white font-poppins">
                        Full Stack Engineer
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-blue-400 font-medium mb-1">
                      <MapPin className="w-4 h-4" />
                      <p>DeployH.AI</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 italic">
                      <Calendar className="w-4 h-4" />
                      <p>September 2024 - Present</p>
                    </div>
                  </div>
                </div>
                <motion.div
                  className="absolute left-[calc(50%-8px)] w-4 h-4 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50 z-10"
                  whileInView={{
                    scale: [1, 1.2, 1],
                    transition: { duration: 1, repeat: Infinity },
                  }}
                />
                <div className="w-5/12">
                  <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300">
                    <div className="text-gray-300 space-y-2 font-inter">
                      {[
                        {
                          icon: Server,
                          text: "Optimized GenAI tech stack with Next.js, Firebase, and Google Cloud services",
                        },
                        
                        {
                          icon: Terminal,
                          text: "Developed multiple dashboards and static websites, improving efficiency by 40%",
                        },
                        {
                          icon: Code2,
                          text: "Engineered AI-powered voice mock interview platform with real-time speech recognition",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 border-b border-blue-500/20 pb-2 text-blue-300"
                        >
                          <item.icon className="w-5 h-5 text-blue-400 flex-shrink-0" />
                          <p>{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Previous Role - Right to Left */}
              <motion.div
                className="relative flex items-center justify-between mt-12"
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-5/12">
                  <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
                    <div className="text-gray-300 space-y-2 font-inter">
                      {[
                        {
                          icon: Code2,
                          text: "Developed full-featured e-commerce platform using MERN stack",
                        },
                        {
                          icon: Terminal,
                          text: "Implemented product catalog, shopping cart, and user authentication",
                        },
                        
                        {
                          icon: Laptop,
                          text: "Built admin dashboard for inventory management and order tracking",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 border-b border-purple-500/20 pb-2 text-purple-300"
                        >
                          <item.icon className="w-5 h-5 text-purple-400 flex-shrink-0" />
                          <p>{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <motion.div
                  className="absolute left-[calc(50%-8px)] w-4 h-4 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50 z-10"
                  whileInView={{
                    scale: [1, 1.2, 1],
                    transition: { duration: 1, repeat: Infinity },
                  }}
                />
                <div className="w-5/12">
                  <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                    <div className="flex items-center gap-2 mb-3">
                      <Briefcase className="w-5 h-5 text-purple-400" />
                      <h3 className="text-xl font-semibold text-white font-poppins">
                        Software Developer Intern
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-purple-400 font-medium mb-1">
                      <MapPin className="w-4 h-4" />
                      <p>Payas Technologies</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 italic">
                      <Calendar className="w-4 h-4" />
                      <p>APRIL 2023 – OCTOBER 2023</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* MCA - Left to Right */}
              <motion.div
                className="relative flex items-center justify-between mt-12"
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-5/12">
                  <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                    <div className="flex items-center gap-2 mb-3">
                      <GraduationCap className="w-5 h-5 text-blue-400" />
                      <h3 className="text-xl font-semibold text-white font-poppins">
                        Master of Computer Applications
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-blue-400 font-medium mb-1">
                      <MapPin className="w-4 h-4" />
                      <p>JSPM, SPPU</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 italic">
                      <Calendar className="w-4 h-4" />
                      <p>2021 - 2023</p>
                    </div>
                  </div>
                </div>
                <motion.div
                  className="absolute left-[calc(50%-8px)] w-4 h-4 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50 z-10"
                  whileInView={{
                    scale: [1, 1.2, 1],
                    transition: { duration: 1, repeat: Infinity },
                  }}
                />
                <div className="w-5/12">
                  <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-5 h-5 text-blue-400" />
                      <p className="text-blue-300 font-semibold">CGPA: 8.2</p>
                    </div>
                    <div className="text-gray-300 space-y-2 font-inter">
                      <div className="flex items-center gap-2 text-blue-200 italic">
                        <BookOpen className="w-4 h-4" />
                        <p>
                          Specialized in Full Stack Development and Software
                          Engineering
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* BCA - Right to Left */}
              <motion.div
                className="relative flex items-center justify-between mt-12"
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-5/12">
                  <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-5 h-5 text-purple-400" />
                      <p className="text-purple-300 font-semibold">CGPA: 8</p>
                    </div>
                    <div className="text-gray-300 space-y-2 font-inter">
                      <div className="flex items-center gap-2 text-purple-200 italic">
                        <BookOpen className="w-4 h-4" />
                        <p>Foundation in Computer Science and Programming</p>
                      </div>
                    </div>
                  </div>
                </div>
                <motion.div
                  className="absolute left-[calc(50%-8px)] w-4 h-4 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50 z-10"
                  whileInView={{
                    scale: [1, 1.2, 1],
                    transition: { duration: 1, repeat: Infinity },
                  }}
                />
                <div className="w-5/12">
                  <div className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                    <div className="flex items-center gap-2 mb-3">
                      <GraduationCap className="w-5 h-5 text-purple-400" />
                      <h3 className="text-xl font-semibold text-white font-poppins">
                        Bachelor of Computer Applications
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-purple-400 font-medium mb-1">
                      <MapPin className="w-4 h-4" />
                      <p>ACS, SPPU</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 italic">
                      <Calendar className="w-4 h-4" />
                      <p>2018 - 2021</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="py-20 px-4 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-blue-500/5"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
            transition: {
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        />
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            className="flex items-center justify-center gap-3 mb-12"
            variants={scaleIn}
          >
            <TbTools className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 font-playfair">
              Technical Skills
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
  {
    title: "Web Technologies & Frameworks",
    skills: "HTML5, CSS3, JavaScript (ES6+), ReactJS, Next.js, NodeJS, ExpressJS, Tailwind-CSS, Shadcn, 12stdev",
    gradient: "from-blue-500 to-purple-500",
    icon: Code2,
  },
  
  {
    title: "Databases & Cloud Platforms",
    skills: "Firebase, MongoDB, Oracle, Google Cloud Platform, Vercel, Cloud Functions, Cpanel, Render, Railway",
    gradient: "from-blue-500 to-purple-500",
    icon: Database,
  },
  {
    title: "AI/ML Technologies",
    skills: "Google Gemini AI, Speech Recognition, Text-to-Speech",
    gradient: "from-purple-500 to-blue-500",
    icon: Star,
  },
  {
    title: "Developer Tools",
    skills: "VS Code, Cursor, npm, GitHub, Postman, Git",
    gradient: "from-purple-500 to-blue-500",
    icon: Terminal,
  },
].map((category, index) => (
              <motion.div
                key={category.title}
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.1, duration: 0.5 },
                  },
                }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <div
                  className="h-full bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10
                hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`p-2 rounded-lg bg-gradient-to-r ${category.gradient} bg-opacity-20`}
                    >
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <div
                      className={`h-1 w-20 rounded-full bg-gradient-to-r ${category.gradient}`}
                    ></div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {category.skills}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}
