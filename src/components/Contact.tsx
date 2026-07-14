"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Terminal, Briefcase, ArrowRight } from "lucide-react";

export function Contact() {
  const contactLinks = [
    {
      title: "Email",
      value: "yunusabdul274@gmail.com",
      href: "mailto:yunusabdul274@gmail.com",
      icon: <Mail className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" />,
    },
    {
      title: "Phone",
      value: "+91 8639838047",
      href: "tel:+918639838047",
      icon: <Phone className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" />,
    },
    {
      title: "LinkedIn",
      value: "Abdul Yunus",
      href: "https://www.linkedin.com/in/abdul-yunus",
      icon: <Briefcase className="w-6 h-6 text-zinc-400 group-hover:text-blue-400 transition-colors" />,
    },
    {
      title: "GitHub",
      value: "Yunusr714",
      href: "https://github.com/Yunusr714",
      icon: <Terminal className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" />,
    }
  ];

  return (
    <section id="contact" className="w-full py-32 z-10 border-t border-white/5 relative bg-black">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto px-6 relative z-10">
        <div className="mb-20 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
            Let's Connect
          </h2>
          <p className="text-zinc-400 max-w-xl text-lg">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 md:p-8 rounded-2xl bg-zinc-900 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 flex items-center justify-between shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Glassy Inner Border */}
              <div className="absolute inset-0 border border-white/20 rounded-2xl pointer-events-none z-20 shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)] group-hover:border-white/40 group-hover:shadow-[inset_0_1px_4px_rgba(255,255,255,0.5)] transition-all duration-500 opacity-0 group-hover:opacity-100" />
              
              <div className="flex items-center gap-6 relative z-10">
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors shadow-inner">
                  {link.icon}
                </div>
                <div>
                  <h3 className="text-sm font-medium text-zinc-400 mb-1">{link.title}</h3>
                  <p className="text-lg md:text-xl font-bold text-white tracking-tight">{link.value}</p>
                </div>
              </div>
              
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 relative z-10">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
