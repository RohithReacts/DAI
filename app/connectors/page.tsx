import type { Metadata } from "next";
import { CatalogPage } from "@/components/templates/catalog-page";

export const metadata: Metadata = {
  title: "Connectors",
  description: "Connect external services and platforms to your AI agents.",
};

const connectors = [
  {
    title: "GitHub",
    description:
      "Sync repositories, pull requests, issues and code reviews with your agents.",
    meta: "Connector · Developer Tools",
  },
  {
    title: "Slack",
    description:
      "Send notifications, answer channel threads and trigger agent workflows.",
    meta: "Connector · Team Messaging",
  },
  {
    title: "Google Workspace",
    description:
      "Connect Docs, Sheets, Drive and Calendar directly into agent pipelines.",
    meta: "Connector · Productivity",
  },
];

export default function ConnectorsPage() {
  return (
    <main className="flex flex-1 flex-col bg-background font-sans">
      <CatalogPage
        title="Connect external services."
        description="Integrate your AI agents with the tools, repositories and platforms your team uses every day."
        items={connectors}
      />
    </main>
  );
}

