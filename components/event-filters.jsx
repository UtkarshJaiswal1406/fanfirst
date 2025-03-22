import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function EventFilters() {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
      <h3 className="font-semibold mb-4">Filters</h3>

      <Accordion type="multiple" defaultValue={["category", "date", "price", "tier"]}>
        <AccordionItem value="category" className="border-gray-800">
          <AccordionTrigger>Category</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="sports" />
                <label
                  htmlFor="sports"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Sports
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="music" />
                <label
                  htmlFor="music"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Music
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="movies" />
                <label
                  htmlFor="movies"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Movies
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="theater" />
                <label
                  htmlFor="theater"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Theater
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="comedy" />
                <label
                  htmlFor="comedy"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Comedy
                </label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="date" className="border-gray-800">
          <AccordionTrigger>Date</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="today" />
                <label
                  htmlFor="today"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Today
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="tomorrow" />
                <label
                  htmlFor="tomorrow"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Tomorrow
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="this-weekend" />
                <label
                  htmlFor="this-weekend"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  This Weekend
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="this-week" />
                <label
                  htmlFor="this-week"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  This Week
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="this-month" />
                <label
                  htmlFor="this-month"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  This Month
                </label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price" className="border-gray-800">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider defaultValue={[500, 5000]} min={0} max={15000} step={100} />
              <div className="flex justify-between">
                <span className="text-sm">₹500</span>
                <span className="text-sm">₹5,000</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="tier" className="border-gray-800">
          <AccordionTrigger>Fan Score Tier</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="platinum" />
                <label
                  htmlFor="platinum"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                >
                  Platinum
                  <Badge className="ml-2 bg-purple-600 text-xs">900+ points</Badge>
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="gold" />
                <label
                  htmlFor="gold"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                >
                  Gold
                  <Badge className="ml-2 bg-yellow-600 text-xs">700+ points</Badge>
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="silver" />
                <label
                  htmlFor="silver"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                >
                  Silver
                  <Badge className="ml-2 bg-gray-500 text-xs">500+ points</Badge>
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="general" />
                <label
                  htmlFor="general"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  General
                </label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="location" className="border-gray-800">
          <AccordionTrigger>Location</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="mumbai" />
                <label
                  htmlFor="mumbai"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Mumbai
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="delhi" />
                <label
                  htmlFor="delhi"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Delhi
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="bangalore" />
                <label
                  htmlFor="bangalore"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Bangalore
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="chennai" />
                <label
                  htmlFor="chennai"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Chennai
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="hyderabad" />
                <label
                  htmlFor="hyderabad"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Hyderabad
                </label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="flex gap-2 mt-6">
        <Button variant="outline" className="flex-1 border-gray-700">
          Reset
        </Button>
        <Button className="flex-1">Apply</Button>
      </div>
    </div>
  )
}

