import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Filter, Calendar, MapPin } from "lucide-react"
import EventCard from "@/components/event-card"
import EventFilters from "@/components/event-filters"

export default function Events() {
  // Sample event data
  const events = [
    {
      id: 1,
      title: "IPL 2024: Mumbai Indians vs Chennai Super Kings",
      category: "Sports",
      date: "April 12, 2024",
      location: "Wankhede Stadium, Mumbai",
      image: "/placeholder.svg?height=300&width=500",
      fanScore: 97,
      tier: "Platinum",
      price: "₹1,500 - ₹8,000",
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
      price: "₹2,500 - ₹12,000",
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
      price: "₹500 - ₹1,200",
    },
    {
      id: 4,
      title: "Ed Sheeran Live",
      category: "Music",
      date: "June 8, 2024",
      location: "Jawaharlal Nehru Stadium, Delhi",
      image: "/placeholder.svg?height=300&width=500",
      fanScore: 88,
      tier: "Gold",
      price: "₹2,000 - ₹10,000",
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
      price: "₹2,000 - ₹15,000",
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
      price: "₹600 - ₹1,500",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Discover Events</h1>

      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input placeholder="Search for events, artists, venues..." className="pl-10 bg-gray-900 border-gray-700" />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-gray-700">
            <Calendar className="h-4 w-4 mr-2" />
            Date
          </Button>
          <Button variant="outline" className="border-gray-700">
            <MapPin className="h-4 w-4 mr-2" />
            Location
          </Button>
          <Button variant="outline" className="border-gray-700">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>
      </div>

      {/* Event Categories */}
      <Tabs defaultValue="all" className="w-full mb-8">
        <TabsList className="grid grid-cols-5 w-full max-w-3xl">
          <TabsTrigger value="all">All Events</TabsTrigger>
          <TabsTrigger value="sports">Sports</TabsTrigger>
          <TabsTrigger value="music">Music</TabsTrigger>
          <TabsTrigger value="movies">Movies</TabsTrigger>
          <TabsTrigger value="theater">Theater</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="w-full md:w-64 shrink-0">
          <EventFilters />
        </div>

        {/* Events Grid */}
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-semibold">All Events</h2>
              <p className="text-sm text-gray-400">Showing {events.length} events</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">Sort by:</span>
              <select className="bg-gray-900 border border-gray-700 rounded-md text-sm p-1">
                <option>Fan Score Match</option>
                <option>Date: Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button variant="outline" className="border-gray-700">
              Load More Events
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

