export const dynamic = "force-dynamic";
export const revalidate = 0;

import fs from "fs";
import path from "path";

type Marina = {
  state?: string;
  city?: string;
  slug?: string;
  name?: string;
  description?: string;
};

function loadMarinas(): Marina[] {
  const filePath = path.join(process.cwd(), "data", "marinas.json");
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw) as Marina[];
}

export default function Page({
  params,
}: {
  params: { state?: string; city?: string; slug?: string };
}) {
  const marinas = loadMarinas();

  // Debug: show what Next is passing
  const state = (params.state ?? "").toLowerCase();
  const city = (params.city ?? "").toLowerCase();
  const slug = (params.slug ?? "").toLowerCase();

  const marina = marinas.find((m) => {
    return (
      String(m.state ?? "").toLowerCase() === state &&
      String(m.city ?? "").toLowerCase() === city &&
      String(m.slug ?? "").toLowerCase() === slug
    );
  });

  if (!marina) {
    return (
      <main style={{ padding: 24, fontFamily: "system-ui" }}>
        <h1>Marina not found</h1>
        <p>
          Looking for: <b>{params.state ?? "(missing)"}</b> /{" "}
          <b>{params.city ?? "(missing)"}</b> /{" "}
          <b>{params.slug ?? "(missing)"}</b>
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
