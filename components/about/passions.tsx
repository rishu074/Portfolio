"use client"

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper"
import { Dumbbell, CircleDot, Code2, BookOpen, Rocket } from "lucide-react"


const passions = [
  { name: "Gym & Fitness", icon: Dumbbell },
  { name: "Football", icon: CircleDot },
  { name: "Coding", icon: Code2 },
  { name: "Reading", icon: BookOpen },
  { name: "Business", icon: Rocket },
]

export function Passions() {
  return (
    <section className="border-t border-border/50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Passions & <span className="text-accent">Hobbies</span>
          </h2>
        </FadeIn>

        <StaggerContainer className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {passions.map((passion) => (
            <StaggerItem key={passion.name}>
              <div className="flex flex-col items-center gap-3 rounded-2xl border border-border/50 bg-card p-6 text-center transition hover:border-accent/30">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                  <passion.icon className="h-7 w-7 text-accent" />
                </div>
                <span className="text-sm font-medium text-foreground">{passion.name}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
