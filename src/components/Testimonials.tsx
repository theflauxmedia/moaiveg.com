import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import {
  hoverScale,
  premiumEase,
  softSpring,
  staggerContainer,
  staggerItemScale,
  tapPress,
} from "@/lib/motion";

const testimonials = [
  {
    id: 1,
    name: "Anunay Thakur",
    rating: 5,
    content:
      "A great spot for vegetarians with flavorful food and a delightful ambiance. What stood out was the exceptional service by Vicky, whose attentiveness left a lasting impression. Hope they maintain their high standards.",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjVcWp7X0u7t-NUyBPhr57XAblDSX4qmbK5nvhFIXquREXeYh4WwVg=w144-h144-p-rp-mo-ba3-br100",
  },
  {
    id: 2,
    name: "Sindhu Sudeendra",
    rating: 5,
    content:
      "Absolutely loved this place! The veg menu is amazing. The ghee roast broccoli was unique, the Thai noodles had a perfect kick, and the Khalakund Edifice was mouthwatering. Great food, reasonable prices, and a convenient main-road location with valet parking. A must-visit for veg lovers!",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjWUFU_m1k6SI9VFbPp4vdOM33FqSFw_cShd3cZ6UgIqGygOWjP3=w144-h144-p-rp-mo-ba4-br100",
  },
  {
    id: 3,
    name: "Pratiksha Mahendra",
    rating: 5,
    content:
      "Moai is one of the most peaceful and aesthetic veg spots in Bangalore. Beautiful interiors, calming vibes, and simple yet delicious food, perfect for quiet conversations or solo visits. A must-visit for lovers of good veg food and ambiance!",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjWdGXCrRp-QBY6fo5_ZxI2BwN48XM6EwCaLEiySsoO0uLcQkzhD=w144-h144-p-rp-mo-ba5-br100",
  },
  {
    id: 4,
    name: "Rahul Sharma",
    rating: 5,
    content:
      "Exceptional vegetarian dining experience! The attention to detail in every dish is remarkable. The ambiance is perfect for both intimate dinners and family gatherings. Highly recommend the artisanal chats and innovative presentations.",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjWUFU_m1k6SI9VFbPp4vdOM33FqSFw_cShd3cZ6UgIqGygOWjP3=w144-h144-p-rp-mo-ba4-br100",
  },
  {
    id: 5,
    name: "Priya Patel",
    rating: 5,
    content:
      "MOAI has redefined vegetarian fine dining for me. The creative fusion of traditional and modern techniques is outstanding. The staff is knowledgeable and the atmosphere is so welcoming. A true gem in Jayanagar!",
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjVcWp7X0u7t-NUyBPhr57XAblDSX4qmbK5nvhFIXquREXeYh4WwVg=w144-h144-p-rp-mo-ba3-br100",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 56 : -56,
    opacity: 0,
    filter: "blur(4px)",
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 56 : -56,
    opacity: 0,
    filter: "blur(4px)",
  }),
};

const Testimonials = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const prefersReducedMotion = useReducedMotion();
  const currentIndex =
    ((page % testimonials.length) + testimonials.length) % testimonials.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const renderStars = (rating: number) =>
    Array.from({ length: rating }, (_, i) => (
      <motion.span
        key={i}
        initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.05 * i, ...softSpring }}
      >
        <Star className="w-4 h-4 fill-accent text-accent" aria-hidden="true" />
      </motion.span>
    ));

  const visibleDesktop = [0, 1, 2].map(
    (offset) => testimonials[(currentIndex + offset) % testimonials.length]
  );

  return (
    <section className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-6">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            What Our Guests
            <span className="block text-accent shimmer-text font-extrabold">
              Say About Us
            </span>
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto font-medium">
            Discover why guests rate MOAI among the best vegetarian restaurants in
            Bangalore for pure veg fine dining, romantic dinners, and family dining.
          </p>
        </Reveal>

        {/* Mobile */}
        <div className="relative max-w-md mx-auto md:hidden">
          <div className="overflow-hidden rounded-2xl min-h-[340px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={prefersReducedMotion ? undefined : slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: premiumEase }}
                className="bg-card p-8 rounded-2xl border border-border/50 shadow-elegant"
              >
                <div className="flex justify-center mb-6 gap-1">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
                <p className="text-lg leading-relaxed text-foreground italic mb-8 font-medium">
                  &ldquo;{testimonials[currentIndex].content}&rdquo;
                </p>
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={`${testimonials[currentIndex].name}, MOAI Restaurant guest review`}
                    width="48"
                    height="48"
                    className="w-12 h-12 rounded-full object-cover border-2 border-accent/30"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <h4 className="font-semibold text-primary">
                    {testimonials[currentIndex].name}
                  </h4>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-3 mt-6">
            <motion.button
              onClick={() => paginate(-1)}
              aria-label="Previous testimonial"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
              whileHover={hoverScale}
              whileTap={tapPress}
            >
              <ChevronLeft className="w-5 h-5 text-primary" aria-hidden="true" />
            </motion.button>
            <motion.button
              onClick={() => paginate(1)}
              aria-label="Next testimonial"
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
              whileHover={hoverScale}
              whileTap={tapPress}
            >
              <ChevronRight className="w-5 h-5 text-primary" aria-hidden="true" />
            </motion.button>
          </div>

          <div className="flex justify-center mt-4 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setPage([index, index > currentIndex ? 1 : -1])}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={index === currentIndex ? "true" : "false"}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-accent w-6"
                    : "bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:block">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              className="grid grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              custom={direction}
            >
              {visibleDesktop.map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${currentIndex}-${index}`}
                  variants={staggerItemScale}
                  className={index === 1 ? "-mt-6 z-10" : "opacity-90"}
                >
                  <motion.div
                    className={`bg-card p-8 rounded-2xl border border-border/50 h-full relative overflow-hidden ${
                      index === 1 ? "shadow-glow border-accent/20" : "shadow-elegant"
                    }`}
                    whileHover={
                      prefersReducedMotion
                        ? undefined
                        : { y: -6, boxShadow: "0 20px 40px -12px rgba(0,79,0,0.2)" }
                    }
                    transition={softSpring}
                  >
                    <div className="flex justify-center mb-6 gap-1">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p
                      className={`leading-relaxed text-foreground italic pl-1 mb-8 font-medium ${
                        index === 1 ? "text-lg" : "text-base"
                      }`}
                    >
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <img
                        src={testimonial.avatar}
                        alt={`${testimonial.name}, MOAI Restaurant guest review`}
                        width="64"
                        height="64"
                        className={`rounded-full object-cover border-2 border-accent/30 ${
                          index === 1 ? "w-16 h-16" : "w-12 h-12"
                        }`}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <h4
                        className={`font-semibold text-primary ${
                          index === 1 ? "text-lg" : "text-base"
                        }`}
                      >
                        {testimonial.name}
                      </h4>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-10 gap-4">
            <motion.button
              onClick={() => paginate(-1)}
              aria-label="Previous testimonial"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
              whileHover={hoverScale}
              whileTap={tapPress}
            >
              <ChevronLeft className="w-5 h-5 text-primary" aria-hidden="true" />
            </motion.button>
            <motion.button
              onClick={() => paginate(1)}
              aria-label="Next testimonial"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg"
              whileHover={hoverScale}
              whileTap={tapPress}
            >
              <ChevronRight className="w-5 h-5 text-primary" aria-hidden="true" />
            </motion.button>
          </div>
        </div>

        <Reveal className="flex justify-center mt-16" delay={0.1}>
          <motion.a
            href="https://www.google.com/maps/place/Moai+-+Redefined+Vegetarian+Dining/@12.9250249,77.5839511"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-accent-foreground px-8 py-4 rounded-xl font-semibold shadow-elegant inline-flex items-center gap-2"
            whileHover={hoverScale}
            whileTap={tapPress}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            Write a Review on Google
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
};

export default Testimonials;
