import { motion, type Variants } from "framer-motion";
import {
  fadeUp,
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
  variants = fadeUp,
  as = "div",
}: RevealProps) => {
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
      transition={{ ...smoothTransition, delay }}
    >
      {children}
    </Component>
  );
};

export default Reveal;
