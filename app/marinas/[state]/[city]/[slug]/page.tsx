// app/marinas/[state]/[city]/[slug]/page.tsx

export default async function MarinaPage({
  params,
}: {
  params: { state: string; city: string; slug: string };
}) {
  // TEMP: hardcoded example to prove SSR works
  const marina = {
    name: "Reserve Marina",
    description:
      "Reserve Marina in Spicewood, TX offers seasonal and annual boat slips with easy access to Lake Travis.",
  };

  return (
    <main style={{ padding: 24, fontFamily: "system-ui" }}>
      <h1>{marina.name}</h1>
      <p>{marina.description}</p>
    </main>
  );
}
