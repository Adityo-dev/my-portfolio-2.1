"use client";

import React from "react";
import { motion } from "framer-motion";
import { ActionButton } from "@/components/shared/ActionButton";

interface PageHeroProps {
  badge: string;
  title: string | React.ReactNode;
  description?: string;
  action?: {
    label: string | React.ReactNode;
    href: string;
    variant?: "default" | "outline" | "primary";
    showIcon?: boolean;
    icon?: React.ReactNode;
  };
}

export const PageHero = ({ badge, title, description, action }: PageHeroProps) => {
  return (
    <section className="relative w-full bg-background pt-32 pb-20 border-b border-white/5 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
          
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono tracking-widest text-[#FF5A36] uppercase font-semibold mb-5"
            >
              {badge}
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground leading-[1.1]"
            >
              {title}
            </motion.h1>
            
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-muted-foreground leading-relaxed max-w-2xl mt-6"
              >
                {description}
              </motion.p>
            )}
          </div>

          {action && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="shrink-0 pb-1"
            >
              <ActionButton 
                href={action.href} 
                label={action.label} 
                variant={action.variant}
                showIcon={action.showIcon}
                icon={action.icon}
              />
            </motion.div>
          )}
          
        </div>
      </div>
    </section>
  );
};
