import type { Transition, Variants } from "framer-motion";

/** Premium cubic-bezier — smooth deceleration */
export const premiumEase = [0.22, 1, 0.36, 1] as const;

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
  margin: "-60px" as const,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
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

export const pageTransition: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: premiumEase },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.3, ease: premiumEase },
  },
};
