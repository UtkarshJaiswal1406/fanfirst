"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Music, Film, Trophy, Calendar, Clock, BarChart2, TrendingUp, Award } from "lucide-react"
import {
  Line,
  AreaChart,
  Area,
  BarChart as RechartsBarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import DynamicBackground from "@/components/dynamic-background"
import FuturisticCard from "@/components/futuristic-card"
import ParticleBurst from "@/components/particle-burst"

export default function MyStats() {
  const [activeTab, setActiveTab] = useState("overview")
  const [chartData, setChartData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setChartData(generateChartData())
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Generate sample chart data
  const generateChartData = () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const data = []

    for (let i = 0; i < 12; i++) {
      data.push({
        name: months[i],
        music: Math.floor(Math.random() * 100) + 20,
        movies: Math.floor(Math.random() * 80) + 10,
        sports: Math.floor(Math.random() * 60) + 5,
        total: Math.floor(Math.random() * 150) + 50,
      })
    }

    return data
  }

  // Sample streaming data
  const streamingData = [
    { name: "Spotify", value: 45, color: "#1DB954" },
    { name: "Netflix", value: 30, color: "#E50914" },
    { name: "Disney+", value: 15, color: "#0063e5" },
    { name: "YouTube", value: 10, color: "#FF0000" },
  ]

  // Sample genre data
  const genreData = [
    { name: "Pop", value: 35, color: "#00c3ff" },
    { name: "Rock", value: 25, color: "#0080ff" },
    { name: "Hip Hop", value: 20, color: "#00e1ff" },
    { name: "Electronic", value: 15, color: "#0091ff" },
    { name: "Classical", value: 5, color: "#00a2ff" },
  ]

  // Sample activity data
  const activityData = [
    { day: "Mon", hours: 2.5 },
    { day: "Tue", hours: 3.2 },
    { day: "Wed", hours: 1.8 },
    { day: "Thu", hours: 4.0 },
    { day: "Fri", hours: 3.5 },
    { day: "Sat", hours: 5.2 },
    { day: "Sun", hours: 4.8 },
  ]

  // Sample recent activities
  const recentActivities = [
    {
      id: 1,
      type: "music",
      title: 'Listened to "Blinding Lights" by The Weeknd',
      time: "2 hours ago",
      platform: "Spotify",
      icon: <Music className="h-4 w-4" />,
    },
    {
      id: 2,
      type: "movie",
      title: 'Watched "Dune: Part Two"',
      time: "1 day ago",
      platform: "HBO Max",
      icon: <Film className="h-4 w-4" />,
    },
    {
      id: 3,
      type: "sport",
      title: "Watched IPL 2024: MI vs CSK",
      time: "3 days ago",
      platform: "Disney+ Hotstar",
      icon: <Trophy className="h-4 w-4" />,
    },
    {
      id: 4,
      type: "music",
      title: 'Listened to "As It Was" by Harry Styles',
      time: "4 days ago",
      platform: "Spotify",
      icon: <Music className="h-4 w-4" />,
    },
    {
      id: 5,
      type: "movie",
      title: 'Watched "Oppenheimer"',
      time: "1 week ago",
      platform: "Netflix",
      icon: <Film className="h-4 w-4" />,
    },
  ]

  // Sample achievements
  const achievements = [
    {
      id: 1,
      title: "Music Enthusiast",
      description: "Listened to over 1000 songs",
      progress: 100,
      icon: <Music className="h-6 w-6" />,
      color: "#00c3ff",
    },
    {
      id: 2,
      title: "Movie Buff",
      description: "Watched over 50 movies",
      progress: 80,
      icon: <Film className="h-6 w-6" />,
      color: "#0080ff",
    },
    {
      id: 3,
      title: "Sports Fan",
      description: "Watched over 20 sports events",
      progress: 60,
      icon: <Trophy className="h-6 w-6" />,
      color: "#00e1ff",
    },
    {
      id: 4,
      title: "Loyal Listener",
      description: "Listened to the same artist for 10 hours",
      progress: 100,
      icon: <Music className="h-6 w-6" />,
      color: "#0091ff",
    },
  ]

  return (
    <div className="min-h-screen relative">
      <DynamicBackground variant="wave" />

      <div className="container mx-auto px-4 py-8">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-[#00c3ff] to-[#0080ff] text-transparent bg-clip-text">
              My Stats
            </h1>
            <p className="text-gray-400">Track your engagement and fan activity across platforms</p>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" className="border-[#00c3ff]/30 text-[#00c3ff] hover:bg-[#00c3ff]/10">
              <Calendar className="mr-2 h-4 w-4" />
              Last 30 Days
            </Button>
            <Button className="bg-gradient-to-r from-[#00c3ff]/80 to-[#0080ff]/80 hover:from-[#00c3ff] hover:to-[#0080ff] border-none">
              <TrendingUp className="mr-2 h-4 w-4" />
              View Insights
            </Button>
          </div>
        </motion.div>

        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TabsList className="grid grid-cols-4 w-full max-w-3xl mb-8 bg-black/50 backdrop-blur-md p-1 rounded-lg border border-[#00c3ff]/20">
              <TabsTrigger
                value="overview"
                className="data-[state=active]:bg-[#00c3ff]/20 data-[state=active]:text-[#00c3ff] rounded-md transition-all duration-300"
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="music"
                className="data-[state=active]:bg-[#00c3ff]/20 data-[state=active]:text-[#00c3ff] rounded-md transition-all duration-300"
              >
                Music
              </TabsTrigger>
              <TabsTrigger
                value="movies"
                className="data-[state=active]:bg-[#00c3ff]/20 data-[state=active]:text-[#00c3ff] rounded-md transition-all duration-300"
              >
                Movies
              </TabsTrigger>
              <TabsTrigger
                value="sports"
                className="data-[state=active]:bg-[#00c3ff]/20 data-[state=active]:text-[#00c3ff] rounded-md transition-all duration-300"
              >
                Sports
              </TabsTrigger>
            </TabsList>
          </motion.div>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  title: "Fan Score",
                  value: "875",
                  subtitle: "Platinum Tier",
                  icon: <BarChart2 className="h-6 w-6 text-[#00c3ff]" />,
                  change: "+15 this month",
                  color: "#00c3ff",
                },
                {
                  title: "Streaming Hours",
                  value: "124",
                  subtitle: "This month",
                  icon: <Clock className="h-6 w-6 text-[#0080ff]" />,
                  change: "+8% vs last month",
                  color: "#0080ff",
                },
                {
                  title: "Achievements",
                  value: "12",
                  subtitle: "4 new this month",
                  icon: <Award className="h-6 w-6 text-[#00e1ff]" />,
                  change: "3 in progress",
                  color: "#00e1ff",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <FuturisticCard variant="glass" className="p-6" glowColor={stat.color}>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-gray-400 text-sm">{stat.title}</p>
                        <h3 className="text-3xl font-bold mt-1" style={{ color: stat.color }}>
                          {stat.value}
                        </h3>
                        <p className="text-gray-400 text-xs mt-1">{stat.subtitle}</p>
                      </div>
                      <div className="p-3 rounded-full" style={{ backgroundColor: `${stat.color}20` }}>
                        {stat.icon}
                      </div>
                    </div>
                    <div className="mt-4 text-xs" style={{ color: stat.color }}>
                      {stat.change}
                    </div>
                  </FuturisticCard>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <FuturisticCard variant="glass" className="p-6 h-full">
                  <h3 className="text-lg font-medium mb-4">Fan Score Trend</h3>

                  {isLoading ? (
                    <div className="h-64 flex items-center justify-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#00c3ff]"></div>
                    </div>
                  ) : (
                    <ChartContainer
                      config={{
                        total: {
                          label: "Fan Score",
                          color: "hsl(var(--chart-1))",
                        },
                        music: {
                          label: "Music",
                          color: "hsl(var(--chart-2))",
                        },
                        movies: {
                          label: "Movies",
                          color: "hsl(var(--chart-3))",
                        },
                        sports: {
                          label: "Sports",
                          color: "hsl(var(--chart-4))",
                        },
                      }}
                      className="h-64"
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData}>
                          <defs>
                            <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#00c3ff" stopOpacity={0.8} />
                              <stop offset="95%" stopColor="#00c3ff" stopOpacity={0} />
                            </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                          <XAxis dataKey="name" stroke="#666" />
                          <YAxis stroke="#666" />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Area
                            type="monotone"
                            dataKey="total"
                            stroke="var(--color-total)"
                            fillOpacity={1}
                            fill="url(#colorTotal)"
                          />
                          <Line
                            type="monotone"
                            dataKey="music"
                            stroke="var(--color-music)"
                            strokeWidth={2}
                            dot={{ r: 3 }}
                          />
                          <Line
                            type="monotone"
                            dataKey="movies"
                            stroke="var(--color-movies)"
                            strokeWidth={2}
                            dot={{ r: 3 }}
                          />
                          <Line
                            type="monotone"
                            dataKey="sports"
                            stroke="var(--color-sports)"
                            strokeWidth={2}
                            dot={{ r: 3 }}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  )}
                </FuturisticCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <FuturisticCard variant="glass" className="p-6 h-full">
                  <h3 className="text-lg font-medium mb-4">Streaming Platforms</h3>

                  {isLoading ? (
                    <div className="h-64 flex items-center justify-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#00c3ff]"></div>
                    </div>
                  ) : (
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={streamingData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            dataKey="value"
                            labelLine={false}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          >
                            {streamingData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value) => `${value}%`} />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  )}
                </FuturisticCard>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <FuturisticCard variant="glass" className="p-6 h-full">
                  <h3 className="text-lg font-medium mb-4">Recent Activity</h3>

                  <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
                    {recentActivities.map((activity, index) => (
                      <motion.div
                        key={activity.id}
                        className="flex items-start gap-3 p-3 rounded-lg bg-black/30 border border-[#00c3ff]/10"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{
                          x: 5,
                          backgroundColor: "rgba(0, 195, 255, 0.1)",
                          borderColor: "rgba(0, 195, 255, 0.3)",
                        }}
                      >
                        <div className="p-2 rounded-full bg-[#00c3ff]/10">{activity.icon}</div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{activity.title}</p>
                          <div className="flex justify-between items-center mt-1">
                            <span className="text-xs text-gray-400">{activity.platform}</span>
                            <span className="text-xs text-gray-500">{activity.time}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </FuturisticCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <FuturisticCard variant="glass" className="p-6 h-full">
                  <h3 className="text-lg font-medium mb-4">Achievements</h3>

                  <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={achievement.id}
                        className="p-4 rounded-lg bg-black/30 border border-[#00c3ff]/10"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{
                          x: 5,
                          backgroundColor: "rgba(0, 195, 255, 0.1)",
                          borderColor: "rgba(0, 195, 255, 0.3)",
                        }}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 rounded-full" style={{ backgroundColor: `${achievement.color}20` }}>
                            {achievement.icon}
                          </div>
                          <div>
                            <h4 className="font-medium">{achievement.title}</h4>
                            <p className="text-xs text-gray-400">{achievement.description}</p>
                          </div>
                        </div>

                        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ backgroundColor: achievement.color }}
                            initial={{ width: 0 }}
                            animate={{ width: `${achievement.progress}%` }}
                            transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                          />
                        </div>
                        <div className="flex justify-end mt-1">
                          <span className="text-xs" style={{ color: achievement.color }}>
                            {achievement.progress}%
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </FuturisticCard>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="music">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <FuturisticCard variant="glass" className="p-6 h-full">
                <h3 className="text-lg font-medium mb-4">Top Genres</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={genreData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        dataKey="value"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {genreData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value}%`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </FuturisticCard>

              <FuturisticCard variant="glass" className="p-6 h-full">
                <h3 className="text-lg font-medium mb-4">Listening Activity</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsBarChart data={activityData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="day" stroke="#666" />
                      <YAxis stroke="#666" />
                      <Tooltip
                        formatter={(value) => [`${value} hours`, "Listening Time"]}
                        contentStyle={{ backgroundColor: "#111", border: "1px solid #333" }}
                      />
                      <Bar dataKey="hours" fill="#00c3ff" radius={[4, 4, 0, 0]} />
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </div>
              </FuturisticCard>
            </div>

            {/* More music content would go here */}
          </TabsContent>

          <TabsContent value="movies">
            {/* Movies content would go here */}
            <div className="text-center py-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Film className="h-16 w-16 mx-auto text-[#00c3ff] mb-4" />
                <h3 className="text-2xl font-bold mb-2">Movies Stats Coming Soon</h3>
                <p className="text-gray-400 max-w-md mx-auto">
                  We're currently analyzing your movie watching patterns to provide personalized insights.
                </p>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="sports">
            {/* Sports content would go here */}
            <div className="text-center py-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Trophy className="h-16 w-16 mx-auto text-[#00c3ff] mb-4" />
                <h3 className="text-2xl font-bold mb-2">Sports Stats Coming Soon</h3>
                <p className="text-gray-400 max-w-md mx-auto">
                  We're currently analyzing your sports viewing patterns to provide personalized insights.
                </p>
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <ParticleBurst
        size={300}
        particleCount={50}
        color="#00c3ff"
        trigger="auto"
        duration={8}
        className="fixed bottom-20 right-20 z-0"
      />
    </div>
  )
}

