"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Github, Link as LinkIcon, FileText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS } from "../_data/projects";

type ProjectType = typeof PROJECTS[0];

export const ProjectCard = ({ project, forceRegularLayout = false }: { project: ProjectType, forceRegularLayout?: boolean }) => {
  const isFeatured = forceRegularLayout ? false : project.featured;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`group flex flex-col ${isFeatured ? 'lg:flex-row' : ''} bg-white/[0.02] border border-white/10 rounded-md overflow-hidden transition-colors hover:bg-white/[0.04] h-full`}
    >
      {/* Image Section */}
      <Link href={`/projects/${project.id}`} className={`relative block overflow-hidden bg-background/50 border-white/10 ${isFeatured ? 'lg:w-[55%] lg:border-r border-b lg:border-b-0' : 'w-full aspect-[4/3] border-b'}`}>
        <div className="absolute inset-0 bg-background mix-blend-color z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
        <Image 
          src={project.image} 
          alt={project.title} 
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
        />
      </Link>

      {/* Content Section */}
      <div className={`flex flex-col flex-1 p-5 ${isFeatured ? 'lg:p-8' : ''}`}>
        
        <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#FF5A36] uppercase font-semibold mb-4">
          <span>{project.category}</span>
          <span className="text-white/30">/</span>
          <span>{project.year}</span>
        </div>

        <Link href={`/projects/${project.id}`} className="block group/title">
          <h3 className={`font-semibold text-foreground tracking-tight mb-3 ${isFeatured ? 'text-2xl sm:text-3xl lg:text-4xl leading-tight' : 'text-xl leading-snug'}`}>
            {project.title.split('—').map((part, i) => (
              i === 0 ? <span key={i} className="font-bold">{part} —</span> : <span key={i} className="font-medium text-muted-foreground">{part}</span>
            ))}
          </h3>
        </Link>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1.5 rounded border border-white/10 bg-white/5 text-[10px] font-mono tracking-widest text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-6 mt-auto pt-5 border-t border-white/10">
          {project.links.caseStudy && (
            <Link href={project.links.caseStudy} className="flex items-center gap-2 text-xs font-semibold text-foreground hover:text-[#FF5A36] transition-colors">
              <FileText className="w-3.5 h-3.5" /> Case study
            </Link>
          )}
          {project.links.liveDemo && (
            <Link href={project.links.liveDemo} className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors">
              <LinkIcon className="w-3.5 h-3.5" /> Live demo
            </Link>
          )}
          {project.links.github && (
            <Link href={project.links.github} className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors">
              <Github className="w-3.5 h-3.5" /> GitHub
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};
