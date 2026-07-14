"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";
import { cn } from "@/lib/utils"; // We'll create this utility

interface LunarGravityCardProps {
  children: ReactNode;
  className?: string;
  bgImage?: string;
  disableAnimation?: boolean;
}

export function LunarGravityCard({ children, className, bgImage, disableAnimation = false }: LunarGravityCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disableAnimation || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    if (disableAnimation) return;
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: disableAnimation ? 0 : rotateX,
        rotateY: disableAnimation ? 0 : rotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative w-full max-w-sm rounded-2xl p-px group perspective-[1000px] transition-transform duration-200 ease-out",
        className
      )}
    >
      {/* Outer Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/5 opacity-10 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-md" />
      
      {/* Inner Border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-transparent to-white/5 opacity-50" />
      
      {/* Card Content */}
      <div 
        className="relative h-full w-full bg-black/80 backdrop-blur-sm rounded-[15px] p-6 border border-white/10 overflow-hidden"
        style={{ transform: "translateZ(30px)" }}
      >
        {bgImage && (
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-70 mix-blend-overlay pointer-events-none transition-opacity duration-500 group-hover:opacity-80" 
            style={{ backgroundImage: `url('${bgImage}')` }} 
          />
        )}
        
        {/* Subtle Lunar Texture Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
        
        {/* Lunar Glow Follow */}
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-50 transition-opacity duration-300"
          style={{
            background: useTransform(
              () => `radial-gradient(400px circle at ${(x.get() + 0.5) * 100}% ${(y.get() + 0.5) * 100}%, rgba(255,255,255,0.1), transparent 40%)`
            ),
          }}
        />

        <div className="relative z-10" style={{ transform: "translateZ(50px)" }}>
          {children}
        </div>
      </div>
    </motion.div>
  );
}
