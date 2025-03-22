import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Clock, Users, Info, Share2, Heart, QrCode, ChevronRight } from "lucide-react"
import Link from "next/link"
import SimilarEvents from "@/components/similar-events"

export default function EventDetail({ params }) {
  // Sample event data
  const event = {
    id: params.id,
    title: "IPL 2024: Mumbai Indians vs Chennai Super Kings",
    category: "Sports",
    date: "April 12, 2024",
    time: "7:30 PM",
    location: "Wankhede Stadium, Mumbai",
    image: "/placeholder.svg?height=500&width=1000",
    fanScore: 97,
    tier: "Platinum",
    description:
      "Witness the epic rivalry between Mumbai Indians and Chennai Super Kings in the IPL 2024. This match promises to be a thrilling encounter between two of the most successful teams in IPL history.",
    organizer: "Board of Control for Cricket in India (BCCI)",
    ticketTiers: [
      { name: "General", price: "₹1,500", available: true },
      { name: "Premium", price: "₹3,000", available: true },
      { name: "VIP", price: "₹5,000", available: true },
      { name: "Platinum", price: "₹8,000", available: false },
    ],
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Event Header */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="w-full md:w-2/3">
          <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-4">
            <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-4 left-4 flex gap-2">
              <Badge className="bg-purple-600">{event.category}</Badge>
              <Badge variant="outline" className="border-purple-500 text-purple-400">
                {event.tier} Access
              </Badge>
            </div>
          </div>

          <div className="flex justify-between items-start">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{event.title}</h1>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center text-gray-400">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center text-gray-400">
              <Clock className="h-4 w-4 mr-2" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center text-gray-400">
              <MapPin className="h-4 w-4 mr-2" />
              <span>{event.location}</span>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="pt-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Fan Score Match</h3>
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-4 border-purple-600"></div>
                  <span className="text-2xl font-bold">{event.fanScore}%</span>
                </div>
              </div>

              <p className="text-gray-400 text-sm mb-6">
                Based on your streaming history and preferences, this event is a strong match for you.
              </p>

              <div className="space-y-4 mb-6">
                {event.ticketTiers.map((tier, index) => (
                  <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-gray-800">
                    <div>
                      <h4 className="font-medium">{tier.name}</h4>
                      <p className="text-sm text-gray-400">{tier.price}</p>
                    </div>
                    <Button disabled={!tier.available} className={!tier.available ? "bg-gray-700" : ""}>
                      {tier.available ? "Book Now" : "Sold Out"}
                    </Button>
                  </div>
                ))}
              </div>

              <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-800">
                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-purple-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-purple-200">
                    As a Platinum tier fan, you get priority access to this event. Booking opens 48 hours before general
                    sale.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Event Details Tabs */}
      <Tabs defaultValue="details" className="w-full mb-12">
        <TabsList className="grid w-full grid-cols-4 max-w-2xl">
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="venue">Venue Info</TabsTrigger>
          <TabsTrigger value="tickets">Tickets</TabsTrigger>
          <TabsTrigger value="faq">FAQs</TabsTrigger>
        </TabsList>

        <TabsContent value="details" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold mb-4">About This Event</h2>
              <p className="text-gray-300 mb-6">{event.description}</p>

              <h3 className="text-lg font-semibold mb-3">Event Highlights</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
                <li>Pre-match entertainment and performances</li>
                <li>Special fan zones with interactive activities</li>
                <li>Exclusive merchandise available only at the venue</li>
                <li>Post-match player interviews and analysis</li>
              </ul>

              <h3 className="text-lg font-semibold mb-3">Organizer</h3>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                  <span className="font-bold">BCCI</span>
                </div>
                <div>
                  <p className="font-medium">{event.organizer}</p>
                  <p className="text-sm text-gray-400">Official organizer of IPL</p>
                </div>
              </div>
            </div>

            <div>
              <Card className="bg-gray-900 border-gray-800 mb-6">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-4">Event Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-purple-400 shrink-0" />
                      <div>
                        <p className="font-medium">Date & Time</p>
                        <p className="text-sm text-gray-400">
                          {event.date}, {event.time}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-purple-400 shrink-0" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-sm text-gray-400">{event.location}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-purple-400 shrink-0" />
                      <div>
                        <p className="font-medium">Capacity</p>
                        <p className="text-sm text-gray-400">33,108 seats</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <QrCode className="h-5 w-5 text-purple-400 shrink-0" />
                      <div>
                        <p className="font-medium">Ticket Type</p>
                        <p className="text-sm text-gray-400">Blockchain-secured digital tickets</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-4">Fan Score Benefits</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                      <p className="text-sm">Priority access to premium seats</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                      <p className="text-sm">Exclusive match-day experiences</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                      <p className="text-sm">Discounted merchandise</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                      <p className="text-sm">Chance to win signed memorabilia</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="venue">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold mb-4">Venue Information</h2>
              <div className="relative h-[300px] rounded-xl overflow-hidden mb-6">
                <img
                  src="/placeholder.svg?height=300&width=800"
                  alt="Venue Map"
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-lg font-semibold mb-3">About Wankhede Stadium</h3>
              <p className="text-gray-300 mb-6">
                Wankhede Stadium is a cricket stadium in Mumbai, India. It is owned by the Mumbai Cricket Association
                and has a seating capacity of 33,108. The stadium is known for its electric atmosphere during IPL
                matches.
              </p>

              <h3 className="text-lg font-semibold mb-3">Facilities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <p>Food and beverage counters</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <p>Restrooms on all levels</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <p>First aid stations</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <p>Merchandise shops</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <p>ATM machines</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <p>Wheelchair accessibility</p>
                </div>
              </div>
            </div>

            <div>
              <Card className="bg-gray-900 border-gray-800 mb-6">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-4">Getting There</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-900 flex items-center justify-center shrink-0">
                        <span className="text-sm font-bold">T</span>
                      </div>
                      <div>
                        <p className="font-medium">By Train</p>
                        <p className="text-sm text-gray-400">Marine Lines Station (10 min walk)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-900 flex items-center justify-center shrink-0">
                        <span className="text-sm font-bold">B</span>
                      </div>
                      <div>
                        <p className="font-medium">By Bus</p>
                        <p className="text-sm text-gray-400">Routes 123, 124, 125 stop nearby</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-900 flex items-center justify-center shrink-0">
                        <span className="text-sm font-bold">C</span>
                      </div>
                      <div>
                        <p className="font-medium">By Car</p>
                        <p className="text-sm text-gray-400">Limited parking available, pre-booking required</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-4">Important Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                      <p className="text-sm">Gates open 2 hours before match start</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                      <p className="text-sm">Outside food and beverages not allowed</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                      <p className="text-sm">Cameras and recording devices prohibited</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                      <p className="text-sm">Security checks at all entrances</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="tickets">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold mb-6">Ticket Information</h2>

              <div className="space-y-6 mb-8">
                {event.ticketTiers.map((tier, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row justify-between p-4 rounded-lg bg-gray-900 border border-gray-800"
                  >
                    <div className="mb-4 md:mb-0">
                      <h3 className="font-semibold text-lg">{tier.name} Tickets</h3>
                      <p className="text-gray-400 mb-2">{tier.price}</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="border-gray-700 text-gray-400">
                          Section A-D
                        </Badge>
                        <Badge variant="outline" className="border-gray-700 text-gray-400">
                          Covered Seating
                        </Badge>
                        {tier.name === "VIP" && (
                          <Badge variant="outline" className="border-gray-700 text-gray-400">
                            Hospitality
                          </Badge>
                        )}
                        {tier.name === "Platinum" && (
                          <Badge variant="outline" className="border-gray-700 text-gray-400">
                            Premium Lounge
                          </Badge>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button disabled={!tier.available} className={!tier.available ? "bg-gray-700" : ""}>
                        {tier.available ? "Book Now" : "Sold Out"}
                      </Button>
                      <Button variant="outline" className="border-gray-700">
                        View Seats
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-semibold mb-3">Ticket Policies</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
                <li>Tickets are non-refundable and non-transferable</li>
                <li>Children above 5 years require a ticket</li>
                <li>Blockchain-secured tickets cannot be duplicated</li>
                <li>Fan Score tiers get priority access during booking windows</li>
              </ul>
            </div>

            <div>
              <Card className="bg-gray-900 border-gray-800 mb-6">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-4">Blockchain Ticketing</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    PriorityPass uses blockchain technology to ensure your tickets are secure, authentic, and cannot be
                    scalped.
                  </p>
                  <div className="bg-gray-800 p-4 rounded-lg mb-4">
                    <div className="flex justify-center mb-3">
                      <QrCode className="h-16 w-16 text-purple-400" />
                    </div>
                    <p className="text-xs text-center text-gray-400">
                      Each ticket has a unique QR code that can be scanned at the venue for entry.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                      <p className="text-sm">Tamper-proof digital tickets</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                      <p className="text-sm">Prevents unauthorized reselling</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                      <p className="text-sm">Instant verification at venue</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-4">Fan Score Benefits</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-2 rounded bg-purple-900/30 border border-purple-800">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-purple-700">Platinum</Badge>
                        <span className="text-sm">48h early access</span>
                      </div>
                      <span className="text-xs text-purple-300">900+ points</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-yellow-900/30 border border-yellow-800">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-yellow-700">Gold</Badge>
                        <span className="text-sm">24h early access</span>
                      </div>
                      <span className="text-xs text-yellow-300">700+ points</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-gray-800 border border-gray-700">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-gray-600">Silver</Badge>
                        <span className="text-sm">12h early access</span>
                      </div>
                      <span className="text-xs text-gray-300">500+ points</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-gray-800 border border-gray-700">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-gray-600">General</Badge>
                        <span className="text-sm">Standard access</span>
                      </div>
                      <span className="text-xs text-gray-300">0+ points</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="faq">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold mb-6">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div className="p-4 rounded-lg bg-gray-900 border border-gray-800">
                <h3 className="font-semibold mb-2">How does Fan Score priority access work?</h3>
                <p className="text-gray-300">
                  Your Fan Score determines your tier (Platinum, Gold, Silver, or General). Higher tiers get earlier
                  access to ticket sales, with Platinum members getting access 48 hours before general sale.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-gray-900 border border-gray-800">
                <h3 className="font-semibold mb-2">Can I transfer my ticket to someone else?</h3>
                <p className="text-gray-300">
                  Tickets are linked to your PriorityPass account and cannot be transferred. This helps prevent scalping
                  and ensures true fans attend the events.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-gray-900 border border-gray-800">
                <h3 className="font-semibold mb-2">How are blockchain tickets verified at the venue?</h3>
                <p className="text-gray-300">
                  Your ticket contains a unique QR code that can only be scanned once. Venue staff will scan this code
                  at entry points to verify your ticket's authenticity.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-gray-900 border border-gray-800">
                <h3 className="font-semibold mb-2">What happens if I can't attend the event?</h3>
                <p className="text-gray-300">
                  While tickets are non-refundable, PriorityPass offers an official resale platform where you can list
                  your ticket at face value. This maintains ticket integrity while giving you an option if you can't
                  attend.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-gray-900 border border-gray-800">
                <h3 className="font-semibold mb-2">How can I improve my Fan Score?</h3>
                <p className="text-gray-300">
                  Connect more streaming platforms, engage with content related to your favorite artists/teams, attend
                  events, and participate in the PriorityPass community to increase your Fan Score over time.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-gray-900 border border-gray-800">
                <h3 className="font-semibold mb-2">What if I lose internet connection at the venue?</h3>
                <p className="text-gray-300">
                  PriorityPass allows you to download your tickets for offline access. You can show the downloaded QR
                  code even without an internet connection.
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Similar Events */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Similar Events</h2>
          <Link href="/events">
            <Button variant="link" className="text-purple-400 flex items-center gap-1">
              View all <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <SimilarEvents />
      </section>
    </div>
  )
}

