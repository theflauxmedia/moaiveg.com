import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

/**
 * Thin brand-colored progress bar along the top of the viewport.
 * Gives a sense of depth while scrolling longer pages.
 */
const ScrollProgress = () => {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  if (prefersReducedMotion) return null;

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[60] h-[2.5px] origin-left bg-gradient-to-r from-[#FED6AB] via-[#f5c78a] to-[#FED6AB]"
      style={{ scaleX }}
      aria-hidden
    />
  );
};

export default ScrollProgress;
