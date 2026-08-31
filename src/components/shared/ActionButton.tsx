import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import React from 'react';

interface ActionButtonProps {
  label: string | React.ReactNode;
  href?: string;
  className?: string;
  target?: string;
  variant?: 'default' | 'outline' | 'primary';
  showIcon?: boolean;
  icon?: React.ReactNode;
  asButton?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const ActionButton = ({ 
  label, 
  href, 
  className, 
  target,
  variant = 'default',
  showIcon = true,
  icon,
  asButton = false,
  type = 'button',
  disabled = false
}: ActionButtonProps) => {

  const getButtonStyles = () => {
    switch (variant) {
      case 'outline':
        return "border border-white/20 bg-transparent text-foreground hover:bg-white/5";
      case 'primary':
        return "border border-[#FF5A36] bg-[#FF5A36] text-white hover:bg-[#FF5A36]/90 hover:border-[#FF5A36]/90";
      case 'default':
      default:
        return "border border-foreground bg-foreground text-background hover:opacity-90";
    }
  };

  const getIconBoxStyles = () => {
    switch (variant) {
      case 'outline':
        return "border border-white/20 bg-transparent text-foreground hover:bg-white/5";
      case 'primary':
        return "border border-[#FF5A36] bg-[#FF5A36] text-white hover:bg-[#FF5A36]/90 hover:border-[#FF5A36]/90";
      case 'default':
      default:
        return "border border-white/10 bg-white/[0.02] text-foreground hover:bg-white/10";
    }
  };

  if (asButton) {
    return (
      <button 
        type={type} 
        disabled={disabled}
        className={cn("flex items-stretch gap-3 group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed", className)}
      >
        <div
          className={cn(
            "px-6 py-3.5 text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-sm flex items-center justify-center",
            getButtonStyles()
          )}
        >
          {label}
        </div>
        
        {showIcon && (
          <div
            className={cn(
              "p-3.5 transition-all duration-300 flex items-center justify-center rounded-sm",
              getIconBoxStyles()
            )}
          >
            {icon ? icon : <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" strokeWidth={1.5} />}
          </div>
        )}
      </button>
    );
  }

  return (
    <div className={cn("flex items-center gap-3 group", className)}>
      <Link 
        href={href || "#"}
        target={target}
        className={cn(
          "px-6 py-3.5 text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-sm flex items-center justify-center",
          getButtonStyles()
        )}
      >
        {label}
      </Link>
      
      {showIcon && (
        <Link 
          href={href || "#"}
          target={target}
          className={cn(
            "p-3.5 transition-all duration-300 flex items-center justify-center rounded-sm",
            getIconBoxStyles()
          )}
        >
          {icon ? icon : <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" strokeWidth={1.5} />}
        </Link>
      )}
    </div>
  )
}
