"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

export default function AnimatedText({ text, className, effect = "fade", color = "cyan" }) {
  const [isVisible, setIsVisible] = useState(false)
  const textRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (textRef.current) {
      observer.observe(textRef.current)
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current)
      }
    }
  }, [])

  const getColorClass = () => {
    switch (color) {
      case "cyan":
        return "text-[#00c3ff]"
      case "blue":
        return "text-[#0080ff]"
      case "teal":
        return "text-[#00e1ff]"
      case "multi":
        return "bg-gradient-to-r from-[#00c3ff] to-[#0080ff] text-transparent bg-clip-text"
      default:
        return "text-[#00c3ff]"
    }
  }

  const renderText = () => {
    switch (effect) {
      case "typewriter":
        return (
          <motion.div
            ref={textRef}
            className={`${className} ${getColorClass()}`}
            initial={{ width: 0, opacity: 0 }}
            animate={isVisible ? { width: "auto", opacity: 1 } : { width: 0, opacity: 0 }}
            transition={{ duration: 1 }}
            style={{ overflow: "hidden", whiteSpace: "nowrap" }}
          >
            {text}
          </motion.div>
        )
      case "wave":
        return (
          <motion.div ref={textRef} className={`${className} ${getColorClass()}`}>
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                style={{ display: "inline-block" }}
                animate={
                  isVisible
                    ? {
                        y: [0, -10, 0],
                        transition: {
                          duration: 1,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "loop",
                          delay: index * 0.05,
                        },
                      }
                    : {}
                }
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>
        )
      case "glitch":
        return (
          <motion.div
            ref={textRef}
            className={`${className} ${getColorClass()} relative`}
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="relative z-10">{text}</span>
            <motion.span
              className="absolute left-0 top-0 text-[#ff00c8] z-0"
              animate={
                isVisible
                  ? {
                      x: [0, -4, 0, 4, 0],
                      opacity: [1, 0.8, 0.8, 0.8, 1],
                    }
                  : {}
              }
              transition={{
                duration: 0.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                repeatDelay: 5,
              }}
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)" }}
            >
              {text}
            </motion.span>
            <motion.span
              className="absolute left-0 top-0 text-[#00e1ff] z-0"
              animate={
                isVisible
                  ? {
                      x: [0, 4, 0, -4, 0],
                      opacity: [1, 0.8, 0.8, 0.8, 1],
                    }
                  : {}
              }
              transition={{
                duration: 0.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                repeatDelay: 5,
              }}
              style={{ clipPath: "polygon(0 45%, 100% 45%, 100% 100%, 0 100%)" }}
            >
              {text}
            </motion.span>
          </motion.div>
        )
      case "fade":
      default:
        return (
          <motion.div
            ref={textRef}
            className={`${className} ${getColorClass()}`}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            {text}
          </motion.div>
        )
    }
  }

  return renderText()
}

