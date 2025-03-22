"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface FuturisticCardProps {
  children: ReactNode
  className?: string
  glowColor?: string
  delay?: number
}

const FuturisticCard = ({ 
  children, 
  className = "", 
  glowColor = "#00c3ff",
  delay = 0 
}: FuturisticCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`
        relative rounded-lg bg-black/40 backdrop-blur-md
        border border-white/10 overflow-hidden
        ${className}
      `}
      style={{
        boxShadow: `0 0 20px ${glowColor}10`,
      }}
    >
      {/* Gradient border effect */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background: `
            linear-gradient(to right, transparent, ${glowColor}20) top,
            linear-gradient(to left, transparent, ${glowColor}20) bottom
          `,
          backgroundSize: '100% 1px',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Hover effect */}
      <div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${glowColor}10, transparent 100px)`
        }}
      />
    </motion.div>
  )
}

export default FuturisticCard
