"use client";

import { motion } from "framer-motion";
import { 
  FaReact, FaNodeJs, FaPython, FaPhp, FaFigma, FaGitAlt, FaBrain, FaAtom 
} from "react-icons/fa";
import { 
  SiTypescript, SiJavascript, SiTailwindcss, SiExpress, SiFlask, SiMongodb, SiMysql, SiC 
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const skills = [
  { name: "React.js", icon: FaReact },
  { name: "React Native", icon: TbBrandReactNative },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Python", icon: FaPython },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express.js", icon: SiExpress },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "MongoDB", icon: SiMongodb },
  { name: "MySQL", icon: SiMysql },
  { name: "Flask", icon: SiFlask },
  { name: "PHP", icon: FaPhp },
  { name: "C Language", icon: SiC },
  { name: "Git", icon: FaGitAlt },
  { name: "Figma", icon: FaFigma },
  { name: "Quantum Computing", icon: FaAtom },
  { name: "AI / ML", icon: FaBrain },
];

export function Skills() {
  return (
    <section id="skills" className="w-full relative z-10 border-t border-white/5 overflow-hidden bg-black">
      {/* Background Image with Dark Layer Gradients */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: "url('/stars.png')" }} 
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none" />
      
      <div className="w-full max-w-6xl mx-auto px-6 py-32 relative z-10">
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">Technical Skills</h2>
          <p className="text-zinc-400 max-w-2xl">A comprehensive toolkit of languages, frameworks, and technologies I use to build robust and scalable solutions.</p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="relative flex flex-col items-center justify-center gap-3 p-4 rounded-2xl bg-gradient-to-b from-white/10 to-transparent border border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),_0_8px_20px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),_0_12px_24px_rgba(0,0,0,0.6)] backdrop-blur-2xl transition-all group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <skill.icon className="w-8 h-8 md:w-10 md:h-10 text-zinc-400 group-hover:text-white transition-colors drop-shadow-md relative z-10" />
              <span className="text-xs md:text-sm font-medium text-zinc-400 text-center tracking-wide group-hover:text-white transition-colors relative z-10">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
