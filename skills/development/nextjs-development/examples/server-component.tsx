// Example Server Component with typed async params
export default async function ExamplePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <section className="container mx-auto py-12">
      <h1 className="text-3xl font-bold tracking-tight">Skill: {slug}</h1>
    </section>
  );
}

