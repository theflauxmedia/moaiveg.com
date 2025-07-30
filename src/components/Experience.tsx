import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "A Serene Ambiance",
      description: "Step into an oasis of calm. Our green-themed decor is designed to soothe the senses and provide the perfect backdrop for your dining experience.",
      image: "/ambinace/3.jpg",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Globally Inspired Cuisine",
      description: "Our chefs travel the world through flavour, bringing you innovative vegetarian dishes that are both surprising and delightfully familiar.",
      image: "/food/2.jpg",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Perfect for Gatherings",
      description: "MOAI is a place to connect. Whether it's a quiet dinner or a celebration, our space is designed for you to mingle over artisanal infusion.",
      image: "/ambinace/1.jpg",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-royal-entrance">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 shimmer-text">
            The MOAI Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            More than just a meal, MOAI offers a complete sensory journey where 
            every detail has been thoughtfully crafted to create unforgettable moments.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-0 shadow-elegant hover:shadow-glow transition-smooth animate-luxury-slide royal-border hover:royal-glow"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={experience.image} 
                  alt={experience.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                
                {/* Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground shadow-glow animate-bounce-elegant">
                  {experience.icon}
                </div>
              </div>
              
              <CardContent className="p-8 bg-card">
                <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-primary-light transition-smooth">
                  {experience.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {experience.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "100+", label: "Artisanal Dishes" },
            { number: "4.8★", label: "Guest Rating" },
            { number: "1+", label: "Years Serving" },
            { number: "1000+", label: "Happy Guests" }
          ].map((stat, index) => (
            <div key={index} className="text-center animate-royal-entrance" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2 shimmer-text">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;