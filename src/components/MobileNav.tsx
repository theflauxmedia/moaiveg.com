import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { premiumEase, staggerContainer, staggerItem } from "@/lib/motion";

const navLinks = [
  { href: "/menu", label: "Our Menu" },
  { href: "/#philosophy", label: "Our Philosophy" },
  { href: "/gallery", label: "Gallery" },
  { href: "/press", label: "Press" },
  { href: "/contact", label: "Contact" },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <motion.button
        onClick={toggleMenu}
        className="p-2 text-white hover:text-accent transition-smooth"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        whileTap={{ scale: 0.92 }}
      >
        <div className="w-6 h-6 relative">
          <motion.span
            className="absolute left-0 top-1 w-6 h-0.5 bg-current"
            animate={isOpen ? { rotate: 45, top: 12 } : { rotate: 0, top: 4 }}
            transition={{ duration: 0.3, ease: premiumEase }}
          />
          <motion.span
            className="absolute left-0 top-3 w-6 h-0.5 bg-current"
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="absolute left-0 top-5 w-6 h-0.5 bg-current"
            animate={isOpen ? { rotate: -45, top: 12 } : { rotate: 0, top: 20 }}
            transition={{ duration: 0.3, ease: premiumEase }}
          />
        </div>
      </motion.button>

      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              className="fixed inset-0 z-[9999] bg-[#004F00]"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: premiumEase }}
            >
              <motion.div
                className="flex h-full flex-col"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.4, ease: premiumEase }}
              >
                <div className="flex items-center justify-between border-b border-accent/20 p-6">
                  <div className="text-white">
                    <p className="text-2xl font-bold tracking-tight">MOAI</p>
                    <p className="-mt-1 text-xs opacity-80">
                      Mingle Over Artisanal Infusion
                    </p>
                  </div>
                  <motion.button
                    onClick={toggleMenu}
                    className="p-2 text-white transition-smooth hover:text-accent"
                    aria-label="Close menu"
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className="relative h-6 w-6">
                      <span className="absolute left-0 top-3 h-0.5 w-6 rotate-45 bg-current" />
                      <span className="absolute left-0 top-3 h-0.5 w-6 -rotate-45 bg-current" />
                    </div>
                  </motion.button>
                </div>

                <motion.nav
                  className="flex flex-1 flex-col items-center justify-center space-y-8"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {navLinks.map((link) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={toggleMenu}
                      className="text-2xl font-medium text-white transition-smooth hover:text-[#FED6AB]"
                      variants={staggerItem}
                      whileHover={{ x: 6 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </motion.nav>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </div>
  );
};

export default MobileNav;
