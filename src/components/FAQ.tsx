import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do you offer Jain and vegan options?",
      answer: "Yes, we offer Jain and vegan menu options as well. As of now, the selections are limited. Please check with our team for the day's availability."
    },
    {
      question: "Do you offer valet parking?",
      answer: "Yes, we provide complimentary valet parking service for all our guests. Our valet service is available during all dining hours and ensures a convenient parking experience."
    },
   
    {
      question: "Is MOAI pet-friendly?",
      answer: "While we love animals, we currently do not allow pets inside the restaurant due to food safety regulations and to ensure the comfort of all our guests."
    },
    {
      question: "Do you take large group bookings?",
      answer: "Absolutely! We welcome large group bookings and special events. For groups of 8 or more, we recommend making a reservation at least 48 hours in advance to ensure we can provide the best possible experience."
    },
    {
      question: "What are your operating hours?",
      answer: "We are open for lunch from 12:30 PM to 3:30 PM and dinner from 7:00 PM to 11:00 PM. We are closed on Mondays."
    },
    {
      question: "Do you offer catering services?",
      answer: "Yes, we provide catering services for special events and corporate functions. Our catering menu features our signature vegetarian dishes and can be customized to meet your specific requirements."
    },
    {
      question: "Is advance reservation required?",
      answer: "While walk-ins are welcome, we highly recommend making a reservation, especially during peak hours and weekends, to ensure you have a table waiting for you."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-royal-entrance">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 shimmer-text">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about dining at MOAI. 
            If you don't see what you're looking for, feel free to contact us directly.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card 
                key={index}
                className="gradient-card border-border/50 hover:shadow-elegant transition-smooth royal-border"
              >
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-accent/5 transition-smooth"
                  >
                    <h3 className="text-lg font-semibold text-primary pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown 
                      className={`w-5 h-5 text-primary transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-smooth"
            >
              Contact Us
            </a>
            <a 
              href="tel:080-468-10697"
              className="border border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 rounded-lg font-medium transition-smooth"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 