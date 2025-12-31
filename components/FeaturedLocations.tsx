import Link from "next/link";
import type { Marina } from "../pages";

type Props = {
  marinas: Marina[];
  limit?: number;
};

export default function FeaturedLocations({ marinas, limit = 12 }: Props) {
  const items = (marinas || []).slice(0, limit);

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Featured marinas
            </h2>
            <p className="mt-2 text-muted-foreground">
              Browse annual & seasonal slips by location.
            </p>
          </div>

          <Link
            href="/marinas"
            className="text-sm font-medium underline underline-offset-4"
          >
            View all
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((m) => {
            const href = `/marinas/${m.state}/${m.city}/${m.slug}`;

            return (
              <Link
                key={`${m.state}-${m.city}-${m.slug}`}
                href={href}
                className="rounded-2xl border bg-background p-5 shadow-sm hover:shadow-md transition"
              >
                <div className="text-lg font-semibold">{m.name}</div>
                <div className="text-sm text-muted-foreground mt-1">
                  {m.city}, {m.state.toUpperCase()}
                </div>
                <p className="text-sm mt-3 line-clamp-3 text-muted-foreground">
                  {m.description || `Boat slips available at ${m.name}.`}
                </p>

                <div className="mt-4 text-sm font-medium">
                  View availability →
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

