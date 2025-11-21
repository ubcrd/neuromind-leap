/**
 * Framer Motion Animation Presets
 * The NeuroSpace Design System v2
 */

import { Variants } from "framer-motion";

// Hover effects
export const hoverScale = {
  scale: 1.02,
  transition: { duration: 0.2, ease: "easeOut" }
};

export const hoverScaleLarge = {
  scale: 1.05,
  transition: { duration: 0.25, ease: "easeOut" }
};

export const hoverScaleSubtle = {
  scale: 1.01,
  transition: { duration: 0.15, ease: "easeOut" }
};

// Entrance animations
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const fadeInUpFast: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

// Stagger animations
export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const staggerContainerFast: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0
    }
  }
};

// Button micro-interactions
export const buttonTap = {
  scale: 0.95,
  transition: { duration: 0.1 }
};

export const buttonHover = {
  scale: 1.02,
  transition: { duration: 0.2, ease: "easeOut" }
};

// Card animations
export const cardHover = {
  scale: 1.02,
  boxShadow: "0 12px 32px rgba(29, 28, 28, 0.12)",
  transition: { duration: 0.2, ease: "easeOut" }
};

export const cardHoverSubtle = {
  y: -4,
  boxShadow: "0 12px 32px rgba(29, 28, 28, 0.12)",
  transition: { duration: 0.2, ease: "easeOut" }
};

// Icon animations
export const iconHover = {
  rotate: 5,
  scale: 1.1,
  transition: { duration: 0.2, ease: "easeOut" }
};

export const iconRotate = {
  rotate: 360,
  transition: { duration: 0.5, ease: "easeInOut" }
};

// Tile animations (for highlights)
export const tileHover = {
  scale: 1.02,
  boxShadow: "0 16px 40px rgba(29, 28, 28, 0.15)",
  transition: { duration: 0.25, ease: "easeOut" }
};

// Arrow animation (for CTAs)
export const arrowSlide = {
  x: 4,
  transition: { duration: 0.2, ease: "easeOut" }
};

// Underline animation variant
export const underlineExpand: Variants = {
  initial: { scaleX: 0, originX: 1 },
  animate: { 
    scaleX: 1, 
    originX: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

// Slide animations
export const slideInFromRight: Variants = {
  initial: { x: 100, opacity: 0 },
  animate: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export const slideInFromLeft: Variants = {
  initial: { x: -100, opacity: 0 },
  animate: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};
