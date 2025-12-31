import Head from "next/head";
import type { GetStaticProps } from "next";
import path from "path";
import fs from "fs";

// your copied components (same names as Lovable)
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import FeaturedLocations from "../components/FeaturedLocations";
import Benefits from "../components/Benefits";
import BlogPreview from "../components/BlogPreview";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import SponsorshipSection from "../components/SponsorshipSection";
import AnnouncementBanner from "../components/AnnouncementBanner";

export type Marina = {
  state: string;
  city: string;
  slug: string;
  name: string;
  description?: string;
};

type Props = {
  marinas: Marina[];
};

export default function Home({ marinas }: Props) {
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <main className="min-h-screen">
        <AnnouncementBanner />
        <Hero />
        <FeaturedLocations marinas={marinas} />
        <HowItWorks />
        <Benefits />
        <SponsorshipSection />
        <BlogPreview />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const filePath = path.join(process.cwd(), "data", "marinas.json");
  const raw = fs.readFileSync(filePath, "utf8");
  const marinas = JSON.parse(raw) as Marina[];

  return {
    props: { marinas },
    // optional: keeps it fresh if you update marinas.json
    revalidate: 3600,
  };
};
