"use client"

import { useEffect, useState } from "react"

interface AdBannerProps {
  dataAdSlot: string
  dataAdFormat?: string
  dataFullWidthResponsive?: boolean
  className?: string
}

export function AdBanner({
  dataAdSlot,
  dataAdFormat = "auto",
  dataFullWidthResponsive = true,
  className = "",
}: AdBannerProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    try {
      // @ts-ignore
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (error) {
      console.error("AdSense error", error)
    }
  }, [])

  if (!isClient) {
    return (
      <div className={`my-8 flex justify-center w-full bg-accent/5 rounded-lg border border-border/50 py-4 items-center min-h-[100px] relative overflow-hidden ${className}`}>
         <span className="absolute text-muted-foreground/30 text-xs font-medium tracking-widest uppercase z-0">
          Advertisement Space
        </span>
      </div>
    )
  }

  return (
    <div className={`my-8 flex justify-center w-full bg-accent/5 rounded-lg border border-border/50 py-4 items-center min-h-[100px] relative overflow-hidden ${className}`}>
      {/* Placeholder text for dev mode or before ad loads */}
      <span className="absolute text-muted-foreground/30 text-xs font-medium tracking-widest uppercase z-0">
        Advertisement
      </span>
      <ins
        className="adsbygoogle z-10 block"
        style={{ display: "block", width: "100%" }}
        data-ad-client="ca-pub-3935343761595003" // Your actual AdSense Client ID
        data-ad-slot={dataAdSlot}
        data-ad-format={dataAdFormat}
        data-full-width-responsive={dataFullWidthResponsive ? "true" : "false"}
      />
    </div>
  )
}
