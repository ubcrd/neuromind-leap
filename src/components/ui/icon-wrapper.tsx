import * as React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface IconWrapperProps {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  strokeWidth?: 2 | 2.5 | 3 | 3.5 | 4;
  color?: "primary" | "dark" | "white" | "muted" | "orange";
  className?: string;
}

const sizeMap = {
  sm: "w-5 h-5",     // 20px
  md: "w-6 h-6",     // 24px
  lg: "w-8 h-8",     // 32px
  xl: "w-12 h-12",   // 48px
  "2xl": "w-16 h-16", // 64px
  "3xl": "w-24 h-24", // 96px
};

const colorMap = {
  primary: "text-primary",
  dark: "text-ink-strong",
  white: "text-white",
  muted: "text-ink-muted",
  orange: "text-brand-primary-strong",
};

export const IconWrapper = React.forwardRef<
  SVGSVGElement,
  IconWrapperProps
>(({ icon: Icon, size = "lg", strokeWidth = 3, color = "dark", className }, ref) => {
  return (
    <Icon 
      className={cn(
        sizeMap[size],
        colorMap[color],
        className
      )}
      strokeWidth={strokeWidth}
    />
  );
});

IconWrapper.displayName = "IconWrapper";
