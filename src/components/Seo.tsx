import { Helmet } from "react-helmet-async";
import {
  DEFAULT_KEYWORDS,
  DEFAULT_OG_IMAGE,
  RESTAURANT_JSON_LD,
  SITE_NAME,
  SITE_URL,
  THEME_COLOR,
  type PageSeoConfig,
} from "@/lib/seo";

type SeoProps = PageSeoConfig & {
  includeRestaurantSchema?: boolean;
};

const Seo = ({
  title,
  description,
  path,
  keywords = DEFAULT_KEYWORDS,
  ogTitle,
  ogDescription,
  ogType = "website",
  twitterTitle,
  twitterDescription,
  noindex = false,
  includeRestaurantSchema = false,
}: SeoProps) => {
  const canonicalUrl = `${SITE_URL}${path === "/" ? "/" : path}`;
  const resolvedOgTitle = ogTitle ?? title;
  const resolvedOgDescription = ogDescription ?? description;
  const resolvedTwitterTitle = twitterTitle ?? resolvedOgTitle;
  const resolvedTwitterDescription = twitterDescription ?? resolvedOgDescription;
  const robotsContent = noindex
    ? "noindex, nofollow"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  return (
    <Helmet>
      <html lang="en-IN" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robotsContent} />
      <meta name="author" content={SITE_NAME} />
      <meta name="theme-color" content={THEME_COLOR} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={resolvedOgTitle} />
      <meta property="og:description" content={resolvedOgDescription} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="MOAI Restaurant — Premium Vegetarian Fine Dining in Bangalore"
      />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolvedTwitterTitle} />
      <meta name="twitter:description" content={resolvedTwitterDescription} />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
      <meta
        name="twitter:image:alt"
        content="MOAI Restaurant interior — premium veg fine dining Bangalore"
      />

      <link rel="manifest" href="/site.webmanifest" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />

      {includeRestaurantSchema && (
        <script type="application/ld+json">{JSON.stringify(RESTAURANT_JSON_LD)}</script>
      )}
    </Helmet>
  );
};

export default Seo;
