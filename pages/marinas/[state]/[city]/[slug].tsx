import Head from "next/head"; // adjust if needed

export default function MarinaPage({ marina }: any) {
  if (!marina) {
    return <main><h1>Marina not found</h1></main>;
  }

  return (
    <main>
      <h1>{marina.name}</h1>
      <p>{marina.description}</p>
    </main>
  );
}

  const title = `${marinas.name} – Boat Slips in ${city}, ${state.toUpperCase()}`;
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
        <h1>{marinas.name}</h1>
        <p>{description}</p>
      </main>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { state, city, slug } = context.params;

 

  return {
    props: { marinas, state, city, slug },
  };
}
