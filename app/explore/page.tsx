import type { Metadata } from "next";
import { Explore } from "@/components/templates/explore";

export const metadata: Metadata = {
  title: "Explore",
  description:
    "Explore agents, skills, connectors, playbooks, tools and templates.",
};

export default function ExplorePage() {
  return (
    <main className="flex flex-1 flex-col justify-center bg-background pt-16 font-sans">
      <Explore />
    </main>
  );
}

