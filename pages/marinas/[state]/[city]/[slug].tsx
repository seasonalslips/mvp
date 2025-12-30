import Head from "next/head";
import fs from "fs";
import path from "path";

type Marina = {
  state?: string;
  city?: string;
  slug?: string;
  name?: string;
  description?: string;
};

export default function MarinaPage({
  marina,
  state,
  city,
  slug,
}: {
  marina: Marina | null;
  state: string;
  city: string;
  slug: string;
}) {
  if (!marina) {
    return (
      <main style={{ padding: 24, fontFamily: "system-ui" }}>
        <h1>Marina not found</h1>
      </main>
    );
  }

  const title = `${marina.name} – Boat Slips in ${city}, ${state.toUpperCase()}`;
  const description =
    marina.description ||
    `${marina.name} in ${city}, ${state.toUpperCase()} offers seasonal and annual boat slips.`;

  const canonical = `https://seasonalslips.com/marinas/${state}/${city}/${slug}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
      </Head>

      <main style={{ padding: 24, fontFamily: "system-ui" }}>
        <h1>{marina.name}</h1>
        <p>{description}</p>
      </main>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { state, city, slug } = context.params || {};

  // Load JSON from /data/marinas.json (root-level folder)
  const filePath = path.join(process.cwd(), "data", "marinas.json");
  const raw = fs.readFileSync(filePath, "utf8");
  const marinas: Marina[] = JSON.parse(raw);

  const s = String(state || "").toLowerCase();
  const c = String(city || "").toLowerCase();
  const sl = String(slug || "").toLowerCase();

  const marina =
    marinas.find(
      (m) =>
        String(m.state || "").toLowerCase() === s &&
        String(m.city || "").toLowerCase() === c &&
        String(m.slug || "").toLowerCase() === sl
    ) || null;

  return {
    props: { marina, state, city, slug },
  };
}
