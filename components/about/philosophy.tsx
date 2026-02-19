"use client"

import { FadeIn } from "@/components/motion-wrapper"
import { Quote } from "lucide-react"

const quotes = [
  {
    text: "I believe in value for money. Money is exchanged for value \u2014 businesses transform raw materials into final products, charge customers fairly, generate employment, and protect natural resources instead of exploiting them for profit.",
  },
  {
    text: "Money is just a means to buy commodities, not a metric for success. Ultimately, everyone must find peace in their lives. Peace is all that matters.",
  },
]

export function Philosophy() {
  return (
    <section className="border-t border-border/50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Philosophy & <span className="text-accent">Values</span>
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {quotes.map((quote, index) => (
            <FadeIn key={index} delay={index * 0.15}>
              <div className="relative rounded-2xl border border-border/50 bg-card p-8">
                <Quote className="mb-4 h-8 w-8 text-accent/30" />
                <p className="font-serif text-lg italic leading-relaxed text-foreground/90">
                  {quote.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
            <h3 className="font-heading text-xl font-bold text-foreground">Goal</h3>
            <p className="mt-3 text-lg text-muted-foreground">
              My goal is to build a successful tech startup that creates real value and makes a positive impact.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
