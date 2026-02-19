import type { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { Timeline } from "@/components/about/timeline"
import { Philosophy } from "@/components/about/philosophy"
import { Passions } from "@/components/about/passions"

export const metadata: Metadata = {
  title: "About | Rishu — Full-Stack Developer",
  description:
    "Learn about Rishu's journey from Bettiah, Bihar — from co-founding a Minecraft hosting platform to becoming a full-stack developer and tech entrepreneur.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Timeline />
      <Philosophy />
      <Passions />
    </>
  )
}
