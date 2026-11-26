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

const FALLBACK_SKILLS: Record<string, SkillPackage> = {};

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

