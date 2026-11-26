import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist or has been moved.",
};

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col bg-background font-sans">
      <section className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-4 pt-28 pb-20 sm:px-6 sm:pt-36 sm:pb-28 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--color-muted)_0%,transparent_70%)] opacity-70 dark:opacity-40"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_60%,transparent_100%)] opacity-40"
        />

        <div className="container mx-auto flex max-w-2xl flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3.5 py-1.5 text-xs font-semibold tracking-widest text-muted-foreground uppercase backdrop-blur-sm">
            <span>404 · Not Found</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Page not found.
          </h1>

          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
            The page, agent, or skill you are looking for doesn&apos;t exist or
            has been removed.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              className="group h-11 rounded-lg px-6 font-medium shadow-xs transition-transform hover:-translate-y-0.5"
              render={<Link href="/" />}
              nativeButton={false}
            >
              <ArrowLeft className="mr-1.5 size-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Home</span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="h-11 rounded-lg px-6 font-medium transition-transform hover:-translate-y-0.5"
              render={<Link href="/explore" />}
              nativeButton={false}
            >
              <Compass className="mr-1.5 size-4" />
              <span>Explore Ecosystem</span>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

