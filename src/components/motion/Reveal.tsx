import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  blurUp,
  reducedMotionVariants,
  smoothTransition,
  viewportOnce,
} from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variants?: Variants;
  as?: "div" | "section" | "article" | "header" | "footer";
};

const Reveal = ({
  children,
  className,
  delay = 0,
  variants = blurUp,
  as = "div",
}: RevealProps) => {
  const prefersReducedMotion = useReducedMotion();
  const Component = motion[as];
  const activeVariants = prefersReducedMotion ? reducedMotionVariants : variants;

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={activeVariants}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { ...smoothTransition, delay }
      }
    >
      {children}
    </Component>
  );
};

export default Reveal;
