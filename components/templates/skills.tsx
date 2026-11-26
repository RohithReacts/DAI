"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const categories = [
  "All Skills",
  "Development",
  "Automation",
  "Testing",
  "Data",
  "Productivity",
  "Design",
] as const;

type Category = (typeof categories)[number];

interface SkillItem {
  title: string;
  featured?: boolean;
  description: string;
  category: Exclude<Category, "All Skills">;
  version: string;
  meta: string;
  href: string;
  icon: LucideIcon;
}

const skills: SkillItem[] = [];

interface RecentSkillItem {
  title: string;
  category: Exclude<Category, "All Skills">;
  href: string;
  icon: LucideIcon;
}

const recentlyAddedSkills: RecentSkillItem[] = [];

function SkillCard({ skill, index }: { skill: SkillItem; index: number }) {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.08,
        ease: "easeOut",
      }}
    >
      <Card className="relative flex h-full flex-col justify-between bg-card/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-muted/30 hover:shadow-md hover:ring-foreground/25">
        <CardHeader className="gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-muted/70 text-foreground shadow-2xs transition-colors duration-300 group-hover/card:bg-primary group-hover/card:text-primary-foreground">
            <Icon className="size-5" />
          </div>
          {skill.featured && (
            <CardAction>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/80 px-2.5 py-1 text-xs font-medium text-foreground">

                Ongoing...
              </span>
            </CardAction>
          )}
          <div className="space-y-1.5 pt-1">
            <CardTitle className="text-xl font-semibold tracking-tight">
              <Link
                href={skill.href}
                className="transition-colors hover:text-primary"
              >
                {skill.title}
              </Link>
            </CardTitle>
            <CardDescription className="text-sm leading-relaxed text-muted-foreground">
              {skill.description}
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="pt-2">
          <div className="inline-flex w-fit items-center rounded-md border border-border/80 bg-muted/40 px-2.5 py-1 text-xs font-medium text-muted-foreground">
            {skill.meta}
          </div>
        </CardContent>

        <CardFooter className="border-t border-border/60 pt-4">
          <Button
            variant="ghost"
            size="sm"
            className="group/btn -ml-2.5 font-medium text-foreground hover:bg-transparent hover:text-primary"
            render={<Link href={skill.href} />}
            nativeButton={false}
          >
            <span>View Skill</span>
            <ArrowRight className="ml-1.5 size-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export function Skills() {
  const [selectedCategory, setSelectedCategory] =
    React.useState<Category>("All Skills");

  const { filteredFeaturedSkills, filteredRecentSkills } = React.useMemo(() => {
    const matchesCategory = (category: Exclude<Category, "All Skills">) =>
      selectedCategory === "All Skills" || category === selectedCategory;

    return {
      filteredFeaturedSkills: skills.filter((skill) =>
        matchesCategory(skill.category)
      ),
      filteredRecentSkills: recentlyAddedSkills.filter((skill) =>
        matchesCategory(skill.category)
      ),
    };
  }, [selectedCategory]);

  const hasMatches =
    filteredFeaturedSkills.length > 0 || filteredRecentSkills.length > 0;

  const handleResetFilters = () => {
    setSelectedCategory("All Skills");
  };

  return (
    <div className="flex flex-1 flex-col">
      {/* Hero Header */}
      <section
        id="skills"
        className="relative flex flex-col items-center justify-center overflow-hidden px-4 pt-28 pb-14 sm:px-6 sm:pt-36 sm:pb-16 lg:px-8"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--color-muted)_0%,transparent_70%)] opacity-70 dark:opacity-40"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_60%,transparent_100%)] opacity-40"
        />

        <div className="container mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Give your agents new skills.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
            className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            Discover reusable capabilities, instructions and workflows to make
            your AI agents more powerful.
          </motion.p>
        </div>
      </section>

      {/* Explore Skills by Category */}
      <section className="relative w-full border-t border-border/50 px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-6 flex flex-wrap items-center justify-between gap-4"
          >
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Explore skills by category
            </h2>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleResetFilters}
              className="group/view font-medium text-muted-foreground hover:bg-transparent hover:text-foreground"
            >
              <span>View all</span>
              <ArrowRight className="ml-1.5 size-4 transition-transform duration-200 group-hover/view:translate-x-1" />
            </Button>
          </motion.div>

          <div className="flex flex-wrap gap-2.5">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    "inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium transition-all cursor-pointer",
                    isActive
                      ? "border-primary bg-primary text-primary-foreground shadow-xs"
                      : "border-border bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Skills Grid */}
      {(filteredFeaturedSkills.length > 0 || hasMatches || selectedCategory === "All Skills") && (
        <section className="relative w-full border-t border-border/50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="mb-8 flex flex-col items-center text-center sm:mb-10"
            >
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Featured skills
              </h2>
            </motion.div>

            {filteredFeaturedSkills.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredFeaturedSkills.map((skill, index) => (
                  <SkillCard key={skill.title} skill={skill} index={index} />
                ))}
              </div>
            ) : (
              <Card className="mx-auto max-w-md bg-card/60 text-center backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    No skills yet
                  </CardTitle>
                  <CardDescription>
                    Add your own custom skills to feature them here.
                  </CardDescription>
                </CardHeader>
              </Card>
            )}
          </div>
        </section>
      )}

      {/* Recently Added Skills */}
      {filteredRecentSkills.length > 0 && (
        <section className="relative w-full border-t border-border/50 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <h2 className="mb-4 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              Coming Soon...
            </h2>

            <ul className="divide-y divide-border/60 overflow-hidden rounded-xl border border-border bg-card/60 backdrop-blur-sm">
              {filteredRecentSkills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <li key={skill.title}>
                    <Link
                      href={skill.href}
                      className="group flex items-center justify-between gap-4 px-4 py-3.5 transition-colors hover:bg-muted/40 sm:px-5"
                    >
                      <span className="flex items-center gap-3">
                        <Icon className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
                        <span className="text-sm font-medium text-foreground sm:text-base">
                          {skill.title}
                        </span>
                      </span>
                      <span className="flex items-center gap-3">
                        <span className="text-xs text-muted-foreground">
                          {skill.category}
                        </span>
                        <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-1 group-hover:text-foreground" />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}

      {/* Empty State */}
      {!hasMatches && selectedCategory !== "All Skills" && (
        <section className="relative w-full border-t border-border/50 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <Card className="mx-auto max-w-md bg-card/60 text-center backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  No skills found
                </CardTitle>
                <CardDescription>
                  No skills match the selected category.
                </CardDescription>
              </CardHeader>
              <CardFooter className="justify-center">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={handleResetFilters}
                >
                  View all skills
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      )}
    </div>
  );
}

