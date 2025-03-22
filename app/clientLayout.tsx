"use client"

import { useEffect } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CursorEffect from "@/components/cursor-effect"
import { motion, AnimatePresence } from "framer-motion"

interface ClientLayoutProps {
  children: React.ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  useEffect(() => {
    // Add scroll animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
      ".fade-in-up, .fade-in-left, .fade-in-right, .scale-in, .rotate-in, .flip-in, .bounce-in, .zoom-blur, .clip-circle, .clip-left, .stagger-list",
    )

    animatedElements.forEach((el) => observer.observe(el))

    // Clean up
    return () => {
      animatedElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <div className="min-h-screen bg-transparent font-sans antialiased">
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <AnimatePresence mode="wait">
            <motion.main
              className="flex-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {children}
            </motion.main>
          </AnimatePresence>
          <Footer />
          <CursorEffect />
        </div>
      </ThemeProvider>
    </div>
  )
}
