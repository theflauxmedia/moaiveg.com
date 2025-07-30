import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import MobileNav from "./MobileNav";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled 
          ? "bg-primary/50 backdrop-blur-md shadow-elegant border-b border-[#FED6AB]/20" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-white animate-royal-entrance h-auto w-auto">
            <a href="/" className="h-auto w-auto">
            <img 
              src="/lovable-uploads/34d5174a-8590-49de-90e8-a10dd651ed5a.png" 
              alt="MOAI Logo" 
              className="h-24 w-auto"
            />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
          <a 
              href="/" 
              className="text-white/80 hover:text-white transition-smooth font-medium"
            >
              Home
            </a>
            <a 
              href="https://qr.mydigimenu.com/9f518a11-b937-484c-a019-0d326dc0e484" 
              className="text-white/80 hover:text-white transition-smooth font-medium"
            >
              Our Menu
            </a>
            <a 
              href="/gallery" 
              className="text-white/80 hover:text-white transition-smooth font-medium"
            >
              Gallery
            </a>
            <a 
              href="/contact" 
              className="text-white/80 hover:text-white transition-smooth font-medium"
            >
              Contact
            </a>
          </div>

          {/* Desktop Reservation Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="lg" className="animate-bounce-elegant">
              Reserve a Table
            </Button>
          </div>

          {/* Mobile Navigation */}
          <MobileNav isScrolled={isScrolled} />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;