import type { Metadata } from "next";
import { Hero } from "@/components/templates/hero";
import { Explore } from "@/components/templates/explore";
import { Agents } from "@/components/templates/agents";
import { Skills } from "@/components/templates/skills";

export const metadata: Metadata = {
  title: "Home",
  description: "Everything you need to build powerful AI agents.",
};

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-background font-sans">
      <Hero />
      <Explore />
      <Agents />
    </main>
  );
}
