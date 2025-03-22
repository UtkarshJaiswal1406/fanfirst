import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Music, Film, ClubIcon as Football, Calendar, Award, ChevronRight, ArrowUpRight, Info } from "lucide-react"
import Link from "next/link"
import FanScoreHistory from "@/components/fan-score-history"

export default function FanScore() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Fan Score</h1>

      {/* Fan Score Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="col-span-2 bg-gradient-to-br from-gray-900 to-purple-950 border-gray-800">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>Current Fan Score</span>
              <Badge className="bg-purple-600">Platinum Tier</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-8 mb-8">
              <div className="relative w-32 h-32 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-4 border-purple-600"></div>
                <span className="text-4xl font-bold">875</span>
              </div>
              <div className="flex-grow">
                <p className="text-sm text-gray-400 mb-1">Next Tier: Diamond (1000 points)</p>
                <Progress value={87.5} className="h-3" />
                <p className="text-sm text-gray-400 mt-1">125 points to go</p>
                <div className="flex gap-2 mt-4">
                  <Link href="/events">
                    <Button size="sm">
                      Browse Events
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                  <Link href="/know-me">
                    <Button size="sm" variant="outline" className="border-gray-700">
                      View Detailed Stats
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-center">
                <Music className="h-6 w-6 text-purple-400 mb-2" />
                <span className="text-sm font-medium">Music Score</span>
                <span className="text-xl font-bold">92%</span>
                <div className="mt-2 w-full">
                  <Progress value={92} className="h-1" />
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-center">
                <Film className="h-6 w-6 text-purple-400 mb-2" />
                <span className="text-sm font-medium">Movies Score</span>
                <span className="text-xl font-bold">78%</span>
                <div className="mt-2 w-full">
                  <Progress value={78} className="h-1" />
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-center">
                <Football className="h-6 w-6 text-purple-400 mb-2" />
                <span className="text-sm font-medium">Sports Score</span>
                <span className="text-xl font-bold">85%</span>
                <div className="mt-2 w-full">
                  <Progress value={85} className="h-1" />
                </div>
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
                  <span className="text-sm">Current</span>
                </div>
                <span className="text-xs text-purple-300">900+ points</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-indigo-900/30 border border-indigo-800">
                <div className="flex items-center gap-2">
                  <Badge className="bg-indigo-700">Diamond</Badge>
                  <span className="text-sm">Next Tier</span>
                </div>
                <span className="text-xs text-indigo-300">1000+ points</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-yellow-900/30 border border-yellow-800">
                <div className="flex items-center gap-2">
                  <Badge className="bg-yellow-700">Gold</Badge>
                </div>
                <span className="text-xs text-yellow-300">700+ points</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-gray-800 border border-gray-700">
                <div className="flex items-center gap-2">
                  <Badge className="bg-gray-600">Silver</Badge>
                </div>
                <span className="text-xs text-gray-300">500+ points</span>
              </div>
              <div className="flex items-center justify-between p-2 rounded bg-gray-800 border border-gray-700">
                <div className="flex items-center gap-2">
                  <Badge className="bg-gray-600">General</Badge>
                </div>
                <span className="text-xs text-gray-300">0+ points</span>
              </div>
            </div>

            <div className="mt-6">
              <Link href="/rewards">
                <Button variant="outline" className="w-full border-gray-700">
                  View All Benefits
                  <ArrowUpRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* How Fan Score Works */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">How Fan Score Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="pt-6">
              <div className="bg-purple-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect Accounts</h3>
              <p className="text-gray-400 mb-4">
                Link your streaming platforms like Spotify, Disney+ Hotstar, and YouTube to analyze your engagement
                patterns.
              </p>
              <div className="flex flex-wrap gap-2">
                <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
                  <span className="text-xs font-bold">YT</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center">
                  <span className="text-xs font-bold">SP</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-xs font-bold">DH</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="pt-6">
              <div className="bg-purple-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Attend Events</h3>
              <p className="text-gray-400 mb-4">
                Boost your score by attending events. Each event you attend contributes to your Fan Score and helps you
                earn badges.
              </p>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-purple-400" />
                <span className="text-sm">12 events attended in the last year</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 border-gray-800">
            <CardContent className="pt-6">
              <div className="bg-purple-900 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Earn Rewards</h3>
              <p className="text-gray-400 mb-4">
                As your Fan Score increases, you'll unlock higher tiers with better benefits, early access, and
                exclusive rewards.
              </p>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-purple-400" />
                <span className="text-sm">8 badges earned so far</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Fan Score Tabs */}
      <Tabs defaultValue="history" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="history">Score History</TabsTrigger>
          <TabsTrigger value="breakdown">Score Breakdown</TabsTrigger>
          <TabsTrigger value="improve">Improve Your Score</TabsTrigger>
        </TabsList>

        <TabsContent value="history">
          <FanScoreHistory />
        </TabsContent>

        <TabsContent value="breakdown">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Score Components</h3>
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <Music className="h-5 w-5 text-purple-400" />
                          <h4 className="font-medium">Music Engagement</h4>
                        </div>
                        <span className="font-semibold">320 points</span>
                      </div>
                      <Progress value={80} className="h-2" />
                      <p className="text-xs text-gray-400 mt-1">
                        Based on 168 hours of streaming and 5 concerts attended
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <Football className="h-5 w-5 text-purple-400" />
                          <h4 className="font-medium">Sports Engagement</h4>
                        </div>
                        <span className="font-semibold">285 points</span>
                      </div>
                      <Progress value={71.25} className="h-2" />
                      <p className="text-xs text-gray-400 mt-1">Based on 235 hours of viewing and 4 matches attended</p>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <Film className="h-5 w-5 text-purple-400" />
                          <h4 className="font-medium">Movie Engagement</h4>
                        </div>
                        <span className="font-semibold">195 points</span>
                      </div>
                      <Progress value={48.75} className="h-2" />
                      <p className="text-xs text-gray-400 mt-1">
                        Based on 155 hours of viewing and 3 premieres attended
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <Award className="h-5 w-5 text-purple-400" />
                          <h4 className="font-medium">Badges & Achievements</h4>
                        </div>
                        <span className="font-semibold">75 points</span>
                      </div>
                      <Progress value={18.75} className="h-2" />
                      <p className="text-xs text-gray-400 mt-1">Based on 8 badges earned</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Score Distribution</h3>
              <Card className="bg-gray-900 border-gray-800 mb-6">
                <CardContent className="pt-6">
                  <div className="relative h-64 w-full">
                    {/* This would be a chart in a real implementation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-48 h-48 rounded-full border-8 border-gray-800 relative">
                        <div
                          className="absolute inset-0 border-t-8 border-purple-600 rounded-full"
                          style={{ transform: "rotate(115deg)" }}
                        ></div>
                        <div
                          className="absolute inset-0 border-t-8 border-green-600 rounded-full"
                          style={{ transform: "rotate(220deg)" }}
                        ></div>
                        <div
                          className="absolute inset-0 border-t-8 border-blue-600 rounded-full"
                          style={{ transform: "rotate(300deg)" }}
                        ></div>
                        <div
                          className="absolute inset-0 border-t-8 border-yellow-600 rounded-full"
                          style={{ transform: "rotate(350deg)" }}
                        ></div>

                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <span className="text-2xl font-bold">875</span>
                            <p className="text-xs text-gray-400">Total Points</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-0 w-full flex justify-around text-sm">
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded-full bg-purple-600"></div>
                        <span>Music (36%)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded-full bg-green-600"></div>
                        <span>Sports (33%)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                        <span>Movies (22%)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded-full bg-yellow-600"></div>
                        <span>Badges (9%)</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-medium mb-4">Fan Score Percentile</h3>
                  <p className="text-gray-400 mb-4">
                    Your Fan Score of 875 places you in the top 8% of all users on PriorityPass.
                  </p>
                  <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden mb-2">
                    <div
                      className="absolute left-0 top-0 h-full bg-gradient-to-r from-green-500 to-green-600"
                      style={{ width: "92%" }}
                    ></div>
                    <div className="absolute left-[92%] top-0 h-full w-1 bg-white"></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>0</span>
                    <span>Top 50%</span>
                    <span>Top 10%</span>
                    <span>Top 1%</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="improve">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Ways to Improve Your Score</h3>
              <div className="space-y-4">
                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-purple-900 flex items-center justify-center shrink-0">
                        <Music className="h-5 w-5 text-purple-300" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Connect More Music Platforms</h4>
                        <p className="text-sm text-gray-400 mb-3">
                          Link Apple Music to your account to earn up to 50 more points.
                        </p>
                        <Button size="sm">Connect Apple Music</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-purple-900 flex items-center justify-center shrink-0">
                        <Calendar className="h-5 w-5 text-purple-300" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Attend More Events</h4>
                        <p className="text-sm text-gray-400 mb-3">
                          Attend 3 more events to earn the "Event Explorer" badge worth 75 points.
                        </p>
                        <Link href="/events">
                          <Button size="sm">Browse Events</Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-purple-900 flex items-center justify-center shrink-0">
                        <Film className="h-5 w-5 text-purple-300" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Watch More Movies</h4>
                        <p className="text-sm text-gray-400 mb-3">
                          Watch 5 more movies to earn the "Movie Buff" badge worth 50 points.
                        </p>
                        <Button size="sm" variant="outline" className="border-gray-700">
                          View Recommendations
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Points to Next Tier</h3>
              <Card className="bg-gray-900 border-gray-800 mb-6">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h4 className="font-medium">Current: Platinum</h4>
                      <p className="text-sm text-gray-400">875 points</p>
                    </div>
                    <div className="text-right">
                      <h4 className="font-medium">Next: Diamond</h4>
                      <p className="text-sm text-gray-400">1000 points</p>
                    </div>
                  </div>

                  <Progress value={87.5} className="h-3 mb-6" />

                  <div className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 p-4 rounded-lg border border-indigo-800">
                    <h4 className="font-medium mb-2">Diamond Tier Benefits</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                        <span>72-hour early access to tickets (vs. 48-hour for Platinum)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                        <span>30% off on event merchandise (vs. 20% for Platinum)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                        <span>Exclusive Diamond-only events and experiences</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                        <span>Free upgrades to VIP at select events</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-yellow-900 flex items-center justify-center shrink-0">
                      <Info className="h-5 w-5 text-yellow-300" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Fan Score Tips</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-yellow-500 mt-1.5"></div>
                          <span>Your Fan Score is recalculated every 24 hours based on your latest activity.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-yellow-500 mt-1.5"></div>
                          <span>Points from event attendance remain valid for 12 months.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 rounded-full bg-yellow-500 mt-1.5"></div>
                          <span>
                            Consistency matters! Regular engagement with your favorite content boosts your score more
                            than occasional binge-watching.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

