import Link from "next/link"
import { Github, Linkedin, Twitter, Mail, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div>
            <Link href="/" className="font-serif text-xl font-bold text-accent">
              Rishu
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">
              Full-Stack Developer & Tech Entrepreneur
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/rishu074"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-accent"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/rishu-raj-56580b307/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-accent"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/royadma0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-accent"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/royadma0/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-accent"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.youtube.com/@Royadma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-accent"
              aria-label="Youtube"
            >
              <Youtube className="h-5 w-5" />
            </a>
            <a
              href="mailto:rishu@royadma.dev"
              className="text-muted-foreground transition-colors hover:text-accent"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Rishu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
