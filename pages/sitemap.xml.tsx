import type { GetServerSideProps } from "next";
import fs from "fs";
import path from "path";

type Marina = {
  state: string;
  city: string;
  slug: string;
};

function escapeXml(str: string) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const filePath = path.join(process.cwd(), "data", "marinas.json");
  const raw = fs.readFileSync(filePath, "utf8");
  const marinas = JSON.parse(raw) as Marina[];

  const baseUrl = "https://seasonalslips.com";

  const urls = marinas.map((m) => {
    const loc = `${baseUrl}/marinas/${m.state}/${m.city}/${m.slug}`;
    return `
  <url>
    <loc>${escapeXml(loc)}</loc>
  </url>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
  </url>
  ${urls.join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(xml);
  res.end();

  return { props: {} };
};

export default function Sitemap() {
  return null;
}
