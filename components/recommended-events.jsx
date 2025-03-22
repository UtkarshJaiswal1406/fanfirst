"use client"

import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import CyberCard from "@/components/cyber-card"

export default function RecommendedEvents() {
  const scrollContainerRef = useRef(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  const events = [
    {
      id: 4,
      title: "Ed Sheeran Live",
      category: "Music",
      date: "June 8, 2024",
      location: "Jawaharlal Nehru Stadium, Delhi",
      image: "/placeholder.svg?height=300&width=500",
      fanScore: 88,
      tier: "Gold",
      color: "neon-cyan",
    },
    {
      id: 5,
      title: "World Cup T20 Final",
      category: "Sports",
      date: "July 3, 2024",
      location: "Narendra Modi Stadium, Ahmedabad",
      image: "/placeholder.svg?height=300&width=500",
      fanScore: 92,
      tier: "Platinum",
      color: "neon-purple",
    },
    {
      id: 6,
      title: "Dune: Part Three IMAX Release",
      category: "Movies",
      date: "August 15, 2024",
      location: "PVR IMAX, Bangalore",
      image: "/placeholder.svg?height=300&width=500",
      fanScore: 85,
      tier: "Gold",
      color: "neon-blue",
    },
    {
      id: 7,
      title: "AR Rahman Live Concert",
      category: "Music",
      date: "September 10, 2024",
      location: "Jawaharlal Nehru Stadium, Chennai",
      image: "/placeholder.svg?height=300&width=500",
      fanScore: 94,
      tier: "Platinum",
      color: "neon-cyan",
    },
  ]

  return (
    <div className="relative">
      <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 z-10">
        <button
          onClick={scrollLeft}
          className="w-10 h-10 rounded-full bg-gray-900/80 flex items-center justify-center neon-glow neon-blue"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>

      <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
        <button
          onClick={scrollRight}
          className="w-10 h-10 rounded-full bg-gray-900/80 flex items-center justify-center neon-glow neon-blue"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto hide-scrollbar gap-6 pb-4 px-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {events.map((event) => (
          <Link href={`/event/${event.id}`} key={event.id} className="flex-shrink-0 w-80">
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
                  <div className="bg-black/70 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center neon-glow neon-blue">
                    <span className="text-sm font-bold">{event.fanScore}%</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
                  {event.title}
                </h3>
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
              </div>
            </CyberCard>
          </Link>
        ))}
      </div>
    </div>
  )
}

