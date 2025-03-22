"use client"
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, Trophy, Star, Eye, BarChart3, PieChart } from "lucide-react"
import CyberCard from "@/components/cyber-card"
import AnimatedText from "@/components/animated-text"

export default function MatchHistory() {
  // Sample data
  const matches = [
    {
      id: 1,
      teams: "Mumbai Indians vs Chennai Super Kings",
      venue: "Wankhede Stadium, Mumbai",
      date: "April 12, 2023",
      image: "/placeholder.svg?height=200&width=300",
      result: "Mumbai Indians won by 5 wickets",
      rating: 5,
      sport: "Cricket",
      duration: "3h 45m",
    },
    {
      id: 2,
      teams: "India vs Australia",
      venue: "M. Chinnaswamy Stadium, Bangalore",
      date: "March 5, 2023",
      image: "/placeholder.svg?height=200&width=300",
      result: "India won by 6 runs",
      rating: 5,
      sport: "Cricket",
      duration: "8h",
    },
    {
      id: 3,
      teams: "Manchester United vs Liverpool",
      venue: "Old Trafford, Manchester",
      date: "February 12, 2023",
      image: "/placeholder.svg?height=200&width=300",
      result: "Manchester United won 2-1",
      rating: 4,
      sport: "Football",
      duration: "1h 45m",
    },
  ]

  const topSports = [
    { name: "Cricket", percentage: 65, color: "bg-purple-500" },
    { name: "Football", percentage: 20, color: "bg-blue-500" },
    { name: "Basketball", percentage: 10, color: "bg-pink-500" },
    { name: "Tennis", percentage: 5, color: "bg-yellow-500" },
  ]

  const viewingStats = [
    { label: "Total Hours", value: "890", icon: <Clock className="h-5 w-5 text-purple-400" /> },
    { label: "Top Team", value: "Mumbai Indians", icon: <Trophy className="h-5 w-5 text-purple-400" /> },
    { label: "Matches Attended", value: "12", icon: <Calendar className="h-5 w-5 text-purple-400" /> },
    { label: "Avg. Weekly Viewing", value: "15.5 hrs", icon: <Eye className="h-5 w-5 text-purple-400" /> },
  ]

  const topTeams = [
    { name: "Mumbai Indians", sport: "Cricket", matches: 28 },
    { name: "India National Cricket Team", sport: "Cricket", matches: 22 },
    { name: "Manchester United", sport: "Football", matches: 18 },
    { name: "Los Angeles Lakers", sport: "Basketball", matches: 12 },
    { name: "Rafael Nadal", sport: "Tennis", matches: 8 },
  ]

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <CyberCard variant="gradient" className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-purple-400" />
                <AnimatedText text="Match History" effect="fade" color="purple" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6 stagger-list">
                {matches.map((match) => (
                  <div
                    key={match.id}
                    className="flex flex-col md:flex-row gap-4 p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover-card cursor-effect"
                  >
                    <div className="w-full md:w-40 h-32 rounded-lg overflow-hidden shrink-0">
                      <img
                        src={match.image || "/placeholder.svg"}
                        alt={match.teams}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                        <div>
                          <h3 className="text-xl font-semibold mb-1">{match.teams}</h3>
                          <div className="flex items-center text-sm text-gray-400 mb-1">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{match.venue}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400 mb-1">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{match.date}</span>
                          </div>
                          <div className="text-sm text-gray-300 mb-3">
                            <span>{match.result}</span>
                          </div>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < match.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                        <div className="bg-gray-900/70 p-2 rounded-md text-center">
                          <p className="text-xs text-gray-400">Sport</p>
                          <p className="font-semibold">{match.sport}</p>
                        </div>
                        <div className="bg-gray-900/70 p-2 rounded-md text-center">
                          <p className="text-xs text-gray-400">Duration</p>
                          <p className="font-semibold">{match.duration}</p>
                        </div>
                        <div className="bg-gray-900/70 p-2 rounded-md text-center md:col-span-1 col-span-2">
                          <p className="text-xs text-gray-400">Fan Score Impact</p>
                          <p className="font-semibold text-purple-400">+30 points</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Button className="bg-purple-900/30 hover:bg-purple-900/50 text-purple-300 border border-purple-900/50 neon-glow neon-purple">
                  View All Match History
                </Button>
              </div>
            </CardContent>
          </CyberCard>
        </div>

        <div>
          <CyberCard variant="gradient" className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="h-5 w-5 text-purple-400" />
                <AnimatedText text="Top Sports" effect="fade" color="purple" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topSports.map((sport) => (
                  <div key={sport.name} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span>{sport.name}</span>
                      <span>{sport.percentage}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${sport.color} neon-glow`}
                        style={{ width: `${sport.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </CyberCard>

          <CyberCard variant="gradient">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-purple-400" />
                <AnimatedText text="Top Teams" effect="fade" color="purple" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topTeams.map((team, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-2 bg-gray-900/50 rounded-md hover:bg-gray-900/70 transition-colors cursor-effect"
                  >
                    <div>
                      <p className="font-medium">{team.name}</p>
                      <p className="text-sm text-gray-400">{team.sport}</p>
                    </div>
                    <Badge className="bg-purple-900/50 text-purple-300">{team.matches} matches</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </CyberCard>
        </div>
      </div>

      <CyberCard variant="gradient">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5 text-purple-400" />
            <AnimatedText text="Viewing Stats" effect="fade" color="purple" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 stagger-list">
            {viewingStats.map((stat, index) => (
              <div
                key={index}
                className="p-4 bg-gray-900/50 rounded-lg border border-gray-800 hover-card cursor-effect"
              >
                <div className="flex items-center gap-3 mb-2">
                  {stat.icon}
                  <h3 className="font-medium">{stat.label}</h3>
                </div>
                <p className="text-2xl font-bold text-purple-300 neon-text-glow neon-purple">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-6 rounded-lg border border-purple-900/30">
            <h3 className="text-xl font-semibold mb-4 neon-text-glow neon-purple">Viewing Insights</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                <span>You watch sports most frequently on weekends</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                <span>Your viewing time increases by 40% during tournament seasons</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                <span>You've watched 85% of all Mumbai Indians matches in the last 2 years</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                <span>Your sports engagement is higher than 82% of users</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </CyberCard>
    </div>
  )
}

