import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface CatalogItem {
  title: string;
  description: string;
  meta: string;
}

export function CatalogPage({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: CatalogItem[];
}) {
  return (
    <div className="flex flex-1 flex-col">
      <section className="relative flex flex-col items-center justify-center overflow-hidden px-4 pt-28 pb-14 sm:px-6 sm:pt-36 sm:pb-16 lg:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--color-muted)_0%,transparent_70%)] opacity-70 dark:opacity-40"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_60%,transparent_100%)] opacity-40"
        />

        <div className="container mx-auto flex max-w-4xl flex-col items-center text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {description}
          </p>
        </div>
      </section>

      <section className="relative w-full border-t border-border/50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <Card
                key={item.title}
                className="relative flex h-full flex-col justify-between bg-card/60 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-muted/30 hover:shadow-md hover:ring-foreground/25"
              >
                <CardHeader className="gap-3">
                  <CardTitle className="text-xl font-semibold tracking-tight">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-2">
                  <div className="inline-flex w-fit items-center rounded-md border border-border/80 bg-muted/40 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                    {item.meta}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

