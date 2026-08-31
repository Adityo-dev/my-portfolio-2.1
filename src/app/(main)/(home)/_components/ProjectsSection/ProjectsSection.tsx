"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Github, Link as LinkIcon, FileText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ActionButton } from "@/components/shared/ActionButton";

const PROJECTS = [
  {
    id: "EduNext",
    featured: true,
    category: "Full Stack",
    year: "2024",
    title: "EduNext — Online Learning Platform",
    description: "A full-stack learning platform where instructors publish structured courses and students track lesson-by-lesson progress.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "REST API"],
    links: { caseStudy: "#", liveDemo: "#", github: "#" },
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "nexus",
    featured: false,
    category: "Dashboard",
    year: "2024",
    title: "Nexus Admin — Analytics & Role-Based Dashboard",
    description: "An admin dashboard with data tables, charts, permissions and audit-friendly activity views, built as a reusable foundation.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    links: { caseStudy: "#", liveDemo: "#", github: "#" },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "kravu",
    featured: false,
    category: "E-commerce",
    year: "2024",
    title: "Kravu Store — Modern E-commerce Experience",
    description: "A storefront covering catalogue browsing, cart, checkout and order history with a clean, conversion-focused product flow.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    links: { caseStudy: "#", liveDemo: "#", github: "#" },
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "practi",
    featured: false,
    category: "Full Stack",
    year: "2024",
    title: "Practi — Practitioner Booking SaaS",
    description: "A scheduling application where practitioners manage availability and clients book confirmed slots without back-and-forth messaging.",
    tags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    links: { liveDemo: "#" }, // Intentionally omitting some links to match image variety
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000",
  },
];

const ProjectCard = ({ project }: { project: typeof PROJECTS[0] }) => {
  const isFeatured = project.featured;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`group flex flex-col ${isFeatured ? 'lg:flex-row' : ''} bg-white/[0.02] border border-white/10 rounded-md overflow-hidden transition-colors hover:bg-white/[0.04]`}
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

export const ProjectsSection = () => {
  const featuredProject = PROJECTS.find(p => p.featured)!;
  const regularProjects = PROJECTS.filter(p => !p.featured);

  return (
    <section className="relative w-full bg-background border-t border-white/5 py-24 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 relative z-10">
        
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-12">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-xs font-mono tracking-widest text-[#FF5A36] uppercase font-semibold mb-4"
            >
              SELECTED WORK
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl  lg:text-5xl font-semibold tracking-[-0.02em] text-foreground leading-[1.1] mb-5"
            >
              Here is what I have built.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              Four projects, strongest first — each with the stack it actually runs on and a way to see it for yourself.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="shrink-0"
          >
            <ActionButton href="/projects" label="All projects" />
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="flex flex-col gap-6">
          {/* Featured Project (Full Width) */}
          <ProjectCard project={featuredProject} />

          {/* Regular Projects (3 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
