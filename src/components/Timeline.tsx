"use client";

import { motion } from "framer-motion";

const timelineData = [
  {
    date: "Expected March 2027",
    title: "B.Tech in Computer Science",
    institution: "GMRIT Deemed to be  University AP, Andhra Pradesh",
    description: "Focusing on Artificial Intelligence,Full Stack Development, and core computer science fundamentals.",
    image: "/Portfolio_new/btech.png"
  },
  {
    date: "Nov 2021 - May 2023",
    title: "Intermediate (Class 12th)",
    institution: "RGUKT Rk Valley",
    description: "Board of Intermediate Education, Andhra Pradesh. Achieved 95.7%.",
    image: "/Portfolio_new/inter.jpeg"
  },
  {
    date: "June 2020 - April 2021",
    title: "Secondary School (Class 10th)",
    institution: "Montessori Public School",
    description: "Board of Secondary Education, Andhra Pradesh. Achieved 97.5%.",
    image: "/Portfolio_new/school.png"
  }
];

export function Timeline() {
  return (
    <div className="relative border-l border-zinc-700/50 ml-4 md:ml-8 mt-8">
      {timelineData.map((item, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          className="mb-16 ml-8 md:ml-12 relative"
        >
          <span className="absolute -left-[41px] md:-left-[57px] flex h-5 w-5 items-center justify-center rounded-full bg-zinc-950 ring-4 ring-zinc-900 border border-zinc-700 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
            <span className="h-2 w-2 rounded-full bg-white" />
          </span>
          
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Text Content */}
            <div className="flex flex-col items-start gap-3 w-full lg:w-1/2">
              <span className="text-xs font-semibold px-3 py-1 bg-white/5 text-zinc-300 rounded-full border border-white/10 tracking-wide uppercase">
                {item.date}
              </span>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-1">{item.title}</h3>
                <h4 className="text-base md:text-lg font-medium text-zinc-400 mb-3">{item.institution}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Image Content */}
            {item.image && (
              <div className="w-full lg:w-1/2">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10 group backdrop-blur-sm shadow-[0_8px_20px_rgba(0,0,0,0.5)]">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10 pointer-events-none" />
                  <img 
                    src={item.image} 
                    alt={item.institution}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop";
                    }}
                  />
                  {/* Glassy Inner Border */}
                  <div className="absolute inset-0 border border-white/20 rounded-2xl pointer-events-none z-20 shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)] group-hover:border-white/40 group-hover:shadow-[inset_0_1px_4px_rgba(255,255,255,0.5)] transition-all duration-500" />
                </div>
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
