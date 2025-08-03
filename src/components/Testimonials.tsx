import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Anunay Thakur",
    rating: 5,
    content: "A great spot for vegetarians with flavorful food and a delightful ambiance. What stood out was the exceptional service by Vicky, whose attentiveness left a lasting impression. Hope they maintain their high standards.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVcWp7X0u7t-NUyBPhr57XAblDSX4qmbK5nvhFIXquREXeYh4WwVg=w144-h144-p-rp-mo-ba3-br100"
  },
  {
    id: 2,
    name: "Sindhu Sudeendra",
    rating: 5,
    content: "Absolutely loved this place! The veg menu is amazing — the ghee roast broccoli was unique, the Thai noodles had a perfect kick, and the Khalakund Edifice was mouthwatering. Great food, reasonable prices, and a convenient main-road location with valet parking. A must-visit for veg lovers!",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWUFU_m1k6SI9VFbPp4vdOM33FqSFw_cShd3cZ6UgIqGygOWjP3=w144-h144-p-rp-mo-ba4-br100"
  },
  {
    id: 3,
    name: "Pratiksha Mahendra",
    rating: 5,
    content: "Moai is one of the most peaceful and aesthetic veg spots in Bangalore. Beautiful interiors, calming vibes, and simple yet delicious food — perfect for quiet conversations or solo visits. A must-visit for lovers of good veg food and ambiance!",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWdGXCrRp-QBY6fo5_ZxI2BwN48XM6EwCaLEiySsoO0uLcQkzhD=w144-h144-p-rp-mo-ba5-br100"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
    ));
  };

  if (isMobile) {
    return (
      <section className="py-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-royal-entrance">
              What Our Guests
              <span className="block text-accent shimmer-text">Say About Us</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-luxury-slide">
              Discover the stories and experiences of those who have savored our artisanal vegetarian creations
            </p>
          </div>

          {/* Mobile Carousel */}
          <div className="relative max-w-md mx-auto">
            <div className="overflow-hidden rounded-2xl shadow-elegant">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0">
                    <div className="bg-card p-8 rounded-2xl border border-border/50 hover:shadow-glow transition-smooth group">
                      {/* Rating */}
                      <div className="flex justify-center mb-6">
                        <div className="flex gap-1">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>

                      {/* Quote */}
                      <div className="relative mb-8">
                        <svg 
                          className="w-8 h-8 text-accent/30 absolute -top-2 -left-2" 
                          fill="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                        </svg>
                        <p className="text-lg leading-relaxed text-muted-foreground italic pl-8">
                          "{testimonial.content}"
                        </p>
                      </div>

                      {/* Author */}
                      <div className="flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent/30 mr-4 group-hover:border-accent transition-smooth">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-center">
                          <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-smooth group"
            >
              <ChevronLeft className="w-5 h-5 text-primary group-hover:text-accent transition-smooth" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-smooth group"
            >
              <ChevronRight className="w-5 h-5 text-primary group-hover:text-accent transition-smooth" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-smooth ${
                    index === currentIndex 
                      ? 'bg-accent w-6' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Desktop Layout
  return (
    <section className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-royal-entrance">
            What Our Guests
            <span className="block text-accent shimmer-text">Say About Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-luxury-slide">
            Discover the stories and experiences of those who have savored our artisanal vegetarian creations
          </p>
        </div>

        {/* Desktop Testimonials Grid */}
        <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
                             className={`group transition-all duration-500 ease-in-out ${
                 index === 1 
                   ? 'col-span-1 scale-100 z-10 hover:scale-95 hover:shadow-glow -mt-8' 
                   : 'col-span-1 scale-90 opacity-80 hover:scale-95 hover:opacity-100'
               }`}
            >
              <div className="bg-card p-8 rounded-2xl border border-border/50 hover:shadow-glow transition-all duration-500 ease-in-out group-hover:border-accent/30 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute top-4 right-4 w-16 h-16 border border-accent/20 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border border-accent/20 rounded-full"></div>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  <div className="flex gap-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                {/* Quote */}
                <div className="relative mb-8">
                  <svg 
                    className="w-8 h-8 text-accent/30 absolute -top-2 -left-2 group-hover:text-accent/50 transition-colors duration-300" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <p className={`leading-relaxed text-muted-foreground italic pl-8 group-hover:text-foreground transition-colors duration-300 ${
                    index === 1 ? 'text-lg' : 'text-base'
                  }`}>
                    "{testimonial.content}"
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center justify-center">
                  <div className={`rounded-full overflow-hidden border-2 border-accent/30 mr-4 group-hover:border-accent transition-all duration-300 ${
                    index === 1 ? 'w-16 h-16' : 'w-12 h-12'
                  }`}>
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-center">
                    <h4 className={`font-semibold text-primary group-hover:text-accent transition-colors duration-300 ${
                      index === 1 ? 'text-lg' : 'text-base'
                    }`}>
                      {testimonial.name}
                    </h4>
                    <p className={`text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300 ${
                      index === 1 ? 'text-sm' : 'text-xs'
                    }`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
                 {/* Write Review Button */}
         <div className="flex justify-center mt-16">
           <button className="bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold hover:bg-accent/90 transition-smooth shadow-elegant hover:shadow-glow group">
             <span className="flex items-center gap-2">
               <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
               </svg>
               Write a Review
             </span>
           </button>
         </div>
      </div>
    </section>
  );
};

export default Testimonials; 