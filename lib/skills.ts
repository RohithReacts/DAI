import fs from "node:fs";
import path from "node:path";

export interface SkillPackageFile {
  name: string;
  type: "file" | "directory";
  description?: string;
}

export interface SkillPackage {
  slug: string;
  name: string;
  title: string;
  type: string;
  category: string;
  version: string;
  status: "Published" | "Draft" | "Beta";
  featured?: boolean;
  description: string;
  tags: string[];
  overview: string;
  included: string[];
  packageFiles: SkillPackageFile[];
  installCommand: string;
  sourcePath: string;
  skillMarkdown?: string;
  architectureMarkdown?: string;
  fileTree: string[];
}

const SKILLS_ROOT = path.join(process.cwd(), "skills");

const FALLBACK_SKILLS: Record<string, SkillPackage> = {
  "nextjs-development": {
    slug: "nextjs-development",
    name: "nextjs-development",
    title: "Next.js Development",
    type: "Skill",
    category: "Development",
    version: "v1.0.0",
    status: "Published",
    featured: true,
    description:
      "Build production-ready applications using Next.js and React.",
    tags: ["TypeScript", "React", "Tailwind CSS"],
    overview:
      "Instructions and guidelines for building scalable Next.js applications.",
    included: [
      "Project setup",
      "App Router architecture",
      "Reusable components",
      "Server and client components",
      "API integration",
      "Best practices",
    ],
    packageFiles: [
      {
        name: "skill.json",
        type: "file",
        description: "Skill metadata, dependencies, tags, and package manifest.",
      },
      {
        name: "SKILL.md",
        type: "file",
        description:
          "Core agent instructions, architecture rules, and workflow guidelines.",
      },
      {
        name: "references/",
        type: "directory",
        description: "Detailed reference docs including architecture.md.",
      },
      {
        name: "scripts/",
        type: "directory",
        description: "Automation and scaffolding helper scripts.",
      },
      {
        name: "examples/",
        type: "directory",
        description: "Reference implementations for Server/Client components.",
      },
    ],
    installCommand: "npx dai-cli skills add development/nextjs-development",
    sourcePath: "skills/development/nextjs-development",
    fileTree: [
      "skills/",
      "└── development/",
      "    └── nextjs-development/",
      "        ├── skill.json",
      "        ├── SKILL.md",
      "        ├── references/",
      "        │   └── architecture.md",
      "        ├── scripts/",
      "        └── examples/",
    ],
  },
  "playwright-automation": {
    slug: "playwright-automation",
    name: "playwright-automation",
    title: "Playwright Automation",
    type: "Skill",
    category: "Testing",
    version: "v1.0.0",
    status: "Published",
    featured: false,
    description: "Browser automation, test scripts, screenshots and reporting.",
    tags: ["Playwright", "TypeScript", "E2E Testing"],
    overview:
      "Instructions and guidelines for reliable end-to-end browser testing and automation with Playwright.",
    included: [
      "Test runner configuration",
      "Page Object Model patterns",
      "Visual regression & screenshots",
      "Network mocking & fixtures",
      "CI/CD reporting integration",
      "Best practices",
    ],
    packageFiles: [
      { name: "skill.json", type: "file" },
      { name: "SKILL.md", type: "file" },
      { name: "references/", type: "directory" },
      { name: "scripts/", type: "directory" },
      { name: "examples/", type: "directory" },
    ],
    installCommand: "npx dai-cli skills add testing/playwright-automation",
    sourcePath: "skills/testing/playwright-automation",
    fileTree: [
      "skills/",
      "└── testing/",
      "    └── playwright-automation/",
      "        ├── skill.json",
      "        ├── SKILL.md",
      "        ├── references/",
      "        ├── scripts/",
      "        └── examples/",
    ],
  },
  "google-sheets-analysis": {
    slug: "google-sheets-analysis",
    name: "google-sheets-analysis",
    title: "Google Sheets Analysis",
    type: "Skill",
    category: "Data",
    version: "v1.0.0",
    status: "Published",
    featured: false,
    description: "Read, analyze, calculate and summarize spreadsheet data.",
    tags: ["Google Sheets", "Data Analysis", "Formulas"],
    overview:
      "Instructions and workflows for reading, transforming, and summarizing structured spreadsheet datasets.",
    included: [
      "Sheet range extraction",
      "Formula & pivot generation",
      "Data cleaning pipelines",
      "Automated KPI summaries",
      "Chart & report exports",
      "Best practices",
    ],
    packageFiles: [
      { name: "skill.json", type: "file" },
      { name: "SKILL.md", type: "file" },
      { name: "references/", type: "directory" },
      { name: "scripts/", type: "directory" },
      { name: "examples/", type: "directory" },
    ],
    installCommand: "npx dai-cli skills add data/google-sheets-analysis",
    sourcePath: "skills/data/google-sheets-analysis",
    fileTree: [
      "skills/",
      "└── data/",
      "    └── google-sheets-analysis/",
      "        ├── skill.json",
      "        ├── SKILL.md",
      "        ├── references/",
      "        ├── scripts/",
      "        └── examples/",
    ],
  },
  "github-repository-management": {
    slug: "github-repository-management",
    name: "github-repository-management",
    title: "GitHub Repository Management",
    type: "Skill",
    category: "Development",
    version: "v1.0.0",
    status: "Published",
    description:
      "Automate pull requests, issue triage, branch workflows, and release notes across GitHub repositories.",
    tags: ["GitHub", "Git", "CI/CD"],
    overview:
      "Guidelines and workflows for managing repositories, pull requests, and code reviews with AI agents.",
    included: [
      "Branching conventions",
      "Pull request templates",
      "Automated code review checks",
      "Issue labeling & triage",
      "Release changelog generation",
      "Best practices",
    ],
    packageFiles: [
      { name: "skill.json", type: "file" },
      { name: "SKILL.md", type: "file" },
      { name: "references/", type: "directory" },
      { name: "scripts/", type: "directory" },
      { name: "examples/", type: "directory" },
    ],
    installCommand:
      "npx dai-cli skills add development/github-repository-management",
    sourcePath: "skills/development/github-repository-management",
    fileTree: [
      "skills/",
      "└── development/",
      "    └── github-repository-management/",
      "        ├── skill.json",
      "        ├── SKILL.md",
      "        ├── references/",
      "        ├── scripts/",
      "        └── examples/",
    ],
  },
  "jira-project-management": {
    slug: "jira-project-management",
    name: "jira-project-management",
    title: "Jira Project Management",
    type: "Skill",
    category: "Productivity",
    version: "v1.0.0",
    status: "Published",
    description:
      "Organize sprints, create well-structured tickets, track blockers, and generate sprint reports.",
    tags: ["Jira", "Agile", "Project Management"],
    overview:
      "Instructions and templates for sprint planning, backlog grooming, and issue tracking in Jira.",
    included: [
      "Epic & story decomposition",
      "Acceptance criteria templates",
      "Sprint velocity summaries",
      "Blocker detection workflows",
      "JQL query patterns",
      "Best practices",
    ],
    packageFiles: [
      { name: "skill.json", type: "file" },
      { name: "SKILL.md", type: "file" },
      { name: "references/", type: "directory" },
      { name: "scripts/", type: "directory" },
      { name: "examples/", type: "directory" },
    ],
    installCommand:
      "npx dai-cli skills add productivity/jira-project-management",
    sourcePath: "skills/productivity/jira-project-management",
    fileTree: [
      "skills/",
      "└── productivity/",
      "    └── jira-project-management/",
      "        ├── skill.json",
      "        ├── SKILL.md",
      "        ├── references/",
      "        ├── scripts/",
      "        └── examples/",
    ],
  },
  "rest-api-development": {
    slug: "rest-api-development",
    name: "rest-api-development",
    title: "REST API Development",
    type: "Skill",
    category: "Development",
    version: "v1.0.0",
    status: "Published",
    description:
      "Design, validate, secure, and document production-grade RESTful APIs and route handlers.",
    tags: ["REST API", "TypeScript", "OpenAPI"],
    overview:
      "Instructions and architectural standards for building consistent, type-safe REST APIs.",
    included: [
      "Resource naming & routing",
      "Schema validation",
      "Authentication & rate limiting",
      "Standardized error responses",
      "OpenAPI documentation",
      "Best practices",
    ],
    packageFiles: [
      { name: "skill.json", type: "file" },
      { name: "SKILL.md", type: "file" },
      { name: "references/", type: "directory" },
      { name: "scripts/", type: "directory" },
      { name: "examples/", type: "directory" },
    ],
    installCommand: "npx dai-cli skills add development/rest-api-development",
    sourcePath: "skills/development/rest-api-development",
    fileTree: [
      "skills/",
      "└── development/",
      "    └── rest-api-development/",
      "        ├── skill.json",
      "        ├── SKILL.md",
      "        ├── references/",
      "        ├── scripts/",
      "        └── examples/",
    ],
  },
  "ui-ux-design": {
    slug: "ui-ux-design",
    name: "ui-ux-design",
    title: "UI/UX Design",
    type: "Skill",
    category: "Design",
    version: "v1.0.0",
    status: "Published",
    description:
      "Craft accessible design systems, responsive layouts, and polished interactive interfaces.",
    tags: ["Design Systems", "Tailwind CSS", "Accessibility"],
    overview:
      "Instructions and design principles for creating clean, accessible, and responsive user interfaces.",
    included: [
      "Typography & spacing scales",
      "Color tokens & dark mode",
      "Accessible component patterns",
      "Micro-interactions & motion",
      "Responsive layout grids",
      "Best practices",
    ],
    packageFiles: [
      { name: "skill.json", type: "file" },
      { name: "SKILL.md", type: "file" },
      { name: "references/", type: "directory" },
      { name: "scripts/", type: "directory" },
      { name: "examples/", type: "directory" },
    ],
    installCommand: "npx dai-cli skills add design/ui-ux-design",
    sourcePath: "skills/design/ui-ux-design",
    fileTree: [
      "skills/",
      "└── design/",
      "    └── ui-ux-design/",
      "        ├── skill.json",
      "        ├── SKILL.md",
      "        ├── references/",
      "        ├── scripts/",
      "        └── examples/",
    ],
  },
};

function findSkillDirBySlug(slug: string): string | null {
  if (!fs.existsSync(SKILLS_ROOT)) {
    return null;
  }

  const categoryEntries = fs.readdirSync(SKILLS_ROOT, { withFileTypes: true });
  for (const categoryEntry of categoryEntries) {
    if (!categoryEntry.isDirectory()) continue;
    const candidatePath = path.join(SKILLS_ROOT, categoryEntry.name, slug);
    if (
      fs.existsSync(candidatePath) &&
      fs.statSync(candidatePath).isDirectory()
    ) {
      return candidatePath;
    }
  }
  return null;
}

export function getSkillBySlug(slug: string): SkillPackage | null {
  const skillDir = findSkillDirBySlug(slug);
  const fallback = FALLBACK_SKILLS[slug];

  if (!skillDir) {
    return fallback ?? null;
  }

  const skillJsonPath = path.join(skillDir, "skill.json");
  const skillMdPath = path.join(skillDir, "SKILL.md");
  const archMdPath = path.join(skillDir, "references", "architecture.md");

  let parsedJson: Partial<SkillPackage> = {};
  if (fs.existsSync(skillJsonPath)) {
    try {
      const raw = fs.readFileSync(skillJsonPath, "utf-8");
      if (raw.trim()) {
        parsedJson = JSON.parse(raw);
      }
    } catch {
      // Fallback to static definition if JSON is malformed
    }
  }

  const skillMarkdown = fs.existsSync(skillMdPath)
    ? fs.readFileSync(skillMdPath, "utf-8")
    : undefined;

  const architectureMarkdown = fs.existsSync(archMdPath)
    ? fs.readFileSync(archMdPath, "utf-8")
    : undefined;

  const categoryFolder = path.basename(path.dirname(skillDir));

  return {
    slug,
    name: parsedJson.name ?? fallback?.name ?? slug,
    title: parsedJson.title ?? fallback?.title ?? slug,
    type: parsedJson.type ?? fallback?.type ?? "Skill",
    category: parsedJson.category ?? fallback?.category ?? "Development",
    version: parsedJson.version ?? fallback?.version ?? "v1.0.0",
    status: parsedJson.status ?? fallback?.status ?? "Published",
    featured: parsedJson.featured ?? fallback?.featured ?? false,
    description: parsedJson.description ?? fallback?.description ?? "",
    tags: parsedJson.tags ?? fallback?.tags ?? [],
    overview: parsedJson.overview ?? fallback?.overview ?? "",
    included: parsedJson.included ?? fallback?.included ?? [],
    packageFiles: parsedJson.packageFiles ??
      fallback?.packageFiles ?? [
        { name: "skill.json", type: "file" },
        { name: "SKILL.md", type: "file" },
        { name: "references/", type: "directory" },
        { name: "scripts/", type: "directory" },
        { name: "examples/", type: "directory" },
      ],
    installCommand:
      parsedJson.installCommand ??
      fallback?.installCommand ??
      `npx dai-cli skills add ${categoryFolder}/${slug}`,
    sourcePath:
      parsedJson.sourcePath ??
      fallback?.sourcePath ??
      `skills/${categoryFolder}/${slug}`,
    skillMarkdown,
    architectureMarkdown,
    fileTree: fallback?.fileTree ?? [
      "skills/",
      `├── ${categoryFolder}/`,
      `│   ├── ${slug}/`,
      "│   │   ├── skill.json",
      "│   │   ├── SKILL.md",
      "│   │   ├── references/",
      "│   │   │   └── architecture.md",
      "│   │   ├── scripts/",
      "│   │   └── examples/",
    ],
  };
}

export function getAllSkillSlugs(): string[] {
  const slugs = new Set<string>(Object.keys(FALLBACK_SKILLS));

  if (fs.existsSync(SKILLS_ROOT)) {
    const categories = fs.readdirSync(SKILLS_ROOT, { withFileTypes: true });
    for (const cat of categories) {
      if (!cat.isDirectory()) continue;
      const catPath = path.join(SKILLS_ROOT, cat.name);
      const skills = fs.readdirSync(catPath, { withFileTypes: true });
      for (const skill of skills) {
        if (skill.isDirectory()) {
          slugs.add(skill.name);
        }
      }
    }
  }

  return Array.from(slugs);
}

