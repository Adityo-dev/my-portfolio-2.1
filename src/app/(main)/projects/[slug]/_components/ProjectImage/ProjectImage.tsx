"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, ChevronLeft, ChevronRight, Layers } from "lucide-react";
import Image from "next/image";
import { PROJECTS } from "../../../_data/projects";

type ProjectType = typeof PROJECTS[0];

export const ProjectImage = ({ project }: { project: ProjectType }) => {
  const galleryImages = (project?.images && project.images.length > 0) 
    ? project.images 
    : [project?.image || ""];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev + 1) % galleryImages.length);
  }, [galleryImages.length]);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, [galleryImages.length]);

  useEffect(() => {
    if (thumbnailRefs.current[selectedIndex]) {
      thumbnailRefs.current[selectedIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [selectedIndex]);

  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLightboxOpen]);

  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsLightboxOpen(false);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, handleNext, handlePrev]);

  return (
    <section className="relative w-full bg-background pb-16 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 relative z-10">
        
        <div className="w-full flex flex-col sm:flex-row gap-4 items-stretch select-none">
          {/* Left (Desktop) / Bottom (Mobile): Thumbnails Column */}
          {galleryImages.length > 1 && (
            <div className="order-2 sm:order-1 w-full sm:w-28 lg:w-36 shrink-0 bg-white/[0.02] border border-white/10 p-2 sm:p-3 rounded-md flex flex-col">
              <div className="flex sm:flex-col gap-2.5 overflow-x-auto sm:overflow-y-auto max-h-none sm:max-h-[460px] pr-0 sm:pr-1 scroll-smooth">
                {galleryImages.map((img, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <button
                      key={idx}
                      ref={(el) => { thumbnailRefs.current[idx] = el; }}
                      type="button"
                      onClick={() => setSelectedIndex(idx)}
                      className={`relative shrink-0 w-20 sm:w-full aspect-[16/10] rounded-sm overflow-hidden border transition-all duration-200 cursor-pointer ${
                        isSelected 
                          ? "border-primary bg-primary/10 opacity-100 ring-1 ring-primary/50" 
                          : "border-white/10 opacity-60 hover:opacity-100 hover:border-white/30"
                      }`}
                    >
                      <Image 
                        src={img} 
                        alt={`Thumbnail ${idx + 1}`}
                        fill
                        sizes="(max-width: 640px) 80px, 140px"
                        className="object-cover"
                      />
                      {isSelected && (
                        <div className="absolute inset-0 border-2 border-primary rounded-sm pointer-events-none z-10" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Right (Desktop) / Top (Mobile): Main Preview Container */}
          <div 
            onClick={() => setIsLightboxOpen(true)}
            className="order-1 sm:order-2 group relative flex-1 w-full aspect-[16/10] sm:aspect-video max-h-[500px] lg:max-h-[560px] rounded-md overflow-hidden bg-white/[0.02] border border-white/10 p-2 sm:p-4 cursor-pointer transition-all duration-300 hover:border-white/20"
          >
            <div className="relative w-full h-full rounded-sm overflow-hidden border border-white/10 bg-[#0A0A0A]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIndex}
                  initial={{ opacity: 0.85 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0.85 }}
                  transition={{ duration: 0.2 }}
                  className="relative w-full h-full"
                >
                  <Image 
                    src={galleryImages[selectedIndex]} 
                    alt={`${project?.title || 'Project'} screenshot ${selectedIndex + 1}`}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 1200px"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Bottom Center Counter Badge */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/70 border border-white/15 text-[11px] font-mono text-white/90 backdrop-blur-md flex items-center gap-1.5 z-10 pointer-events-none shadow-lg">
                <Layers className="w-3.5 h-3.5 text-primary" />
                <span>{selectedIndex + 1} / {galleryImages.length}</span>
              </div>
              
              {/* Zoom Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-mono text-xs font-semibold tracking-wider uppercase z-20">
                <div className="px-4 py-2.5 bg-black/70 rounded-full border border-white/20 backdrop-blur-md flex items-center gap-2 shadow-xl">
                  <Maximize2 className="w-4 h-4 text-primary" />
                  <span>Click to enlarge</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-8"
            onClick={() => setIsLightboxOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl w-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-3 right-3 sm:-top-12 sm:right-0 z-30 text-white/80 hover:text-white p-2 rounded-full bg-black/70 sm:bg-white/10 border border-white/20 sm:border-white/15 backdrop-blur-md transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full aspect-[16/10] sm:aspect-video max-h-[75vh] sm:max-h-[80vh] rounded-md overflow-hidden border border-white/10 bg-[#0A0A0A] p-2 shadow-2xl">
                <Image 
                  src={galleryImages[selectedIndex]} 
                  alt={`${project?.title || 'Project'} large preview ${selectedIndex + 1}`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className="object-contain p-1 sm:p-3"
                />
              </div>

              <div className="w-full flex items-center justify-between mt-3 sm:mt-4 text-xs font-mono text-muted-foreground px-1">
                <div>
                  Image <span className="text-white font-semibold">{selectedIndex + 1}</span> of {galleryImages.length}
                </div>

                {galleryImages.length > 1 && (
                  <div className="flex items-center gap-2">
                    <button 
                      type="button"
                      onClick={handlePrev}
                      className="p-2 sm:p-2 rounded-sm bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-colors cursor-pointer"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button 
                      type="button"
                      onClick={handleNext}
                      className="p-2 sm:p-2 rounded-sm bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-colors cursor-pointer"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
