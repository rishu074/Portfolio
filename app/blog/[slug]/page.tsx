import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar } from "lucide-react"
import { getBlogBySlug, getAllBlogs } from "@/lib/blogs"
import { AdBanner } from "@/components/ads/ad-banner"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const blog = getBlogBySlug(slug)
  if (!blog) return { title: "Blog Not Found" }

  return {
    title: `${blog.title} | Rishu's Blog`,
    description: blog.description,
    keywords: blog.seoKeywords.join(", "),
  }
}

export function generateStaticParams() {
  return getAllBlogs().map((blog) => ({ slug: blog.slug }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const blog = getBlogBySlug(slug)

  if (!blog) {
    notFound()
  }

  return (
    <article className="pt-32 pb-20 min-h-screen">
      <div className="mx-auto max-w-3xl px-6">
        <Link
          href="/blog"
          className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent mb-8"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Blog
        </Link>
        
        <header className="mb-10">
          <h1 className="font-heading text-4xl font-bold md:text-5xl mb-6">
            {blog.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              <time dateTime={blog.date}>
                {new Date(blog.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </div>
            <div className="flex items-center gap-2">
              {blog.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Ad Space Before Content */}
        <AdBanner dataAdSlot="YOUR_SLOT_ID_2" className="mb-10" />

        <div 
          className="blog-content w-full"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Ad Space After Content */}
        <AdBanner dataAdSlot="YOUR_SLOT_ID_3" className="mt-16" />
      </div>
    </article>
  )
}
