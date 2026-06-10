import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Credits from "@/components/Credits";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";

const LocationKoramangala = () => {
  const canonical = "https://www.moaiveg.com/locations/koramangala";

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="MOAI Restaurant Koramangala | Premium Veg Fine Dining (Coming Soon)"
        description="MOAI is expanding to Koramangala, Bengaluru. Until then, visit our Jayanagar restaurant for premium pure vegetarian fine dining, ideal for celebrations, couples, and corporate group dining."
        canonical={canonical}
        ogType="restaurant"
        breadcrumbs={[
          { name: "Home", item: "https://www.moaiveg.com/" },
          { name: "Locations", item: "https://www.moaiveg.com/locations/koramangala" },
          { name: "Koramangala", item: canonical },
        ]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "MOAI Restaurant Koramangala (Coming Soon)",
          url: canonical,
          description:
            "MOAI is expanding to Koramangala, Bengaluru. Visit our Jayanagar restaurant in the meantime.",
          about: [
            { "@type": "Thing", name: "Vegetarian fine dining" },
            { "@type": "Place", name: "Koramangala" },
            { "@type": "Place", name: "Bengaluru" },
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
              MOAI Koramangala
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in">
              We’re planning to open a branch in Koramangala. For now, our flagship in Jayanagar is
              ready to host your next celebration.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-8">
            <Card className="gradient-card border-border/50">
              <CardContent className="p-8 space-y-4">
                <h2 className="text-3xl font-bold text-primary">Koramangala branch</h2>
                <p className="text-muted-foreground">
                  Opening soon in Koramangala, Bengaluru. We’ll announce the exact address and
                  launch date here.
                </p>
                <div className="pt-2 space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Want updates? Contact us and we’ll keep you posted.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-3 rounded-lg font-medium hover:bg-accent/90 transition-smooth"
                    >
                      Contact MOAI
                    </a>
                    <a
                      href="/locations/jayanagar"
                      className="inline-flex items-center gap-2 border border-primary text-primary px-5 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-smooth"
                    >
                      Visit Jayanagar now
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-card border-border/50">
              <CardContent className="p-8 space-y-4">
                <h2 className="text-3xl font-bold text-primary">Best veg fine dining near Koramangala</h2>
                <p className="text-muted-foreground">
                  If you’re in Koramangala today and looking for premium vegetarian fine dining in
                  Bengaluru, our Jayanagar restaurant is a popular choice for date nights,
                  birthdays, anniversaries, and corporate dinners.
                </p>
                <p className="text-sm text-muted-foreground">
                  Open daily: 12–4 PM and 6:30–11 PM.
                </p>
              </CardContent>
            </Card>
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

export default LocationKoramangala;

