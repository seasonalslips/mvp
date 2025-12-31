import Head from "next/head";

// these will be your copied components (same names)
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import FeaturedLocations from "../components/FeaturedLocations";
import Benefits from "../components/Benefits";
import BlogPreview from "../components/BlogPreview";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import SponsorshipSection from "../components/SponsorshipSection";
import AnnouncementBanner from "../components/AnnouncementBanner";

export default function Home() {
  const title = "SeasonalSlips | Find Annual & Seasonal Boat Slips";
  const description =
    "Find seasonal and annual boat slips by marina, city, and state. Compare options and request availability.";

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "SeasonalSlips",
      url: "https://seasonalslips.com",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "SeasonalSlips",
      url: "https://seasonalslips.com",
    },
  ];

 return (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </Head>

    <main className="min-h-screen">
      <AnnouncementBanner />
      <Hero />
      <FeaturedLocations />
      <HowItWorks />
      <Benefits />
      <SponsorshipSection />
      <BlogPreview />
      <FinalCTA />
      <Footer />
    </main>
  </>
);
