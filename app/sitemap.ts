import marinas from "../data/marinas.json";

export default function sitemap() {
  return marinas.map((m) => ({
    url: `https://seasonalslips.com/marinas/${m.state}/${m.city}/${m.slug}`,
    lastModified: new Date(),
  }));
}

