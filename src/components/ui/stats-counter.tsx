import * as React from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export interface StatsCounterProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  suffix?: string;
  duration?: number;
  format?: "number" | "decimal";
}

export const StatsCounter = React.forwardRef<HTMLDivElement, StatsCounterProps>(
  ({ value, suffix = "", duration = 2, format = "number", className, ...props }, ref) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => {
      if (format === "decimal") {
        return latest.toFixed(1);
      }
      return Math.round(latest).toLocaleString();
    });
    const elementRef = useRef<HTMLDivElement>(null);
    const [isInView, setIsInView] = React.useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isInView) {
            setIsInView(true);
          }
        },
        { threshold: 0.5 }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => observer.disconnect();
    }, [isInView]);

    useEffect(() => {
      if (isInView) {
        const controls = animate(count, value, { duration });
        return controls.stop;
      }
    }, [isInView, count, value, duration]);

    return (
      <div ref={elementRef} className={cn("tabular-nums", className)} {...props}>
        <motion.span>{rounded}</motion.span>
        {suffix && <span>{suffix}</span>}
      </div>
    );
  }
);

StatsCounter.displayName = "StatsCounter";
