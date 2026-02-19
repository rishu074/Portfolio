"use client"

import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"
import { projects } from "@/lib/projects"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper"

export function ProjectsSection() {
  const featured = projects.slice(0, 4)

  return (
    <section className="border-t border-border/50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                Recent <span className="text-accent">Projects</span>
              </h2>
              <p className="mt-3 text-muted-foreground">
                A selection of projects that showcase my skills and experience.
              </p>
            </div>
            <Link
              href="/projects"
              className="hidden items-center gap-1 text-sm font-medium text-accent transition hover:underline md:flex"
            >
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>

        <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-2">
          {featured.map((project) => (
            <StaggerItem key={project.slug}>
              <Link href={`/projects/${project.slug}`} className="group block h-full">
                <div className="flex h-full flex-col rounded-2xl border border-border/50 bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {project.category}
                    </span>
                    <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition group-hover:opacity-100" />
                  </div>

                  <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.shortDescription}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-8 text-center md:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm font-medium text-accent transition hover:underline"
          >
            View all projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
