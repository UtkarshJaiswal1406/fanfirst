"use client"

import { useEffect, useRef, useState } from "react"

export default function ParallaxSection({ children, className = "", speed = 0.5, direction = "up", threshold = 0.1 }) {
  const sectionRef = useRef(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const { top, height } = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Calculate how far the section is from the viewport center
      const distanceFromCenter = top - windowHeight / 2 + height / 2

      // Calculate the parallax offset based on the distance
      const newOffset = distanceFromCenter * speed * (direction === "down" ? -1 : 1)

      setOffset(newOffset)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed, direction])

  return (
    <div ref={sectionRef} className={`relative overflow-hidden ${className}`}>
      <div
        style={{
          transform: `translateY(${offset}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        {children}
      </div>
    </div>
  )
}

