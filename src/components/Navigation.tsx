import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import MobileNav from "./MobileNav";
import { premiumEase } from "@/lib/motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "https://qr.mydigimenu.com/9f518a11-b937-484c-a019-0d326dc0e484", label: "Our Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/press", label: "Press" },
  { href: "/contact", label: "Contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-primary focus:px-4 focus:py-2 focus:rounded focus:font-semibold"
      >
        Skip to main content
      </a>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 border-b"
        initial={false}
        animate={{
          backgroundColor: isScrolled
            ? "rgba(0, 79, 0, 0.88)"
            : "rgba(0, 79, 0, 0)",
          borderColor: isScrolled
            ? "rgba(254, 214, 171, 0.2)"
            : "rgba(254, 214, 171, 0)",
          boxShadow: isScrolled
            ? "0 4px 30px rgba(0, 0, 0, 0.12)"
            : "0 0px 0px rgba(0, 0, 0, 0)",
        }}
        transition={{ duration: 0.4, ease: premiumEase }}
        style={{ backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)" }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <motion.div
              className="text-white h-auto w-auto"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: premiumEase }}
            >
              <a href="/" className="h-auto w-auto block">
                <img
                  src="/lovable-uploads/34d5174a-8590-49de-90e8-a10dd651ed5a.png"
                  alt="MOAI Restaurant logo"
                  width="200"
                  height="96"
                  className="h-24 w-auto"
                  fetchPriority="high"
                />
              </a>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="relative text-white/80 hover:text-white font-medium py-1"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: premiumEase, delay: 0.08 * i }}
                  whileHover={{ y: -1 }}
                >
                  {link.label}
                  <motion.span
                    className="absolute -bottom-0.5 left-0 h-px bg-[#FED6AB] origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: premiumEase }}
                    style={{ width: "100%" }}
                  />
                </motion.a>
              ))}
            </div>

            <MobileNav />
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navigation;
