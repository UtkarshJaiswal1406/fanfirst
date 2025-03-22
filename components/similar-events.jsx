import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import Link from "next/link"

export default function SimilarEvents() {
  const events = [
    {
      id: 7,
      title: "IPL 2024: RCB vs KKR",
      category: "Sports",
      date: "April 18, 2024",
      location: "M. Chinnaswamy Stadium, Bangalore",
      image: "/placeholder.svg?height=200&width=300",
      fanScore: 94,
      tier: "Platinum",
    },
    {
      id: 8,
      title: "IPL 2024: CSK vs SRH",
      category: "Sports",
      date: "April 20, 2024",
      location: "MA Chidambaram Stadium, Chennai",
      image: "/placeholder.svg?height=200&width=300",
      fanScore: 91,
      tier: "Platinum",
    },
    {
      id: 9,
      title: "IPL 2024: MI vs DC",
      category: "Sports",
      date: "April 25, 2024",
      location: "Wankhede Stadium, Mumbai",
      image: "/placeholder.svg?height=200&width=300",
      fanScore: 95,
      tier: "Platinum",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {events.map((event) => (
        <Link href={`/event/${event.id}`} key={event.id}>
          <div className="group rounded-xl overflow-hidden bg-gray-900 border border-gray-800 hover:border-gray-700 transition-all cursor-pointer event-card">
            <div className="relative h-40 overflow-hidden">
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
            <div className="p-4">
              <h3 className="font-semibold mb-2 group-hover:text-purple-400 transition-colors line-clamp-2">
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
          </div>
        </Link>
      ))}
    </div>
  )
}

