import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Credits from "@/components/Credits";
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const galleryImages = [
    {
      src: "/food/4.jpg",
      title: "Artisanal Creations",
      description: "Each dish is a masterpiece of flavor and presentation"
    },
    {
      src: "/ambinace/5.jpg",
      title: "Elegant Dining",
      description: "Experience luxury in every detail of our restaurant"
    },
    {
      src: "/ambinace/4.jpg",
      title: "Sophisticated Ambiance",
      description: "Where artistry meets culinary excellence"
    },
    {
      src: "/food/3.jpg",
      title: "Signature Dishes",
      description: "Vegetarian cuisine elevated to fine art"
    },
    {
      src: "/ambinace/1.jpg",
      title: "Peacefull", 
      description: "Drawing inspiration from nature's bounty"
    },
    {
      src: "/ambinace/main.jpg",
      title: "Serene Setting",
      description: "A tranquil environment for memorable dining"
    }
  ];

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

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <Card 
                key={index}
                className="group overflow-hidden gradient-card border-border/50 hover:shadow-elegant transition-smooth animate-elegant-zoom royal-border hover:royal-glow"
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
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
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

      <Footer />
      <Credits />
    </div>
  );
};

export default Gallery;