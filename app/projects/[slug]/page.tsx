import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { projects, getProjectBySlug } from "@/lib/projects"
import { CaseStudy } from "@/components/projects/case-study"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: "Project Not Found" }

  return {
    title: `${project.title} | Rishu`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | Rishu`,
      description: project.shortDescription,
    },
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null

  return (
    <CaseStudy
      project={project}
      prevProject={prevProject ? { slug: prevProject.slug, title: prevProject.title } : null}
      nextProject={nextProject ? { slug: nextProject.slug, title: nextProject.title } : null}
    />
  )
}
