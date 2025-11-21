import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  backgroundColor?: "white" | "cream" | "orange" | "dark" | "green" | "burgundy" | "navy";
  containerWidth?: "default" | "wide" | "full";
  padding?: "sm" | "md" | "lg" | "xl";
}

const backgroundColors = {
  white: "bg-white",
  cream: "bg-surface-warm",
  orange: "bg-brand-primary-strong",
  dark: "bg-ink-strong",
  green: "bg-accent-deepgreen",
  burgundy: "bg-accent-burgundy",
  navy: "bg-accent-navy",
};

const containerWidths = {
  default: "max-w-7xl",
  wide: "max-w-[1400px]",
  full: "max-w-full",
};

const paddingClasses = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-20 md:py-32",
  xl: "py-24 md:py-40",
};

const SectionWrapper = React.forwardRef<HTMLElement, SectionWrapperProps>(
  ({ 
    backgroundColor = "white", 
    containerWidth = "default",
    padding = "md",
    className, 
    children, 
    ...props 
  }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          backgroundColors[backgroundColor],
          paddingClasses[padding],
          "px-6",
          className
        )}
        {...props}
      >
        <div className={cn("container mx-auto", containerWidths[containerWidth])}>
          {children}
        </div>
      </section>
    );
  }
);

SectionWrapper.displayName = "SectionWrapper";

export { SectionWrapper };
