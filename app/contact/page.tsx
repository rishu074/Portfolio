import type { Metadata } from "next"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"

export const metadata: Metadata = {
  title: "Contact | Rishu — Full-Stack Developer",
  description:
    "Get in touch with Rishu for work opportunities, collaborations, or just to say hello.",
}

export default function ContactPage() {
  return (
    <section className="pt-32 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="font-heading text-4xl font-bold md:text-5xl">
          {"Let's "}
          <span className="text-accent">Connect</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          {"I'm currently open to work opportunities. Whether you have a project idea, a startup that needs a developer, or just want to chat — I'd love to hear from you."}
        </p>

        <div className="mt-12 grid gap-12 md:grid-cols-5">
          <div className="md:col-span-3">
            <ContactForm />
          </div>
          <div className="md:col-span-2">
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  )
}
