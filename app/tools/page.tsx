import type { Metadata } from "next";
import { CatalogPage, type CatalogItem } from "@/components/templates/catalog-page";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "Actions and integrations that extend what your AI agents can do.",
};

const tools: CatalogItem[] = [];

export default function ToolsPage() {
  return (
    <main className="flex flex-1 flex-col bg-background font-sans">
      <CatalogPage
        title="Actions and integrations."
        description="Equip your AI agents with reliable actions to search, compute and interact with external systems."
        items={tools}
        emptyTitle="No tools yet"
        emptyDescription="Add your own custom tools to feature them here."
      />
    </main>
  );
}

