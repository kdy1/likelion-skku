import { Movie, getMovie } from "@/lib/db";
import { Metadata } from "next";
import { PropsWithChildren } from "react";

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}): Promise<Metadata> {
  const movie = await getMovie(id);

  return {
    title: {
      template: `%s - ${movie.title} - Movies`,
      default: `${movie.title} - Movies`,
    },
  };
}

export default async function MovieLayout({
  children,
  params: { id },
}: PropsWithChildren<{ params: { id: string } }>) {
  const movie = await getMovie(id);

  return (
    <div>
      <header>
        <TopView movie={movie} />
      </header>
      <div className="container grid gap-8 py-12 md:grid-cols-[300px_1fr] md:gap-12 lg:py-16 xl:gap-16">
        <div className="mx-auto w-full max-w-[300px] overflow-hidden rounded-xl">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}

function TopView({ movie }: { movie: Movie }) {
  return (
    <section className="w-full bg-gray-100 dark:bg-gray-800">
      <div className="container grid gap-8 py-12 md:grid-cols-[300px_1fr] md:gap-12 lg:py-16 xl:gap-16">
        <div className="mx-auto w-full max-w-[300px] overflow-hidden rounded-xl">
          <img
            alt="Movie Poster"
            className="aspect-[2/3] w-full object-cover"
            height={450}
            src="/placeholder.svg"
            width={300}
          />
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {movie.title}
            </h1>
            <p className="text-lg font-medium text-gray-500 dark:text-gray-400">
              {movie.year}
            </p>
          </div>
          <div className="space-y-4 text-gray-500 dark:text-gray-400">
            <p>{movie.description}</p>

            <div>
              <h2 className="mb-2 text-xl font-bold">User Ratings</h2>
              <div className="flex items-center gap-2">
                <StarIcon className="h-5 w-5 fill-primary" />
                <span className="text-2xl font-bold">{movie.rating}</span>
                <span className="text-sm">({movie.reviewCount} reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
