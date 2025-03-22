"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", mouseMove)

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll("a, button, input, .interactive")

    const enterInteractive = () => setCursorVariant("interactive")
    const leaveInteractive = () => setCursorVariant("default")

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", enterInteractive)
      el.addEventListener("mouseleave", leaveInteractive)
    })

    return () => {
      window.removeEventListener("mousemove", mouseMove)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", enterInteractive)
        el.removeEventListener("mouseleave", leaveInteractive)
      })
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "rgba(0, 195, 255, 0)",
      border: "2px solid rgba(0, 195, 255, 0.3)",
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    interactive: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      height: 64,
      width: 64,
      backgroundColor: "rgba(0, 195, 255, 0.1)",
      border: "2px solid rgba(0, 195, 255, 0.5)",
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
  }

  // Only show on desktop
  if (typeof window !== "undefined" && window.innerWidth < 768) {
    return null
  }

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-difference"
      variants={variants}
      animate={cursorVariant}
    />
  )
}

