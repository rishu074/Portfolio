import { HeroSection } from "@/components/home/hero-section"
import { SkillsSection } from "@/components/home/skills-section"
import { ProjectsSection } from "@/components/home/projects-section"
import { ContactSection } from "@/components/home/contact-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}
