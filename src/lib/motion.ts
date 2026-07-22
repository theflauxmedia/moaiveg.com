import type { Transition, Variants } from "framer-motion";

/** Premium cubic-bezier — smooth deceleration */
export const premiumEase = [0.22, 1, 0.36, 1] as const;

/** Soft spring for interactive elements */
export const softSpring: Transition = {
  type: "spring",
  stiffness: 280,
  damping: 24,
  mass: 0.8,
};

/** Snappy spring for taps / micro-interactions */
export const snappySpring: Transition = {
  type: "spring",
  stiffness: 420,
  damping: 28,
};

export const smoothTransition: Transition = {
  duration: 0.7,
  ease: premiumEase,
};

export const quickTransition: Transition = {
  duration: 0.45,
  ease: premiumEase,
};

export const viewportOnce = {
  once: true,
  margin: "-80px 0px" as const,
  amount: 0.2 as const,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0 },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
};

/** Soft blur + rise — feels more premium on section headers */
export const blurUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.06,
    },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.04,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: smoothTransition,
  },
};

export const staggerItemScale: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: softSpring,
  },
};

export const pageTransition: Variants = {
  initial: { opacity: 0, y: 16, filter: "blur(4px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: premiumEase },
  },
  exit: {
    opacity: 0,
    y: -12,
    filter: "blur(3px)",
    transition: { duration: 0.28, ease: premiumEase },
  },
};

/** Instant variants when user prefers reduced motion */
export const reducedMotionVariants: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
  initial: { opacity: 1 },
  animate: { opacity: 1 },
  exit: { opacity: 1 },
};

export const hoverLift = {
  y: -8,
  transition: softSpring,
};

export const hoverScale = {
  scale: 1.03,
  transition: softSpring,
};

export const tapPress = {
  scale: 0.97,
  transition: snappySpring,
};
