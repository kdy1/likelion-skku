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
}) {}
