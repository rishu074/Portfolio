"use client"

import { useState } from "react"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { projects, getCategories } from "@/lib/projects"
import { StaggerContainer, StaggerItem } from "@/components/motion-wrapper"

export function ProjectsGrid() {
  const categories = getCategories()
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <div>
      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground"
                : "border border-border/50 bg-card text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <StaggerContainer className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <StaggerItem key={project.slug}>
            <Link href={`/projects/${project.slug}`} className="group block h-full">
              <div className="flex h-full flex-col rounded-2xl border border-border/50 bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {project.category}
                  </span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition group-hover:opacity-100" />
                </div>

                <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-accent transition-colors">
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
    </div>
  )
}
