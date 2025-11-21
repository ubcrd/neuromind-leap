import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface FloatingBadgeProps {
  variant?: "stat" | "certification" | "free" | "years";
  icon?: React.ReactNode;
  text: string;
  subtext?: string;
  className?: string;
}

const variantStyles = {
  stat: "bg-white text-ink-strong shadow-[0_8px_30px_rgba(0,0,0,0.12)]",
  certification: "bg-brand-primary text-white shadow-[0_8px_30px_rgba(235,131,35,0.4)]",
  free: "bg-accent-deepgreen text-white shadow-[0_8px_30px_rgba(0,40,34,0.4)] font-bold",
  years: "bg-white text-brand-primary-strong shadow-[0_8px_30px_rgba(235,131,35,0.15)] font-bold",
};

export const FloatingBadge: React.FC<FloatingBadgeProps> = ({ 
  variant = "stat", 
  icon, 
  text, 
  subtext, 
  className,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className={cn(
        "inline-flex flex-col items-center gap-1 px-4 py-3 rounded-2xl backdrop-blur-sm",
        variantStyles[variant],
        className
      )}
    >
      {icon && <div className="mb-1">{icon}</div>}
      <span className="text-sm md:text-base font-semibold whitespace-nowrap">
        {text}
      </span>
      {subtext && (
        <span className="text-xs opacity-80 whitespace-nowrap">
          {subtext}
        </span>
      )}
    </motion.div>
  );
};
