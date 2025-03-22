import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Clock, Download, QrCode, Share2, Ticket } from "lucide-react"
import Link from "next/link"

export default function MyTickets() {
  // Sample ticket data
  const upcomingTickets = [
    {
      id: 1,
      eventName: "IPL 2024: Mumbai Indians vs Chennai Super Kings",
      category: "Sports",
      date: "April 12, 2024",
      time: "7:30 PM",
      location: "Wankhede Stadium, Mumbai",
      image: "/placeholder.svg?height=100&width=100",
      status: "Confirmed",
      ticketType: "Platinum",
      seat: "Block A, Row 5, Seat 23",
      price: "₹5,000",
      qrCode: "/placeholder.svg?height=200&width=200",
      eventId: 1,
    },
    {
      id: 2,
      eventName: "Coldplay World Tour",
      category: "Music",
      date: "May 15, 2024",
      time: "8:00 PM",
      location: "DY Patil Stadium, Mumbai",
      image: "/placeholder.svg?height=100&width=100",
      status: "Confirmed",
      ticketType: "VIP",
      seat: "Section B, Row 3, Seat 12",
      price: "₹8,000",
      qrCode: "/placeholder.svg?height=200&width=200",
      eventId: 2,
    },
  ]

  const pastTickets = [
    {
      id: 3,
      eventName: "Ed Sheeran Live",
      category: "Music",
      date: "January 18, 2024",
      time: "7:00 PM",
      location: "Jawaharlal Nehru Stadium, Delhi",
      image: "/placeholder.svg?height=100&width=100",
      status: "Attended",
      ticketType: "Gold",
      seat: "Section C, Row 8, Seat 15",
      price: "₹4,500",
      qrCode: "/placeholder.svg?height=200&width=200",
      eventId: 4,
    },
    {
      id: 4,
      eventName: "IPL 2023: MI vs RCB",
      category: "Sports",
      date: "March 5, 2023",
      time: "7:30 PM",
      location: "Wankhede Stadium, Mumbai",
      image: "/placeholder.svg?height=100&width=100",
      status: "Attended",
      ticketType: "Premium",
      seat: "Block B, Row 10, Seat 8",
      price: "₹3,500",
      qrCode: "/placeholder.svg?height=200&width=200",
      eventId: 5,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Tickets</h1>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="grid w-full grid-cols-2 max-w-md mb-8">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
          {upcomingTickets.length > 0 ? (
            <div className="space-y-6">
              {upcomingTickets.map((ticket) => (
                <Card key={ticket.id} className="bg-gray-900 border-gray-800 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-2/3 p-6">
                        <div className="flex flex-col md:flex-row gap-4 mb-4">
                          <div className="w-full md:w-24 h-24 rounded-lg overflow-hidden shrink-0">
                            <img
                              src={ticket.image || "/placeholder.svg"}
                              alt={ticket.eventName}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-grow">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                              <div>
                                <Link href={`/event/${ticket.eventId}`}>
                                  <h3 className="font-semibold hover:text-purple-400 transition-colors">
                                    {ticket.eventName}
                                  </h3>
                                </Link>
                                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-400 mt-1">
                                  <div className="flex items-center">
                                    <Calendar className="h-4 w-4 mr-1" />
                                    <span>{ticket.date}</span>
                                  </div>
                                  <div className="flex items-center">
                                    <Clock className="h-4 w-4 mr-1" />
                                    <span>{ticket.time}</span>
                                  </div>
                                  <div className="flex items-center">
                                    <MapPin className="h-4 w-4 mr-1" />
                                    <span>{ticket.location}</span>
                                  </div>
                                </div>
                              </div>
                              <Badge className={`${ticket.status === "Confirmed" ? "bg-green-600" : "bg-yellow-600"}`}>
                                {ticket.status}
                              </Badge>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-4">
                              <div>
                                <p className="text-xs text-gray-400">Ticket Type</p>
                                <p className="font-medium">{ticket.ticketType}</p>
                              </div>
                              <div>
                                <p className="text-xs text-gray-400">Seat</p>
                                <p className="font-medium">{ticket.seat}</p>
                              </div>
                              <div>
                                <p className="text-xs text-gray-400">Price</p>
                                <p className="font-medium">{ticket.price}</p>
                              </div>
                              <div>
                                <p className="text-xs text-gray-400">Ticket ID</p>
                                <p className="font-medium">#{ticket.id.toString().padStart(6, "0")}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-4">
                          <Button size="sm" className="h-8">
                            <Download className="h-4 w-4 mr-2" />
                            Download Ticket
                          </Button>
                          <Button size="sm" variant="outline" className="h-8 border-gray-700">
                            <Share2 className="h-4 w-4 mr-2" />
                            Share
                          </Button>
                          <Link href={`/event/${ticket.eventId}`}>
                            <Button size="sm" variant="outline" className="h-8 border-gray-700">
                              View Event
                            </Button>
                          </Link>
                        </div>
                      </div>

                      <div className="w-full md:w-1/3 bg-gray-950 p-6 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-gray-800">
                        <div className="mb-4">
                          <QrCode className="h-8 w-8 text-purple-400 mb-2 mx-auto" />
                          <p className="text-sm text-center font-medium">Scan for Entry</p>
                        </div>
                        <div className="bg-white p-2 rounded-lg mb-4">
                          <img src={ticket.qrCode || "/placeholder.svg"} alt="QR Code" className="w-40 h-40" />
                        </div>
                        <p className="text-xs text-gray-400 text-center">
                          Present this QR code at the venue for entry. This ticket is secured by blockchain technology.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4">
                <Ticket className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium mb-2">No Upcoming Tickets</h3>
              <p className="text-gray-400 mb-6">You don't have any upcoming event tickets.</p>
              <Link href="/events">
                <Button>Browse Events</Button>
              </Link>
            </div>
          )}
        </TabsContent>

        <TabsContent value="past">
          {pastTickets.length > 0 ? (
            <div className="space-y-6">
              {pastTickets.map((ticket) => (
                <Card key={ticket.id} className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="w-full md:w-24 h-24 rounded-lg overflow-hidden shrink-0">
                        <img
                          src={ticket.image || "/placeholder.svg"}
                          alt={ticket.eventName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                          <div>
                            <Link href={`/event/${ticket.eventId}`}>
                              <h3 className="font-semibold hover:text-purple-400 transition-colors">
                                {ticket.eventName}
                              </h3>
                            </Link>
                            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-400 mt-1">
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                <span>{ticket.date}</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                <span>{ticket.time}</span>
                              </div>
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                <span>{ticket.location}</span>
                              </div>
                            </div>
                          </div>
                          <Badge className="bg-gray-600">{ticket.status}</Badge>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                          <div>
                            <p className="text-xs text-gray-400">Ticket Type</p>
                            <p className="font-medium">{ticket.ticketType}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-400">Seat</p>
                            <p className="font-medium">{ticket.seat}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-400">Price</p>
                            <p className="font-medium">{ticket.price}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-400">Ticket ID</p>
                            <p className="font-medium">#{ticket.id.toString().padStart(6, "0")}</p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-4">
                          <Button size="sm" variant="outline" className="h-8 border-gray-700">
                            <Download className="h-4 w-4 mr-2" />
                            Download Receipt
                          </Button>
                          <Link href={`/event/${ticket.eventId}`}>
                            <Button size="sm" variant="outline" className="h-8 border-gray-700">
                              View Event
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4">
                <Ticket className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium mb-2">No Past Tickets</h3>
              <p className="text-gray-400 mb-6">You don't have any past event tickets.</p>
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

