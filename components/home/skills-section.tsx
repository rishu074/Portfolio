"use client"

import {
  GitBranch,
  Terminal,
  Container,
  Code2,
  Globe,
  Database,
  Server,
  Cpu,
  Brain,
  Shield,
  BarChart3,
  Video,
  Landmark,
  Scale,
  Megaphone,
  Zap,
} from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper"

const coreSkills = [
  { name: "Git & GitHub", icon: GitBranch },
  { name: "Linux Systems", icon: Terminal },
  { name: "Docker", icon: Container },
  { name: "Python", icon: Code2 },
  { name: "Next.js", icon: Globe },
  { name: "MongoDB", icon: Database },
  { name: "MySQL", icon: Database },
  { name: "Redis", icon: Zap },
  { name: "Express.js", icon: Server },
  { name: "Node.js", icon: Cpu },
]

const learningSkills = [
  { name: "DevOps", icon: Container },
  { name: "AI, ML & Data Science", icon: Brain },
  { name: "Cybersecurity", icon: Shield },
]

const additionalSkills = [
  { name: "Finance & Accounting", icon: Landmark },
  { name: "Indian Law System", icon: Scale },
  { name: "Social Media Marketing", icon: Megaphone },
  { name: "Video Editing", icon: Video },
]

function SkillCard({ name, icon: Icon }: { name: string; icon: React.ComponentType<{ className?: string }> }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border/50 bg-card p-4 transition hover:border-accent/30 hover:bg-card/80">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <span className="text-sm font-medium text-foreground">{name}</span>
    </div>
  )
}

export function SkillsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Skills & <span className="text-accent">Expertise</span>
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Capable of building full-stack applications for new startups from the ground up.
          </p>
        </FadeIn>

        <div className="mt-12 space-y-10">
          <FadeIn delay={0.1}>
            <h3 className="mb-4 font-heading text-lg font-semibold text-primary">
              Core Technical Skills
            </h3>
            <StaggerContainer className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
              {coreSkills.map((skill) => (
                <StaggerItem key={skill.name}>
                  <SkillCard {...skill} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h3 className="mb-4 font-heading text-lg font-semibold text-accent">
              Currently Learning
            </h3>
            <StaggerContainer className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {learningSkills.map((skill) => (
                <StaggerItem key={skill.name}>
                  <SkillCard {...skill} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>

          <FadeIn delay={0.3}>
            <h3 className="mb-4 font-heading text-lg font-semibold text-muted-foreground">
              Additional Skills
            </h3>
            <StaggerContainer className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {additionalSkills.map((skill) => (
                <StaggerItem key={skill.name}>
                  <SkillCard {...skill} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6">
              <div className="flex items-start gap-3">
                <BarChart3 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p className="text-balance font-medium text-foreground">
                  Capable of building full-stack applications for new startups from the ground up
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
