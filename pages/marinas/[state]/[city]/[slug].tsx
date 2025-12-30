import Head from "next/head";
import marinas from "../../../data/marinas.json"; // adjust if needed

export default function MarinaPage({ marina, state, city, slug }: any) {
  if (!marina) {
    return (
      <main style={{ padding: 24, fontFamily: "system-ui" }}>
        <h1>Marina not found</h1>
        <p>
          Looking for: {state}/{city}/{slug}
        </p>
        <p>Records loaded: {marinas.length}</p>
      </main>
    );
  }

  const title = `${marina.name} – Boat Slips in ${city}, ${state.toUpperCase()}`;
  const description =
    marina.description ||
    `${marina.name} in ${city}, ${state.toUpperCase()} offers seasonal and annual boat slips.`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          rel="canonical"
          href={`https://seasonalslips.com/marinas/${state}/${city}/${slug}`}
        />
      </Head>

      <main style={{ padding: 24, fontFamily: "system-ui" }}>
        <h1>{marina.name}</h1>
        <p>{description}</p>
      </main>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { state, city, slug } = context.params;

  const marina =
    marinas.find(
      (m: any) =>
        String(m.state).toLowerCase() === String(state).toLowerCase() &&
        String(m.city).toLowerCase() === String(city).toLowerCase() &&
        String(m.slug).toLowerCase() === String(slug).toLowerCase()
    ) || null;

  return {
    props: { marina, state, city, slug },
  };
}
