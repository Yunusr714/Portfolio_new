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
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden mix-blend-screen z-0", className)}>
      <div className="absolute left-1/2 top-[-10%] -translate-x-1/2 w-[150%] h-[120%] flex justify-center">
        {rays.map((ray, i) => (
          <motion.div
            key={i}
            className="absolute top-0 origin-top bg-gradient-to-b from-white via-white/50 to-transparent"
            style={{
              width: ray.width,
              height: "100%",
              rotate: ray.rotate,
              filter: "blur(50px)",
            }}
            animate={{
              opacity: [ray.opacity * 0.4, ray.opacity, ray.opacity * 0.4],
              rotate: [ray.rotate - 3, ray.rotate + 3, ray.rotate - 3],
              scaleY: [0.9, 1.1, 0.9],
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
