import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface SectionCarouselProps {
  children: React.ReactNode[];
  showDots?: boolean;
  showArrows?: boolean;
  arrowPosition?: 'inside' | 'outside' | 'floating';
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

export const SectionCarousel: React.FC<SectionCarouselProps> = ({
  children,
  showDots = true,
  showArrows = true,
  arrowPosition = 'floating',
  autoPlay = false,
  autoPlayInterval = 5000,
  className,
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    const newIndex = currentIndex + newDirection;
    if (newIndex >= 0 && newIndex < children.length) {
      setDirection(newDirection);
      setCurrentIndex(newIndex);
    }
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-play functionality
  React.useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % children.length;
      setDirection(1);
      setCurrentIndex(nextIndex);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, currentIndex, children.length]);

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        paginate(-1);
      } else if (e.key === "ArrowRight") {
        paginate(1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  const arrowClasses = {
    floating: "fixed top-1/2 -translate-y-1/2 z-50",
    inside: "absolute top-1/2 -translate-y-1/2 z-30",
    outside: "absolute top-1/2 -translate-y-1/2 -translate-x-full z-10",
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Carousel Content */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          {children[currentIndex]}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      {showArrows && (
        <>
          {/* Left Arrow */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => paginate(-1)}
            disabled={currentIndex === 0}
            className={cn(
              arrowClasses[arrowPosition],
              "left-6 w-14 h-14 rounded-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] border-none hover:bg-brand-primary hover:text-white disabled:opacity-0 transition-all duration-300",
              currentIndex === 0 && "pointer-events-none"
            )}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          {/* Right Arrow */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => paginate(1)}
            disabled={currentIndex === children.length - 1}
            className={cn(
              arrowClasses[arrowPosition],
              "right-6 w-14 h-14 rounded-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] border-none hover:bg-brand-primary hover:text-white disabled:opacity-0 transition-all duration-300",
              currentIndex === children.length - 1 && "pointer-events-none"
            )}
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </>
      )}

      {/* Dot Indicators */}
      {showDots && (
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "rounded-full transition-all duration-300 hover:scale-110",
                index === currentIndex
                  ? "w-10 h-3 bg-brand-primary"
                  : "w-3 h-3 bg-ink-muted/40 hover:bg-ink-muted"
              )}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex}
            />
          ))}
        </div>
      )}
    </div>
  );
};
