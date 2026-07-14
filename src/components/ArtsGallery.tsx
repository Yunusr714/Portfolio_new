"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, X } from "lucide-react";

const artworks = [
  { src: "/art/virat.jpeg", title: "Virat Kohli", span: "md:col-span-2 md:row-span-2" },
  { src: "/art/ratan tata.jpeg", title: "Ratan Tata", span: "md:col-span-1 md:row-span-1" },
  { src: "/art/kgf.jpeg", title: "KGF", span: "md:col-span-1 md:row-span-2" },
  { src: "/art/salaar.jpeg", title: "Salaar", span: "md:col-span-1 md:row-span-1" },
  { src: "/art/kong.jpeg", title: "Kong", span: "md:col-span-2 md:row-span-1" },
  { src: "/art/khelji.jpeg", title: "Khilji", span: "md:col-span-1 md:row-span-1" },
  { src: "/art/jenny.jpeg", title: "Jenny", span: "md:col-span-1 md:row-span-1" },
  { src: "/art/pubg.jpeg", title: "PUBG", span: "md:col-span-2 md:row-span-1" },
  { src: "/art/gmr.jpeg", title: "GMR", span: "md:col-span-2 md:row-span-1" },
];

export function ArtsGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="arts" className={`w-full py-32 border-t border-white/5 relative bg-black ${selectedImage ? 'z-[60]' : 'z-10'}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none z-0" />
      
      <div className="w-full max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-20 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
            <Palette className="w-4 h-4 text-zinc-400" />
            <span className="text-sm font-medium text-zinc-300">My Gallery</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
            Artworks & Sketches
          </h2>
          <p className="text-zinc-400 max-w-2xl">
            A collection of my hand-drawn portraits and sketches. Creativity beyond code.
          </p>
        </div>

        {/* The group class triggers the blur/scale effects on siblings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[250px] gap-4 group">
          {artworks.map((art, index) => (
            <motion.div
              key={index}
              onClick={() => setSelectedImage(art.src)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              // group/card lets us target hover state of the specific card
              // hover:!scale-105 override the group-hover effects
              // hover:!z-50 ensures the hovered card pops out above the siblings
              className={`relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 cursor-pointer transition-all duration-700 ease-out group/card z-10 ${art.span} group-hover:scale-[0.98] group-hover:opacity-70 hover:!scale-105 hover:!opacity-100 hover:!z-50 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)]`}
            >
              <img 
                src={art.src} 
                alt={art.title}
                // Grayscale by default, color on hover of this specific card
                className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 ease-out group-hover/card:grayscale-0"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop";
                }}
              />
              
              {/* Inner glassy border overlay */}
              <div className="absolute inset-0 border border-white/20 rounded-2xl pointer-events-none z-20 shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)] group-hover/card:border-white/50 group-hover/card:shadow-[inset_0_1px_8px_rgba(255,255,255,0.6)] transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Popup */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-8 cursor-zoom-out"
          >
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-6 right-6 z-[110] p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-md border border-white/20"
            >
              <X className="w-6 h-6" />
            </button>
            
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Expanded Artwork"
              className="w-auto h-auto max-w-full max-h-[90vh] object-contain rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
