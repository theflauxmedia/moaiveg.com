import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // Adjust speed as needed
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/bgbd.webm"
        autoPlay
        loop
        muted
        playsInline
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-royal-entrance">
          Where Artistry 
          <span className="block text-accent shimmer-text">Meets Flavour</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-luxury-slide font-light leading-relaxed">
          Experience pure vegetarian cuisine like never before. MOAI invites you to 
          <span className="text-accent font-medium"> Mingle Over Artisanal Infusion </span>
          in the heart of Jayanagar.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-elegant-zoom">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4 royal-glow">
            Explore Our Menu
          </Button>
          <Button 
            variant="elegant" 
            size="lg" 
            className="text-lg px-8 py-4 bg-white/10 text-white border-white/30 hover:bg-white/20 royal-border"
          >
            Reserve a Table
          </Button>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/60">
        <div className="animate-float">
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <p className="text-sm mt-2">Scroll to discover</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;