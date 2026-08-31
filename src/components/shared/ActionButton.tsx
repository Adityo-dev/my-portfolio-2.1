import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import React from 'react';

interface ActionButtonProps {
  label: string;
  href: string;
  className?: string;
  target?: string;
}

export const ActionButton = ({ label, href, className, target }: ActionButtonProps) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Link 
        href={href}
        target={target}
        className="bg-foreground text-background px-6 py-3.5 text-xs font-bold tracking-widest uppercase hover:opacity-90 transition-opacity rounded-sm"
      >
        {label}
      </Link>
      <Link 
        href={href}
        target={target}
        className="border border-white/10 bg-white/[0.02] text-foreground p-3.5  hover:bg-white/10 transition-colors flex items-center justify-center rounded-sm"
      >
        <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5" strokeWidth={1.5} />
      </Link>
    </div>
  )
}
