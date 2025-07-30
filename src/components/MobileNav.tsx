import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface MobileNavProps {
  isScrolled: boolean;
}

const MobileNav = ({ isScrolled }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Toggle menu clicked, current state:", isOpen);
    setIsOpen((prev) => !prev);
  };

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
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="p-2 text-white hover:text-accent transition-colors duration-300 relative z-[10001]"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <div className="w-6 h-6 relative">
          <span
            className={`absolute left-0 top-1 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
              isOpen ? "rotate-45 top-3" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-3 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-5 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
              isOpen ? "-rotate-45 top-3" : ""
            }`}
          />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[99999]"
          style={{
            backgroundColor: 'hsl(140 60% 20%)',
            minHeight: '100vh',
            width: '100vw'
          }}
        >
          <div className="flex flex-col h-full w-full">
            {/* Header with close button */}
            <div 
              className="flex justify-between items-center p-6 border-b border-accent/20"
              style={{ backgroundColor: 'hsl(140 60% 20%)' }}
            >
              <div className="flex items-center space-x-3 text-white">
                <img 
                  src="/lovable-uploads/34d5174a-8590-49de-90e8-a10dd651ed5a.png" 
                  alt="MOAI Logo" 
                  className="h-15 w-auto"
                />
              </div>
              <button
                onClick={toggleMenu}
                className="p-2 mb-3  text-white font-bold hover:text-accent transition-colors duration-300 mb-2"
                aria-label="Close menu"
              >
                <div className="w-6 h-6 relative">
                  <span className="absolute left-0 top-3 w-6 h-0.5 bg-current rotate-45 transition-transform duration-300" />
                  <span className="absolute left-0 top-3 w-6 h-0.5 bg-current -rotate-45 transition-transform duration-300" />
                </div>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 flex flex-col justify-center items-center space-y-8 px-6">
              {[
                { href: "/", label: "Home"},
                { href: "/menu", label: "Our Menu" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact" },
              ].map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={toggleMenu}
                  className="text-white text-2xl font-medium hover:text-accent transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-accent/10"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-8 w-full max-w-xs mx-4">
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full"
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