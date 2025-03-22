"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Heart, Music, Trophy } from "lucide-react"
import Link from "next/link"
import CyberCard from "@/components/cyber-card"
import ParticleBackground from "@/components/particle-background"
import RevealAnimation from "@/components/reveal-animation"

export default function Favorites() {
  // Sample favorites data
  const [favorites, setFavorites] = useState({
    events: [
      {
        id: 1,
        title: "IPL 2024: Mumbai Indians vs Chennai Super Kings",
        category: "Sports",
        date: "April 12, 2024",
        location: "Wankhede Stadium, Mumbai",
        image: "/placeholder.svg?height=300&width=500",
        fanScore: 97,
        tier: "Platinum",
        color: "neon-purple",
      },
      {
        id: 2,
        title: "Coldplay World Tour",
        category: "Music",
        date: "May 15, 2024",
        location: "DY Patil Stadium, Mumbai",
        image: "/placeholder.svg?height=300&width=500",
        fanScore: 95,
        tier: "Platinum",
        color: "neon-cyan",
      },
      {
        id: 3,
        title: "Avengers: Secret Wars Premiere",
        category: "Movies",
        date: "May 3, 2024",
        location: "PVR IMAX, Mumbai",
        image: "/placeholder.svg?height=300&width=500",
        fanScore: 90,
        tier: "Gold",
        color: "neon-blue",
      },
    ],
    artists: [
      {
        id: 1,
        name: "Coldplay",
        genre: "Rock",
        image: "/placeholder.svg?height=300&width=300",
        upcoming: 1,
        color: "neon-cyan",
      },
      {
        id: 2,
        name: "Ed Sheeran",
        genre: "Pop",
        image: "/placeholder.svg?height=300&width=300",
        upcoming: 1,
        color: "neon-cyan",
      },
      {
        id: 3,
        name: "A.R. Rahman",
        genre: "Soundtrack",
        image: "/placeholder.svg?height=300&width=300",
        upcoming: 0,
        color: "neon-cyan",
      },
    ],
    teams: [
      {
        id: 1,
        name: "Mumbai Indians",
        sport: "Cricket",
        image: "/placeholder.svg?height=300&width=300",
        upcoming: 2,
        color: "neon-purple",
      },
      {
        id: 2,
        name: "Manchester United",
        sport: "Football",
        image: "/placeholder.svg?height=300&width=300",
        upcoming: 0,
        color: "neon-purple",
      },
    ],
  })

  const removeFromFavorites = (type, id) => {
    setFavorites({
      ...favorites,
      [type]: favorites[type].filter((item) => item.id !== id),
    })
  }

  return (
    <ParticleBackground className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold neon-text-glow neon-cyan">My Favorites</h1>
          <Badge className="bg-cyan-900/50 text-cyan-300 neon-glow neon-cyan px-3 py-1">
            {favorites.events.length + favorites.artists.length + favorites.teams.length} Items
          </Badge>
        </div>

        <Tabs defaultValue="events" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mb-8 bg-gray-900/50 p-1 neon-glow neon-cyan">
            <TabsTrigger
              value="events"
              className="data-[state=active]:bg-cyan-900/30 data-[state=active]:text-cyan-300"
            >
              Events
            </TabsTrigger>
            <TabsTrigger
              value="artists"
              className="data-[state=active]:bg-cyan-900/30 data-[state=active]:text-cyan-300"
            >
              Artists
            </TabsTrigger>
            <TabsTrigger value="teams" className="data-[state=active]:bg-cyan-900/30 data-[state=active]:text-cyan-300">
              Teams
            </TabsTrigger>
          </TabsList>

          <TabsContent value="events">
            {favorites.events.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {favorites.events.map((event, index) => (
                  <RevealAnimation key={event.id} delay={index * 100}>
                    <CyberCard variant="gradient" className="overflow-hidden hover-card event-card h-full" hoverable>
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          className="w-full h-full object-cover transition-transform duration-500 event-image"
                        />
                        <div className="absolute top-3 left-3 flex gap-2">
                          <Badge className={`${event.color} neon-glow`}>{event.category}</Badge>
                          <Badge variant="outline" className={`border-cyan-500 text-cyan-400 ${event.color} neon-glow`}>
                            {event.tier} Access
                          </Badge>
                        </div>
                        <div className="absolute bottom-3 right-3">
                          <div className="bg-black/70 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center neon-glow neon-cyan">
                            <span className="text-sm font-bold">{event.fanScore}%</span>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-3 right-3 h-8 w-8 rounded-full bg-black/50 backdrop-blur-sm text-red-400 hover:text-red-300 hover:bg-red-900/20"
                          onClick={() => removeFromFavorites("events", event.id)}
                        >
                          <Heart className="h-4 w-4 fill-current" />
                        </Button>
                      </div>
                      <div className="p-4">
                        <Link href={`/event/${event.id}`}>
                          <h3 className="font-semibold mb-2 line-clamp-2 hover:text-cyan-400 transition-colors">
                            {event.title}
                          </h3>
                        </Link>
                        <div className="flex flex-col gap-1 text-sm text-gray-400">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            <span className="truncate">{event.location}</span>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Link href={`/event/${event.id}`}>
                            <Button className="w-full bg-cyan-900/30 hover:bg-cyan-900/50 text-cyan-300 border border-cyan-900/50">
                              View Details
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CyberCard>
                  </RevealAnimation>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-900/30 rounded-lg border border-gray-800">
                <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium mb-2">No Favorite Events</h3>
                <p className="text-gray-400 mb-6">You haven't added any events to your favorites yet.</p>
                <Link href="/events">
                  <Button className="bg-cyan-900/30 hover:bg-cyan-900/50 text-cyan-300 border border-cyan-900/50">
                    Browse Events
                  </Button>
                </Link>
              </div>
            )}
          </TabsContent>

          <TabsContent value="artists">
            {favorites.artists.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {favorites.artists.map((artist, index) => (
                  <RevealAnimation key={artist.id} delay={index * 100}>
                    <CyberCard variant="gradient" className="overflow-hidden hover-card h-full" hoverable>
                      <div className="relative h-40 overflow-hidden">
                        <img
                          src={artist.image || "/placeholder.svg"}
                          alt={artist.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-3 right-3 h-8 w-8 rounded-full bg-black/50 backdrop-blur-sm text-red-400 hover:text-red-300 hover:bg-red-900/20"
                          onClick={() => removeFromFavorites("artists", artist.id)}
                        >
                          <Heart className="h-4 w-4 fill-current" />
                        </Button>
                        <div className="absolute bottom-3 left-3">
                          <h3 className="font-semibold text-lg">{artist.name}</h3>
                          <p className="text-sm text-gray-300">{artist.genre}</p>
                        </div>
                      </div>
                      <div className="p-4 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Music className="h-4 w-4 text-cyan-400" />
                          <span className="text-sm">{artist.upcoming} upcoming events</span>
                        </div>
                        {artist.upcoming > 0 && (
                          <Link href="/events">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-900/20"
                            >
                              View
                            </Button>
                          </Link>
                        )}
                      </div>
                    </CyberCard>
                  </RevealAnimation>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-900/30 rounded-lg border border-gray-800">
                <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4">
                  <Music className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium mb-2">No Favorite Artists</h3>
                <p className="text-gray-400 mb-6">You haven't added any artists to your favorites yet.</p>
                <Link href="/events">
                  <Button className="bg-cyan-900/30 hover:bg-cyan-900/50 text-cyan-300 border border-cyan-900/50">
                    Browse Events
                  </Button>
                </Link>
              </div>
            )}
          </TabsContent>

          <TabsContent value="teams">
            {favorites.teams.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {favorites.teams.map((team, index) => (
                  <RevealAnimation key={team.id} delay={index * 100}>
                    <CyberCard variant="gradient" className="overflow-hidden hover-card h-full" hoverable>
                      <div className="relative h-40 overflow-hidden">
                        <img
                          src={team.image || "/placeholder.svg"}
                          alt={team.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute top-3 right-3 h-8 w-8 rounded-full bg-black/50 backdrop-blur-sm text-red-400 hover:text-red-300 hover:bg-red-900/20"
                          onClick={() => removeFromFavorites("teams", team.id)}
                        >
                          <Heart className="h-4 w-4 fill-current" />
                        </Button>
                        <div className="absolute bottom-3 left-3">
                          <h3 className="font-semibold text-lg">{team.name}</h3>
                          <p className="text-sm text-gray-300">{team.sport}</p>
                        </div>
                      </div>
                      <div className="p-4 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Trophy className="h-4 w-4 text-purple-400" />
                          <span className="text-sm">{team.upcoming} upcoming matches</span>
                        </div>
                        {team.upcoming > 0 && (
                          <Link href="/events">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 text-purple-400 hover:text-purple-300 hover:bg-purple-900/20"
                            >
                              View
                            </Button>
                          </Link>
                        )}
                      </div>
                    </CyberCard>
                  </RevealAnimation>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-900/30 rounded-lg border border-gray-800">
                <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium mb-2">No Favorite Teams</h3>
                <p className="text-gray-400 mb-6">You haven't added any teams to your favorites yet.</p>
                <Link href="/events">
                  <Button className="bg-cyan-900/30 hover:bg-cyan-900/50 text-cyan-300 border border-cyan-900/50">
                    Browse Events
                  </Button>
                </Link>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </ParticleBackground>
  )
}

