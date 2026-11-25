"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Check,
  CheckCircle2,
  Code2,
  Copy,
  Download,
  ExternalLink,
  FileCode2,
  FileJson,
  FileText,
  Folder,
  FolderTree,
  Terminal,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { SkillPackage, SkillPackageFile } from "@/lib/skills";
import { cn } from "@/lib/utils";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={cn("size-4", className)}
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
    </svg>
  );
}

function getFileIcon(item: SkillPackageFile) {
  if (item.type === "directory" || item.name.endsWith("/")) {
    return Folder;
  }
  if (item.name.endsWith(".json")) {
    return FileJson;
  }
  if (item.name.endsWith(".md")) {
    return FileText;
  }
  return FileCode2;
}

export function SkillDetail({ skill }: { skill: SkillPackage }) {
  const [copied, setCopied] = React.useState(false);
  const [showSource, setShowSource] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState<
    "SKILL.md" | "skill.json" | "architecture.md"
  >("SKILL.md");

  const handleCopyInstall = async () => {
    try {
      await navigator.clipboard.writeText(skill.installCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const skillJsonPreview = React.useMemo(
    () =>
      JSON.stringify(
        {
          name: skill.name,
          title: skill.title,
          type: skill.type,
          category: skill.category,
          version: skill.version,
          status: skill.status,
          description: skill.description,
          tags: skill.tags,
          files: skill.packageFiles.map((f) => f.name),
        },
        null,
        2
      ),
    [skill]
  );

  return (
    <div className="flex flex-1 flex-col">
      {/* Header / Hero Section */}
      <section className="relative flex flex-col justify-center overflow-hidden px-4 pt-28 pb-12 sm:px-6 sm:pt-36 sm:pb-16 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--color-muted)_0%,transparent_70%)] opacity-70 dark:opacity-40"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_60%,transparent_100%)] opacity-40"
        />

        <div className="container mx-auto max-w-5xl">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="mb-6"
          >
            <Button
              variant="ghost"
              size="sm"
              className="group -ml-2.5 text-muted-foreground hover:bg-transparent hover:text-foreground"
              render={<Link href="/skills" />}
              nativeButton={false}
            >
              <ArrowLeft className="mr-1.5 size-4 transition-transform duration-200 group-hover:-translate-x-1" />
              <span>Back to Skills</span>
            </Button>
          </motion.div>

          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="space-y-4"
            >
              {/* Meta row: Skill · Development · v1.0.0 */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-muted/70 text-foreground shadow-2xs">
                  <Code2 className="size-5" />
                </div>

                <span className="inline-flex items-center rounded-md border border-border/80 bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground sm:text-sm">
                  {skill.type} · {skill.category} · {skill.version}
                </span>

                {skill.featured && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/80 px-2.5 py-1 text-xs font-medium text-foreground">
                    Ongoing...
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                {skill.title}
              </h1>

              {/* Description */}
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {skill.description}
              </p>

              {/* Tags: TypeScript | React | Tailwind CSS */}
              {skill.tags.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border border-border bg-card/80 px-3 py-1 text-xs font-medium text-foreground shadow-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Primary CTA actions: Install Skill, View Source & Code */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
              className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch lg:min-w-[220px]"
            >
              <Button
                size="lg"
                onClick={handleCopyInstall}
                className="h-11 cursor-pointer rounded-lg px-6 font-medium shadow-xs transition-transform hover:-translate-y-0.5"
              >
                {copied ? (
                  <>
                    <Check className="mr-2 size-4" />
                    <span>Copied Install CLI</span>
                  </>
                ) : (
                  <>
                    <Download className="mr-2 size-4" />
                    <span>Install Skill</span>
                  </>
                )}
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  setShowSource((prev) => !prev);
                  const el = document.getElementById("package-source");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="h-11 cursor-pointer rounded-lg px-6 font-medium transition-transform hover:-translate-y-0.5"
              >
                <FileCode2 className="mr-2 size-4" />
                <span>View Source</span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="h-11 cursor-pointer rounded-lg px-6 font-medium transition-transform hover:-translate-y-0.5"
                render={
                  <Link
                    href="https://github.com/RohithReacts/next.js-code"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                nativeButton={false}
              >
                <GithubIcon className="mr-2 size-4" />
                <span>Code</span>
              </Button>
            </motion.div>
          </div>

          {/* Quick CLI Install Bar */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.16, ease: "easeOut" }}
            className="mt-8 flex items-center justify-between gap-4 rounded-xl border border-border/80 bg-card/70 px-4 py-3 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 overflow-x-auto font-mono text-xs sm:text-sm text-foreground">
              <Terminal className="size-4 shrink-0 text-muted-foreground" />
              <code className="whitespace-nowrap">{skill.installCommand}</code>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopyInstall}
              className="shrink-0 cursor-pointer text-xs text-muted-foreground hover:text-foreground"
            >
              {copied ? (
                <>
                  <Check className="mr-1.5 size-3.5" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="mr-1.5 size-3.5" />
                  Copy
                </>
              )}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Main Content Details */}
      <section className="relative w-full border-t border-border/50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Left 2 columns: Overview + What's included */}
            <div className="space-y-8 lg:col-span-2">
              {/* Overview Card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
              >
                <Card className="bg-card/60 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold tracking-tight">
                      Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {skill.overview}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* What's included Card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.18, ease: "easeOut" }}
              >
                <Card className="bg-card/60 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold tracking-tight">
                      What&apos;s included
                    </CardTitle>
                    <CardDescription>
                      Capabilities, architectural guidelines, and reusable
                      workflows bundled in this skill package.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {skill.included.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2.5 rounded-lg border border-border/60 bg-muted/30 px-3.5 py-2.5 text-sm font-medium text-foreground"
                        >
                          <CheckCircle2 className="size-4 shrink-0 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Package Source Inspector */}
              <motion.div
                id="package-source"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25, ease: "easeOut" }}
              >
                <Card className="bg-card/60 backdrop-blur-sm">
                  <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-border/60">
                    <div>
                      <CardTitle className="text-xl font-bold tracking-tight">
                        Skill package source
                      </CardTitle>
                      <CardDescription className="font-mono text-xs">
                        {skill.sourcePath}/
                      </CardDescription>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {(
                        [
                          "SKILL.md",
                          "skill.json",
                          ...(skill.architectureMarkdown
                            ? (["architecture.md"] as const)
                            : []),
                        ] as const
                      ).map((tab) => (
                        <button
                          key={tab}
                          type="button"
                          onClick={() => setActiveTab(tab)}
                          className={cn(
                            "cursor-pointer rounded-md border px-2.5 py-1 font-mono text-xs font-medium transition-colors",
                            activeTab === tab
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground"
                          )}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <pre
                      className={cn(
                        "overflow-x-auto rounded-lg border border-border/80 bg-muted/40 p-4 font-mono text-xs leading-relaxed text-foreground",
                        showSource ? "max-h-[520px]" : "max-h-80"
                      )}
                    >
                      <code>
                        {activeTab === "skill.json"
                          ? skillJsonPreview
                          : activeTab === "architecture.md"
                            ? skill.architectureMarkdown
                            : (skill.skillMarkdown ??
                              `# ${skill.title}\n\n${skill.overview}\n\n## What's included\n${skill.included.map((i) => `- ${i}`).join("\n")}`)}
                      </code>
                    </pre>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Right column: Package files & Directory structure */}
            <div className="space-y-8">
              {/* Package files list */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.14, ease: "easeOut" }}
              >
                <Card className="bg-card/60 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold tracking-tight">
                      Package files
                    </CardTitle>
                    <CardDescription>
                      Files and directories included in this reusable package.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="divide-y divide-border/60 overflow-hidden rounded-lg border border-border/80 bg-background/50">
                      {skill.packageFiles.map((file) => {
                        const Icon = getFileIcon(file);
                        return (
                          <li
                            key={file.name}
                            className="flex items-start gap-3 px-3.5 py-2.5 transition-colors hover:bg-muted/40"
                          >
                            <Icon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                            <div className="min-w-0 flex-1">
                              <p className="font-mono text-xs font-semibold text-foreground sm:text-sm">
                                {file.name}
                              </p>
                              {file.description && (
                                <p className="mt-0.5 text-xs text-muted-foreground">
                                  {file.description}
                                </p>
                              )}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Skill package file structure tree */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.22, ease: "easeOut" }}
              >
                <Card className="bg-card/60 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <FolderTree className="size-4 text-muted-foreground" />
                      <CardTitle className="text-base font-bold tracking-tight">
                        Package file structure
                      </CardTitle>
                    </div>
                    <CardDescription>
                      Stored as a reusable skill package under{" "}
                      <code className="font-mono text-xs">skills/</code>.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="overflow-x-auto rounded-lg border border-border/80 bg-muted/40 p-3.5 font-mono text-xs leading-6 text-foreground">
                      <code>
                        {[
                          "skills/",
                          "│",
                          `├── ${skill.category.toLowerCase()}/`,
                          `│   ├── ${skill.slug}/`,
                          "│   │   ├── skill.json",
                          "│   │   ├── SKILL.md",
                          "│   │   ├── references/",
                          "│   │   │   └── architecture.md",
                          "│   │   ├── scripts/",
                          "│   │   └── examples/",
                        ].join("\n")}
                      </code>
                    </pre>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Bottom quick actions card */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.28, ease: "easeOut" }}
              >
                <Card className="bg-card/60 backdrop-blur-sm">
                  <CardContent className="flex flex-col gap-2.5">
                    <Button
                      onClick={handleCopyInstall}
                      className="w-full cursor-pointer justify-center"
                    >
                      <Download className="mr-2 size-4" />
                      <span>
                        {copied ? "Copied Install Command" : "Install Skill"}
                      </span>
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setShowSource(true);
                        const el = document.getElementById("package-source");
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                      className="w-full cursor-pointer justify-center"
                    >
                      <ExternalLink className="mr-2 size-4" />
                      <span>View Source</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full cursor-pointer justify-center"
                      render={
                        <Link
                          href="https://github.com/RohithReacts/next.js-code"
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      }
                      nativeButton={false}
                    >
                      <GithubIcon className="mr-2 size-4" />
                      <span>Code</span>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

