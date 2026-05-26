export const SITE_URL = "https://www.moaiveg.com";
export const SITE_NAME = "MOAI Restaurant";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const THEME_COLOR = "#2B5A2E";

export const DEFAULT_KEYWORDS =
  "vegetarian fine dining Bangalore, best pure veg restaurant Bangalore, luxury vegetarian restaurant Jayanagar, vegan friendly restaurant Bangalore, premium veg restaurant Bangalore, corporate dining Bangalore, birthday dinner Bangalore vegetarian, romantic dinner Bangalore vegetarian, multi cuisine veg restaurant Bangalore, MOAI restaurant Jayanagar";

export type PageSeoConfig = {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  noindex?: boolean;
};

export const PAGE_SEO: Record<string, PageSeoConfig> = {
  home: {
    title: "MOAI Restaurant | Premium Vegetarian Fine Dining in Jayanagar, Bangalore",
    description:
      "MOAI is Bangalore's finest pure vegetarian fine dining restaurant in Jayanagar. Enjoy multi-cuisine veg dining — ideal for family dinners, romantic dates, birthdays, anniversaries, and corporate groups.",
    path: "/",
    ogTitle: "MOAI Restaurant | Vegetarian Fine Dining in Jayanagar, Bangalore",
    ogDescription:
      "Pure veg & vegan-friendly multi-cuisine fine dining in Jayanagar, Bangalore. Perfect for families, couples, and corporate groups. Reserve your table today.",
    ogType: "restaurant",
    twitterTitle: "MOAI Restaurant | Vegetarian Fine Dining in Bangalore",
    twitterDescription:
      "Bangalore's finest pure vegetarian fine dining in Jayanagar. Reserve your table today.",
  },
  menu: {
    title: "Menu | MOAI Restaurant — Vegetarian Fine Dining Jayanagar, Bangalore",
    description:
      "Explore MOAI's artisanal vegetarian fine dining menu in Jayanagar — chats, small plates, mains, beverages, and desserts. Pure veg, vegan-friendly, multi-cuisine.",
    path: "/menu",
    ogTitle: "MOAI Restaurant Menu | Premium Veg Fine Dining Bangalore",
    ogDescription:
      "Browse MOAI's pure vegetarian and vegan-friendly fine dining menu in Jayanagar, Bangalore.",
  },
  gallery: {
    title: "Gallery | MOAI Restaurant — Veg Fine Dining Ambience & Cuisine Bangalore",
    description:
      "View MOAI Restaurant's gallery — premium vegetarian dishes, elegant dining ambience, and celebrations at our Jayanagar, Bangalore fine dining outlet.",
    path: "/gallery",
    ogTitle: "MOAI Restaurant Gallery | Vegetarian Fine Dining Bangalore",
    ogDescription:
      "Photos of MOAI's vegetarian fine dining dishes and luxury ambience in Jayanagar, Bangalore.",
  },
  contact: {
    title: "Contact & Location | MOAI Restaurant Jayanagar, Bangalore",
    description:
      "Contact MOAI Restaurant in Jayanagar, Bangalore for reservations, group dining, and enquiries. Pure vegetarian fine dining — call, email, or visit us.",
    path: "/contact",
    ogTitle: "Contact MOAI Restaurant | Jayanagar, Bangalore",
    ogDescription:
      "Get in touch with MOAI for table reservations and group dining in Jayanagar, Bangalore.",
  },
  notFound: {
    title: "Page Not Found | MOAI Restaurant",
    description: "The page you are looking for could not be found on MOAI Restaurant's website.",
    path: "/404",
    noindex: true,
  },
};

export const RESTAURANT_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "MOAI Restaurant",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: DEFAULT_OG_IMAGE,
  description:
    "Premium vegetarian fine dining restaurant in Jayanagar, Bangalore. Pure veg & vegan-friendly, multi-cuisine, ideal for family meals, romantic dinners, birthdays, anniversaries, and corporate groups.",
  servesCuisine: ["Vegetarian", "Vegan", "Multi-cuisine", "Indian", "Continental"],
  priceRange: "₹₹₹",
  hasMap: "https://maps.google.com/?q=MOAI+Restaurant+Jayanagar+Bangalore",
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
    latitude: 12.925046,
    longitude: 77.583959,
  },
  telephone: "+918047363493",
  email: "moai.eripl@gmail.com",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "12:00",
      closes: "16:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "18:30",
      closes: "23:00",
    },
  ],
  menu: `${SITE_URL}/menu`,
  acceptsReservations: true,
  sameAs: [
    "https://www.instagram.com/moai.jayanagar/",
    "https://www.facebook.com/people/MoaiJayanagar/61575343161492/",
    "https://www.zomato.com/bangalore/moai-1-jayanagar-bangalore",
  ],
} as const;
