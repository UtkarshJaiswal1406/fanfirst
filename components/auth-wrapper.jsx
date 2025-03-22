"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Loader2 } from "lucide-react"

// Public routes that don't require authentication
const publicRoutes = ["/login", "/signup", "/forgot-password", "/reset-password"]

export default function AuthWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Check if user is authenticated
    // This would typically be a call to your auth service
    const checkAuth = async () => {
      try {
        // For demo purposes, we'll simulate an auth check
        // In a real app, you'd check a token in localStorage or cookies
        const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"

        // For demo purposes, let's set a default logged in state
        if (localStorage.getItem("isLoggedIn") === null) {
          localStorage.setItem("isLoggedIn", "true")
        }

        setIsAuthenticated(isLoggedIn)

        // If not authenticated and not on a public route, redirect to login
        if (!isLoggedIn && !publicRoutes.includes(pathname)) {
          router.push("/login")
        }

        // If authenticated and on a public route, redirect to home
        if (isLoggedIn && publicRoutes.includes(pathname)) {
          router.push("/")
        }
      } catch (error) {
        console.error("Auth check failed:", error)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [pathname, router])

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="flex flex-col items-center">
          <Loader2 className="h-12 w-12 text-purple-600 animate-spin mb-4" />
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    )
  }

  // If on a public route or authenticated, render children
  if (publicRoutes.includes(pathname) || isAuthenticated) {
    return children
  }

  // This should not be reached due to the redirect in useEffect
  return null
}

