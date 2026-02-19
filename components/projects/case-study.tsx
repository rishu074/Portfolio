"use client"

import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Lightbulb,
  Target,
  Layers,
  AlertTriangle,
  BookOpen,
  TrendingUp,
} from "lucide-react"
import type { Project } from "@/lib/projects"
import { FadeIn } from "@/components/motion-wrapper"

interface CaseStudyProps {
  project: Project
  prevProject: { slug: string; title: string } | null
  nextProject: { slug: string; title: string } | null
}

export function CaseStudy({ project, prevProject, nextProject }: CaseStudyProps) {
  return (
    <article className="pt-32 pb-20">
      <div className="mx-auto max-w-4xl px-6">
        {/* Back link */}
        <FadeIn>
          <Link
            href="/projects"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </FadeIn>

        {/* Header */}
        <FadeIn delay={0.1}>
          <header className="mb-12">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              {project.category}
            </span>
            <h1 className="mt-4 font-heading text-4xl font-bold md:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            {/* Tech Stack badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-6 flex gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition hover:bg-card"
                >
                  <Github className="h-4 w-4" />
                  Source Code
                </a>
              )}
            </div>
          </header>
        </FadeIn>

        {/* Problem & Solution */}
        <FadeIn delay={0.2}>
          <div className="mb-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border/50 bg-card p-6">
              <div className="mb-3 flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                <h2 className="font-heading text-lg font-bold">Problem</h2>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{project.problem}</p>
            </div>
            <div className="rounded-2xl border border-border/50 bg-card p-6">
              <div className="mb-3 flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-accent" />
                <h2 className="font-heading text-lg font-bold">Solution</h2>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{project.solution}</p>
            </div>
          </div>
        </FadeIn>

        {/* Key Features */}
        <FadeIn delay={0.25}>
          <div className="mb-12">
            <h2 className="mb-4 font-heading text-2xl font-bold">Key Features</h2>
            <ul className="space-y-3">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                    {i + 1}
                  </span>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {/* Tech Stack Details */}
        <FadeIn delay={0.3}>
          <div className="mb-12">
            <div className="mb-4 flex items-center gap-2">
              <Layers className="h-5 w-5 text-accent" />
              <h2 className="font-heading text-2xl font-bold">Tech Stack Details</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: "Frontend", items: project.frontend },
                { label: "Backend", items: project.backend },
                { label: "Database", items: project.database },
                { label: "DevOps", items: project.devops },
              ].map((section) => (
                <div key={section.label} className="rounded-xl border border-border/50 bg-card p-4">
                  <h3 className="mb-2 text-sm font-semibold text-primary">{section.label}</h3>
                  <div className="flex flex-wrap gap-2">
                    {section.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md bg-background px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Challenges & Learnings */}
        <FadeIn delay={0.35}>
          <div className="mb-12 grid gap-6 md:grid-cols-2">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-primary" />
                <h2 className="font-heading text-xl font-bold">Challenges</h2>
              </div>
              <ul className="space-y-3">
                {project.challenges.map((challenge, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-accent" />
                <h2 className="font-heading text-xl font-bold">Learnings</h2>
              </div>
              <ul className="space-y-3">
                {project.learnings.map((learning, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {learning}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>

        {/* Outcome */}
        <FadeIn delay={0.4}>
          <div className="mb-12 rounded-2xl border border-accent/20 bg-accent/5 p-6">
            <div className="mb-3 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-accent" />
              <h2 className="font-heading text-xl font-bold">Outcome</h2>
            </div>
            <p className="leading-relaxed text-muted-foreground">{project.outcome}</p>
          </div>
        </FadeIn>

        {/* Navigation */}
        <FadeIn delay={0.45}>
          <div className="flex items-center justify-between border-t border-border/50 pt-8">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group flex items-center gap-2 text-sm text-muted-foreground transition hover:text-accent"
              >
                <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-1" />
                <div>
                  <span className="block text-xs text-muted-foreground/70">Previous</span>
                  <span className="font-medium">{prevProject.title}</span>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group flex items-center gap-2 text-right text-sm text-muted-foreground transition hover:text-accent"
              >
                <div>
                  <span className="block text-xs text-muted-foreground/70">Next</span>
                  <span className="font-medium">{nextProject.title}</span>
                </div>
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </FadeIn>
      </div>
    </article>
  )
}
