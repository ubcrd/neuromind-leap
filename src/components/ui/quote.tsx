import * as React from "react";
import { Quote as QuoteIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface QuoteProps extends React.HTMLAttributes<HTMLDivElement> {
  author?: string;
  role?: string;
  size?: "md" | "lg" | "xl";
}

const Quote = React.forwardRef<HTMLDivElement, QuoteProps>(
  ({ className, children, author, role, size = "lg", ...props }, ref) => {
    const sizeClasses = {
      md: "text-lg",
      lg: "text-quote",
      xl: "text-2xl md:text-3xl"
    };
    
    const iconSizes = {
      md: "w-10 h-10",
      lg: "w-12 h-12",
      xl: "w-16 h-16"
    };
    
    return (
      <div ref={ref} className={cn("space-y-4", className)} {...props}>
        <QuoteIcon 
          className={cn(
            iconSizes[size],
            "text-brand-primary-strong mb-4"
          )} 
          strokeWidth={3}
        />
        <blockquote className={cn(
          sizeClasses[size],
          "font-['Scope_One',Georgia,serif] text-ink-deep-brown dark:text-ink-strong"
        )}>
          {children}
        </blockquote>
        {(author || role) && (
          <div className="mt-4 space-y-1">
            {author && (
              <p className="font-semibold text-ink-strong">
                {author}
              </p>
            )}
            {role && (
              <p className="text-sm text-ink-muted">
                {role}
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
);

Quote.displayName = "Quote";

export { Quote };
