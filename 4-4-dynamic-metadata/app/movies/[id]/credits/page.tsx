import { getMovie } from "@/lib/db";
import { Metadata } from "next";

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}): Promise<Metadata> {
  return {
    title: `Credits`,
  };
}

export default async function MovieCreditsPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const movie = await getMovie(id);

  return (
    <div>
      <h2 className="mb-2 text-xl font-bold">Cast</h2>
      <ul className="space-y-1">
        {movie.casts.map((cast) => (
          <li key={cast}>{cast}</li>
        ))}
      </ul>
    </div>
  );
}
