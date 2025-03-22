"use client"

import { useState } from "react"
import { CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy, Star, ChevronRight, Youtube, Music, Film, Sparkles } from "lucide-react"
import Link from "next/link"
import CyberButton from "@/components/cyber-button"
import CyberCard from "@/components/cyber-card"

export default function FanScoreCard() {
  const [isLoggedIn, setIsLoggedIn] = useState(true) // For demo purposes

  if (!isLoggedIn) {
    return (
      <CyberCard variant="gradient" className="relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
        <CardContent className="pt-6 relative z-10">
          <div className="text-center mb-6">
            <div className="w-20 h-20 mx-auto mb-4 relative">
              <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
              <div className="relative z-10 w-full h-full flex items-center justify-center bg-gray-900/80 rounded-full neon-glow neon-cyan">
                <Trophy className="h-10 w-10 text-cyan-400" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 neon-text-glow neon-cyan">Calculate Your Fan Score</h3>
            <p className="text-gray-400 mb-6">
              Connect your streaming accounts to calculate your Fan Score and unlock priority access.
            </p>
            <CyberButton variant="cyan" className="w-full" onClick={() => setIsLoggedIn(true)}>
              <Sparkles className="mr-2 h-4 w-4" />
              Sign In to Get Started
            </CyberButton>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-600/30 flex items-center justify-center neon-glow neon-pink">
                <Youtube className="h-5 w-5 text-red-400" />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">YouTube</span>
                  <span className="text-xs text-gray-500">Not Connected</span>
                </div>
                <Progress value={0} className="h-1 mt-1" />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-600/30 flex items-center justify-center neon-glow neon-cyan">
                <Music className="h-5 w-5 text-green-400" />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Spotify</span>
                  <span className="text-xs text-gray-500">Not Connected</span>
                </div>
                <Progress value={0} className="h-1 mt-1" />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-600/30 flex items-center justify-center neon-glow neon-blue">
                <Film className="h-5 w-5 text-blue-400" />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Disney+ Hotstar</span>
                  <span className="text-xs text-gray-500">Not Connected</span>
                </div>
                <Progress value={0} className="h-1 mt-1" />
              </div>
            </div>
          </div>
        </CardContent>
      </CyberCard>
    )
  }

  return (
    <CyberCard variant="gradient" className="relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
      <CardContent className="pt-6 relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-xl font-semibold neon-text-glow neon-cyan">Your Fan Score</h3>
              <Badge className="bg-cyan-900 text-cyan-300 neon-glow neon-cyan">Platinum</Badge>
            </div>
            <p className="text-gray-400 text-sm">Based on your streaming history</p>
          </div>
          <div className="relative w-20 h-20 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-4 border-cyan-600 animate-pulse"></div>
            <span className="text-2xl font-bold neon-text-glow neon-cyan">875</span>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-gray-400">Progress to Diamond Tier</span>
            <span className="text-sm text-gray-400">875/1000</span>
          </div>
          <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500" style={{ width: "87.5%" }}></div>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-600/30 flex items-center justify-center neon-glow neon-pink">
              <Youtube className="h-5 w-5 text-red-400" />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">YouTube</span>
                <span className="text-xs text-cyan-400">92% Match</span>
              </div>
              <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden mt-1">
                <div className="h-full bg-gradient-to-r from-red-500 to-pink-500" style={{ width: "92%" }}></div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-600/30 flex items-center justify-center neon-glow neon-cyan">
              <Music className="h-5 w-5 text-green-400" />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Spotify</span>
                <span className="text-xs text-cyan-400">78% Match</span>
              </div>
              <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden mt-1">
                <div className="h-full bg-gradient-to-r from-green-500 to-cyan-500" style={{ width: "78%" }}></div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-600/30 flex items-center justify-center neon-glow neon-blue">
              <Film className="h-5 w-5 text-blue-400" />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Disney+ Hotstar</span>
                <span className="text-xs text-cyan-400">85% Match</span>
              </div>
              <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden mt-1">
                <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500" style={{ width: "85%" }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-500" />
            <span className="text-sm font-medium">5 Rewards Available</span>
          </div>
          <Link href="/dashboard">
            <Button
              variant="link"
              className="text-cyan-400 p-0 h-auto flex items-center gap-1 neon-text-glow neon-cyan"
            >
              View Dashboard <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </CyberCard>
  )
}

