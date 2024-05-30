import { getMovie } from "@/lib/db";
import { Metadata } from "next";

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}): Promise<Metadata> {
  return {
    title: `Providers`,
  };
}

export default async function MovieProvidersPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const movie = await getMovie(id);

  return (
    <div>
      <h2 className="mb-2 text-xl font-bold">Providers</h2>
      <p>{movie.provider}</p>
    </div>
  );
}
