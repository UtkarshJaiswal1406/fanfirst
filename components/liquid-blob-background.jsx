"use client"

import { useEffect, useRef } from "react"

export default function LiquidBlobBackground({
  children,
  className = "",
  blobCount = 3,
  colors = ["rgba(0, 255, 255, 0.1)", "rgba(0, 100, 255, 0.1)", "rgba(180, 0, 255, 0.1)"],
}) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const blobs = []

    // Create blobs
    for (let i = 0; i < blobCount; i++) {
      const blob = document.createElement("div")
      blob.className = "liquid-blob absolute"
      blob.style.width = `${Math.random() * 300 + 100}px`
      blob.style.height = `${Math.random() * 300 + 100}px`
      blob.style.left = `${Math.random() * 100}%`
      blob.style.top = `${Math.random() * 100}%`
      blob.style.background = colors[i % colors.length]
      blob.style.animationDelay = `${i * 2}s`

      container.appendChild(blob)
      blobs.push(blob)
    }

    // Clean up
    return () => {
      blobs.forEach((blob) => blob.remove())
    }
  }, [blobCount, colors])

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div className="relative z-10">{children}</div>
    </div>
  )
}

