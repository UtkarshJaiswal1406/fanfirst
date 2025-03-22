import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Gift, Ticket, Star, Lock } from "lucide-react"

export default function RewardsList() {
  const badges = [
    {
      id: 1,
      name: "Cricket Enthusiast",
      description: "Watched over 50 hours of cricket content",
      icon: <Award className="h-6 w-6 text-yellow-400" />,
      earned: true,
      date: "February 20, 2024",
    },
    {
      id: 2,
      name: "Music Lover",
      description: "Streamed music for over 100 hours",
      icon: <Award className="h-6 w-6 text-green-400" />,
      earned: true,
      date: "January 15, 2024",
    },
    {
      id: 3,
      name: "Event Explorer",
      description: "Attended 5+ different event types",
      icon: <Award className="h-6 w-6 text-purple-400" />,
      earned: true,
      date: "December 10, 2023",
    },
    {
      id: 4,
      name: "Movie Buff",
      description: "Watched 20+ movies on streaming platforms",
      icon: <Award className="h-6 w-6 text-blue-400" />,
      earned: false,
      progress: 75,
    },
    {
      id: 5,
      name: "Loyal Fan",
      description: "Member for over 1 year with regular activity",
      icon: <Award className="h-6 w-6 text-red-400" />,
      earned: false,
      progress: 90,
    },
  ]

  const rewards = [
    {
      id: 1,
      name: "Early Access Pass",
      description: "48-hour early access to all event ticket sales",
      points: 0,
      icon: <Ticket className="h-6 w-6 text-purple-400" />,
      available: true,
      tier: "Platinum",
    },
    {
      id: 2,
      name: "Merchandise Discount",
      description: "20% off on event merchandise",
      points: 0,
      icon: <Gift className="h-6 w-6 text-purple-400" />,
      available: true,
      tier: "Platinum",
    },
    {
      id: 3,
      name: "Meet & Greet Pass",
      description: "Chance to win exclusive meet & greet passes",
      points: 200,
      icon: <Star className="h-6 w-6 text-yellow-400" />,
      available: true,
    },
    {
      id: 4,
      name: "VIP Upgrade",
      description: "Upgrade your tickets to VIP experience",
      points: 500,
      icon: <Star className="h-6 w-6 text-yellow-400" />,
      available: false,
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">Your Badges</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {badges.map((badge) => (
            <Card key={badge.id} className={`bg-gray-900 border-gray-800 ${!badge.earned ? "opacity-70" : ""}`}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-full ${badge.earned ? "bg-gray-800" : "bg-gray-800/50"} flex items-center justify-center`}
                  >
                    {badge.earned ? badge.icon : <Lock className="h-6 w-6 text-gray-500" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium">{badge.name}</h4>
                      {badge.earned && <Badge className="bg-green-600 text-xs">Earned</Badge>}
                    </div>
                    <p className="text-sm text-gray-400 mt-1">{badge.description}</p>
                    {badge.earned ? (
                      <p className="text-xs text-gray-500 mt-2">Earned on {badge.date}</p>
                    ) : (
                      <div className="mt-2">
                        <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-purple-600 rounded-full"
                            style={{ width: `${badge.progress}%` }}
                          ></div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{badge.progress}% completed</p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Available Rewards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rewards.map((reward) => (
            <Card key={reward.id} className={`bg-gray-900 border-gray-800 ${!reward.available ? "opacity-70" : ""}`}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-full ${reward.available ? "bg-gray-800" : "bg-gray-800/50"} flex items-center justify-center`}
                  >
                    {reward.available ? reward.icon : <Lock className="h-6 w-6 text-gray-500" />}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium">{reward.name}</h4>
                      {reward.tier && <Badge className="bg-purple-600 text-xs">{reward.tier} Benefit</Badge>}
                    </div>
                    <p className="text-sm text-gray-400">{reward.description}</p>
                    <div className="flex justify-between items-center mt-4">
                      <div>
                        {reward.points > 0 ? (
                          <span className="text-sm font-medium">{reward.points} points</span>
                        ) : (
                          <span className="text-sm text-gray-400">Tier benefit</span>
                        )}
                      </div>
                      <Button size="sm" disabled={!reward.available} className={!reward.available ? "bg-gray-700" : ""}>
                        {reward.points > 0 ? "Redeem" : "Claim"}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-800 p-6 text-center">
        <h3 className="text-xl font-semibold mb-2">Unlock More Rewards</h3>
        <p className="text-gray-300 mb-4 max-w-2xl mx-auto">
          Continue engaging with your favorite content and attending events to earn more points and unlock exclusive
          rewards.
        </p>
        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
          Browse Events
        </Button>
      </div>
    </div>
  )
}

