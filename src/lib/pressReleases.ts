export type PressOutlet = {
  name: string;
  url: string;
};

export type PressRelease = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  outlets: PressOutlet[];
};

export const pressReleases: PressRelease[] = [
  {
    id: "beyond-ingredients",
    title:
      "Beyond Ingredients: The Bengaluru Restaurant Focusing on How Food is Cooked",
    excerpt:
      "MOAI Redefined Vegetarian Dining — a spotlight on how technique, sourcing, and mindful cooking elevate pure vegetarian fine dining in Bengaluru.",
    date: "April 1, 2026",
    outlets: [
      {
        name: "ANI News",
        url: "https://aninews.in/news/business/beyond-ingredients-the-bengaluru-restaurant-focusing-on-how-food-is-cooked-moai-redefined-vegetarian-dining20260401180440/",
      },
      {
        name: "Business Standard",
        url: "https://www.business-standard.com/content/press-releases-ani/beyond-ingredients-the-bengaluru-restaurant-focusing-on-how-food-is-cooked-moai-redefined-vegetarian-dining-126040101141_1.html",
      },
      {
        name: "Tribune India",
        url: "https://www.tribuneindia.com/news/business/beyond-ingredients-the-bengaluru-restaurant-focusing-on-how-food-is-cooked-moai-redefined-vegetarian-dining/amp",
      },
      {
        name: "The Print",
        url: "https://theprint.in/ani-press-releases/beyond-ingredients-the-bengaluru-restaurant-focusing-on-how-food-is-cooked-moai-redefined-vegetarian-dining/2894197/",
      },
      {
        name: "Latestly",
        url: "https://www.latestly.com/agency-news/business-news-beyond-ingredients-the-bengaluru-restaurant-focusing-on-how-food-is-cooked-moai-redefined-vegetarian-dining-7375707.html",
      },
      {
        name: "Dailyhunt",
        url: "https://m.dailyhunt.in/news/india/english/ani+english-epaper-anieng/beyond+ingredients+the+bengaluru+restaurant+focusing+on+how+food+is+cooked+moai+redefined+vegetarian+dining-newsid-n706837415?sm=Y",
      },
    ],
  },
  {
    id: "rethinking-oils",
    title: "Rethinking Oils: A Revolution in Indian Kitchens",
    excerpt:
      "How MOAI is challenging conventional cooking oils and reimagining healthier, more conscious approaches in modern Indian vegetarian cuisine.",
    date: "April 2026",
    outlets: [
      {
        name: "Devdiscourse",
        url: "https://www.devdiscourse.com/article/business/3858715-rethinking-oils-a-revolution-in-indian-kitchens",
      },
    ],
  },
];

export const allPressOutlets = pressReleases.flatMap((release) => release.outlets);
