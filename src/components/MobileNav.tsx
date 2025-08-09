import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface MobileNavProps {
  isScrolled: boolean;
}

const MobileNav = ({ isScrolled }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="p-2 text-white hover:text-accent transition-smooth"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <div className="w-6 h-6 relative">
          <span
            className={`absolute left-0 top-1 w-6 h-0.5 bg-current transition-all duration-300 ${
              isOpen ? "rotate-45 top-3" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-3 w-6 h-0.5 bg-current transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-5 w-6 h-0.5 bg-current transition-all duration-300 ${
              isOpen ? "-rotate-45 top-3" : ""
            }`}
          />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[9999] bg-primary/95 backdrop-blur-lg"
        >
          <div className="flex flex-col h-full">
            {/* Header with close button */}
            <div className="flex justify-between items-center p-6 border-b border-accent/20">
              <div className="text-white">
                <h1 className="text-2xl font-bold tracking-tight">MOAI</h1>
                <p className="text-xs opacity-80 -mt-1">
                  Mingle Over Artisanal Infusion
                </p>
              </div>
              <button
                onClick={toggleMenu}
                className="p-2 text-white hover:text-accent transition-smooth"
                aria-label="Close menu"
              >
                <div className="w-6 h-6 relative">
                  <span className="absolute left-0 top-3 w-6 h-0.5 bg-current rotate-45" />
                  <span className="absolute left-0 top-3 w-6 h-0.5 bg-current -rotate-45" />
                </div>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 flex flex-col justify-center items-center space-y-8">
              {[
                { href: "#menu", label: "Our Menu" },
                { href: "#philosophy", label: "Our Philosophy" },
                { href: "#gallery", label: "Gallery" },
                { href: "#contact", label: "Contact" },
              ].map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={toggleMenu}
                  className="text-white text-2xl font-medium hover:text-accent transition-smooth animate-luxury-slide motion-safe:animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-8">
                <Button
                  variant="hero"
                  size="lg"
                  className="animate-royal-entrance motion-safe:animate-fade-in"
                  style={{ animationDelay: "0.4s" }}
                  onClick={toggleMenu}
                >
                  Reserve a Table
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;