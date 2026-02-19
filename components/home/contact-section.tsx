"use client"

import Link from "next/link"
import { Mail, ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/motion-wrapper"

export function ContactSection() {
  return (
    <section className="border-t border-border/50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card p-10 text-center md:p-16">
            {/* Accent glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/10 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-accent/10 blur-[100px]" />

            <div className="relative">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                <Mail className="h-6 w-6 text-accent" />
              </div>

              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                {"Let's Build "}
                <span className="text-accent">Something Together</span>
              </h2>

              <p className="mx-auto mt-4 max-w-md text-muted-foreground">
                {"I'm currently open to work opportunities. Whether it's a startup idea or a freelance project, let's connect."}
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-heading text-sm font-semibold text-primary-foreground transition hover:scale-105 hover:brightness-110"
                >
                  Get in Touch
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="mailto:rishu@example.com"
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-foreground transition hover:bg-card hover:text-accent"
                >
                  <Mail className="h-4 w-4" />
                  rishu@example.com
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
