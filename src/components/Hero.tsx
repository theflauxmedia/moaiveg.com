import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden" style={{ 
      background: 'linear-gradient(180deg, #004F00 0%, #004F00 95%, rgba(255,255,255,0.1) 98%, rgba(255,255,255,0.8) 99%, white 100%)'
    }}>
      {/* Decorative Background Elements - responsive */}
      <div className="absolute inset-0">
        {/* Animated leaf patterns - smaller on mobile */}
        <div className="absolute top-16 sm:top-20 left-4 sm:left-10 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 opacity-15 sm:opacity-20 animate-float">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-primary/30">
            <path d="M50 10 C20 10, 10 40, 50 90 C90 40, 80 10, 50 10 Z" />
          </svg>
        </div>
        <div className="absolute top-32 sm:top-40 right-8 sm:right-20 w-12 sm:w-18 lg:w-24 h-12 sm:h-18 lg:h-24 opacity-10 sm:opacity-15 animate-float" style={{animationDelay: '2s'}}>
          <svg viewBox="0 0 100 100" className="w-full h-full fill-accent/30">
            <path d="M50 15 C25 15, 15 35, 35 85 C55 85, 85 65, 85 35 C85 25, 70 15, 50 15 Z" />
          </svg>
        </div>
        <div className="absolute bottom-24 sm:bottom-32 left-8 sm:left-20 w-10 sm:w-16 lg:w-20 h-10 sm:h-16 lg:h-20 opacity-8 sm:opacity-10 animate-float" style={{animationDelay: '4s'}}>
          <svg viewBox="0 0 100 100" className="w-full h-full fill-secondary/40">
            <path d="M50 20 C30 20, 20 35, 30 80 C70 80, 80 35, 50 20 Z" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-12 items-center justify-center w-full">
          {/* Text Content - Order 2 on mobile, 1 on desktop */}
          <div className="order-2 lg:order-1 space-y-6 lg:space-y-8 animate-luxury-slide text-center lg:text-left max-w-2xl mx-auto lg:mx-0 lg:pr-8">
            <div className="space-y-3 lg:space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-white animate-royal-entrance">Where Artistry</span>
                <span className="block text-white shimmer-text">Meets Flavour</span>
              </h1>
              
              <div className="flex items-center justify-center lg:justify-start space-x-3 animate-fade-in" style={{animationDelay: '0.5s'}}>
                <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
                <span className="text-base sm:text-lg text-white font-medium">Mingle Over Artisinal Infusions</span>
                <div className="w-8 sm:w-12 h-0.5 bg-gradient-to-l from-primary to-accent"></div>
              </div>
            </div>
            
            <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed animate-fade-in" style={{animationDelay: '1s'}}>
              Experience pure vegetarian cuisine like never before. MOAI invites you to 
              <span className="text-white font-medium"> Mingle Over Artisanal Infusion </span>
              in the <br/> heart of Jayanagar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-elegant-zoom -mt-2 sm:mt-0" style={{animationDelay: '1.5s'}}>
              <Button variant="hero" size="lg" className="text-[#0046D3] sm:text-lg px-6 sm:px-8 py-3 sm:py-4 royal-glow">
                Explore Our Menu
              </Button>
              <Button variant="elegant" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                Reserve a Table
              </Button>
            </div>

            {/* Organic separator with leaf motif - hidden on mobile */}
            <div className="hidden sm:flex items-center justify-center lg:justify-start space-x-4 pt-4 lg:pt-6 animate-fade-in" style={{animationDelay: '2s'}}>
              <svg className="w-5 sm:w-6 h-5 sm:h-6 fill-primary/60" viewBox="0 0 24 24">
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
              </svg>
              <div className="flex-1 h-px bg-gradient-to-r from-primary/50 via-accent/30 to-transparent"></div>
            </div>
          </div>

          {/* Images Section - Order 1 on mobile, 2 on desktop */}
          <div className="order-1 lg:order-2 relative mt-8 sm:mt-12 lg:mt-0 mb-4 lg:mb-0 flex justify-center lg:justify-start lg:pl-4">
            {/* Main image container with organic shapes */}
            <div className="relative animate-fade-in" style={{animationDelay: '0.8s'}}>
              {/* Background organic shape */}
              <div className="absolute -inset-2 lg:-inset-4 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 rounded-2xl lg:rounded-[3rem] blur-xl lg:blur-3xl"></div>
              
              {/* Primary image */}
              <div className="relative glass rounded-2xl lg:rounded-3xl overflow-hidden shadow-glow">
                <video 
                  src="/bgbd.webm"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                  onLoadedData={(e) => {
                    const video = e.target as HTMLVideoElement;
                    video.loop = true;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"></div>
              </div>
            </div>



            {/* Decorative leaf elements around images - responsive */}
            <div className="absolute top-1/4 -left-6 lg:-left-12 w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 opacity-20 lg:opacity-30 animate-float" style={{animationDelay: '0.5s'}}>
              <svg viewBox="0 0 100 100" className="w-full h-full fill-primary">
                <path d="M50 5 C20 5, 5 30, 50 95 C95 30, 80 5, 50 5 Z" />
              </svg>
            </div>
            
            <div className="absolute bottom-1/4 -right-4 lg:-right-8 w-6 sm:w-8 lg:w-12 h-6 sm:h-8 lg:h-12 opacity-15 lg:opacity-20 animate-float" style={{animationDelay: '3s'}}>
              <svg viewBox="0 0 100 100" className="w-full h-full fill-accent">
                <path d="M50 10 C30 10, 10 25, 25 90 C75 90, 90 25, 50 10 Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-fade-in hidden sm:block" style={{animationDelay: '2.5s'}}>
        <div className="animate-float">
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <p className="text-sm mt-2 text-center text-white">Discover More</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;