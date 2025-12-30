import fs from "fs";
import path from "path";

type Marina = {
  state: string;
  city: string;
  slug: string;
  name: string;
  description: string;
};

function loadMarinas(): Marina[] {
  const filePath = path.join(process.cwd(), "data", "marinas.json");
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw) as Marina[];
}

export default function MarinaPage({
  params,
}: {
  params: { state: string; city: string; slug: string };
}) {
  const marinas = loadMarinas();

  const marina = marinas.find((m) => {
    return (
      (m.state ?? "").toLowerCase() === params.state.toLowerCase() &&
      (m.city ?? "").toLowerCase() === params.city.toLowerCase() &&
      (m.slug ?? "").toLowerCase() === params.slug.toLowerCase()
    );
  });

  if (!marina) {
    return (
      <main style={{ padding: 24, fontFamily: "system-ui" }}>
        <h1>Marina not found</h1>
        <p>
          Looking for: <b>{params.state}</b> / <b>{params.city}</b> /{" "}
          <b>{params.slug}</b>
        </p>
        <p>Records loaded: {marinas.length}</p>
      </main>
    );
  }

  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>{marina.name}</h1>
      <p>{marina.description}</p>
    </main>
  );
}

