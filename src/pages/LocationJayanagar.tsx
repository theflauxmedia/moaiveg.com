import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Credits from "@/components/Credits";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";

const LocationJayanagar = () => {
  const canonical = "https://www.moaiveg.com/locations/jayanagar";

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="MOAI Restaurant Jayanagar | Pure Veg Fine Dining in Bengaluru"
        description="MOAI is a premium pure vegetarian fine dining restaurant in Jayanagar, Bengaluru. Ideal for families, couples, birthdays, anniversaries, and corporate group dining, with vegan-friendly options available."
        canonical={canonical}
        ogType="restaurant"
        breadcrumbs={[
          { name: "Home", item: "https://www.moaiveg.com/" },
          { name: "Locations", item: "https://www.moaiveg.com/locations/jayanagar" },
          { name: "Jayanagar", item: canonical },
        ]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "MOAI Restaurant",
          url: "https://www.moaiveg.com",
          image: ["https://www.moaiveg.com/og-image.jpg"],
          telephone: "+918047363493",
          priceRange: "₹₹₹",
          servesCuisine: ["Vegetarian", "Vegan", "Fine Dining", "Multi-cuisine"],
          address: {
            "@type": "PostalAddress",
            streetAddress: "790/43, 9th Main Rd, 4th Block, Jayanagar",
            addressLocality: "Bengaluru",
            addressRegion: "Karnataka",
            postalCode: "560011",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 12.9250249,
            longitude: 77.5839511,
          },
          areaServed: [
            { "@type": "AdministrativeArea", name: "Jayanagar" },
            { "@type": "AdministrativeArea", name: "Koramangala" },
            { "@type": "City", name: "Bengaluru" },
          ],
        }}
      />

      <header>
        <Navigation />
      </header>

      <main id="main-content">
        <section className="pt-24 pb-12 bg-gradient-to-b from-primary/20 to-background">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 animate-royal-entrance shimmer-text">
              MOAI Jayanagar
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in">
              Premium pure vegetarian fine dining in Jayanagar, Bengaluru, crafted for celebrations,
              dates, and memorable family dining.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-8">
            <Card className="gradient-card border-border/50">
              <CardContent className="p-8 space-y-4">
                <h2 className="text-3xl font-bold text-primary">Address</h2>
                <p className="text-muted-foreground">
                  790/43, 9th Main Rd, 4th Block, Jayanagar, Bengaluru, Karnataka 560011
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="tel:08047363493"
                    className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-3 rounded-lg font-medium hover:bg-accent/90 transition-smooth"
                  >
                    Call: 08047363493
                  </a>
                  <a
                    href="https://maps.google.com/?q=12.9250249,77.5839511"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-primary text-primary px-5 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-smooth"
                  >
                    Get Directions
                  </a>
                </div>
                <p className="text-sm text-muted-foreground pt-4">
                  Open daily: 12–4 PM and 6:30–11 PM.
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-card border-border/50 overflow-hidden">
              <div className="h-96 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4399!2d77.5839511!3d12.9250249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae151bcbeb2d51:0xf4bad52596dbecf3!2sMoai%20-%20Redefined%20Vegetarian%20Dining!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MOAI Restaurant Jayanagar Location"
                />
              </div>
            </Card>
          </div>
        </section>

        <section className="py-12 bg-gradient-to-r from-primary/5 to-[#FED6AB]/5">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <h2 className="text-4xl font-bold text-primary">Serving Bengaluru</h2>
              <p className="text-lg text-muted-foreground">
                If you’re searching for the best vegetarian fine dining near{" "}
                <span className="font-medium text-foreground">Jayanagar</span> or{" "}
                <span className="font-medium text-foreground">Koramangala</span>, MOAI is a
                short drive away, perfect for date nights, birthdays, and corporate dinners.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <Footer />
        <Credits />
      </footer>
    </div>
  );
};

export default LocationJayanagar;

