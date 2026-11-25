import type { Metadata } from "next";
import { Agents } from "@/components/templates/agents";

export const metadata: Metadata = {
  title: "Agents",
  description: "Ready-to-use AI assistants to automate your workflows.",
};

export default function AgentsPage() {
  return (
    <main className="flex flex-1 flex-col justify-center bg-background pt-16 font-sans">
      <Agents />
    </main>
  );
}

