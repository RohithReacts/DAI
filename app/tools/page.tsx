import type { Metadata } from "next";
import { CatalogPage } from "@/components/templates/catalog-page";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "Actions and integrations that extend what your AI agents can do.",
};

const tools = [
  {
    title: "Web Search",
    description:
      "Query live web sources and retrieve structured summaries for agent reasoning.",
    meta: "Tool · Research",
  },
  {
    title: "Code Runner",
    description:
      "Execute scripts and validate generated code inside isolated sandboxes.",
    meta: "Tool · Execution",
  },
  {
    title: "SQL Query",
    description:
      "Run read-only analytical queries and inspect database schemas safely.",
    meta: "Tool · Data",
  },
];

export default function ToolsPage() {
  return (
    <main className="flex flex-1 flex-col bg-background font-sans">
      <CatalogPage
        title="Actions and integrations."
        description="Equip your AI agents with reliable actions to search, compute and interact with external systems."
        items={tools}
      />
    </main>
  );
}

