import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Award, Clock, CheckCircle2, Lock } from "lucide-react"
import Link from "next/link"
import RewardsList from "@/components/rewards-list"

export default function Rewards() {
  // Sample redemption history
  const redemptionHistory = [
    {
      id: 1,
      name: "Meet & Greet Pass",
      event: "Coldplay World Tour",
      date: "April 5, 2024",
      points: 200,
      status: "Redeemed",
    },
    {
      id: 2,
      name: "Merchandise Discount",
      event: "IPL 2024: MI vs CSK",
      date: "March 15, 2024",
      points: 0,
      status: "Claimed",
    },
    {
      id: 3,
      name: "VIP Upgrade",
      event: "Ed Sheeran Live",
      date: "February 20, 2024",
      points: 500,
      status: "Redeemed",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Rewards & Benefits</h1>

      {/* Fan Score Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="col-span-2 bg-gradient-to-br from-gray-900 to-purple-950 border-gray-800">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>Your Fan Score</span>
              <Badge className="bg-purple-600">Platinum Tier</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-24 h-24 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-4 border-purple-600"></div>
                <span className="text-3xl font-bold">875</span>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Next Tier: Diamond (1000 points)</p>
                <Progress value={87.5} className="h-2 w-48" />
                <p className="text-sm text-gray-400 mt-1">125 points to go</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">Available Points</h3>
                  <span className="text-xl font-bold">350</span>
                </div>
                <p className="text-sm text-gray-400">Points to redeem for rewards</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">Redeemed Points</h3>
                  <span className="text-xl font-bold">700</span>
                </div>
                <p className="text-sm text-gray-400">Points used for rewards</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">Tier Benefits</h3>
                  <span className="text-xl font-bold">5</span>
                </div>
                <p className="text-sm text-gray-400">Exclusive Platinum benefits</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle>Tier Benefits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-2 rounded bg-purple-900/30 border border-purple-800">
                <div className="flex items-center gap-2">
                  <Badge className="bg-purple-700">Platinum</Badge>
                  <span className="text-sm">Your Current Tier</span>
                </div>
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-indigo-900/30 border border-indigo-800">
                <div className="flex items-center gap-2">
                  <Badge className="bg-indigo-700">Diamond</Badge>
                  <span className="text-sm">Next Tier</span>
                </div>
                <Lock className="h-5 w-5 text-gray-500" />
              </div>

              <div className="mt-4">
                <h3 className="font-medium mb-2">Platinum Benefits</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <p className="text-sm">48-hour early access to tickets</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <p className="text-sm">20% off on event merchandise</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <p className="text-sm">Priority customer support</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    <p className="text-sm">Exclusive event invitations</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Rewards Tabs */}
      <Tabs defaultValue="available" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="available">Available Rewards</TabsTrigger>
          <TabsTrigger value="badges">Badges & Achievements</TabsTrigger>
          <TabsTrigger value="history">Redemption History</TabsTrigger>
        </TabsList>

        <TabsContent value="available">
          <RewardsList />
        </TabsContent>

        <TabsContent value="badges">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-yellow-900 flex items-center justify-center mb-4">
                    <Award className="h-8 w-8 text-yellow-400" />
                  </div>
                  <h3 className="font-semibold text-center mb-1">Cricket Enthusiast</h3>
                  <Badge className="bg-green-600 mb-2">Earned</Badge>
                  <p className="text-sm text-gray-400 text-center">Watched over 50 hours of cricket content</p>
                  <p className="text-xs text-gray-500 mt-2">Earned on Feb 20, 2024</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-green-900 flex items-center justify-center mb-4">
                    <Award className="h-8 w-8 text-green-400" />
                  </div>
                  <h3 className="font-semibold text-center mb-1">Music Lover</h3>
                  <Badge className="bg-green-600 mb-2">Earned</Badge>
                  <p className="text-sm text-gray-400 text-center">Streamed music for over 100 hours</p>
                  <p className="text-xs text-gray-500 mt-2">Earned on Jan 15, 2024</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-purple-900 flex items-center justify-center mb-4">
                    <Award className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="font-semibold text-center mb-1">Event Explorer</h3>
                  <Badge className="bg-green-600 mb-2">Earned</Badge>
                  <p className="text-sm text-gray-400 text-center">Attended 5+ different event types</p>
                  <p className="text-xs text-gray-500 mt-2">Earned on Dec 10, 2023</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 opacity-70">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mb-4">
                    <Lock className="h-8 w-8 text-gray-500" />
                  </div>
                  <h3 className="font-semibold text-center mb-1">Movie Buff</h3>
                  <div className="mb-2">
                    <Progress value={75} className="h-2 w-24" />
                  </div>
                  <p className="text-sm text-gray-400 text-center">Watch 20+ movies on streaming platforms</p>
                  <p className="text-xs text-gray-500 mt-2">75% completed</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-800 p-6">
            <h3 className="text-lg font-semibold mb-2">Unlock More Badges</h3>
            <p className="text-gray-300 mb-4">
              Continue engaging with your favorite content and attending events to earn more badges and showcase your
              fan status.
            </p>
            <Link href="/events">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Browse Events
              </Button>
            </Link>
          </div>
        </TabsContent>

        <TabsContent value="history">
          <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
            <div className="grid grid-cols-5 gap-4 p-4 border-b border-gray-800 font-medium">
              <div>Reward</div>
              <div>Event</div>
              <div>Date</div>
              <div>Points</div>
              <div>Status</div>
            </div>

            {redemptionHistory.map((item) => (
              <div key={item.id} className="grid grid-cols-5 gap-4 p-4 border-b border-gray-800 text-gray-300">
                <div>{item.name}</div>
                <div>{item.event}</div>
                <div>{item.date}</div>
                <div>{item.points}</div>
                <div>
                  <Badge className={item.status === "Redeemed" ? "bg-green-600" : "bg-blue-600"}>{item.status}</Badge>
                </div>
              </div>
            ))}
          </div>

          {redemptionHistory.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium mb-2">No Redemption History</h3>
              <p className="text-gray-400 mb-6">You haven't redeemed any rewards yet.</p>
              <Link href="/rewards">
                <Button>Browse Rewards</Button>
              </Link>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

