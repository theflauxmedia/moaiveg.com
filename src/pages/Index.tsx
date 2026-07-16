import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Menu from "@/components/Menu";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import PressReleases from "@/components/PressReleases";
import Reservation from "@/components/Reservation";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Credits from "@/components/Credits";
import SEOHead from "@/components/SEOHead";
import OutletBanner from "@/components/ui/OutletBanner";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="MOAI Restaurant | Vegetarian Fine Dining in Jayanagar & Koramangala (Soon), Bangalore"
        description="MOAI is a premium pure vegetarian fine dining restaurant in Jayanagar, Bangalore, opening soon in Koramangala. Artisanal multi-cuisine, vegan-friendly dining for families, couples, birthdays, anniversaries, and corporate groups. Open daily 12–4 PM & 6:30–11 PM."
        canonical="https://www.moaiveg.com/"
        ogType="restaurant"
      />
      <OutletBanner />
      <header>
        <Navigation />
      </header>
      <main id="main-content">
        <Hero />
        <Philosophy />
        <Menu />
        <Experience />
        <Testimonials />
        <PressReleases />
        <Reservation />
        <FAQ />
      </main>
      <footer>
        <Footer />
        <Credits />
      </footer>
    </div>
  );
};

export default Index;
