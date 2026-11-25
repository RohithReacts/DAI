import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SkillDetail } from "@/components/templates/skill-detail";
import { getAllSkillSlugs, getSkillBySlug } from "@/lib/skills";

export function generateStaticParams() {
  return getAllSkillSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const skill = getSkillBySlug(slug);

  if (!skill) {
    return {
      title: "Skill Not Found",
    };
  }

  return {
    title: skill.title,
    description: skill.description,
  };
}

export default async function SkillDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const skill = getSkillBySlug(slug);

  if (!skill) {
    notFound();
  }

  return (
    <main className="flex flex-1 flex-col bg-background font-sans">
      <SkillDetail skill={skill} />
    </main>
  );
}

