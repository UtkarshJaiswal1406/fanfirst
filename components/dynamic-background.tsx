"use client"

import { useEffect, useRef } from 'react'

const DynamicBackground = ({ variant = "wave" }: { variant?: "wave" | "dots" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    let animationFrameId: number

    if (variant === "wave") {
      // Wave animation
      let time = 0
      const animate = () => {
        time += 0.005
        ctx.fillStyle = '#000'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        
        for (let i = 0; i < 3; i++) {
          ctx.beginPath()
          ctx.strokeStyle = `rgba(0, 195, 255, ${0.1 - i * 0.03})`
          ctx.lineWidth = 2

          for (let x = 0; x < canvas.width; x += 5) {
            const y = Math.sin(x * 0.01 + time + i) * 50 + canvas.height / 2
            if (x === 0) {
              ctx.moveTo(x, y)
            } else {
              ctx.lineTo(x, y)
            }
          }

          ctx.stroke()
        }

        animationFrameId = requestAnimationFrame(animate)
      }
      animate()
    } else {
      // Dots animation
      const particles: { x: number; y: number; vx: number; vy: number }[] = []
      const particleCount = 50

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2
        })
      }

      const animate = () => {
        ctx.fillStyle = '#000'
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        particles.forEach(particle => {
          particle.x += particle.vx
          particle.y += particle.vy

          if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
          if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

          ctx.beginPath()
          ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(0, 195, 255, 0.5)'
          ctx.fill()

          particles.forEach(other => {
            const dx = other.x - particle.x
            const dy = other.y - particle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 100) {
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(other.x, other.y)
              ctx.strokeStyle = `rgba(0, 195, 255, ${0.2 * (1 - distance / 100)})`
              ctx.stroke()
            }
          })
        })

        animationFrameId = requestAnimationFrame(animate)
      }
      animate()
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [variant])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ background: '#000' }}
    />
  )
}

export default DynamicBackground
