import type { Metadata } from "next";
import { Skills } from "@/components/templates/skills";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Discover reusable capabilities, instructions and workflows to make your AI agents more powerful.",
};

export default function SkillsPage() {
  return (
    <main className="flex flex-1 flex-col bg-background font-sans">
      <Skills />
    </main>
  );
}

