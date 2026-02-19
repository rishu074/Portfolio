"use client"

import { useState } from "react"
import { Send, CheckCircle } from "lucide-react"
import { FadeIn } from "@/components/motion-wrapper"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <FadeIn>
        <div className="flex flex-col items-center justify-center rounded-2xl border border-accent/20 bg-card p-12 text-center">
          <CheckCircle className="mb-4 h-12 w-12 text-accent" />
          <h3 className="font-heading text-xl font-bold">Message Sent!</h3>
          <p className="mt-2 text-muted-foreground">
            {"Thanks for reaching out. I'll get back to you soon."}
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 text-sm font-medium text-accent underline transition hover:text-accent/80"
          >
            Send another message
          </button>
        </div>
      </FadeIn>
    )
  }

  return (
    <FadeIn>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="mb-2 block text-sm font-medium text-foreground">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className="w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="Project collaboration, job opportunity, etc."
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            className="w-full resize-none rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder-muted-foreground transition focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="Tell me about your project or opportunity..."
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-heading text-sm font-semibold text-primary-foreground transition hover:scale-105 hover:brightness-110"
        >
          Send Message
          <Send className="h-4 w-4" />
        </button>
      </form>
    </FadeIn>
  )
}
