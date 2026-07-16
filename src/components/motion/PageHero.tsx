import { motion } from "framer-motion";
import {
  fadeUp,
  premiumEase,
  staggerContainer,
  staggerItem,
} from "@/lib/motion";

type PageHeroProps = {
  title: string;
  description: string;
  badge?: React.ReactNode;
  children?: React.ReactNode;
};

const PageHero = ({ title, description, badge, children }: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/20 via-primary/5 to-background pb-16 pt-24">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-1/4 top-10 h-48 w-48 rounded-full bg-accent/15 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 h-56 w-56 rounded-full bg-primary/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <motion.div
        className="container relative z-10 mx-auto px-6 text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {badge && (
          <motion.div className="mb-5 flex justify-center" variants={staggerItem}>
            {badge}
          </motion.div>
        )}

        <motion.h1
          className="mb-6 text-5xl font-bold text-primary md:text-7xl shimmer-text"
          variants={fadeUp}
          transition={{ duration: 0.8, ease: premiumEase }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground"
          variants={staggerItem}
        >
          {description}
        </motion.p>

        {children && (
          <motion.div className="mt-12" variants={staggerItem}>
            {children}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default PageHero;
