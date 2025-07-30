import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Credits from "@/components/Credits";
import Map from "@/components/Map";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-primary/20 to-background">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 animate-royal-entrance shimmer-text">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in">
            We'd love to hear from you. Whether you have questions about our menu, 
            want to make a reservation, or simply wish to share your experience with us.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div className="space-y-8 animate-luxury-slide">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6 shimmer-text">
                  Get in Touch
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our team is here to assist you with reservations, special requests, 
                  or any questions about our artisanal vegetarian dining experience.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <Card className="gradient-card border-border/50 hover:shadow-elegant transition-smooth royal-border">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">Visit Us</h3>
                        <p className="text-muted-foreground">
                        790/43, 9th Main Rd<br/>
                         4th Block, Jayanagar<br/>
                         Bengaluru, Karnataka 560011
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="gradient-card border-border/50 hover:shadow-elegant transition-smooth royal-border">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">Call Us</h3>
                        <p className="text-muted-foreground">
                          <span className="font-medium">080-468-10697</span><br />
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="gradient-card border-border/50 hover:shadow-elegant transition-smooth royal-border">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">Email Us</h3>
                        <p className="text-muted-foreground">
                          <span className="font-medium">moai.eripl@gmail.com</span><br />
                          </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Hours */}
              <Card className="gradient-card border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Opening Hours</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex justify-between">
                      <span className="font-medium">Open Everyday From</span>
                      <span>12:00 PM to 11:00 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="animate-elegant-zoom">
              <Card className="gradient-card border-border/50 shadow-elegant royal-border">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-primary mb-6 shimmer-text">
                    Send Us a Message
                  </h2>
                  
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input 
                          id="firstName" 
                          placeholder="Your first name"
                          className="border-border/50 focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input 
                          id="lastName" 
                          placeholder="Your last name"
                          className="border-border/50 focus:border-primary"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your.email@example.com"
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone (Optional)</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+1 (555) 123-4567"
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input 
                        id="subject" 
                        placeholder="What's this about?"
                        className="border-border/50 focus:border-primary"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us how we can help you..."
                        rows={5}
                        className="border-border/50 focus:border-primary resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full animate-bounce-elegant"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Find Us</h2>
            <p className="text-lg text-muted-foreground">
              Located in the heart of the culinary district, easily accessible by public transport
            </p>
          </div>
          
          <Card className="gradient-card border-border/50 overflow-hidden">
            <Map 
              address="790/43, 9th Main Rd, 4th Block, Jayanagar, Bengaluru, Karnataka 560011"
              coordinates={[12.925046385879309, 77.58395941415071]} // Exact restaurant coordinates
              className="rounded-lg"
            />
          </Card>
        </div>
      </section>

      <Footer />
      <Credits />
    </div>
  );
};

export default Contact;