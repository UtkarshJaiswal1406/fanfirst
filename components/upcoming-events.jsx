import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, Download } from "lucide-react"
import Link from "next/link"

export default function UpcomingEvents() {
  const events = [
    {
      id: 1,
      title: "IPL 2024: Mumbai Indians vs Chennai Super Kings",
      category: "Sports",
      date: "April 12, 2024",
      time: "7:30 PM",
      location: "Wankhede Stadium, Mumbai",
      image: "/placeholder.svg?height=100&width=100",
      status: "Confirmed",
    },
    {
      id: 2,
      title: "Coldplay World Tour",
      category: "Music",
      date: "May 15, 2024",
      time: "8:00 PM",
      location: "DY Patil Stadium, Mumbai",
      image: "/placeholder.svg?height=100&width=100",
      status: "Pending",
    },
  ]

  return (
    <div className="space-y-6">
      {events.map((event) => (
        <div
          key={event.id}
          className="flex flex-col md:flex-row gap-4 p-4 rounded-lg bg-gray-900 border border-gray-800"
        >
          <div className="w-full md:w-24 h-24 rounded-lg overflow-hidden shrink-0">
            <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
          </div>
          <div className="flex-grow">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
              <div>
                <Link href={`/event/${event.id}`}>
                  <h3 className="font-semibold hover:text-purple-400 transition-colors">{event.title}</h3>
                </Link>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-400 mt-1">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
              <div
                className={`px-3 py-1 rounded-full text-xs ${
                  event.status === "Confirmed"
                    ? "bg-green-900/30 text-green-400 border border-green-800"
                    : "bg-yellow-900/30 text-yellow-400 border border-yellow-800"
                }`}
              >
                {event.status}
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <Button size="sm" className="h-8">
                <Download className="h-4 w-4 mr-2" />
                Ticket
              </Button>
              <Button size="sm" variant="outline" className="h-8 border-gray-700">
                View Details
              </Button>
              <Button size="sm" variant="outline" className="h-8 border-gray-700">
                Add to Calendar
              </Button>
            </div>
          </div>
        </div>
      ))}

      {events.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4">
            <Calendar className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium mb-2">No Upcoming Events</h3>
          <p className="text-gray-400 mb-6">You don't have any upcoming events booked.</p>
          <Link href="/events">
            <Button>Browse Events</Button>
          </Link>
        </div>
      )}
    </div>
  )
}

