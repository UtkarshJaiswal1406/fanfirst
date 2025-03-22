import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Info } from "lucide-react"
import Link from "next/link"

export default function EventCard({ event }) {
  return (
    <div className="rounded-xl overflow-hidden bg-gray-900 border border-gray-800 hover:border-gray-700 transition-all cursor-pointer event-card">
      <Link href={`/event/${event.id}`}>
        <div className="relative h-48 overflow-hidden">
          <img
            src={event.image || "/placeholder.svg"}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-300 event-image"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            <Badge className="bg-purple-600">{event.category}</Badge>
            <Badge variant="outline" className="border-purple-500 text-purple-400">
              {event.tier} Access
            </Badge>
          </div>
          <div className="absolute bottom-3 right-3">
            <div className="bg-black/70 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center">
              <span className="text-sm font-bold">{event.fanScore}%</span>
            </div>
          </div>
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/event/${event.id}`}>
          <h3 className="font-semibold mb-2 hover:text-purple-400 transition-colors line-clamp-2">{event.title}</h3>
        </Link>
        <div className="flex flex-col gap-1 text-sm text-gray-400 mb-3">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="truncate">{event.location}</span>
          </div>
          <div className="flex items-center mt-1">
            <Info className="h-4 w-4 mr-2" />
            <span>{event.price}</span>
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          <Button className="flex-1">Book Now</Button>
          <Link href={`/event/${event.id}`} className="flex-1">
            <Button variant="outline" className="w-full border-gray-700">
              Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

