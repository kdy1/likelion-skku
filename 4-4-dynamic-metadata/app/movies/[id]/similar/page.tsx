import { getMovie } from "@/lib/db";
import { Metadata } from "next";

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}): Promise<Metadata> {
  return {
    title: `Similar`,
  };
}

export default async function SimilarMoviesPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const movie = await getMovie(id);

  const similarMovies = await Promise.all(
    movie.similar.map(async (id) => await getMovie(id))
  );

  return (
    <div>
      <h2 className="mb-2 text-xl font-bold">Similar Movies</h2>
      <ul>
        {similarMovies.map((movie) => (
          <li key={movie.id}>
            <a href={`/movies/${movie.id}/credits`}>{movie.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
