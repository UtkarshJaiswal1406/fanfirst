"use client"

import { useEffect, useRef } from 'react'

interface ParticleBurstProps {
  x: number
  y: number
  color?: string
  particleCount?: number
  onComplete?: () => void
}

const ParticleBurst = ({ 
  x, 
  y, 
  color = "#00c3ff",
  particleCount = 20,
  onComplete 
}: ParticleBurstProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: {
      x: number
      y: number
      vx: number
      vy: number
      life: number
      maxLife: number
    }[] = []

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount
      const velocity = 2 + Math.random() * 2
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity,
        life: 1,
        maxLife: 0.7 + Math.random() * 0.3
      })
    }

    let animationFrameId: number
    let completed = false

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      let allDead = true

      particles.forEach(particle => {
        if (particle.life > 0) {
          allDead = false
          particle.x += particle.vx
          particle.y += particle.vy
          particle.vy += 0.1 // gravity
          particle.life -= 0.02

          ctx.beginPath()
          ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2)
          ctx.fillStyle = `${color}${Math.floor(particle.life * 255).toString(16).padStart(2, '0')}`
          ctx.fill()
        }
      })

      if (allDead && !completed) {
        completed = true
        onComplete?.()
        return
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [x, y, color, particleCount, onComplete])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
    />
  )
}

export default ParticleBurst
