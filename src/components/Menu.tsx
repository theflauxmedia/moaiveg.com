import { Card, CardContent } from "@/components/ui/card";

const Menu = () => {
  const menuCategories = [
    {
      title: "Artisanal Chats",
      items: [
        {
          name: "Creamy Avocado Chattak Puri",
          description: "A delightful fusion of creamy avocado on a crispy puri base with tangy chutneys",
          //price: "₹285"
        },
        {
          name: "Nadru Burrata Papdi Chat", 
          description: "Crispy lotus stem and fresh burrata cheese on a classic papdi with mint chutney",
          //price: "₹325"
        }
      ]
    },
    {
      title: "Small Plates",
      items: [
        {
          name: "Amaranth Coated Hara Bhara Kebab",
          description: "A healthy twist on a classic, coated in nutritious amaranth with yogurt dip",
          //price: "₹275"
        },
        {
          name: "Memory Lane Cheese Fondue",
          description: "A comforting and shareable classic, perfect for mingling with artisanal bread",
          //price: "₹425"
        }
      ]
    },
    {
      title: "Soups & Salads",
      items: [
        {
          name: "Turkish Shepherd's Salad",
          description: "A refreshing and vibrant mix of fresh vegetables with olive oil and herbs",
          // price: "₹245"
        },
        {
          name: "Creamy Corn Soup with Kurkure Chat",
          description: "A playful and textural soup experience with crispy kurkure toppings",
          // price: "₹225"
        }
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-royal-entrance">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 shimmer-text">
            An Artisanal Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every dish is crafted with passion, creativity, and the finest ingredients. 
            Discover flavours that tell a story and create memories worth sharing.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {menuCategories.map((category, index) => (
            <Card 
              key={index} 
              className="gradient-card border-border/50 hover:shadow-elegant transition-smooth animate-elegant-zoom royal-border hover:royal-glow"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="group">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-smooth">
                          {item.name}
                        </h4>
                        <span className="text-[#FED6AB] font-bold text-lg ml-4 flex-shrink-0">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                      
                      {itemIndex < category.items.length - 1 && (
                        <hr className="mt-6 border-border" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-light transition-smooth cursor-pointer">
            <a href="https://qr.mydigimenu.com/9f518a11-b937-484c-a019-0d326dc0e484">
            <span>View Complete Menu</span>
            </a>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;