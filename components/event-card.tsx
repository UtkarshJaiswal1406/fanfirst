"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Star } from "lucide-react";

interface EventCardProps {
  event: {
    id: number;
    title: string;
    category: string;
    date: string;
    location: string;
    image: string;
    fanScore: number;
    tier: string;
    price: string;
  };
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <Card className="overflow-hidden bg-gray-900/50 backdrop-blur-lg border-gray-800/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:bg-gray-900/60">
      <div className="relative h-48">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <Badge className="bg-purple-600">{event.category}</Badge>
          <Badge variant="outline" className="border-purple-500 text-purple-400">
            {event.tier} Access
          </Badge>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-white">{event.title}</h3>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-medium text-yellow-400">{event.fanScore}</span>
          </div>
        </div>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-400">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-gray-400">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{event.location}</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-400">Price Range</p>
            <p className="text-white font-semibold">{event.price}</p>
          </div>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
            Book Now
          </Button>
        </div>
      </div>
    </Card>
  );
}
