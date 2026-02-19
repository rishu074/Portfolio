"use client"

import { FadeIn } from "@/components/motion-wrapper"
import { MapPin, GraduationCap, Briefcase } from "lucide-react"

export function AboutHero() {
  return (
    <section className="pt-32 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <h1 className="font-heading text-4xl font-bold md:text-5xl">
            About <span className="text-accent">Me</span>
          </h1>

          <div className="mt-8 flex max-w-3xl flex-col gap-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {"I'm an 18-year-old developer, entrepreneur, and CA student from Bettiah, Bihar. My journey into tech started with a simple desire to create things that help people — and it's been an incredible ride ever since."}
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-full border border-border/50 bg-card px-4 py-2 text-sm">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-muted-foreground">Bettiah, Bihar</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-border/50 bg-card px-4 py-2 text-sm">
                <GraduationCap className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Pursuing CA</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-border/50 bg-card px-4 py-2 text-sm">
                <Briefcase className="h-4 w-4 text-accent" />
                <span className="text-muted-foreground">Open to Work</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
