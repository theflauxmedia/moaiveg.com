import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Credits from "@/components/Credits";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const galleryImages = [
    {
      src: "/food/4.jpg",
      title: "Artisanal Creations",
      description: "Each dish is a masterpiece of flavor and presentation",
      category: "Food"
    },
    {
      src: "/ambinace/5.jpg",
      title: "Elegant Dining",
      description: "Experience luxury in every detail of our restaurant",
      category: "Ambience"
    },
    {
      src: "/ambinace/4.jpg",
      title: "Sophisticated Ambiance",
      description: "Where artistry meets culinary excellence",
      category: "Ambience"
    },
    {
      src: "/food/3.jpg",
      title: "Signature Dishes",
      description: "Vegetarian cuisine elevated to fine art",
      category: "Food"
    },
    {
      src: "/ambinace/1.jpg",
      title: "Peaceful Setting", 
      description: "Drawing inspiration from nature's bounty",
      category: "Ambience"
    },
    {
      src: "/ambinace/main.jpg",
      title: "Serene Setting",
      description: "A tranquil environment for memorable dining",
      category: "Ambience"
    },
    {
      src: "/food/1.jpg",
      title: "Fresh Ingredients",
      description: "Locally sourced, seasonally inspired",
      category: "Food"
    },
    {
      src: "/food/2.jpg",
      title: "Creative Presentations",
      description: "Every plate tells a story",
      category: "Food"
    }
  ];

  const ugcImages = [
    { src: "/food/1.jpg", user: "@foodie_adventures", likes: "234" },
    { src: "/ambinace/1.jpg", user: "@dining_experience", likes: "189" },
    { src: "/food/2.jpg", user: "@veg_lover", likes: "312" },
    { src: "/ambinace/3.jpg", user: "@culinary_journey", likes: "156" },
    { src: "/food/3.jpg", user: "@restaurant_reviews", likes: "278" },
    { src: "/ambinace/4.jpg", user: "@bangalore_foodie", likes: "203" }
  ];

  const filters = ['All', 'Food', 'Ambience', 'Events'];
  const filteredImages = activeFilter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary/20 to-background">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 animate-royal-entrance shimmer-text">
            Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Immerse yourself in the visual feast of MOAI's culinary artistry. 
            Every image tells a story of passion, creativity, and exceptional dining experiences.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                variant={activeFilter === filter ? "default" : "outline"}
                className={`transition-smooth ${
                  activeFilter === filter 
                    ? 'bg-accent text-accent-foreground hover:bg-accent/90' 
                    : 'hover:bg-accent/10'
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <Card 
                key={index}
                className="group overflow-hidden gradient-card border-border/50 hover:shadow-elegant transition-smooth animate-elegant-zoom royal-border hover:royal-glow hover-lift"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={image.src}
                    alt={image.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-smooth">
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-white/90 text-sm">{image.description}</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-accent/90 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {image.category}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-[#FED6AB]/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Behind the Scenes</h2>
            <p className="text-lg text-muted-foreground">
              Take a 15-second journey through our kitchen and see how we craft our artisanal dishes
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="gradient-card border-border/50 overflow-hidden">
              <div className="relative aspect-video bg-muted flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-muted-foreground mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  <p className="text-muted-foreground">Video coming soon</p>
                  <p className="text-sm text-muted-foreground mt-2">15-second kitchen walkthrough</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* UGC Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Captured by You</h2>
            <p className="text-lg text-muted-foreground">
              See MOAI through the eyes of our guests. Share your moments with #MOAIJayanagar
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {ugcImages.map((image, index) => (
              <div key={index} className="relative group cursor-pointer animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <img 
                  src={image.src} 
                  alt="User generated content" 
                  className="w-full h-32 object-cover rounded-lg group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-smooth rounded-lg flex items-center justify-center">
                  <div className="text-white text-center">
                    <p className="text-xs font-medium">{image.user}</p>
                    <div className="flex items-center justify-center gap-1 mt-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                      <span className="text-xs">{image.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow @moai.jayanagar
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-[#FED6AB]/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6 animate-royal-entrance">
            Ready to Create Your Own Memories?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable dining experience where every moment becomes a cherished memory.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium transition-smooth hover:shadow-elegant"
            >
              Reserve Your Table
            </a>
            <a 
              href="/menu"
              className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-medium transition-smooth"
            >
              Explore Our Menu
            </a>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center shadow-lg hover:shadow-glow transition-smooth z-50 animate-fade-in-up"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      <Footer />
      <Credits />
    </div>
  );
};

export default Gallery;