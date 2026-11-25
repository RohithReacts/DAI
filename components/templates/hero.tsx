"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Hero() {

  return (
    <section
      id="home"
      className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-4 pt-28 pb-20 sm:px-6 sm:pt-36 sm:pb-28 lg:px-8"
    >
      {/* Subtle ambient background glow & grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--color-muted)_0%,transparent_70%)] opacity-70 dark:opacity-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_60%,transparent_100%)] opacity-40"
      />

      <div className="container mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Badge: THE AI AGENT ECOSYSTEM */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3.5 py-1.5 text-xs font-semibold tracking-widest text-muted-foreground uppercase backdrop-blur-sm"
        >

          <span>Dev Agents Inteligence</span>
        </motion.div>

        {/* Main Heading: Build. Discover. Automate. */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
          className="text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-6xl"
        >
          Build Discover Automate
        </motion.h1>

        {/* Subheadline: Everything you need to build powerful AI agents. */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.15, ease: "easeOut" }}
          className="mt-4 max-w-2xl text-lg font-medium text-foreground/90 sm:text-xl"
        >
          Everything you need to build powerful AI agents.
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.22, ease: "easeOut" }}
          className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base"
        >
          Discover agents, skills, connectors, playbooks and tools. Build your
          own AI workflows in one place.
        </motion.p>

        {/* Action Buttons: (Explore Marketplace) (Build an Agent →) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.38, ease: "easeOut" }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="h-11 rounded-lg px-6 font-medium shadow-xs transition-transform hover:-translate-y-0.5"
            render={<Link href="#explore" />}
            nativeButton={false}
          >
            Explore Marketplace
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="group h-11 rounded-lg px-6 font-medium transition-transform hover:-translate-y-0.5"
            render={<Link href="#agents" />}
            nativeButton={false}
          >
            <span>Build an Agent</span>
            <ArrowRight className="ml-1.5 size-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

