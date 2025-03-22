import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Music, Film, Award, Calendar, Trophy } from "lucide-react"

export default function FanScoreHistory() {
  const activities = [
    {
      id: 1,
      type: "streaming",
      platform: "Spotify",
      content: "Listened to Coldplay for 10+ hours",
      points: 25,
      date: "March 15, 2024",
      icon: <Music className="h-5 w-5 text-green-400" />,
    },
    {
      id: 2,
      type: "streaming",
      platform: "Disney+ Hotstar",
      content: "Watched IPL 2023 Season",
      points: 50,
      date: "March 10, 2024",
      icon: <Film className="h-5 w-5 text-blue-400" />,
    },
    {
      id: 3,
      type: "event",
      content: "Attended IPL 2023: MI vs RCB",
      points: 100,
      date: "March 5, 2024",
      icon: <Calendar className="h-5 w-5 text-purple-400" />,
    },
    {
      id: 4,
      type: "streaming",
      platform: "YouTube",
      content: "Watched Cricket Highlights",
      points: 15,
      date: "February 28, 2024",
      icon: <Film className="h-5 w-5 text-red-400" />,
    },
    {
      id: 5,
      type: "achievement",
      content: "Earned 'Cricket Enthusiast' Badge",
      points: 75,
      date: "February 20, 2024",
      icon: <Award className="h-5 w-5 text-yellow-400" />,
    },
  ]

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-purple-900 flex items-center justify-center">
                <Trophy className="h-5 w-5 text-purple-300" />
              </div>
              <div>
                <h3 className="font-medium">Total Fan Score</h3>
                <p className="text-2xl font-bold">875</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-400">
              <span>Platinum Tier</span>
              <span>125 points to Diamond</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-green-900 flex items-center justify-center">
                <Calendar className="h-5 w-5 text-green-300" />
              </div>
              <div>
                <h3 className="font-medium">Events Attended</h3>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-400">
              <span>Last 12 months</span>
              <span>+3 from previous year</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-yellow-900 flex items-center justify-center">
                <Award className="h-5 w-5 text-yellow-300" />
              </div>
              <div>
                <h3 className="font-medium">Badges Earned</h3>
                <p className="text-2xl font-bold">8</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-400">
              <span>Total badges</span>
              <span>5 more available</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <h3 className="text-xl font-semibold mb-4">Activity History</h3>

      <div className="relative border-l border-gray-800 pl-6 ml-3 space-y-6">
        {activities.map((activity) => (
          <div key={activity.id} className="relative">
            <div className="absolute -left-9 w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center">
              {activity.icon}
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">{activity.content}</h4>
                  {activity.platform && <p className="text-sm text-gray-400">Platform: {activity.platform}</p>}
                  <p className="text-sm text-gray-400 mt-1">{activity.date}</p>
                </div>
                <Badge className="bg-purple-600">+{activity.points} points</Badge>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

