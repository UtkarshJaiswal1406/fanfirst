"use client";

import { useState, useEffect } from "react";
import { Search, Filter, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EventCard from "@/components/event-card";
import EventFilters from "@/components/event-filters";

interface Event {
  id: number;
  title: string;
  category: string;
  date: string;
  location: string;
  image: string;
  fanScore: number;
  tier: string;
  price: string;
}

export default function EventsPage() {
  const [allEvents, setAllEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch("/api/events");
      const data = await response.json();
      setAllEvents(data);
      setFilteredEvents(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching events:", error);
      setLoading(false);
    }
  };

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    applyFilters(value, selectedCategory);
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    applyFilters(searchQuery, value);
  };

  const applyFilters = async (search: string, category: string) => {
    try {
      const params = new URLSearchParams();
      if (search) params.append("search", search);
      if (category && category !== "all") params.append("category", category);

      const response = await fetch(`/api/events?${params.toString()}`);
      const data = await response.json();
      setFilteredEvents(data);
    } catch (error) {
      console.error("Error applying filters:", error);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">Loading events...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Discover Events</h1>

      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search for events, artists, venues..."
            className="pl-10 bg-gray-900 border-gray-700"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
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
      <Tabs defaultValue="all" className="w-full mb-8" onValueChange={handleCategoryChange}>
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
              <h2 className="text-xl font-semibold">
                {selectedCategory === "all" ? "All Events" : `${selectedCategory} Events`}
              </h2>
              <p className="text-sm text-gray-400">
                Showing {filteredEvents.length} events
              </p>
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
            {filteredEvents.map((event) => (
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
  );
}
