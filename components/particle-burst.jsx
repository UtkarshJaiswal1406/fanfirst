"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

export default function ParticleBurst({
  className = "",
  color = "#00c3ff",
  particleCount = 50,
  size = 200,
  duration = 2,
  trigger = "hover",
  targetRef = null,
}) {
  const containerRef = useRef(null)
  const particlesRef = useRef([])
  const isAnimatingRef = useRef(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div")
      particle.className = "absolute rounded-full"
      particle.style.width = `${Math.random() * 6 + 2}px`
      particle.style.height = particle.style.width
      particle.style.backgroundColor = color
      particle.style.opacity = "0"

      container.appendChild(particle)
      particlesRef.current.push(particle)
    }

    // Set up animation
    const animateParticles = () => {
      if (isAnimatingRef.current) return
      isAnimatingRef.current = true

      particlesRef.current.forEach((particle) => {
        // Reset position to center
        gsap.set(particle, {
          x: 0,
          y: 0,
          opacity: 0,
        })

        // Animate particle burst
        gsap.to(particle, {
          x: (Math.random() - 0.5) * size,
          y: (Math.random() - 0.5) * size,
          opacity: Math.random() * 0.7 + 0.3,
          duration: Math.random() * duration + 0.5,
          ease: "power2.out",
          onComplete: () => {
            gsap.to(particle, {
              opacity: 0,
              duration: 0.3,
              delay: Math.random() * 0.5,
            })
          },
        })
      })

      // Reset animation flag
      setTimeout(
        () => {
          isAnimatingRef.current = false
        },
        duration * 1000 + 500,
      )
    }

    // Set up event listeners based on trigger type
    if (trigger === "hover") {
      const target = targetRef?.current || container
      target.addEventListener("mouseenter", animateParticles)
    } else if (trigger === "click") {
      const target = targetRef?.current || container
      target.addEventListener("click", animateParticles)
    } else if (trigger === "auto") {
      // Automatically trigger animation periodically
      const interval = setInterval(animateParticles, duration * 1000 + 2000)
      return () => clearInterval(interval)
    }

    // Cleanup
    return () => {
      if (trigger === "hover") {
        const target = targetRef?.current || container
        target.removeEventListener("mouseenter", animateParticles)
      } else if (trigger === "click") {
        const target = targetRef?.current || container
        target.removeEventListener("click", animateParticles)
      }

      // Remove particles
      particlesRef.current.forEach((particle) => {
        if (container.contains(particle)) {
          container.removeChild(particle)
        }
      })
      particlesRef.current = []
    }
  }, [color, particleCount, size, duration, trigger, targetRef])

  return <div ref={containerRef} className={`relative ${className}`} style={{ width: size, height: size }} />
}

