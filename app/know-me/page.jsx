"use client"

import { useState, useEffect, useRef } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Music,
  Film,
  Trophy,
  Clock,
  Headphones,
  Eye,
  Star,
  Ticket,
  Heart,
  BarChart3,
  PieChart,
  Activity,
} from "lucide-react"
import Link from "next/link"
import CyberCard from "@/components/cyber-card"
import ParticleBackground from "@/components/particle-background"
import AnimatedText from "@/components/animated-text"
import ConcertHistory from "./concert-history"
import MatchHistory from "./match-history"

export default function KnowMe() {
  const [activeTab, setActiveTab] = useState("overview")
  const chartCanvasRef = useRef(null)
  const radarCanvasRef = useRef(null)

  useEffect(() => {
    // Draw engagement chart
    if (chartCanvasRef.current) {
      const ctx = chartCanvasRef.current.getContext("2d")

      // Clear canvas
      ctx.clearRect(0, 0, chartCanvasRef.current.width, chartCanvasRef.current.height)

      // Set dimensions
      const width = chartCanvasRef.current.width
      const height = chartCanvasRef.current.height
      const centerX = width / 2
      const centerY = height / 2
      const radius = Math.min(centerX, centerY) - 20

      // Data points (12 months)
      const musicData = [75, 82, 65, 90, 85, 78, 92, 88, 79, 85, 90, 95]
      const sportsData = [60, 55, 70, 65, 80, 85, 75, 70, 90, 85, 80, 75]
      const moviesData = [40, 45, 60, 70, 65, 55, 50, 60, 65, 70, 75, 80]

      // Draw axes
      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)"
      ctx.beginPath()
      ctx.moveTo(50, height - 50)
      ctx.lineTo(width - 50, height - 50)
      ctx.stroke()

      // Draw months
      ctx.fillStyle = "rgba(255, 255, 255, 0.5)"
      ctx.font = "10px Arial"
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      const barWidth = (width - 100) / 12

      months.forEach((month, i) => {
        const x = 50 + i * barWidth + barWidth / 2
        ctx.fillText(month, x - 10, height - 30)
      })

      // Draw music data
      ctx.strokeStyle = "rgba(0, 255, 255, 0.8)"
      ctx.lineWidth = 2
      ctx.beginPath()

      musicData.forEach((value, i) => {
        const x = 50 + i * barWidth + barWidth / 2
        const y = height - 50 - (value / 100) * (height - 100)

        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }

        // Draw point
        ctx.fillStyle = "rgba(0, 255, 255, 0.8)"
        ctx.beginPath()
        ctx.arc(x, y, 4, 0, Math.PI * 2)
        ctx.fill()
      })

      ctx.stroke()

      // Draw sports data
      ctx.strokeStyle = "rgba(180, 0, 255, 0.8)"
      ctx.lineWidth = 2
      ctx.beginPath()

      sportsData.forEach((value, i) => {
        const x = 50 + i * barWidth + barWidth / 2
        const y = height - 50 - (value / 100) * (height - 100)

        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }

        // Draw point
        ctx.fillStyle = "rgba(180, 0, 255, 0.8)"
        ctx.beginPath()
        ctx.arc(x, y, 4, 0, Math.PI * 2)
        ctx.fill()
      })

      ctx.stroke()

      // Draw movies data
      ctx.strokeStyle = "rgba(255, 0, 200, 0.8)"
      ctx.lineWidth = 2
      ctx.beginPath()

      moviesData.forEach((value, i) => {
        const x = 50 + i * barWidth + barWidth / 2
        const y = height - 50 - (value / 100) * (height - 100)

        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }

        // Draw point
        ctx.fillStyle = "rgba(255, 0, 200, 0.8)"
        ctx.beginPath()
        ctx.arc(x, y, 4, 0, Math.PI * 2)
        ctx.fill()
      })

      ctx.stroke()
    }

    // Draw radar chart
    if (radarCanvasRef.current) {
      const ctx = radarCanvasRef.current.getContext("2d")

      // Clear canvas
      ctx.clearRect(0, 0, radarCanvasRef.current.width, radarCanvasRef.current.height)

      // Set dimensions
      const width = radarCanvasRef.current.width
      const height = radarCanvasRef.current.height
      const centerX = width / 2
      const centerY = height / 2
      const radius = Math.min(centerX, centerY) - 20

      // Data points (6 categories)
      const categories = ["Engagement", "Frequency", "Variety", "Loyalty", "Sharing", "Spending"]
      const values = [0.9, 0.75, 0.85, 0.95, 0.7, 0.8]
      const angles = []

      // Calculate angles
      for (let i = 0; i < categories.length; i++) {
        angles.push((Math.PI * 2 * i) / categories.length - Math.PI / 2)
      }

      // Draw axes
      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)"

      for (let i = 0; i < categories.length; i++) {
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(centerX + radius * Math.cos(angles[i]), centerY + radius * Math.sin(angles[i]))
        ctx.stroke()

        // Draw category labels
        ctx.fillStyle = "rgba(255, 255, 255, 0.7)"
        ctx.font = "12px Arial"
        ctx.textAlign = "center"
        ctx.fillText(
          categories[i],
          centerX + (radius + 20) * Math.cos(angles[i]),
          centerY + (radius + 20) * Math.sin(angles[i]),
        )
      }

      // Draw concentric circles
      for (let r = 0.2; r <= 1; r += 0.2) {
        ctx.beginPath()
        ctx.arc(centerX, centerY, radius * r, 0, Math.PI * 2)
        ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
        ctx.stroke()
      }

      // Draw data
      ctx.beginPath()
      for (let i = 0; i < categories.length; i++) {
        const x = centerX + radius * values[i] * Math.cos(angles[i])
        const y = centerY + radius * values[i] * Math.sin(angles[i])

        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }

      // Close the path
      ctx.lineTo(centerX + radius * values[0] * Math.cos(angles[0]), centerY + radius * values[0] * Math.sin(angles[0]))

      ctx.strokeStyle = "rgba(0, 255, 255, 0.8)"
      ctx.lineWidth = 2
      ctx.stroke()

      ctx.fillStyle = "rgba(0, 255, 255, 0.2)"
      ctx.fill()

      // Draw data points
      for (let i = 0; i < categories.length; i++) {
        const x = centerX + radius * values[i] * Math.cos(angles[i])
        const y = centerY + radius * values[i] * Math.sin(angles[i])

        ctx.beginPath()
        ctx.arc(x, y, 5, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(0, 255, 255, 0.8)"
        ctx.fill()
      }
    }
  }, [activeTab])

  // Sample data
  const topArtists = [
    { name: "Coldplay", genre: "Rock", matchScore: 95, image: "/placeholder.svg?height=100&width=100" },
    { name: "Ed Sheeran", genre: "Pop", matchScore: 92, image: "/placeholder.svg?height=100&width=100" },
    { name: "A.R. Rahman", genre: "Soundtrack", matchScore: 90, image: "/placeholder.svg?height=100&width=100" },
    { name: "Dua Lipa", genre: "Pop", matchScore: 88, image: "/placeholder.svg?height=100&width=100" },
  ]

  const topTeams = [
    { name: "Mumbai Indians", sport: "Cricket", matchScore: 97, image: "/placeholder.svg?height=100&width=100" },
    { name: "Manchester United", sport: "Football", matchScore: 94, image: "/placeholder.svg?height=100&width=100" },
    { name: "Los Angeles Lakers", sport: "Basketball", matchScore: 89, image: "/placeholder.svg?height=100&width=100" },
    {
      name: "India National Cricket Team",
      sport: "Cricket",
      matchScore: 96,
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const listeningStats = [
    { label: "Total Hours", value: "1,245", icon: <Clock className="h-5 w-5 text-cyan-400" /> },
    { label: "Top Genre", value: "Rock", icon: <Music className="h-5 w-5 text-cyan-400" /> },
    { label: "Concerts Attended", value: "8", icon: <Ticket className="h-5 w-5 text-cyan-400" /> },
    { label: "Favorite Artist", value: "Coldplay", icon: <Headphones className="h-5 w-5 text-cyan-400" /> },
  ]

  const viewingStats = [
    { label: "Total Hours", value: "890", icon: <Clock className="h-5 w-5 text-purple-400" /> },
    { label: "Top Sport", value: "Cricket", icon: <Trophy className="h-5 w-5 text-purple-400" /> },
    { label: "Matches Attended", value: "12", icon: <Ticket className="h-5 w-5 text-purple-400" /> },
    { label: "Favorite Team", value: "Mumbai Indians", icon: <Eye className="h-5 w-5 text-purple-400" /> },
  ]

  const ticketChances = [
    { event: "Coldplay World Tour", chance: 95, tier: "Platinum" },
    { event: "IPL 2024: MI vs CSK", chance: 97, tier: "Platinum" },
    { event: "Ed Sheeran Live", chance: 88, tier: "Gold" },
    { event: "World Cup T20 Final", chance: 92, tier: "Platinum" },
  ]

  return (
    <ParticleBackground className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <AnimatedText text="Know Me" className="text-3xl font-bold" effect="glitch" color="multi" />
          <Badge className="bg-cyan-900/50 text-cyan-300 neon-glow neon-cyan px-3 py-1">Fan Score: 875</Badge>
        </div>

        <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 max-w-2xl mb-8 bg-gray-900/50 p-1 neon-glow neon-cyan">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-cyan-900/30 data-[state=active]:text-cyan-300"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger value="music" className="data-[state=active]:bg-cyan-900/30 data-[state=active]:text-cyan-300">
              Music
            </TabsTrigger>
            <TabsTrigger
              value="sports"
              className="data-[state=active]:bg-cyan-900/30 data-[state=active]:text-cyan-300"
            >
              Sports
            </TabsTrigger>
            <TabsTrigger
              value="chances"
              className="data-[state=active]:bg-cyan-900/30 data-[state=active]:text-cyan-300"
            >
              Ticket Chances
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <CyberCard variant="gradient" className="fade-in-left">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Music className="h-5 w-5 text-cyan-400" />
                    Top Artists
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 stagger-list">
                    {topArtists.map((artist, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-3 bg-gray-900/50 rounded-lg border border-gray-800 hover-card cursor-effect"
                      >
                        <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0">
                          <img
                            src={artist.image || "/placeholder.svg"}
                            alt={artist.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between items-center">
                            <h3 className="font-medium">{artist.name}</h3>
                            <Badge className="bg-cyan-900/50 text-cyan-300">{artist.matchScore}%</Badge>
                          </div>
                          <p className="text-sm text-gray-400">{artist.genre}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </CyberCard>

              <CyberCard variant="gradient" className="fade-in-right">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-purple-400" />
                    Top Teams
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 stagger-list">
                    {topTeams.map((team, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-3 bg-gray-900/50 rounded-lg border border-gray-800 hover-card cursor-effect"
                      >
                        <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0">
                          <img
                            src={team.image || "/placeholder.svg"}
                            alt={team.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between items-center">
                            <h3 className="font-medium">{team.name}</h3>
                            <Badge className="bg-purple-900/50 text-purple-300">{team.matchScore}%</Badge>
                          </div>
                          <p className="text-sm text-gray-400">{team.sport}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </CyberCard>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <CyberCard variant="gradient" className="fade-in-up">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Headphones className="h-5 w-5 text-cyan-400" />
                    Listening Stats
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 stagger-list">
                    {listeningStats.map((stat, index) => (
                      <div
                        key={index}
                        className="p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover-card cursor-effect"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          {stat.icon}
                          <h3 className="font-medium">{stat.label}</h3>
                        </div>
                        <p className="text-2xl font-bold text-cyan-300 neon-text-glow neon-cyan">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </CyberCard>

              <CyberCard variant="gradient" className="fade-in-up">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="h-5 w-5 text-purple-400" />
                    Viewing Stats
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 stagger-list">
                    {viewingStats.map((stat, index) => (
                      <div
                        key={index}
                        className="p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover-card cursor-effect"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          {stat.icon}
                          <h3 className="font-medium">{stat.label}</h3>
                        </div>
                        <p className="text-2xl font-bold text-purple-300 neon-text-glow neon-purple">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </CyberCard>
            </div>

            <CyberCard variant="gradient" className="mb-8 fade-in-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-cyan-400" />
                  Engagement Patterns
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 w-full">
                  <canvas ref={chartCanvasRef} width="800" height="300" className="w-full h-full"></canvas>
                </div>
                <div className="flex justify-center gap-6 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                    <span className="text-sm">Music</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <span className="text-sm">Sports</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                    <span className="text-sm">Movies</span>
                  </div>
                </div>
              </CardContent>
            </CyberCard>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <CyberCard variant="gradient" className="fade-in-left">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-cyan-400" />
                    Fan Score Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <Music className="h-4 w-4 text-cyan-400" />
                          <h4 className="font-medium">Music Engagement</h4>
                        </div>
                        <span className="font-semibold">320 points</span>
                      </div>
                      <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 neon-glow neon-cyan"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">
                        Based on 168 hours of streaming and 5 concerts attended
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <Trophy className="h-4 w-4 text-purple-400" />
                          <h4 className="font-medium">Sports Engagement</h4>
                        </div>
                        <span className="font-semibold">285 points</span>
                      </div>
                      <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 neon-glow neon-purple"
                          style={{ width: "71.25%" }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">Based on 235 hours of viewing and 4 matches attended</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <Film className="h-4 w-4 text-pink-400" />
                          <h4 className="font-medium">Movie Engagement</h4>
                        </div>
                        <span className="font-semibold">195 points</span>
                      </div>
                      <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-pink-500 to-red-500 neon-glow neon-pink"
                          style={{ width: "48.75%" }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">
                        Based on 155 hours of viewing and 3 premieres attended
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-yellow-400" />
                          <h4 className="font-medium">Badges & Achievements</h4>
                        </div>
                        <span className="font-semibold">75 points</span>
                      </div>
                      <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-yellow-500 to-amber-500"
                          style={{ width: "18.75%" }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">Based on 8 badges earned</p>
                    </div>
                  </div>
                </CardContent>
              </CyberCard>

              <CyberCard variant="gradient" className="fade-in-right">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PieChart className="h-5 w-5 text-cyan-400" />
                    Engagement Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 w-full flex items-center justify-center">
                    <canvas ref={radarCanvasRef} width="400" height="400" className="w-full h-full"></canvas>
                  </div>
                </CardContent>
              </CyberCard>
            </div>
          </TabsContent>

          <TabsContent value="music">
            <ConcertHistory />
          </TabsContent>

          <TabsContent value="sports">
            <MatchHistory />
          </TabsContent>

          <TabsContent value="chances">
            <CyberCard variant="gradient" className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="h-5 w-5 text-cyan-400" />
                  Your Ticket Chances
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6">
                  Based on your Fan Score and engagement patterns, here are your chances of securing tickets for
                  upcoming events:
                </p>

                <div className="space-y-6 stagger-list">
                  {ticketChances.map((item, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover-card cursor-effect"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <h3 className="font-medium text-lg mb-1">{item.event}</h3>
                          <Badge
                            className={`${item.tier === "Platinum" ? "bg-cyan-900/50 text-cyan-300" : "bg-yellow-900/50 text-yellow-300"}`}
                          >
                            {item.tier} Access
                          </Badge>
                        </div>

                        <div className="flex flex-col items-center">
                          <div className="relative w-24 h-24 flex items-center justify-center mb-2">
                            <svg className="w-full h-full" viewBox="0 0 100 100">
                              <circle
                                cx="50"
                                cy="50"
                                r="45"
                                fill="none"
                                stroke="rgba(255, 255, 255, 0.1)"
                                strokeWidth="8"
                              />
                              <circle
                                cx="50"
                                cy="50"
                                r="45"
                                fill="none"
                                stroke={`${item.chance > 90 ? "rgba(0, 255, 255, 0.8)" : "rgba(255, 200, 0, 0.8)"}`}
                                strokeWidth="8"
                                strokeDasharray={`${2 * Math.PI * 45 * (item.chance / 100)} ${2 * Math.PI * 45 * (1 - item.chance / 100)}`}
                                strokeDashoffset="0"
                                transform="rotate(-90 50 50)"
                                className="neon-glow"
                              />
                              <text
                                x="50"
                                y="50"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fontSize="20"
                                fontWeight="bold"
                                fill="white"
                                className="neon-text-glow"
                              >
                                {item.chance}%
                              </text>
                            </svg>
                          </div>
                          <span className="text-sm text-gray-400">Chance of securing tickets</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 p-6 rounded-lg border border-cyan-900/30">
                  <h3 className="text-xl font-semibold mb-4 neon-text-glow neon-cyan">How Ticket Chances Work</h3>
                  <div className="space-y-4">
                    <p className="text-gray-300">Your ticket chances are calculated based on several factors:</p>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2"></div>
                        <span>Your Fan Score tier (Platinum, Gold, Silver, General)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2"></div>
                        <span>Your engagement with the artist/team/genre</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2"></div>
                        <span>Your attendance history at similar events</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2"></div>
                        <span>Expected demand for the event</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6 flex justify-center">
                    <Link href="/events">
                      <Button className="bg-cyan-900/30 hover:bg-cyan-900/50 text-cyan-300 border border-cyan-900/50 neon-glow neon-cyan">
                        Browse Upcoming Events
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </CyberCard>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <CyberCard variant="gradient" className="fade-in-left">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-pink-400" />
                    Favorite Artists Ticket Chances
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topArtists.map((artist, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-3 bg-gray-900/50 rounded-lg border border-gray-800 hover-card cursor-effect"
                      >
                        <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0">
                          <img
                            src={artist.image || "/placeholder.svg"}
                            alt={artist.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between items-center">
                            <h3 className="font-medium">{artist.name}</h3>
                            <Badge className="bg-cyan-900/50 text-cyan-300">{artist.matchScore}%</Badge>
                          </div>
                          <div className="mt-2 h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 neon-glow neon-cyan"
                              style={{ width: `${artist.matchScore}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </CyberCard>

              <CyberCard variant="gradient" className="fade-in-right">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-purple-400" />
                    Favorite Teams Ticket Chances
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topTeams.map((team, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-3 bg-gray-900/50 rounded-lg border border-gray-800 hover-card cursor-effect"
                      >
                        <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0">
                          <img
                            src={team.image || "/placeholder.svg"}
                            alt={team.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between items-center">
                            <h3 className="font-medium">{team.name}</h3>
                            <Badge className="bg-purple-900/50 text-purple-300">{team.matchScore}%</Badge>
                          </div>
                          <div className="mt-2 h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 neon-glow neon-purple"
                              style={{ width: `${team.matchScore}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </CyberCard>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </ParticleBackground>
  )
}

