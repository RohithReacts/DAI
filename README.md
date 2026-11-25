<div align="center">
  <img src="public/brandlogo.png" alt="DAI Logo" width="80" height="80" />

  <h1>DAI — Dev Agents Intelligence</h1>

  <p>
    <strong>Build. Discover. Automate.</strong><br />
    Everything you need to build powerful AI agents in one unified ecosystem.
  </p>

  <p>
    <a href="https://nextjs.org"><img src="https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js" alt="Next.js" /></a>
    <a href="https://react.dev"><img src="https://img.shields.io/badge/React-19-149eca?style=flat-square&logo=react" alt="React" /></a>
    <a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/TypeScript-5.9-3178c6?style=flat-square&logo=typescript" alt="TypeScript" /></a>
    <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind_CSS-4.0-38bdf8?style=flat-square&logo=tailwindcss" alt="Tailwind CSS" /></a>
    <a href="./LICENSE"><img src="https://img.shields.io/badge/License-MIT-emerald?style=flat-square" alt="MIT License" /></a>
  </p>
</div>

---

## Overview

**DAI (Dev Agents Intelligence)** is a modern platform and marketplace for discovering, packaging, and automating AI agent capabilities. Rather than storing skills and workflows as simple database text, DAI treats capabilities as structured, reusable packages complete with manifests (`skill.json`), instructions (`SKILL.md`), reference docs, scripts, and examples.

---

## Core Ecosystem

- **Agents** (`/agents`) — Ready-to-use AI assistants tailored for engineering, project management, and data analytics.
- **Skills** (`/skills` & `/skills/[slug]`) — Reusable agent capabilities packaged with `skill.json`, `SKILL.md`, `references/`, `scripts/`, and `examples/`.
- **Connectors** (`/connectors`) — Integrations connecting external services like GitHub, Slack, and Google Workspace into agent pipelines.
- **Playbooks** (`/playbooks`) — Step-by-step repeatable multi-step workflows for PR reviews, incident triage, and reporting.
- **Tools** (`/tools`) — Reliable actions and execution sandboxes for web search, code running, and SQL analysis.

---

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router, Turbopack, React Server Components)
- **UI Library:** [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com) + [`@base-ui/react`](https://base-ui.com)
- **Animations:** [Motion](https://motion.dev) & Motion Primitives
- **Icons:** [Lucide React](https://lucide.dev)
- **Theming:** `next-themes` (Light / Dark / System mode)

---

## Project & Skill Package Structure

```text
DAI/
├── app/
│   ├── agents/                     # Agents catalog page
│   ├── connectors/                 # Connectors catalog page
│   ├── explore/                    # Ecosystem explorer page
│   ├── playbooks/                  # Playbooks catalog page
│   ├── skills/
│   │   ├── page.tsx                # Skills directory with category filters
│   │   └── [slug]/
│   │       └── page.tsx            # Dynamic individual skill details page
│   ├── tools/                      # Tools catalog page
│   ├── layout.tsx                  # Root layout with Navbar, ThemeProvider & Footer
│   └── page.tsx                    # Landing page (Hero, Explore, Featured Agents)
├── components/
│   ├── motion-primitives/          # Animated backgrounds, text loops, dialogs
│   ├── templates/                  # Section & page templates (Hero, Navbar, Skills, SkillDetail)
│   ├── themes/                     # Theme provider configuration
│   └── ui/                         # Reusable UI primitives (Button, Card, Sheet, etc.)
├── lib/
│   ├── skills.ts                   # File-system skill package loader & manifest parser
│   └── utils.ts                    # Classname merging helpers
└── skills/                         # Reusable skill packages
    └── development/
        └── nextjs-development/
            ├── skill.json          # Package metadata, tags, version & manifest
            ├── SKILL.md            # Core agent instructions and guidelines
            ├── references/
            │   └── architecture.md # Deep-dive reference documentation
            ├── scripts/
            │   └── verify-setup.mjs
            └── examples/
                └── server-component.tsx
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/RohithReacts/DAI.git
cd DAI
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to explore the platform.

### 4. Build for production

```bash
npm run build
npm run start
```

---

## Adding a New Skill Package

To add a new skill package to DAI:

1. Create a folder under `skills/<category>/<skill-slug>/`.
2. Add a `skill.json` manifest with `name`, `title`, `category`, `version`, `description`, `tags`, `overview`, and `included` items.
3. Add a `SKILL.md` file containing the markdown instructions for the agent.
4. Add optional `references/`, `scripts/`, and `examples/` directories.
5. Visit `/skills/<skill-slug>` to view the generated skill details page and interactive source inspector.

---

## License

Licensed under the [MIT License](./LICENSE). Copyright © 2026 [RohithReacts](https://github.com/RohithReacts).
