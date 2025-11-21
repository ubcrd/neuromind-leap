import * as React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { IconWrapper } from "./icon-wrapper";

const tileVariants = cva(
  "rounded-tile-lg p-8 flex flex-col items-center justify-center text-center gap-4 cursor-pointer transition-all",
  {
    variants: {
      variant: {
        orange: "bg-brand-primary-strong text-ink-strong hover:shadow-card-hover",
        dark: "bg-ink-strong text-white hover:shadow-card-hover",
        green: "bg-accent-deepgreen text-brand-primary-strong hover:shadow-card-hover",
        burgundy: "bg-accent-burgundy text-brand-primary-strong hover:shadow-card-hover",
        navy: "bg-accent-navy text-white hover:shadow-card-hover",
      },
      size: {
        default: "min-h-[200px]",
        lg: "min-h-[240px]",
        xl: "min-h-[280px]",
      }
    },
    defaultVariants: {
      variant: "orange",
      size: "default",
    },
  }
);

export interface TileProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onAnimationStart' | 'onDrag' | 'onDragEnd' | 'onDragStart'>,
    VariantProps<typeof tileVariants> {
  icon?: LucideIcon;
  title: string;
  iconSize?: "xl" | "2xl" | "3xl";
}

const Tile = React.forwardRef<HTMLDivElement, TileProps>(
  ({ className, variant, size, icon, title, iconSize = "2xl", onClick, ...props }, ref) => {
    const iconColor = variant === "orange" ? "dark" : "orange";
    
    return (
      <motion.div
        ref={ref}
        className={cn(tileVariants({ variant, size }), className)}
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {icon && (
          <IconWrapper 
            icon={icon} 
            size={iconSize}
            strokeWidth={3}
            color={iconColor}
          />
        )}
        <h3 className="font-bold uppercase tracking-wide text-lg">
          {title}
        </h3>
      </motion.div>
    );
  }
);

Tile.displayName = "Tile";

export { Tile, tileVariants };
