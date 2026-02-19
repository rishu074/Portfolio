"use client"

import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react"
import { FadeIn } from "@/components/motion-wrapper"

const contactDetails = [
  { icon: Mail, label: "Email", value: "rishu@example.com", href: "mailto:rishu@example.com" },
  { icon: MapPin, label: "Location", value: "Bettiah, Bihar, India", href: null },
]

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
]

export function ContactInfo() {
  return (
    <FadeIn delay={0.2}>
      <div className="space-y-8">
        <div>
          <h3 className="mb-4 font-heading text-lg font-bold">Contact Details</h3>
          <div className="space-y-4">
            {contactDetails.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-card">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm font-medium text-foreground transition hover:text-accent"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-lg font-bold">Social Links</h3>
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 bg-card transition hover:border-accent/30 hover:text-accent"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-accent/20 bg-accent/5 p-5">
          <p className="text-sm font-medium text-accent">Open to Work</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {"I'm actively looking for part-time opportunities in full-stack development. Let's build something great together."}
          </p>
        </div>
      </div>
    </FadeIn>
  )
}
