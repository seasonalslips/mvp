import fs from "fs";
import path from "path";

type Marina = {
  state?: string;
  city?: string;
  slug?: string;
  name?: string;
  description?: string;
};

export async function getServerSideProps(context: any) {
  const { state, city, slug } = context.params || {};

  const filePath = path.join(process.cwd(), "data", "marinas.json");
  const raw = fs.readFileSync(filePath, "utf8");
  const marinas = JSON.parse(raw) as Marina[];

  const marina = marinas.find((m) => {
    return (
      String(m.state ?? "").toLowerCase() === String(state ?? "").toLowerCase() &&
      String(m.city ?? "").toLowerCase() === String(city ?? "").toLowerCase() &&
      String(m.slug ?? "").toLowerCase() === String(slug ?? "").toLowerCase()
    );
  });

  return {
    props: {
      params: { state: state ?? null, city: city ?? null, slug: slug ?? null },
      marina: marina ?? null,
      count: marinas.length,
    },
  };
}

export default function MarinaPage(props: any) {
  const { marina, params, count } = props;

  if (!marina) {
    return (
      <main style={{ padding: 24, fontFamily: "system-ui" }}>
        <h1>Marina not found</h1>
        <p>
          Looking for: <b>{params?.state ?? "(missing)"}</b> /{" "}
          <b>{params?.city ?? "(missing)"}</b> /{" "}
          <b>{params?.slug ?? "(missing)"}</b>
        </p>
        <p>Records loaded: {count}</p>
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
