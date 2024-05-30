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
}) {}
