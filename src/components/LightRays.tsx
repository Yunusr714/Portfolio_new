"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function LightRays({ className }: { className?: string }) {
  const rays = [
    { width: 150, rotate: -20, duration: 10, delay: 0, opacity: 0.15 },
    { width: 280, rotate: -8, duration: 14, delay: 2, opacity: 0.2 },
    { width: 180, rotate: 5, duration: 11, delay: 1, opacity: 0.25 },
    { width: 350, rotate: 18, duration: 16, delay: 3, opacity: 0.1 },
    { width: 120, rotate: -28, duration: 9, delay: 4, opacity: 0.2 },
    { width: 220, rotate: 25, duration: 13, delay: 5, opacity: 0.15 },
  ];

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden z-0", className)}>
      {/* Mobile: Static Rays (No Animation for Performance) */}
      <div className="md:hidden absolute left-1/2 top-[-10%] -translate-x-1/2 w-[150%] h-[120%] flex justify-center">
        {rays.map((ray, i) => (
          <div
            key={`mobile-${i}`}
            className="absolute top-0 origin-top bg-gradient-to-b from-white via-white/50 to-transparent"
            style={{
              width: ray.width,
              height: "100%",
              transform: `rotate(${ray.rotate}deg)`,
              filter: "blur(24px)",
              opacity: ray.opacity,
            }}
          />
        ))}
      </div>

      {/* Desktop: Animated Rays */}
      <div className="hidden md:flex absolute left-1/2 top-[-10%] -translate-x-1/2 w-[120%] h-[120%] justify-center">
        {rays.map((ray, i) => (
          <motion.div
            key={`desktop-${i}`}
            className="absolute top-0 origin-top bg-gradient-to-b from-white via-white/50 to-transparent"
            style={{
              width: ray.width,
              height: "100%",
              rotate: ray.rotate,
              filter: "blur(24px)",
              willChange: "transform, opacity",
            }}
            animate={{
              opacity: [ray.opacity * 0.4, ray.opacity, ray.opacity * 0.4],
              rotate: [ray.rotate - 2, ray.rotate + 2, ray.rotate - 2],
              scaleY: [0.95, 1.05, 0.95],
            }}
            transition={{
              duration: ray.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: ray.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
}
