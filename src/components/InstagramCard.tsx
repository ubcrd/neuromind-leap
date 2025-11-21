import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { cardHover } from "@/lib/motion-presets";

export interface InstagramCardProps {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  bgColor: "orange" | "green" | "burgundy" | "dark";
  image?: string;
}

const bgColorMap = {
  orange: "bg-brand-primary-strong text-ink-strong",
  green: "bg-accent-deepgreen text-brand-primary-strong",
  burgundy: "bg-accent-burgundy text-white",
  dark: "bg-ink-strong text-white",
};

export const InstagramCard = React.forwardRef<HTMLDivElement, InstagramCardProps>(
  ({ title, excerpt, category, readTime, bgColor, image }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={{ 
          scale: 1.02, 
          boxShadow: "0 12px 32px rgba(29, 28, 28, 0.12)",
        }}
        transition={{ duration: 0.2 }}
        className="h-full"
      >
        <Card className={cn(
          "h-full rounded-tile border-0 overflow-hidden shadow-card",
          bgColorMap[bgColor]
        )}>
          <CardHeader className="space-y-4">
            <Badge variant={bgColor === "orange" ? "dark" : "orange"}>
              {category}
            </Badge>
            {image && (
              <div className="rounded-xl overflow-hidden aspect-video bg-white/10">
                <img 
                  src={image} 
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </CardHeader>
          <CardContent className="space-y-4">
            <h3 className="text-2xl font-bold uppercase leading-tight">
              {title}
            </h3>
            <p className="text-sm opacity-90 line-clamp-3">
              {excerpt}
            </p>
            <div className="flex items-center justify-between text-xs opacity-75 pt-2">
              <span>{readTime}</span>
              <span className="uppercase tracking-wider">Leer más →</span>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }
);

InstagramCard.displayName = "InstagramCard";
