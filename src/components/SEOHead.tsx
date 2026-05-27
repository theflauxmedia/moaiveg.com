import { Helmet } from "react-helmet-async";

type BreadcrumbItem = {
  name: string;
  item: string;
};

type JsonLd = Record<string, unknown>;

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType?: string;
  breadcrumbs?: BreadcrumbItem[];
  noindex?: boolean;
  twitterSite?: string;
  ogLocale?: string;
  jsonLd?: JsonLd | JsonLd[];
}

const SEOHead = ({
  title,
  description,
  canonical,
  ogImage = "https://www.moaiveg.com/og-image.jpg",
  ogType = "website",
  breadcrumbs,
  noindex,
  twitterSite,
  ogLocale = "en_IN",
  jsonLd,
}: SEOHeadProps) => {
  const breadcrumbJsonLd =
    breadcrumbs && breadcrumbs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbs.map((b, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name: b.name,
            item: b.item,
          })),
        }
      : null;

  const jsonLdArray: JsonLd[] = [
    ...(breadcrumbJsonLd ? [breadcrumbJsonLd] : []),
    ...(jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []),
  ];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta
        name="robots"
        content={
          noindex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        }
      />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="MOAI Restaurant" />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      {twitterSite ? <meta name="twitter:site" content={twitterSite} /> : null}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLdArray.map((obj, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(obj)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;

