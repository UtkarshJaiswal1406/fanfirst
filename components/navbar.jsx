"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  Home,
  LayoutDashboard,
  Calendar,
  BarChart2,
  Info,
  User,
  Ticket,
  Heart,
  Settings,
  LogOut,
  ChevronDown,
  Search,
  Award,
} from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import NotificationDropdown from "@/components/notification-dropdown"
import FuturisticLogo from "@/components/futuristic-logo"
import ParticleBurst from "@/components/particle-burst"

export default function Navbar() {
  const isMobile = useMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeItem, setActiveItem] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: "Home", path: "/", icon: <Home className="h-4 w-4 mr-2" />, id: "home" },
    { name: "Events", path: "/events", icon: <Calendar className="h-4 w-4 mr-2" />, id: "events" },
    { name: "My-Stats", path: "/my-stats", icon: <BarChart2 className="h-4 w-4 mr-2" />, id: "my-stats" },
    { name: "About", path: "/about", icon: <Info className="h-4 w-4 mr-2" />, id: "about" },
  ]

  const profileItems = [
    { name: "My Profile", path: "/profile", icon: <User className="h-4 w-4 mr-2" /> },
    { name: "My Tickets", path: "/my-tickets", icon: <Ticket className="h-4 w-4 mr-2" /> },
    { name: "Favorites", path: "/favorites", icon: <Heart className="h-4 w-4 mr-2" /> },
    { name: "Rewards", path: "/rewards", icon: <Award className="h-4 w-4 mr-2" /> },
    { name: "Settings", path: "/settings", icon: <Settings className="h-4 w-4 mr-2" /> },
    { name: "Logout", path: "/logout", icon: <LogOut className="h-4 w-4 mr-2" /> },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/60 backdrop-blur-md border-b border-[#00c3ff]/20" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <Link href="/" className="flex items-center gap-3 z-20">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <FuturisticLogo size={40} />
              <ParticleBurst
                size={60}
                particleCount={20}
                color="#00c3ff"
                trigger="hover"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </motion.div>
            <motion.h1
              className="text-2xl font-bold bg-gradient-to-r from-[#00c3ff] to-[#0080ff] text-transparent bg-clip-text"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              FanFirst
            </motion.h1>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link key={item.id} href={item.path} onClick={() => setActiveItem(item.id)}>
                  <motion.div
                    className={`nav-item flex items-center text-sm font-medium ${
                      activeItem === item.id ? "text-[#00c3ff]" : "text-gray-300 hover:text-[#00c3ff]"
                    }`}
                    whileHover={{
                      scale: 1.05,
                      textShadow: "0 0 8px rgba(0, 195, 255, 0.8)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {item.icon}
                    {item.name}
                    {activeItem === item.id && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00c3ff]"
                        layoutId="activeNavIndicator"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.div>
                </Link>
              ))}
            </nav>
          )}

          {/* Right Side Actions */}
          <div className="flex items-center gap-4 z-20">
            {!isMobile && (
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#00c3ff] h-4 w-4" />
                <Input
                  placeholder="Search..."
                  className="pl-10 w-48 bg-gray-900/30 border-gray-700 focus:border-[#00c3ff] transition-colors rounded-full text-sm"
                />
              </div>
            )}

            <NotificationDropdown />

            {/* Profile Section */}
            <div className="relative">
              <motion.button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 bg-gray-900/30 px-3 py-1.5 rounded-lg border border-[#00c3ff]/20 hover:border-[#00c3ff]/50 transition-colors"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 10px rgba(0, 195, 255, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Avatar className="h-8 w-8 border-2 border-[#00c3ff]/30">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium hidden sm:inline">John Doe</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${isProfileOpen ? "rotate-180" : ""}`}
                />
              </motion.button>

              <AnimatePresence>
                {isProfileOpen && (
                  <motion.div
                    className="profile-dropdown absolute right-0 mt-2 w-56 rounded-lg shadow-lg py-2 bg-gray-900/90 backdrop-blur-md border border-[#00c3ff]/20 overflow-hidden"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2, type: "spring", stiffness: 500, damping: 30 }}
                  >
                    <div className="px-4 py-2 border-b border-gray-800">
                      <p className="text-sm font-medium">John Doe</p>
                      <p className="text-xs text-gray-400">john.doe@example.com</p>
                      <div className="mt-1 px-2 py-0.5 bg-[#00c3ff]/20 text-[#00c3ff] text-xs rounded-full inline-block">
                        Platinum Fan
                      </div>
                    </div>

                    <div className="py-1">
                      {profileItems.map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Link
                            href={item.path}
                            className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-[#00c3ff]/10 hover:text-[#00c3ff] transition-colors"
                            onClick={() => setIsProfileOpen(false)}
                          >
                            {item.icon}
                            {item.name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Button */}
            {isMobile && (
              <motion.button
                onClick={toggleMenu}
                className="p-2 rounded-lg bg-gray-900/30 border border-[#00c3ff]/20 text-[#00c3ff]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </motion.button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <motion.div
            className="fixed inset-0 top-16 bg-black/95 backdrop-blur-md z-40"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100vh - 4rem)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-6 h-full flex flex-col">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#00c3ff] h-4 w-4" />
                <Input
                  placeholder="Search..."
                  className="pl-10 w-full bg-gray-900/30 border-gray-700 focus:border-[#00c3ff] transition-colors rounded-full"
                />
              </div>

              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={item.path}
                    onClick={() => {
                      setActiveItem(item.id)
                      setIsMenuOpen(false)
                    }}
                  >
                    <motion.div
                      className={`flex items-center p-3 rounded-lg ${
                        activeItem === item.id ? "bg-[#00c3ff]/10 text-[#00c3ff]" : "text-gray-300 hover:bg-gray-800/50"
                      }`}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {item.icon}
                      <span className="ml-2">{item.name}</span>
                    </motion.div>
                  </Link>
                ))}
              </nav>

              <div className="mt-6 border-t border-gray-800 pt-6">
                <p className="text-sm font-medium mb-4">Profile</p>
                {profileItems.map((item) => (
                  <Link key={item.name} href={item.path} onClick={() => setIsMenuOpen(false)}>
                    <motion.div
                      className="flex items-center p-3 rounded-lg text-gray-300 hover:bg-gray-800/50 hover:text-[#00c3ff]"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {item.icon}
                      <span className="ml-2">{item.name}</span>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

