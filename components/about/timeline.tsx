"use client"

import { FadeIn } from "@/components/motion-wrapper"
import { Rocket, Wrench, BookOpen, GraduationCap, Search } from "lucide-react"

const timelineEvents = [
  {
    year: "2021-22",
    title: "Co-founded a Minecraft Hosting Platform",
    description:
      "Co-founded a free Minecraft hosting platform with friends. Leveraged trial machines to provide free server hosting and monetized through the platform itself. This is where I first learned to code.",
    icon: Rocket,
    accent: true,
  },
  {
    year: "2024",
    title: "Senior Tech at Hosting Company",
    description:
      "Worked as Senior Tech at a friend's hosting company for 6 months. Gained hands-on experience managing infrastructure, troubleshooting servers, and leading technical operations.",
    icon: Wrench,
    accent: false,
  },
  {
    year: "2025-26",
    title: "12th Commerce Board Exams",
    description:
      "Focused on completing 12th Commerce board exams while continuing to learn and build projects in my spare time.",
    icon: BookOpen,
    accent: false,
  },
  {
    year: "2026",
    title: "Pursuing Chartered Accountancy",
    description:
      "Completed board exams and now pursuing CA (Chartered Accountancy), combining finance expertise with technical skills.",
    icon: GraduationCap,
    accent: false,
  },
  {
    year: "Feb 2026",
    title: "Actively Seeking Opportunities",
    description:
      "Actively seeking part-time work opportunities to apply my full-stack development skills while continuing my CA journey.",
    icon: Search,
    accent: true,
  },
]

export function Timeline() {
  return (
    <section className="border-t border-border/50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            My <span className="text-accent">Journey</span>
          </h2>
        </FadeIn>

        <div className="relative mt-12">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border/50 md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <FadeIn key={event.year} delay={index * 0.1} direction={index % 2 === 0 ? "left" : "right"}>
                <div
                  className={`relative flex flex-col md:flex-row md:items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-border bg-background md:left-1/2">
                    <event.icon className={`h-4 w-4 ${event.accent ? "text-accent" : "text-primary"}`} />
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                    }`}
                  >
                    <span
                      className={`font-heading text-sm font-bold ${
                        event.accent ? "text-accent" : "text-primary"
                      }`}
                    >
                      {event.year}
                    </span>
                    <h3 className="mt-1 font-heading text-lg font-bold text-foreground">
                      {event.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {event.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
