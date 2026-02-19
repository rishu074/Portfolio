"use client"

import Link from "next/link"
import { ArrowRight, Briefcase } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background grid pattern */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,hsl(var(--background))_80%)]" />
      </div>

      {/* Glowing orb */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-card px-4 py-2 text-sm text-muted-foreground">
            <Briefcase className="h-4 w-4 text-accent" />
            <span>Open to work opportunities</span>
          </div>

          <h1 className="font-heading text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            {"Hi, I'm "}
            <span className="text-accent">Rishu</span>
          </h1>

          <p className="mt-4 font-heading text-xl font-medium text-primary md:text-2xl">
            Full-Stack Developer & Tech Entrepreneur
          </p>

          <p className="mt-2 text-lg text-muted-foreground">
            from Bettiah, Bihar
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Building innovative solutions for startups from the ground up.
            Passionate about creating real value through technology.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-heading text-sm font-semibold text-primary-foreground transition hover:scale-105 hover:brightness-110"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-accent/50 px-6 py-3 font-heading text-sm font-semibold text-accent transition hover:scale-105 hover:bg-accent/10"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
