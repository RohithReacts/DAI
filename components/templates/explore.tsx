"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  BookOpen,
  Bot,
  LayoutTemplate,
  Plug,
  Sparkles,
  Wrench,
} from "lucide-react";

import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ecosystemItems = [
  {
    title: "Agents",
    description: "Ready-to-use AI assistants",
    href: "/agents",
    icon: Bot,
  },
  {
    title: "Skills",
    description: "Reusable agent capabilities",
    href: "/skills",
    icon: Sparkles,
  },
  {
    title: "Connectors",
    description: "Connect external services",
    href: "/connectors",
    icon: Plug,
  },
  {
    title: "Playbooks",
    description: "Step-by-step workflows",
    href: "/playbooks",
    icon: BookOpen,
  },
  {
    title: "Tools",
    description: "Actions and integrations",
    href: "/tools",
    icon: Wrench,
  },
  {
    title: "Templates",
    description: "Ready-made project setups",
    href: "#templates",
    icon: LayoutTemplate,
  },
];

export function Explore() {
  return (
    <section
      id="explore"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-12 flex flex-col items-center text-center sm:mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Explore the ecosystem
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ecosystemItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.07,
                  ease: "easeOut",
                }}
              >
                <Link href={item.href} className="block h-full focus:outline-none">
                  <Card className="relative h-full bg-card/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-muted/40 hover:shadow-md hover:ring-foreground/25">
                    <CardHeader className="gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-muted/70 text-foreground shadow-2xs transition-colors duration-300 group-hover/card:bg-primary group-hover/card:text-primary-foreground">
                        <Icon className="size-5" />
                      </div>
                      <CardAction>
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-all duration-300 group-hover/card:bg-muted group-hover/card:text-foreground">
                          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5" />
                        </span>
                      </CardAction>
                      <div className="space-y-1.5 pt-1">
                        <CardTitle className="text-lg font-semibold tracking-tight">
                          {item.title}
                        </CardTitle>
                        <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

