"use client";
import { useEffect, useState } from "react";
import { IoArrowUp } from "react-icons/io5";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      // cancel the previous frame to prevent piling up updates
      if (animationFrameId) cancelAnimationFrame(animationFrameId);

      animationFrameId = requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      
        setScrollPercent(Math.min(100, Math.max(0, scrolled)));
        setVisible(scrollTop > 44);
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`group fixed bottom-8 right-8 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg z-[500] cursor-pointer border border-white/5 backdrop-blur-md
      ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }
      bg-[#151515] hover:bg-[#1a1a1a]`}
    >
      <svg
        className="absolute w-full h-full rotate-[-90deg]"
        viewBox="0 0 36 36"
      >
        <circle
          cx="18"
          cy="18"
          r="16"
          stroke="rgba(255, 255, 255, 0.05)"
          strokeWidth="4"
          fill="none"
        />

        <circle
          cx="18"
          cy="18"
          r="16"
          stroke="currentColor"
          className="text-primary"
          strokeWidth="4"
          fill="none"
          strokeDasharray="100"
          strokeDashoffset={100 - scrollPercent}
          strokeLinecap="round"
        />
      </svg>

      <IoArrowUp className="text-white/90 group-hover:text-white transition-colors text-2xl relative z-10" />
    </button>
  );
}