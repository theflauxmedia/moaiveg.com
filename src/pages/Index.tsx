import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Menu from "@/components/Menu";
import Experience from "@/components/Experience";
import Reservation from "@/components/Reservation";
import Footer from "@/components/Footer";
import Credits from "@/components/Credits";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Philosophy />
      <Menu />
      <Experience />
      <Reservation />
      <Footer />
      <Credits />
    </div>
  );
};

export default Index;
