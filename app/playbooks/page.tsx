import type { Metadata } from "next";
import { CatalogPage } from "@/components/templates/catalog-page";

export const metadata: Metadata = {
  title: "Playbooks",
  description: "Step-by-step reusable workflows for AI agents.",
};

const playbooks = [
  {
    title: "PR Review Workflow",
    description:
      "Analyze diffs, check test coverage and post structured review summaries.",
    meta: "Playbook · Engineering",
  },
  {
    title: "Incident Triage",
    description:
      "Correlate logs, summarize root causes and draft post-incident reports.",
    meta: "Playbook · Operations",
  },
  {
    title: "Weekly Reporting",
    description:
      "Aggregate sprint progress, metrics and blockers into a concise digest.",
    meta: "Playbook · Management",
  },
];

export default function PlaybooksPage() {
  return (
    <main className="flex flex-1 flex-col bg-background font-sans">
      <CatalogPage
        title="Step-by-step agent playbooks."
        description="Repeatable multi-step workflows to guide AI agents through complex engineering and operational tasks."
        items={playbooks}
      />
    </main>
  );
}

