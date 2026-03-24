import ProjectCard from "@/components/project-card";

export default function page() {
  return (
    <section className="container py-16 md:py-20">
      <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
        All My Projects
      </h1>
      <p className="mb-10 max-w-2xl text-sm text-muted-foreground sm:text-base">
        A curated collection of products I have designed and developed with a
        focus on performance, clean architecture, and polished user experience.
      </p>

      <ProjectCard />
    </section>
  );
}
