"use client";

import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";

export default function EventFilters() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Filters</h3>
        <div className="space-y-4">
          {/* Fan Score Range */}
          <div>
            <Label className="text-sm text-gray-400">Fan Score Match</Label>
            <Slider
              defaultValue={[0]}
              max={100}
              step={1}
              className="mt-2"
            />
            <div className="flex justify-between mt-1">
              <span className="text-xs text-gray-400">0%</span>
              <span className="text-xs text-gray-400">100%</span>
            </div>
          </div>

          {/* Access Tiers */}
          <div>
            <Label className="text-sm text-gray-400 mb-2 block">Access Tiers</Label>
            <div className="space-y-2">
              {["Platinum", "Gold", "Silver", "Bronze"].map((tier) => (
                <div key={tier} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Switch id={tier} />
                    <Label htmlFor={tier} className="text-sm">{tier}</Label>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {tier === "Platinum" ? "90+" : tier === "Gold" ? "80+" : tier === "Silver" ? "70+" : "60+"}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Event Types */}
          <div>
            <Label className="text-sm text-gray-400 mb-2 block">Event Types</Label>
            <div className="space-y-2">
              {["Live Shows", "Sports", "Movies", "Theater", "Concerts"].map((type) => (
                <div key={type} className="flex items-center">
                  <Switch id={type} />
                  <Label htmlFor={type} className="ml-2 text-sm">{type}</Label>
                </div>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div>
            <Label className="text-sm text-gray-400">Price Range</Label>
            <Slider
              defaultValue={[0, 15000]}
              min={0}
              max={15000}
              step={500}
              className="mt-2"
            />
            <div className="flex justify-between mt-1">
              <span className="text-xs text-gray-400">₹0</span>
              <span className="text-xs text-gray-400">₹15,000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
