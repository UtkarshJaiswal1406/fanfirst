"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"

export default function FuturisticCard({
  children,
  className = "",
  variant = "default",
  glowColor = "#00c3ff",
  hoverEffect = true,
  onClick,
}) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  // Handle 3D rotation effect on mouse move
  const handleMouseMove = (e) => {
    if (!cardRef.current || !hoverEffect) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = (y - centerY) / 20
    const rotateY = (centerX - x) / 20

    setRotation({ x: rotateX, y: rotateY })
  }

  // Reset rotation when mouse leaves
  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotation({ x: 0, y: 0 })
  }

  // Get variant-specific styles
  const getVariantStyles = () => {
    switch (variant) {
      case "gradient":
        return "bg-gradient-to-br from-[#00c3ff]/10 to-[#0080ff]/10"
      case "dark":
        return "bg-gray-900/80"
      case "glass":
        return "backdrop-blur-md bg-white/5"
      case "outline":
        return "bg-transparent"
      case "minimal":
        return "bg-transparent"
      default:
        return "bg-gray-900/50"
    }
  }

  // Get border styles
  const getBorderStyles = () => {
    if (variant === "outline" || variant === "minimal") {
      return isHovered ? `border border-[${glowColor}]/60` : `border border-[${glowColor}]/30`
    }

    return isHovered ? `border border-[${glowColor}]/40` : `border border-[${glowColor}]/20`
  }

  // Get shape styles
  const getShapeStyles = () => {
    switch (variant) {
      case "rounded":
        return "rounded-full"
      case "hexagon":
        return "clip-path-hexagon"
      case "diamond":
        return "clip-path-diamond"
      case "minimal":
        return "rounded-lg"
      default:
        return "rounded-xl"
    }
  }

  // Add clip path styles to document if needed
  useEffect(() => {
    if (variant === "hexagon" || variant === "diamond") {
      const style = document.createElement("style")

      if (variant === "hexagon") {
        style.textContent = `
          .clip-path-hexagon {
            clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
          }
        `
      } else if (variant === "diamond") {
        style.textContent = `
          .clip-path-diamond {
            clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
          }
        `
      }

      document.head.appendChild(style)

      return () => {
        document.head.removeChild(style)
      }
    }
  }, [variant])

  return (
    <motion.div
      ref={cardRef}
      className={`
        ${getVariantStyles()} 
        ${getBorderStyles()} 
        ${getShapeStyles()} 
        overflow-hidden
        transition-all duration-300
        ${className}
      `}
      style={{
        boxShadow: isHovered
          ? `0 0 20px rgba(${glowColor
              .replace("#", "")
              .match(/.{2}/g)
              .map((hex) => Number.parseInt(hex, 16))
              .join(", ")}, 0.3)`
          : "none",
        transform: hoverEffect
          ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovered ? 1.02 : 1})`
          : "none",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={hoverEffect ? { scale: 1.02 } : {}}
      whileTap={hoverEffect ? { scale: 0.98 } : {}}
    >
      {/* Glow effect overlay */}
      {isHovered && (
        <div
          className="absolute inset-0 opacity-20 z-0"
          style={{
            background: `radial-gradient(circle at ${rotation.y * -20 + 50}% ${rotation.x * 20 + 50}%, ${glowColor}, transparent 70%)`,
          }}
        />
      )}

      {/* Border glow effect for minimal variant */}
      {variant === "minimal" && (
        <div
          className="absolute inset-0 rounded-lg z-0"
          style={{
            boxShadow: isHovered
              ? `inset 0 0 10px rgba(${glowColor
                  .replace("#", "")
                  .match(/.{2}/g)
                  .map((hex) => Number.parseInt(hex, 16))
                  .join(", ")}, 0.3)`
              : "none",
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

