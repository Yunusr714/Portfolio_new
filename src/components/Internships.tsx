"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const internships = [
  {
    role: "MERN Stack Developer Intern",
    company: "IIT Ropar",
    duration: "2 Months",
    location: "Virtual",
    description: [
      "Developed a MERN-based Notes Platform enabling students to create notes, draw flowcharts, and upload images.",
      "Collaborated with a cross-functional team of students from different states on case-study based projects, strengthening problem-solving, communication, and teamwork skills.",
      "Participated in regular technical quizzes, code reviews, and viva evaluations, enhancing understanding of full-stack development concepts and software engineering practices."
    ],
    image: "/Portfolio_new/iit_ropar_certificate.jpeg" // Replace with your actual image path
  },
  {
    role: "Frontend Developer Intern",
    company: "Krify Software Technologies",
    duration: "1 Month",
    location: "Kakinada",
    description: [
      "Developed responsive web applications and a Scientific Calculator using HTML, CSS, JavaScript, and Bootstrap.",
      "Recreated modern website interfaces and collaborated on team-based frontend projects, improving UI implementation, layout design, and responsive development skills."
    ],
    image: "/Portfolio_new/krify_certificate.png" // Replace with your actual image path
  }
];

export function Internships() {
  return (
    <section id="internships" className="w-full py-32 z-10 border-t border-white/5 relative bg-black">
      <div className="w-full max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-24 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
            Professional Experience
          </h2>
          <p className="text-zinc-400 max-w-2xl">
            Real-world industry experience building robust applications and collaborating in professional environments.
          </p>
        </div>

        <div className="flex flex-col gap-20 md:gap-32">
          {internships.map((internship, index) => (
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
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{internship.role}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm md:text-base font-medium text-zinc-400 mb-2">
                    <span className="flex items-center text-zinc-200"><Briefcase className="w-4 h-4 mr-2" />{internship.company}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-zinc-500">
                    <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" />{internship.duration}</span>
                    <span className="flex items-center"><MapPin className="w-4 h-4 mr-2" />{internship.location}</span>
                  </div>
                </div>
                
                <ul className="flex flex-col gap-4 mt-2">
                  {internship.description.map((desc, i) => (
                    <li key={i} className="text-zinc-400 leading-relaxed flex items-start">
                      <span className="text-zinc-600 mr-3 mt-1.5 font-bold">›</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Certificate Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 group shadow-2xl">
                  {/* Glassmorphic border overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10 pointer-events-none" />
                  
                  <img 
                    src={internship.image} 
                    alt={`${internship.company} Certificate`}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      // Fallback for placeholder if image not found
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1589330694653-ded6df03f754?q=80&w=1000&auto=format&fit=crop";
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
