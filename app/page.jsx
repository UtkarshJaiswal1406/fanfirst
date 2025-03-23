"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { ChevronRight, Star, Ticket, BarChart2, Zap, Sparkles, Music, Film, Gamepad, Theater, Mic } from "lucide-react"
import { Button } from "@/components/ui/button"
import FeaturedEvents from "@/components/featured-events"
import FanScoreCard from "@/components/fan-score-card"
import RecommendedEvents from "@/components/recommended-events"
import ParticlesBackground from "@/components/particles-background"
import AnimatedText from "@/components/animated-text"
import ParallaxSection from "@/components/parallax-section"
import LiquidBlobBackground from "@/components/liquid-blob-background"
import HolographicDisplay from "@/components/holographic-display"
import FuturisticLogo from "@/components/futuristic-logo"
import FuturisticCard from "@/components/futuristic-card"
import ParticleBurst from "@/components/particle-burst"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const videoRef = useRef(null)
  const categoriesRef = useRef(null)
  const heroRef = useRef(null)
  const mainRef = useRef(null)

  // For parallax scrolling effects
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start", "end"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  // Smooth out the animations
  const smoothY1 = useSpring(y1, { stiffness: 100, damping: 30 })
  const smoothY2 = useSpring(y2, { stiffness: 100, damping: 30 })
  const smoothOpacity = useSpring(opacity, { stiffness: 100, damping: 30 })
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 })

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Parallax effect for hero section
      if (heroRef.current) {
        const heroHeight = heroRef.current.offsetHeight
        const scrollPercentage = Math.min(window.scrollY / heroHeight, 1)

        // Apply parallax effect to video
        if (videoRef.current) {
          videoRef.current.style.transform = `scale(${1 + scrollPercentage * 0.1}) translateY(${scrollPercentage * 50}px)`
          videoRef.current.style.opacity = 1 - scrollPercentage * 0.8
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Mouse position for interactive effects
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div ref={mainRef} className="relative min-h-screen bg-transparent overflow-hidden">
      <ParticlesBackground />
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[100vh] overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <video ref={videoRef} autoPlay muted loop className="w-full h-full object-cover" style={{ opacity: 0.4 }}>
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-city-11748-large.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
        </div>

        <div className="absolute inset-0 z-10">
        </div>

        <LiquidBlobBackground className="absolute inset-0 z-5" blobCount={5} />

        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.div
            className="max-w-3xl"
            style={{
              y: smoothY1,
              opacity: smoothOpacity,
              scale: smoothScale,
            }}
          >
            <div className="flex items-center gap-6 mb-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="relative"
              >
                <FuturisticLogo size={80} />
                <ParticleBurst
                  size={120}
                  particleCount={30}
                  color="#00c3ff"
                  trigger="auto"
                  duration={3}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
                <AnimatedText
                  text="FanFirst"
                  className="text-6xl md:text-8xl font-bold"
                  effect="glitch"
                  color="multi"
                />
              </motion.div>

              
            </div>

            <motion.div
              className="overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <p className="text-xl md:text-2xl mb-8 max-w-2xl">
                The Ultimate Fan-Centric Ticketing Platform. Where true fans get priority access.
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="px-6 py-3 bg-[#00c3ff]/20 border border-[#00c3ff]/50 rounded-lg text-[#00c3ff] font-medium flex items-center gap-2 hover:bg-[#00c3ff]/30 transition-colors"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(0, 195, 255, 0.5)",
                  textShadow: "0 0 8px rgba(0, 195, 255, 0.8)",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Zap className="h-5 w-5" />
                Discover Events
              </motion.button>
              <motion.button
                className="px-6 py-3 bg-transparent border border-[#00c3ff]/50 rounded-lg text-[#00c3ff] font-medium flex items-center gap-2 hover:bg-[#00c3ff]/10 transition-colors"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(0, 195, 255, 0.5)",
                  textShadow: "0 0 8px rgba(0, 195, 255, 0.8)",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <BarChart2 className="h-5 w-5" />
                Calculate Your Fan Score
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <span className="text-sm mb-2 text-[#00c3ff]">Scroll to explore</span>
            <motion.div
              className="w-6 h-10 border-2 border-[#00c3ff] rounded-full flex justify-center"
              animate={{
                boxShadow: [
                  "0 0 5px rgba(0, 195, 255, 0.5)",
                  "0 0 15px rgba(0, 195, 255, 0.8)",
                  "0 0 5px rgba(0, 195, 255, 0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <motion.div
                className="w-2 h-2 bg-[#00c3ff] rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Fan Score Section */}
      <ParallaxSection speed={0.2} className="py-20 relative">
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(8px)",
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <AnimatedText
                  text="Your Fan Score Matters"
                  className="text-4xl font-bold mb-6"
                  effect="fade"
                  color="cyan"
                />
                <p className="text-gray-300 mb-8 text-lg">
                  Link your streaming accounts and let our AI evaluate your engagement. The higher your Fan Score, the
                  better your access to exclusive tickets and experiences.
                </p>
              </motion.div>

              <div className="flex flex-col gap-6 mb-8">
                {[
                  {
                    icon: <BarChart2 className="h-6 w-6 text-[#00c3ff]" />,
                    title: "Priority Access",
                    description: "Get early access to tickets based on your tier",
                  },
                  {
                    icon: <Star className="h-6 w-6 text-[#00c3ff]" />,
                    title: "Exclusive Rewards",
                    description: "Earn badges and rewards for your engagement",
                  },
                  {
                    icon: <Ticket className="h-6 w-6 text-[#00c3ff]" />,
                    title: "Blockchain Tickets",
                    description: "Secure, tamper-proof tickets that can't be scalped",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                    whileHover={{ x: 10 }}
                  >
                    <motion.div
                      className="bg-[#00c3ff]/20 p-4 rounded-full"
                      whileHover={{
                        scale: 1.1,
                        boxShadow: "0 0 15px rgba(0, 195, 255, 0.5)",
                      }}
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-xl">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Link href="/dashboard">
                  <Button variant="link" className="text-[#00c3ff] p-0 flex items-center gap-1 group">
                    View your Fan Score
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </motion.div>
                  </Button>
                </Link>
              </motion.div>
            </div>

            <motion.div
              className="flex-1"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <FanScoreCard />
            </motion.div>
          </div>
        </div>
      </ParallaxSection>

      {/* Categories Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#001a2c] to-[#002a44]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12"
          >
            <AnimatedText
              text="Discover Events By Category"
              className="text-4xl font-bold text-center"
              effect="wave"
              color="multi"
            />
          </motion.div>

          <div ref={categoriesRef} className="horizontal-scroll pb-8">
            {[
              { name: "Music", icon: <Music className="h-8 w-8" />, color: "from-[#00c3ff]/20 to-[#0080ff]/20" },
              { name: "Movies", icon: <Film className="h-8 w-8" />, color: "from-[#00c3ff]/20 to-[#00e1ff]/20" },
              { name: "Sports", icon: <BarChart2 className="h-8 w-8" />, color: "from-[#00c3ff]/20 to-[#00a2ff]/20" },
              { name: "Theater", icon: <Theater className="h-8 w-8" />, color: "from-[#00c3ff]/20 to-[#00d5ff]/20" },
              { name: "Comedy", icon: <Mic className="h-8 w-8" />, color: "from-[#00c3ff]/20 to-[#0091ff]/20" },
              { name: "Gaming", icon: <Gamepad className="h-8 w-8" />, color: "from-[#00c3ff]/20 to-[#00b4ff]/20" },
            ].map((category, index) => (
              <motion.div
                key={index}
                className={`flex-shrink-0 mx-4 w-64 h-64 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br ${category.color} backdrop-blur-sm border border-[#00c3ff]/30`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(0, 195, 255, 0.3)",
                  borderColor: "rgba(0, 195, 255, 0.6)",
                }}
              >
                <motion.div
                  className="w-24 h-24 rounded-full bg-[#00c3ff]/10 flex items-center justify-center mb-6 border border-[#00c3ff]/30"
                  whileHover={{ rotate: 5 }}
                  animate={{
                    boxShadow: [
                      "0 0 5px rgba(0, 195, 255, 0.3)",
                      "0 0 15px rgba(0, 195, 255, 0.5)",
                      "0 0 5px rgba(0, 195, 255, 0.3)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    {category.icon}
                  </motion.div>
                </motion.div>
                <span className="font-medium text-xl">{category.name}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <div className="flex gap-2">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <motion.button
                  key={i}
                  className="w-3 h-3 rounded-full bg-gray-600 hover:bg-[#00c3ff] transition-colors"
                  whileHover={{ scale: 1.5 }}
                  onClick={() => {
                    if (categoriesRef.current) {
                      const scrollWidth = categoriesRef.current.scrollWidth
                      const containerWidth = categoriesRef.current.clientWidth
                      const maxScroll = scrollWidth - containerWidth
                      const scrollPosition = (maxScroll / 5) * i
                      categoriesRef.current.scrollTo({ left: scrollPosition, behavior: "smooth" })
                    }
                  }}
                ></motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <ParallaxSection speed={0.3} direction="down" className="py-20 relative">
        <div className="absolute inset-0 z-0 particles-bg"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-between items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <AnimatedText text="Featured Events" className="text-4xl font-bold" effect="typewriter" color="cyan" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Link href="/events">
                <Button variant="link" className="text-[#00c3ff] flex items-center gap-1 group">
                  View all
                  <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}>
                    <ChevronRight className="h-4 w-4" />
                  </motion.div>
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <FeaturedEvents />
          </motion.div>
        </div>
      </ParallaxSection>

      {/* AI Recommendations */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1534224039826-c7a0fb859ab5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(5px)",
          }}
        ></div>
        <LiquidBlobBackground className="absolute inset-0 z-5" blobCount={3} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-between items-center mb-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <AnimatedText text="Recommended For You" className="text-4xl font-bold" effect="fade" color="blue" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-[#00c3ff]/20 px-4 py-2 rounded-full text-sm text-[#00c3ff] border border-[#00c3ff]/30"
            >
              AI-Powered
            </motion.div>
          </div>

          <motion.p
            className="text-gray-400 mb-12 max-w-2xl text-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Based on your streaming history and event preferences, we think you'll love these upcoming events.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <RecommendedEvents />
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <ParallaxSection speed={0.2} className="py-20 relative">
        <div className="absolute inset-0 z-0 animated-bg"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <AnimatedText
              text="How FanFirst Works"
              className="text-4xl font-bold text-center"
              effect="glitch"
              color="multi"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: 1,
                title: "Connect Your Accounts",
                description:
                  "Link your streaming platforms like Spotify, Disney+ Hotstar, and YouTube to calculate your Fan Score.",
              },
              {
                step: 2,
                title: "Get Your Fan Score",
                description:
                  "Our AI analyzes your engagement and assigns you a tier: Platinum, Gold, Silver, or General.",
              },
              {
                step: 3,
                title: "Enjoy Priority Access",
                description:
                  "Get early access to tickets, exclusive offers, and premium experiences based on your tier.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <FuturisticCard variant="gradient" className="p-8 h-full" glowColor="#00c3ff">
                  <motion.div
                    className="bg-[#00c3ff]/20 w-16 h-16 rounded-full flex items-center justify-center mb-6 border border-[#00c3ff]/30"
                    whileHover={{
                      rotate: 10,
                      boxShadow: "0 0 15px rgba(0, 195, 255, 0.5)",
                    }}
                  >
                    <span className="text-2xl font-bold">{item.step}</span>
                  </motion.div>
                  <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-gray-300 text-lg">{item.description}</p>
                </FuturisticCard>
              </motion.div>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(45deg, rgba(0, 195, 255, 0.1), rgba(0, 128, 255, 0.1))",
          }}
        ></div>

        <div className="absolute inset-0 z-0">
        </div>

        <LiquidBlobBackground className="absolute inset-0 z-5" blobCount={4} />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <AnimatedText
              text="Ready to Get Priority Access?"
              className="text-5xl md:text-6xl font-bold mb-6"
              effect="glitch"
              color="multi"
            />
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            Join FanFirst today and never miss out on tickets to your favorite events again.
          </motion.p>

          <motion.button
            className="px-8 py-4 bg-[#00c3ff]/20 border border-[#00c3ff]/50 rounded-lg text-[#00c3ff] font-medium flex items-center gap-2 mx-auto hover:bg-[#00c3ff]/30 transition-colors"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(0, 195, 255, 0.5)",
              textShadow: "0 0 8px rgba(0, 195, 255, 0.8)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="h-5 w-5" />
            Sign Up Now
          </motion.button>

          <ParticleBurst
            size={300}
            particleCount={100}
            color="#00c3ff"
            trigger="hover"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            targetRef={mainRef}
          />
        </div>
      </section>
    </div>
  )
}
