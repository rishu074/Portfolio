import type { Metadata, Viewport } from "next"
import { Inter, Montserrat, Playfair_Display } from "next/font/google"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Script from "next/script"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Rishu | Full-Stack Developer & Tech Entrepreneur",
  description:
    "Portfolio of Rishu — Full-Stack Developer & Tech Entrepreneur from Bettiah, Bihar. Building innovative solutions for startups.",
  openGraph: {
    title: "Rishu | Full-Stack Developer & Tech Entrepreneur",
    description:
      "Full-Stack Developer building innovative solutions for startups. Open to work opportunities.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#121212",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ADSENSE_CLIENT_ID"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
