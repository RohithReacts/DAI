import type { Metadata } from "next";
import { CatalogPage, type CatalogItem } from "@/components/templates/catalog-page";

export const metadata: Metadata = {
  title: "Playbooks",
  description: "Step-by-step reusable workflows for AI agents.",
};

const playbooks: CatalogItem[] = [];

export default function PlaybooksPage() {
  return (
    <main className="flex flex-1 flex-col bg-background font-sans">
      <CatalogPage
        title="Step-by-step agent playbooks."
        description="Repeatable multi-step workflows to guide AI agents through complex engineering and operational tasks."
        items={playbooks}
        emptyTitle="No playbooks yet"
        emptyDescription="Add your own custom playbooks to feature them here."
      />
    </main>
  );
}

