import { Metadata } from "next";
import { PropsWithChildren } from "react";

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}): Promise<Metadata> {
  return {
    title: {
      template: `Movie ${id}: %s`,
      default: `Movie ${id}`,
    },
  };
}

export default function MovieLayout({ children }: PropsWithChildren<{}>) {
  return (
    <div>
      <header>
        <h1>Movie Layout</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
