import marinas from "../../../../../data/marinas.json";

export default async function MarinaPage({
  params,
}: {
  params: { state: string; city: string; slug: string };
}) {
const marina = marinas.find((m) => {
  return (
    (m.state || "").toLowerCase() === params.state.toLowerCase() &&
    (m.city || "").toLowerCase() === params.city.toLowerCase() &&
    (m.slug || "").toLowerCase() === params.slug.toLowerCase()
  );
});


  if (!marina) {
    return (
      <main style={{ padding: 24, fontFamily: "system-ui" }}>
        <h1>Marina not found</h1>
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
