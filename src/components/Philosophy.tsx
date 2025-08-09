import { useEffect, useState } from 'react';

const Philosophy = () => {
  const images = [
    '/food/1.jpg',
    '/food/2.jpg',
    '/food/3.jpg',
    '/food/4.jpg',
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <section id="philosophy" className="pt-8 pb-20 bg-white relative">
      {/* Stats Section */}
      <div className="mb-20 mt-{-12px} flex flex-wrap justify-center gap-8">
          {[
            { number: "100+", label: "Artisanal Dishes" },
            { number: "4.8★", label: "Guest Rating" },
            {number:"1000+", label:"Happy Customers"}
          ].map((stat, index) => (
            <div key={index} className="text-center animate-royal-entrance min-w-[200px] hover:scale-105 transition-smooth" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2 shimmer-text">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      {/* Gradient overlay to smooth transition from Hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white pointer-events-none"></div>
      
              <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-royal-entrance">
                Our Philosophy:
                <span className="block text-accent shimmer-text">Mingle Over Artisanal Infusions</span>
              </h2>
              
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
                <p className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  MOAI was born from a desire to elevate vegetarian dining into an art form. 
                  We believe in creating a serene oasis where guests can escape the everyday 
                  and connect over exceptional food.
                </p>
                
                <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  Our philosophy is simple: source the 
                  <span className="font-bold text-brand-bronze"> freshest ingredients</span>, 
                  blend global techniques with familiar traditions, and present every dish with 
                  <span className="font-bold text-brand-bronze"> creative passion</span>. 
                  It's more than a meal; it's an experience designed to be <br/>shared and savoured.
                </p>
                
                <p className="text-primary font-medium animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                  Every plate tells a story, every flavor sparks conversation, 
                  and every moment spent here enriches the soul.
                </p>
              </div>
            </div>
            
            {/* Key Values */}
            <div className="grid sm:grid-cols-3 gap-6 animate-elegant-zoom">
              <div className="text-center p-4 group hover:scale-105 transition-smooth animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3 group-hover:shadow-glow transition-smooth">
                  <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-semibold text-primary mb-1">Fresh</h3>
                <p className="text-sm text-muted-foreground">Locally sourced ingredients</p>
              </div>
              
              <div className="text-center p-4 group hover:scale-105 transition-smooth animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-3 group-hover:shadow-glow transition-smooth">
                  <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-accent mb-1">Creative</h3>
                <p className="text-sm text-muted-foreground">Innovative presentations</p>
              </div>
              
              <div className="text-center p-4 group hover:scale-105 transition-smooth animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <div className="w-12 h-12 bg-wood rounded-full flex items-center justify-center mx-auto mb-3 group-hover:shadow-glow transition-smooth">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-wood-dark mb-1">Passionate</h3>
                <p className="text-sm text-muted-foreground">Crafted with love</p>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="group relative overflow-hidden rounded-2xl shadow-elegant h-[600px]">
              {images.map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt="Artisanal vegetarian dishes"
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  } group-hover:scale-105`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-glow animate-bounce-elegant royal-border">
              <div className="text-center">
                <p className="text-2xl font-bold shimmer-text">100%</p>
                <p className="text-sm font-medium">Pure Vegetarian</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;