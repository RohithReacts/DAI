import type { Metadata } from "next";
import { CatalogPage, type CatalogItem } from "@/components/templates/catalog-page";

export const metadata: Metadata = {
  title: "Connectors",
  description: "Connect external services and platforms to your AI agents.",
};

const connectors: CatalogItem[] = [];

export default function ConnectorsPage() {
  return (
    <main className="flex flex-1 flex-col bg-background font-sans">
      <CatalogPage
        title="Connect external services."
        description="Integrate your AI agents with the tools, repositories and platforms your team uses every day."
        items={connectors}
        emptyTitle="No connectors yet"
        emptyDescription="Add your own custom connectors to feature them here."
      />
    </main>
  );
}

