import fs from "fs";
import path from "path";

type Marina = {
  state: string;
  city: string;
  slug: string;
};

function loadMarinas(): Marina[] {
  const filePath = path.join(process.cwd(), "data", "marinas.json");
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw) as Marina[];
}

export default function sitemap() {
  const marinas = loadMarinas();

  return marinas.map((m) => ({
    url: `https://seasonalslips.com/marinas/${m.state}/${m.city}/${m.slug}`,
    lastModified: new Date(),
  }));
}
