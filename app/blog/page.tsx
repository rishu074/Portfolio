import type { Metadata } from "next"
import Link from "next/link"
import { getAllBlogs } from "@/lib/blogs"
import { AdBanner } from "@/components/ads/ad-banner"

export const metadata: Metadata = {
  title: "Blog | Rishu — Full-Stack Developer",
  description: "Read my latest thoughts, tutorials, and insights on web development and technology.",
}

export default function BlogPage() {
  const blogs = getAllBlogs()

  return (
    <section className="pt-32 pb-20 min-h-screen">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="font-heading text-4xl font-bold md:text-5xl">
          My <span className="text-accent">Blog</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Articles, tutorials, and insights on full-stack development, devops, and tech.
        </p>

        {/* Ad Space Top */}
        <AdBanner dataAdSlot="5931446153" />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <Link key={blog.slug} href={`/blog/${blog.slug}`}>
              <div className="group h-full rounded-2xl border border-border/50 bg-card p-6 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 cursor-pointer flex flex-col justify-between">
                <div>
                  <div className="mb-4 flex items-center justify-between text-sm text-muted-foreground">
                    <span>{new Date(blog.date).toLocaleDateString("en-US", { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <h2 className="mb-3 font-heading text-xl font-bold transition-colors group-hover:text-accent">
                    {blog.title}
                  </h2>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {blog.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
