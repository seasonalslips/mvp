export default function Hero() {
  return (
    <section style={{ padding: 48 }}>
      <h1>Find Annual & Seasonal Boat Slips</h1>
      <p>
        Browse marinas offering long-term and seasonal slips by city and state.
      </p>

      <form style={{ marginTop: 24 }}>
        <input
          placeholder="Search by city, state, or marina"
          style={{ padding: 12, width: 320 }}
        />
        <button style={{ marginLeft: 12, padding: 12 }}>
          Search
        </button>
      </form>
    </section>
  );
}
