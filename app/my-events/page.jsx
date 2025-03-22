import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Clock, Heart, Users, Ticket } from "lucide-react"
import Link from "next/link"

export default function MyEvents() {
  // Sample events data
  const upcomingEvents = [
    {
      id: 1,
      name: "IPL 2024: Mumbai Indians vs Chennai Super Kings",
      category: "Sports",
      date: "April 12, 2024",
      time: "7:30 PM",
      location: "Wankhede Stadium, Mumbai",
      image: "/placeholder.svg?height=200&width=300",
      hasTicket: true,
      isFavorite: true,
      attendees: 28,
      fanScore: 97,
    },
    {
      id: 2,
      name: "Coldplay World Tour",
      category: "Music",
      date: "May 15, 2024",
      time: "8:00 PM",
      location: "DY Patil Stadium, Mumbai",
      image: "/placeholder.svg?height=200&width=300",
      hasTicket: true,
      isFavorite: true,
      attendees: 15,
      fanScore: 95,
    },
    {
      id: 3,
      name: "Avengers: Secret Wars Premiere",
      category: "Movies",
      date: "May 3, 2024",
      time: "9:00 PM",
      location: "PVR IMAX, Mumbai",
      image: "/placeholder.svg?height=200&width=300",
      hasTicket: false,
      isFavorite: true,
      attendees: 8,
      fanScore: 90,
    },
  ]

  const pastEvents = [
    {
      id: 4,
      name: "Ed Sheeran Live",
      category: "Music",
      date: "January 18, 2024",
      time: "7:00 PM",
      location: "Jawaharlal Nehru Stadium, Delhi",
      image: "/placeholder.svg?height=200&width=300",
      hasTicket: true,
      isFavorite: true,
      attendees: 32,
      fanScore: 88,
      attended: true,
    },
    {
      id: 5,
      name: "IPL 2023: MI vs RCB",
      category: "Sports",
      date: "March 5, 2023",
      time: "7:30 PM",
      location: "Wankhede Stadium, Mumbai",
      image: "/placeholder.svg?height=200&width=300",
      hasTicket: true,
      isFavorite: false,
      attendees: 45,
      fanScore: 92,
      attended: true,
    },
  ]

  const savedEvents = [
    ...upcomingEvents.filter((event) => event.isFavorite),
    ...pastEvents.filter((event) => event.isFavorite),
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Events</h1>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-md mb-8">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
          <TabsTrigger value="saved">Saved</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="bg-gray-900 border-gray-800 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <Badge className="bg-purple-600">{event.category}</Badge>
                      {event.hasTicket && (
                        <Badge variant="outline" className="border-green-500 text-green-400">
                          Ticket Purchased
                        </Badge>
                      )}
                    </div>
                    <div className="absolute bottom-3 right-3">
                      <div className="bg-black/70 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center">
                        <span className="text-sm font-bold">{event.fanScore}%</span>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <Link href={`/event/${event.id}`}>
                      <h3 className="font-semibold mb-2 hover:text-purple-400 transition-colors line-clamp-2">
                        {event.name}
                      </h3>
                    </Link>

                    <div className="flex flex-col gap-1 text-sm text-gray-400 mb-3">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="truncate">{event.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        <span>{event.attendees} friends attending</span>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                      {event.hasTicket ? (
                        <Link href="/my-tickets" className="flex-1">
                          <Button className="w-full">
                            <Ticket className="h-4 w-4 mr-2" />
                            View Ticket
                          </Button>
                        </Link>
                      ) : (
                        <Link href={`/event/${event.id}`} className="flex-1">
                          <Button className="w-full">Book Now</Button>
                        </Link>
                      )}

                      <Button
                        variant="outline"
                        size="icon"
                        className={`border-gray-700 ${event.isFavorite ? "text-red-400" : ""}`}
                      >
                        <Heart className="h-4 w-4" fill={event.isFavorite ? "currentColor" : "none"} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium mb-2">No Upcoming Events</h3>
              <p className="text-gray-400 mb-6">You don't have any upcoming events.</p>
              <Link href="/events">
                <Button>Browse Events</Button>
              </Link>
            </div>
          )}
        </TabsContent>

        <TabsContent value="past">
          {pastEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <Card key={event.id} className="bg-gray-900 border-gray-800 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <Badge className="bg-purple-600">{event.category}</Badge>
                      {event.attended && (
                        <Badge variant="outline" className="border-green-500 text-green-400">
                          Attended
                        </Badge>
                      )}
                    </div>
                    <div className="absolute bottom-3 right-3">
                      <div className="bg-black/70 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center">
                        <span className="text-sm font-bold">{event.fanScore}%</span>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <Link href={`/event/${event.id}`}>
                      <h3 className="font-semibold mb-2 hover:text-purple-400 transition-colors line-clamp-2">
                        {event.name}
                      </h3>
                    </Link>

                    <div className="flex flex-col gap-1 text-sm text-gray-400 mb-3">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="truncate">{event.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        <span>{event.attendees} friends attended</span>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                      <Link href={`/event/${event.id}`} className="flex-1">
                        <Button variant="outline" className="w-full border-gray-700">
                          View Details
                        </Button>
                      </Link>

                      <Button
                        variant="outline"
                        size="icon"
                        className={`border-gray-700 ${event.isFavorite ? "text-red-400" : ""}`}
                      >
                        <Heart className="h-4 w-4" fill={event.isFavorite ? "currentColor" : "none"} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium mb-2">No Past Events</h3>
              <p className="text-gray-400 mb-6">You don't have any past events.</p>
              <Link href="/events">
                <Button>Browse Events</Button>
              </Link>
            </div>
          )}
        </TabsContent>

        <TabsContent value="saved">
          {savedEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedEvents.map((event) => (
                <Card key={event.id} className="bg-gray-900 border-gray-800 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <Badge className="bg-purple-600">{event.category}</Badge>
                      {event.hasTicket && (
                        <Badge variant="outline" className="border-green-500 text-green-400">
                          Ticket Purchased
                        </Badge>
                      )}
                    </div>
                    <div className="absolute bottom-3 right-3">
                      <div className="bg-black/70 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center">
                        <span className="text-sm font-bold">{event.fanScore}%</span>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <Link href={`/event/${event.id}`}>
                      <h3 className="font-semibold mb-2 hover:text-purple-400 transition-colors line-clamp-2">
                        {event.name}
                      </h3>
                    </Link>

                    <div className="flex flex-col gap-1 text-sm text-gray-400 mb-3">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="truncate">{event.location}</span>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                      <Link href={`/event/${event.id}`} className="flex-1">
                        <Button className="w-full">View Details</Button>
                      </Link>

                      <Button variant="outline" size="icon" className="border-gray-700 text-red-400">
                        <Heart className="h-4 w-4" fill="currentColor" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium mb-2">No Saved Events</h3>
              <p className="text-gray-400 mb-6">You haven't saved any events yet.</p>
              <Link href="/events">
                <Button>Browse Events</Button>
              </Link>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

