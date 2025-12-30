import Head from "next/head";

export default function MarinaPage({ marina, state, city, slug }: any) {
  if (!marina) return <main><h1>Marina not found</h1></main>;

  const canonical = `https://seasonalslips.com/marinas/${state}/${city}/${slug}`;

  const title = `${marina.name} – Annual & Seasonal Boat Slips in ${city}, ${state.toUpperCase()}`;
  const description =
    marina.description ||
    `Find annual and seasonal boat slips at ${marina.name} in ${city}, ${state.toUpperCase()}. View details, amenities, and contact options on SeasonalSlips.com.`;

  const marinaSchema = {
    "@context": "https://schema.org",
    "@type": "Marina",
    "name": marina.name,
    "description": description,
    "url": canonical,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": state.toUpperCase(),
      "addressCountry": "US"
    }
    // Optional if you have them later:
    // "telephone": marina.phone,
    // "geo": { "@type": "GeoCoordinates", "latitude": marina.lat, "longitude": marina.lng },
    // "amenityFeature": [{ "@type": "LocationFeatureSpecification", "name": "Fuel Dock", "value": true }]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://seasonalslips.com/" },
      { "@type": "ListItem", "position": 2, "name": "Marinas", "item": "https://seasonalslips.com/marinas" },
      { "@type": "ListItem", "position": 3, "name": state.toUpperCase(), "item": `https://seasonalslips.com/marinas/${state}` },
      { "@type": "ListItem", "position": 4, "name": city, "item": `https://seasonalslips.com/marinas/${state}/${city}` },
      { "@type": "ListItem", "position": 5, "name": marina.name, "item": canonical }
    ]
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": canonical,
    "isPartOf": { "@type": "WebSite", "name": "SeasonalSlips", "url": "https://seasonalslips.com/" }
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />

        {/* Optional but helpful */}
        <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(marinaSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
        />
      </Head>

      <main style={{ padding: 24, fontFamily: "system-ui" }}>
        <h1>{marina.name}</h1>

        <p><strong>Quick Summary:</strong> {description}</p>

        <p>{marina.description}</p>
      </main>
    </>
  );
}
