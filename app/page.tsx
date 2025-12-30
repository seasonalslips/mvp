import marinas from "../../../../../data/marinas.json";

export default async function MarinaPage({
  params,
}: {
  params: { state: string; city: string; slug: string };
}) {
  const marina = marinas.find(
    (m) =>
      m.state === params.state &&
      m.city === params.city &&
      m.slug === params.slug
  );

  if (!marina) return <main style={{ padding: 24 }}>Not found</main>;

  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>{marina.name}</h1>
      <p>{marina.description}</p>
    </main>
  );
}
export async function generateMetadata({ params }: any) {
  const marina = marinas.find(
    (m) =>
      m.state === params.state &&
      m.city === params.city &&
      m.slug === params.slug
  );

  if (!marina) return {};

  return {
    title: `${marina.name} – Annual & Seasonal Boat Slips`,
    description: marina.description,
  };
}
