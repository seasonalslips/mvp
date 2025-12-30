import marinas from "../../../../../data/marinas.json";

export default function MarinaPage({
  params,
}: {
  params: { state: string; city: string; slug: string };
}) {
  const marina = marinas.find((m: any) => {
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
        <p>JSON records loaded: {(marinas as any[]).length}</p>
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
