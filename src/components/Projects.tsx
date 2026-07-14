"use client";

import { motion } from "framer-motion";
import { FolderGit2, Calendar, Trophy, Code2 } from "lucide-react";

const projects = [
  {
    title: "QubitTracer: Quantum State Visualizer",
    event: "Hackathon Winner – AQVH 2025",
    year: "2025",
    techStack: ["React.js", "React Native", "Qiskit", "Flask"],
    description: [
      "Worked as a Full Stack Developer in a team to build an AI-assisted quantum computing platform featuring quantum circuit simulation, state visualization, and educational tools for simplifying quantum computing concepts.",
      "Enabled students and researchers to design and test quantum algorithms in a simulated environment, while providing AI-powered explanations of results for improved learning and experimentation."
    ],
    image: "/Portfolio_new/qubit_tracer.png" // Replace with actual image when provided
  },
  {
    title: "Stepcone 2025: College Fest Website",
    event: "College Fest",
    year: "2024",
    techStack: ["React.js", "PHP", "MySQL", "Razorpay"],
    description: [
      "Worked as a Full Stack Developer to build the event registration platform for both internal and external participants, integrating Razorpay payments, email confirmations, and dashboards for students and administrators.",
      "Successfully handled 3,800+ registrations, simplified event management, and registration tracking and reporting."
    ],
    image: "/Portfolio_new/stepcone.png" // Replace with actual image when provided
  }
];

export function Projects() {
  return (
    <section id="projects" className="w-full py-32 z-10 border-t border-white/5 relative bg-black">
      <div className="w-full max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-24 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
            Featured Projects
          </h2>
          <p className="text-zinc-400 max-w-2xl">
            A showcase of my technical projects, hackathon builds, and real-world applications.
          </p>
        </div>

        <div className="flex flex-col gap-20 md:gap-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
            >
              {/* Text Content */}
              <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{project.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm md:text-base font-medium text-zinc-400 mb-4">
                    <span className="flex items-center text-zinc-200"><Trophy className="w-4 h-4 mr-2" />{project.event}</span>
                    <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" />{project.year}</span>
                  </div>
                  
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-zinc-300 flex items-center gap-1">
                        <Code2 className="w-3 h-3" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <ul className="flex flex-col gap-4 mt-2">
                  {project.description.map((desc, i) => (
                    <li key={i} className="text-zinc-400 leading-relaxed flex items-start">
                      <span className="text-zinc-600 mr-3 mt-1.5 font-bold">›</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 group shadow-2xl">
                  {/* Glassmorphic border overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10 pointer-events-none" />
                  
                  <img 
                    src={project.image} 
                    alt={`${project.title} Preview`}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      // Fallback for placeholder if image not found
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop";
                    }}
                  />
                  
                  {/* Subtle inner shadow for depth */}
                  <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] rounded-2xl pointer-events-none z-20" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
