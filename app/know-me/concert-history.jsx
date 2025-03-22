"use client"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, Music, Star, Headphones, BarChart3, PieChart } from "lucide-react"
import CyberCard from "@/components/cyber-card"
import AnimatedText from "@/components/animated-text"

export default function ConcertHistory() {
  // Sample data
  const concerts = [
    {
      id: 1,
      artist: "Coldplay",
      venue: "DY Patil Stadium, Mumbai",
      date: "May 15, 2023",
      image: "/placeholder.svg?height=200&width=300",
      rating: 5,
      songs: 22,
      duration: "2h 15m",
    },
    {
      id: 2,
      artist: "Ed Sheeran",
      venue: "Jawaharlal Nehru Stadium, Delhi",
      date: "January 18, 2023",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4,
      songs: 18,
      duration: "1h 45m",
    },
    {
      id: 3,
      artist: "A.R. Rahman",
      venue: "MMRDA Grounds, Mumbai",
      date: "December 10, 2022",
      image: "/placeholder.svg?height=200&width=300",
      rating: 5,
      songs: 20,
      duration: "2h 30m",
    },
  ]

  const topGenres = [
    { name: "Rock", percentage: 35, color: "bg-cyan-500" },
    { name: "Pop", percentage: 25, color: "bg-blue-500" },
    { name: "Indie", percentage: 20, color: "bg-purple-500" },
    { name: "Electronic", percentage: 15, color: "bg-pink-500" },
    { name: "Classical", percentage: 5, color: "bg-yellow-500" },
  ]

  const listeningStats = [
    { label: "Total Hours", value: "1,245", icon: <Clock className="h-5 w-5 text-cyan-400" /> },
    { label: "Top Artist", value: "Coldplay", icon: <Music className="h-5 w-5 text-cyan-400" /> },
    { label: "Concerts Attended", value: "8", icon: <Calendar className="h-5 w-5 text-cyan-400" /> },
    { label: "Avg. Daily Listening", value: "3.4 hrs", icon: <Headphones className="h-5 w-5 text-cyan-400" /> },
  ]

  const topTracks = [
    { title: "Fix You", artist: "Coldplay", plays: 142 },
    { title: "Shape of You", artist: "Ed Sheeran", plays: 128 },
    { title: "Viva La Vida", artist: "Coldplay", plays: 115 },
    { title: "Jai Ho", artist: "A.R. Rahman", plays: 98 },
    { title: "Perfect", artist: "Ed Sheeran", plays: 87 },
  ]

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <CyberCard variant="gradient" className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-cyan-400" />
                <AnimatedText text="Concert History" effect="fade" color="cyan" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6 stagger-list">
                {concerts.map((concert) => (
                  <div
                    key={concert.id}
                    className="flex flex-col md:flex-row gap-4 p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover-card cursor-effect"
                  >
                    <div className="w-full md:w-40 h-32 rounded-lg overflow-hidden shrink-0">
                      <img
                        src={concert.image || "/placeholder.svg"}
                        alt={concert.artist}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                        <div>
                          <h3 className="text-xl font-semibold mb-1">{concert.artist}</h3>
                          <div className="flex items-center text-sm text-gray-400 mb-1">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{concert.venue}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400 mb-3">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{concert.date}</span>
                          </div>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < concert.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                        <div className="bg-gray-900/70 p-2 rounded-md text-center">
                          <p className="text-xs text-gray-400">Songs</p>
                          <p className="font-semibold">{concert.songs}</p>
                        </div>
                        <div className="bg-gray-900/70 p-2 rounded-md text-center">
                          <p className="text-xs text-gray-400">Duration</p>
                          <p className="font-semibold">{concert.duration}</p>
                        </div>
                        <div className="bg-gray-900/70 p-2 rounded-md text-center md:col-span-1 col-span-2">
                          <p className="text-xs text-gray-400">Fan Score Impact</p>
                          <p className="font-semibold text-cyan-400">+25 points</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button className="bg-cyan-900/30 hover:bg-cyan-900/50 text-cyan-300 border border-cyan-900/50 neon-glow neon-cyan">
                  View All Concert History
                </Button>
              </div>
            </CardContent>
          </CyberCard>
        </div>

        <div>
          <CyberCard variant="gradient" className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5 text-cyan-400" />
                <AnimatedText text="Top Genres" effect="fade" color="cyan" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topGenres.map((genre) => (
                  <div key={genre.name} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span>{genre.name}</span>
                      <span>{genre.percentage}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${genre.color} neon-glow`}
                        style={{ width: `${genre.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </CyberCard>

          <CyberCard variant="gradient">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-cyan-400" />
                <AnimatedText text="Top Tracks" effect="fade" color="cyan" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topTracks.map((track, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-2 bg-gray-900/50 rounded-md hover:bg-gray-900/70 transition-colors cursor-effect"
                  >
                    <div>
                      <p className="font-medium">{track.title}</p>
                      <p className="text-sm text-gray-400">{track.artist}</p>
                    </div>
                    <Badge className="bg-cyan-900/50 text-cyan-300">{track.plays} plays</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </CyberCard>
        </div>
      </div>

      <CyberCard variant="gradient">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Headphones className="h-5 w-5 text-cyan-400" />
            <AnimatedText text="Listening Stats" effect="fade" color="cyan" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 stagger-list">
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

          <div className="mt-8 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 p-6 rounded-lg border border-cyan-900/30">
            <h3 className="text-xl font-semibold mb-4 neon-text-glow neon-cyan">Listening Insights</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2"></div>
                <span>You listen to music most frequently between 7 PM and 10 PM</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2"></div>
                <span>Your listening time has increased by 15% compared to last year</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2"></div>
                <span>You've discovered 45 new artists in the past 6 months</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2"></div>
                <span>Your music taste is more diverse than 75% of users</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </CyberCard>
    </div>
  )
}

