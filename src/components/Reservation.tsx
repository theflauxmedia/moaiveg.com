import { Button } from "@/components/ui/button";

const Reservation = () => {
  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-royal-entrance">
            Join Us for an 
            <span className="text-accent block shimmer-text">Unforgettable Meal</span>
          </h2>
          
          <p className="text-xl mb-12 opacity-90 leading-relaxed">
            Ready to embark on a culinary journey? Reserve your table at MOAI and 
            experience the art of vegetarian dining in the heart of Jayanagar.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-elegant-zoom">
            <Button variant="reservation" size="lg" className="text-lg px-10 py-4 royal-glow animate-bounce-elegant">
              Reserve Your Table
            </Button>
            <div className="flex items-center gap-4 text-primary-foreground/80">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Or call: 080-468-10697</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;