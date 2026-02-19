import type { Metadata } from "next"
import { ProjectsGrid } from "@/components/projects/projects-grid"

export const metadata: Metadata = {
  title: "Projects | Rishu — Full-Stack Developer",
  description:
    "Explore Rishu's portfolio of projects — full-stack applications, DevOps tools, and web apps built with modern technologies.",
}

export default function ProjectsPage() {
  return (
    <section className="pt-32 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="font-heading text-4xl font-bold md:text-5xl">
          My <span className="text-accent">Projects</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          A collection of projects that demonstrate my full-stack development capabilities.
          Click any project to see a detailed case study.
        </p>

        <ProjectsGrid />
      </div>
    </section>
  )
}
