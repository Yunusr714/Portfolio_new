"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Terminal, Briefcase, ArrowRight, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="w-full py-32 z-10 border-t border-white/5 relative bg-black">
      <div className="w-full max-w-5xl mx-auto px-6 relative z-10">
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
            Let's Connect
          </h2>
          <p className="text-zinc-400 max-w-xl text-lg">
            Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* Main Contact Card - Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 group relative p-8 md:p-10 rounded-3xl bg-zinc-900/50 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="h-full flex flex-col justify-between relative z-10">
              <div>
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/10 mb-6">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Got an idea?</h3>
                <p className="text-zinc-400 max-w-md">
                  I'm currently available for freelance work and open to new opportunities. Let's build something amazing together.
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <a 
                  href="mailto:yunusabdul274@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>yunusabdul274@gmail.com</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Social Links Column */}
          <div className="flex flex-col gap-4 md:gap-6">
            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/abdul-yunus"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative p-6 rounded-3xl bg-zinc-900/50 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 flex-1 flex flex-col justify-center"
            >
              <div className="absolute inset-0 bg-[#0A66C2]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#0A66C2]/20 flex items-center justify-center mb-4">
                    <Briefcase className="w-5 h-5 text-[#0A66C2]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">LinkedIn</h3>
                  <p className="text-sm text-zinc-400">Professional Network</p>
                </div>
                <ArrowRight className="w-5 h-5 text-zinc-500 group-hover:text-white group-hover:-rotate-45 transition-all duration-300" />
              </div>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/Yunusr714"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group relative p-6 rounded-3xl bg-zinc-900/50 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 flex-1 flex flex-col justify-center"
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4">
                    <Terminal className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">GitHub</h3>
                  <p className="text-sm text-zinc-400">Code Repositories</p>
                </div>
                <ArrowRight className="w-5 h-5 text-zinc-500 group-hover:text-white group-hover:-rotate-45 transition-all duration-300" />
              </div>
            </motion.a>
          </div>

          {/* Location / Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          >
            <div className="p-6 rounded-3xl bg-zinc-900/30 border border-white/5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-zinc-400" />
              </div>
              <div>
                <h4 className="text-white font-medium">Location</h4>
                <p className="text-zinc-500 text-sm">Andhra Pradesh, India</p>
              </div>
            </div>
            <a href="tel:+918639838047" className="group p-6 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors flex items-center justify-center">
                <Phone className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
              </div>
              <div>
                <h4 className="text-white font-medium group-hover:text-white transition-colors">Phone</h4>
                <p className="text-zinc-500 text-sm">+91 8639838047</p>
              </div>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
