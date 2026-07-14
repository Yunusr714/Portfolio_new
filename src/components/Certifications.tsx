"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle2 } from "lucide-react";

const certifications = [
  {
    title: "Quantum Computing",
    issuer: "NPTEL",
    image: "/certification/nptel_quantum.png"
  },
  {
    title: "Joy of Computing Using Python",
    issuer: "NPTEL",
    image: "/certification/nptel_python.png"
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud",
    image: "/certification/google_cloud_genai.png"
  },
  {
    title: "Python Programming",
    issuer: "Coursera",
    image: "/certification/coursera_python.png"
  },
  {
    title: "Python Programming",
    issuer: "Infosys Springboard",
    image: "/certification/infosys_python.png"
  },
  {
    title: "Frontend Web Development",
    issuer: "Udemy",
    image: "/certification/udemy_frontend.png"
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="w-full py-32 z-10 border-t border-white/5 relative bg-black">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
            Certifications
          </h2>
          <p className="text-zinc-400 max-w-2xl">
            Professional certifications and courses I have completed to enhance my technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 group shadow-[0_8px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_12px_24px_rgba(0,0,0,0.6)] transition-all"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
              
              {/* Full background image in original color */}
              <img 
                src={cert.image} 
                alt={cert.title}
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              
              {/* Top to bottom black gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none opacity-90" />
              
              {/* Award Icon Badge */}
              <div className="absolute top-4 right-4 z-30 bg-black/60 p-2 rounded-full backdrop-blur-md border border-white/10">
                <Award className="w-4 h-4 text-zinc-300 group-hover:text-white transition-colors" />
              </div>
              
              {/* Text positioned at the bottom */}
              <div className="absolute bottom-0 left-0 w-full p-6 z-30 flex flex-col justify-end">
                <h3 className="text-xl md:text-xl font-bold text-white tracking-tight leading-snug group-hover:text-blue-400 transition-colors mb-3 line-clamp-2">
                  {cert.title}
                </h3>
                
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-zinc-300 line-clamp-1">
                    Issued by <span className="text-white font-semibold">{cert.issuer}</span>
                  </span>
                </div>
              </div>

              {/* Small width glassy inner border */}
              <div className="absolute inset-0 border border-white/20 rounded-2xl pointer-events-none z-40 shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)] group-hover:border-white/40 group-hover:shadow-[inset_0_1px_4px_rgba(255,255,255,0.5)] transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
