"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronUp, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const handleLinkClick = (e) => {
    // Smooth scroll to top when clicking footer links
    scrollToTop()
  }

  return (
    <footer className="relative border-t border-[#00c3ff]/20 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/images/fanfirst-logo.png"
                alt="FanFirst Logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold fanfirst-title">FanFirst</span>
            </Link>
            <p className="text-sm text-gray-400 mb-4">The Ultimate Fan-Centric Ticketing Platform</p>
            <div className="flex space-x-3">
              <motion.a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-[#00c3ff]"
                whileHover={{ y: -3, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Facebook size={16} />
              </motion.a>
              <motion.a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-[#00c3ff]"
                whileHover={{ y: -3, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Twitter size={16} />
              </motion.a>
              <motion.a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-[#00c3ff]"
                whileHover={{ y: -3, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Instagram size={16} />
              </motion.a>
              <motion.a
                href="#"
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-[#00c3ff]"
                whileHover={{ y: -3, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Youtube size={16} />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 text-[#00c3ff]">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Events", "Dashboard", "My-Stats", "About"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                    className="text-sm text-gray-400 hover:text-[#00c3ff] transition-colors"
                    onClick={handleLinkClick}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 text-[#00c3ff]">Support</h3>
            <ul className="space-y-2">
              {["Help Center", "FAQs", "Contact Us", "Terms", "Privacy"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-gray-400 hover:text-[#00c3ff] transition-colors"
                    onClick={handleLinkClick}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 text-[#00c3ff]">Legal</h3>
            <ul className="space-y-2">
              {["Terms of Service", "Privacy Policy", "Cookie Policy", "Refund Policy"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="text-sm text-gray-400 hover:text-[#00c3ff] transition-colors"
                    onClick={handleLinkClick}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} FanFirst. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <Link href="/terms" className="text-xs text-gray-500 hover:text-[#00c3ff]" onClick={handleLinkClick}>
              Terms
            </Link>
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-[#00c3ff]" onClick={handleLinkClick}>
              Privacy
            </Link>
            <Link href="/cookies" className="text-xs text-gray-500 hover:text-[#00c3ff]" onClick={handleLinkClick}>
              Cookies
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        className={`scroll-to-top w-10 h-10 rounded-full bg-[#00c3ff]/20 hover:bg-[#00c3ff]/40 flex items-center justify-center text-[#00c3ff] border border-[#00c3ff]/30 ${
          showScrollTop ? "visible" : ""
        }`}
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          y: showScrollTop ? 0 : 20,
          transition: { duration: 0.3 },
        }}
      >
        <ChevronUp size={20} />
      </motion.button>
    </footer>
  )
}

