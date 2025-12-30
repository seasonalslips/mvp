import Head from "next/head";

export default function MarinaPage({ marina, state, city, slug }: any) {
  if (!marina) {
    return <main><h1>Marina not found</h1></main>;
  }

  const title = `${marina.name} – Boat Slips in ${city}, ${state.toUpperCase()}`;
  const description = marina.description;

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

      <main style={{ padding: 24 }}>
        <h1>{marina.name}</h1>
        <p>{description}</p>
      </main>
    </>
  );
}
