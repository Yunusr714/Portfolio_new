import { Background } from "@/components/Background";
import { LightRays } from "@/components/LightRays";
import { Timeline } from "@/components/Timeline";
import { Skills } from "@/components/Skills";
import { Internships } from "@/components/Internships";
import { Achievements } from "@/components/Achievements";
import { Certifications } from "@/components/Certifications";
import { Projects } from "@/components/Projects";
import { ArtsGallery } from "@/components/ArtsGallery";
import { Contact } from "@/components/Contact";
import { LunarGravityCard } from "@/components/LunarGravityCard";
import { Code2, Atom, Smartphone, Sparkles } from "lucide-react";

import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-zinc-100 overflow-x-hidden selection:bg-white/20">
      <Background />
      <Navbar />

      {/* Hero Section (Modern Editorial Layout) */}
      <section className="w-full h-screen flex flex-col justify-center items-center z-10 relative overflow-hidden bg-black pt-20">
        {/* Ambient Lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_60%)] pointer-events-none" />
        
        {/* Bottom Fade to Black */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-30" />
        <LightRays />

        {/* Huge Centered Typography (Stays Behind the Image) */}
        <div className="absolute top-[12%] md:top-[16%] w-full flex flex-col items-center text-center z-10 pointer-events-none px-4">
          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-medium tracking-tight text-white mb-2 leading-none">
            Hi I'm Yunus
          </h1>
          <h2 className="text-6xl md:text-8xl lg:text-[9rem] font-serif italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 leading-none drop-shadow-2xl">
            Developer
          </h2>
        </div>

        {/* Floating UI Elements Grid */}
        <div className="w-full max-w-7xl mx-auto px-6 h-full relative z-30 pointer-events-none">
          
          {/* Left Status Badge */}
          <div className="hidden md:flex absolute left-6 lg:left-12 top-[50%] -translate-y-1/2 items-center gap-3 px-5 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-md pointer-events-auto hover:bg-white/10 transition-colors shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
            </span>
            <span className="text-sm font-medium text-zinc-200">Available for new opportunities</span>
          </div>

          {/* Bottom Right: Passion Text & Call to Actions */}
          <div className="absolute right-6 lg:right-12 bottom-12 flex flex-col items-end gap-6 pointer-events-auto">
            <p className="hidden md:block text-base text-zinc-400 leading-relaxed text-right font-medium max-w-[280px]">
              Passionate about crafting intelligent web applications and exploring the frontiers of AI to connect users with value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/Portfolio_new/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/5 text-white font-medium hover:bg-white/10 transition-colors backdrop-blur-md border border-white/10 shadow-lg"
              >
                View Resume
              </a>
              <a 
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-black font-bold hover:bg-zinc-200 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                <span>Get in Touch</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Centered Transparent Cutout Image */}
        {/* We use z-20 so it sits IN FRONT of the typography (z-10) but BEHIND the floating UI elements (z-30) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[500px] h-[75vh] flex justify-center items-end z-20 pointer-events-none">
          <img 
            src="/Portfolio_new/dummy_hero.png" 
            alt="Abdul Yunus"
            className="w-auto h-full object-cover object-bottom drop-shadow-[0_-10px_30px_rgba(0,0,0,0.8)]"
          />
        </div>
      </section>

      {/* Technical Skills Section */}
      <Skills />
      
      {/* Professional Experience Section */}
      <Internships />

      {/* Achievements Section */}
      <Achievements />
      
      {/* Certifications Section */}
      <Certifications />

      {/* Projects Section */}
      <Projects />

      {/* Education Section */}
      <section id="education" className="w-full max-w-6xl mx-auto px-6 py-32 z-10 border-t border-white/5 relative">
        <div className="mb-20 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
            Education
          </h2>
          <p className="text-zinc-400 max-w-2xl">
            My academic journey and qualifications.
          </p>
        </div>

        <Timeline />
      </section>

      {/* Arts & Sketches Section */}
      <ArtsGallery />

      {/* Contact Section */}
      <Contact />

      {/* Godavari Image */}
      <section className="w-full relative aspect-[4/3] md:aspect-[21/9] overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/10 to-black z-10 pointer-events-none" />
        <img 
          src="/Portfolio_new/godavari.png" 
          alt="Godavari"
          className="w-full h-full object-cover"
        />
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-white/5 mt-auto z-10 py-8 px-6 text-center text-zinc-500 text-sm">
        <p>Designed & Developed by Yunus © {new Date().getFullYear()}</p>
      </footer>
    </main>
  );
}
