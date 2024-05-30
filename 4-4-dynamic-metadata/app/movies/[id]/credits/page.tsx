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
}) {}
