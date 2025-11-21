import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface MediaCardProps {
  logo: React.ReactNode;
  title: string;
  link?: string;
  backgroundColor?: "white" | "cream";
  className?: string;
}

const backgroundMap = {
  white: "bg-white",
  cream: "bg-surface-warm",
};

export const MediaCard: React.FC<MediaCardProps> = ({ 
  logo, 
  title, 
  link = "#", 
  backgroundColor = "white", 
  className,
}) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -8 }}
      className={cn(
        "group block p-6 rounded-2xl border border-ink-muted/10 transition-all duration-300",
        "hover:shadow-lg hover:border-brand-primary/30",
        backgroundMap[backgroundColor],
        className
      )}
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="h-16 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0">
          {logo}
        </div>
        
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-ink-strong group-hover:text-brand-primary-strong transition-colors duration-300">
            {title}
          </h3>
          
          <div className="flex items-center justify-center gap-2 text-xs text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span>Ver más</span>
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </motion.a>
  );
};
