"use client";

import { motion } from "framer-motion";
import { Trophy, Calendar, MapPin } from "lucide-react";

const achievements = [
  {
    title: "AQVH Semi Final 2025",
    date: "2025",
    image: "/Portfolio_new/aqvh semi final 2025.jpeg",
  },
  {
    title: "AQVH Final 2025",
    date: "2026",
    image: "/Portfolio_new/aqvh2025.jpeg",
  },
  {
    title: "Stepcone '26 Quantum Qurukshetra",
    date: "2026",
    image: "/Portfolio_new/stepcone 26 quantumn.jpeg",
  },
  {
    title: "Stepcone '25 Hackhub",
    date: "2025",
    image: "/Portfolio_new/stepcone 25 hackhub.jpeg",
  },
  {
    title: "Nxtwave GenAI Hackathon",
    date: "2026",
    image: "/Portfolio_new/nxtwave genai.jpeg",
  },
  {
    title: "Project Expo '25",
    date: "2025",
    image: "/Portfolio_new/project expo.jpeg",
  },
  {
    title: "QC^2 SRM University",
    date: "2026",
    image: "/Portfolio_new/qc2 srm.jpeg",
  },
  {
    title: "Stepcone '24 Webostav",
    date: "2024",
    image: "/Portfolio_new/webostav stepcone 2024.jpeg",
  },
  {
    title: "Workshop on Web-Dev (ACM)",
    date: "2025",
    image: "/Portfolio_new/workshop on web dev.jpeg",
  },
];

// Duplicate the array to create a seamless infinite scroll loop
const duplicatedAchievements = [...achievements, ...achievements];

export function Achievements() {
  return (
    <section id="achievements" className="w-full py-32 z-10 border-t border-white/5 relative overflow-hidden bg-black">
      {/* Background Image with Dark Layer Gradients */}

      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto px-6 mb-16 relative z-10 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">Achievements & Awards</h2>
        <p className="text-zinc-400 max-w-2xl">Highlights from hackathons, competitions, and technical showcases.</p>
      </div>

      <div className="relative w-full flex z-10 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <motion.div
          className="flex gap-6 md:gap-8 px-4 py-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {duplicatedAchievements.map((item, index) => (
            <div
              key={index}
              className="w-[300px] md:w-[450px] flex-shrink-0 group relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/10 to-transparent border border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),_0_8px_20px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),_0_12px_24px_rgba(0,0,0,0.6)] backdrop-blur-2xl transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

              <div className="absolute top-4 right-4 z-20 bg-black/50 p-2 rounded-full backdrop-blur-md border border-white/10">
                <Trophy className="w-4 h-4 text-yellow-500" />
              </div>

              <div className="relative w-full aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors z-10 duration-500" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                />
              </div>

              <div className="p-6 relative z-20 bg-gradient-to-t from-black via-black/90 to-transparent -mt-20 pt-20">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <div className="flex items-center text-xs md:text-sm font-medium text-zinc-400">
                  <Calendar className="w-4 h-4 mr-2 text-zinc-500 flex-shrink-0" />
                  <span className="line-clamp-1">{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
