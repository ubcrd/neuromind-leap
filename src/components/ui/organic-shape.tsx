import * as React from "react";
import { cn } from "@/lib/utils";

export interface OrganicShapeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "circle" | "blob1" | "blob2" | "blob3";
  color?: "orange" | "green" | "navy" | "burgundy";
  size?: "sm" | "md" | "lg" | "xl";
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
  opacity?: number;
}

const colorMap = {
  orange: "bg-brand-primary",
  green: "bg-accent-deepgreen",
  navy: "bg-accent-navy",
  burgundy: "bg-accent-burgundy",
};

const sizeMap = {
  sm: "w-32 h-32",
  md: "w-48 h-48",
  lg: "w-64 h-64",
  xl: "w-96 h-96",
};

const positionMap = {
  "top-left": "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
  "top-right": "top-0 right-0 translate-x-1/2 -translate-y-1/2",
  "bottom-left": "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
  "bottom-right": "bottom-0 right-0 translate-x-1/2 translate-y-1/2",
  "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
};

const shapeClipPath = {
  circle: "circle(50% at 50% 50%)",
  blob1: "ellipse(60% 50% at 50% 50%)",
  blob2: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
  blob3: "path('M50,0 C80,0 100,20 100,50 C100,80 80,100 50,100 C20,100 0,80 0,50 C0,20 20,0 50,0')",
};

export const OrganicShape = React.forwardRef<HTMLDivElement, OrganicShapeProps>(
  ({ 
    variant = "circle", 
    color = "orange", 
    size = "lg",
    position = "center",
    opacity = 0.15,
    className,
    ...props 
  }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "absolute pointer-events-none",
          colorMap[color],
          sizeMap[size],
          positionMap[position],
          className
        )}
        style={{
          clipPath: shapeClipPath[variant],
          opacity: opacity,
        }}
        {...props}
      />
    );
  }
);

OrganicShape.displayName = "OrganicShape";
