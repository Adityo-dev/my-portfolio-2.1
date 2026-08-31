"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";

export const ContactInfo = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full lg:w-[40%] flex flex-col gap-12"
    >
      
      {/* DIRECT CONTACT */}
      <div>
        <h3 className="text-[11px] font-mono tracking-widest text-muted-foreground uppercase font-bold mb-5">
          DIRECT CONTACT
        </h3>
        <div className="flex flex-col gap-4">
          <Link href="mailto:hello@adittodev.com" className="flex items-center gap-3 text-base font-medium text-foreground hover:text-[#FF5A36] transition-colors w-fit">
            <Mail className="w-5 h-5" /> hello@adittodev.com
          </Link>
          <p className="text-[15px] text-muted-foreground">
            Dhaka, Bangladesh — working remotely
          </p>
        </div>
      </div>

      {/* ELSEWHERE */}
      <div>
        <h3 className="text-[11px] font-mono tracking-widest text-muted-foreground uppercase font-bold mb-6">
          ELSEWHERE
        </h3>
        <div className="flex flex-col">
          {[
            { label: "GitHub", value: "@aditto-dev", href: "#" },
            { label: "LinkedIn", value: "/in/aditto-dev", href: "#" },
            { label: "Fiverr", value: "/aditto_dev", href: "#" },
            { label: "Email", value: "hello@adittodev.com", href: "mailto:hello@adittodev.com" },
          ].map((link, idx) => (
            <Link 
              key={idx} 
              href={link.href}
              className="group flex items-center justify-between py-4 border-b border-white/5 hover:border-white/20 transition-colors"
            >
              <span className="text-[15px] font-medium text-foreground">{link.label}</span>
              <span className="flex items-center gap-2 text-[14px] text-muted-foreground group-hover:text-foreground transition-colors">
                {link.value} <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
