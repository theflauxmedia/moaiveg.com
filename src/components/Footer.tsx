import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-primary to-primary-glow text-white py-16">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
          {/* Logo & About */}
          <div className="lg:col-span-2 space-y-6">
            <div className="text-center">
              <img 
                src="/lovable-uploads/34d5174a-8590-49de-90e8-a10dd651ed5a.png" 
                alt="MOAI Logo" 
                className="h-20 w-auto mb-2"
              />
            </div>
            <p className="text-white/90 leading-relaxed max-w-md">
              Where culinary artistry meets sustainable dining. Experience the finest vegetarian cuisine 
              crafted with passion, creativity, and the freshest ingredients in an atmosphere of refined elegance.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" className="text-black border-white/30 hover:bg-white/10 text:black">
                Reserve Now
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
              <a href="/menu">
              View Menu</a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Quick Links</h4>
            <nav className="space-y-3">
              <a href="/" className="block text-white/80 hover:text-white transition-smooth">Home</a>
              <a href="/menu" className="block text-white/80 hover:text-white transition-smooth">Our Menu</a>
              <a href="/gallery" className="block text-white/80 hover:text-white transition-smooth">Gallery</a>
              <a href="/contact" className="block text-white/80 hover:text-white transition-smooth">Contact</a>
              <a href="#reservation" className="block text-white/80 hover:text-white transition-smooth">Reservations</a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-white">Contact</h4>
            <div className="space-y-4 text-white/90">
              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-medium">790/43, 9th Main Rd 4th Block, Jayanagar, </p>
                  <p className="text-sm">Bengaluru, Karnataka 560011</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <p>080-468-10697</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <p>moai.eripl@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hours & Social */}
        <div className="border-t border-white/20 pt-8 grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Timings</h4>
            <div className="space-y-2 text-white/90">
              <div className="flex justify-between">
                <span>12:30 PM to 3:30 PM <br/>  <span>7:00 PM to 11:00 PM</span></span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end md:items-end md:justify-end">
            <h4 className="text-lg font-bold text-white mb-4 text-right">Follow Us</h4>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-smooth">
                <a target="new" href="https://www.instagram.com/moai.jayanagar/?hl=en">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                </a>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white/70 text-sm">
            © 2025 MOAI Restaurant. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-white/70">
            <a href="/privacy" className="hover:text-white transition-smooth">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-smooth">Terms of Service</a>
            <a href="/accessibility" className="hover:text-white transition-smooth">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;