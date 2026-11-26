"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, type LucideIcon } from "lucide-react";

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

export interface AgentItem {
  title: string;
  featured?: boolean;
  description: string;
  meta: string;
  href: string;
  icon: LucideIcon;
}

const featuredAgents: AgentItem[] = [];

export function Agents() {
  return (
    <section
      id="agents"
      className="relative w-full py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-border/50"
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
            Featured agents
          </h2>
        </motion.div>

        {/* Featured Agents Grid */}
        {featuredAgents.length > 0 ? (
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
            {featuredAgents.map((agent, index) => {
              const Icon = agent.icon;
              return (
                <motion.div
                  key={agent.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <Card className="relative flex h-full flex-col justify-between bg-card/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-muted/30 hover:shadow-md hover:ring-foreground/25">
                    <CardHeader className="gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-muted/70 text-foreground shadow-2xs transition-colors duration-300 group-hover/card:bg-primary group-hover/card:text-primary-foreground">
                        <Icon className="size-5" />
                      </div>
                      {agent.featured && (
                        <CardAction>
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/80 px-2.5 py-1 text-xs font-medium text-foreground">
                            Ongoing...
                          </span>
                        </CardAction>
                      )}
                      <div className="space-y-1.5 pt-1">
                        <CardTitle className="text-xl font-semibold tracking-tight">
                          {agent.title}
                        </CardTitle>
                        <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                          {agent.description}
                        </CardDescription>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-2">
                      <div className="inline-flex w-fit items-center rounded-md border border-border/80 bg-muted/40 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                        {agent.meta}
                      </div>
                    </CardContent>

                    <CardFooter className="border-t border-border/60 pt-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="group/btn -ml-2.5 font-medium text-foreground hover:bg-transparent hover:text-primary"
                        render={<Link href={agent.href} />}
                        nativeButton={false}
                      >
                        <span>View Agent</span>
                        <ArrowRight className="ml-1.5 size-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <Card className="mx-auto max-w-md bg-card/60 text-center backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                No agents yet
              </CardTitle>
              <CardDescription>
                Add your own custom agents to feature them here.
              </CardDescription>
            </CardHeader>
          </Card>
        )}
      </div>
    </section>
  );
}

