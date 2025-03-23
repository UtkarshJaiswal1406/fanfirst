"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Music, Film, Trophy, Calendar, Clock, BarChart2, TrendingUp, Award } from "lucide-react";
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
} from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import DynamicBackground from "@/components/dynamic-background";
import FuturisticCard from "@/components/futuristic-card";
import ParticleBurst from "@/components/particle-burst";
import { SpotifyUserData, SpotifyArtist } from '@/lib/spotify';

export default function MyStats() {
  const [activeTab, setActiveTab] = useState("overview");
  const [spotifyData, setSpotifyData] = useState<SpotifyUserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'spotify_data') {
        const data = e.newValue ? JSON.parse(e.newValue) as SpotifyUserData : null;
        setSpotifyData(data);
        setIsLoading(false);
      }
    };

    // Check initial state
    const storedData = localStorage.getItem('spotify_data');
    if (storedData) {
      setSpotifyData(JSON.parse(storedData));
    }
    setIsLoading(false);

    // Listen for changes
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Generate chart data from Spotify data
  const generateChartData = () => {
    if (!spotifyData) return [];

    // Create a map of artists and their play counts
    const artistPlayCounts = new Map<string, number>();
    spotifyData.recentlyPlayed.forEach(item => {
      item.track.artists.forEach((artist: { name: string }) => {
        const count = artistPlayCounts.get(artist.name) || 0;
        artistPlayCounts.set(artist.name, count + 1);
      });
    });

    // Convert to chart data format
    return Array.from(artistPlayCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 12)
      .map(([name, count]) => ({
        name,
        plays: count,
      }));
  };

  // Generate streaming data from Spotify data
  const generateStreamingData = () => {
    if (!spotifyData) return [];

    return [
      {
        name: "Spotify",
        value: spotifyData.engagementScore,
        color: "#1DB954"
      },
      {
        name: "Netflix",
        value: 0,
        color: "#E50914"
      },
      {
        name: "Disney+",
        value: 0,
        color: "#0063e5"
      }
    ];
  };

  // Generate genre data from Spotify data
  const generateGenreData = () => {
    if (!spotifyData) return [];

    const genreCounts = new Map<string, number>();
    spotifyData.topArtists.forEach((artist: SpotifyArtist) => {
      artist.genres?.forEach((genre: string) => {
        const count = genreCounts.get(genre) || 0;
        genreCounts.set(genre, count + 1);
      });
    });

    const colors = ["#00c3ff", "#0080ff", "#00e1ff", "#0091ff", "#00a2ff"];
    return Array.from(genreCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name, value], index) => ({
        name,
        value,
        color: colors[index]
      }));
  };

  // Generate activity data from Spotify data
  const generateActivityData = () => {
    if (!spotifyData) return [];

    // Group recently played tracks by day
    const dayMap = new Map<string, number>();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    spotifyData.recentlyPlayed.forEach(item => {
      const date = new Date(item.played_at);
      const day = days[date.getDay()];
      const minutes = (item.track.duration_ms / 1000 / 60);
      const current = dayMap.get(day) || 0;
      dayMap.set(day, current + minutes);
    });

    return days.map(day => ({
      day,
      hours: Number((dayMap.get(day) || 0) / 60).toFixed(1)
    }));
  };

  // Generate achievements from Spotify data
  const generateAchievements = () => {
    if (!spotifyData) return [];

    const achievements = [];

    // Music Enthusiast achievement
    if (spotifyData.recentlyPlayed.length > 0) {
      achievements.push({
        id: 1,
        title: "Music Enthusiast",
        description: `Listened to ${spotifyData.recentlyPlayed.length} tracks recently`,
        progress: Math.min(100, (spotifyData.recentlyPlayed.length / 50) * 100),
        icon: <Music className="h-6 w-6" />,
        color: "#00c3ff",
      });
    }

    // Playlist Curator achievement
    if (spotifyData.playlistCount > 0) {
      achievements.push({
        id: 2,
        title: "Playlist Curator",
        description: `Created ${spotifyData.playlistCount} playlists`,
        progress: Math.min(100, (spotifyData.playlistCount / 10) * 100),
        icon: <Music className="h-6 w-6" />,
        color: "#0080ff",
      });
    }

    // Top Fan achievement
    if (spotifyData.engagementScore >= 80) {
      achievements.push({
        id: 3,
        title: "Top Fan",
        description: "Achieved VIP status with high engagement",
        progress: 100,
        icon: <Award className="h-6 w-6" />,
        color: "#00e1ff",
      });
    }

    return achievements;
  };

  // Generate recent activities from Spotify data
  const generateRecentActivities = () => {
    if (!spotifyData) return [];

    return spotifyData.recentlyPlayed.slice(0, 5).map((item, index) => ({
      id: index + 1,
      type: "music",
      title: `Listened to "${item.track.name}" by ${item.track.artists[0].name}`,
      time: new Date(item.played_at).toLocaleDateString(),
      platform: "Spotify",
      icon: <Music className="h-4 w-4" />,
    }));
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 animate-spin rounded-full border-b-2 border-[#00c3ff]" />
            <span className="text-[#00c3ff]">Loading stats...</span>
          </div>
        </motion.div>
      </div>
    );
  }

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
            <h1 className="text-3xl mt-12 font-bold bg-gradient-to-r from-[#00c3ff] to-[#0080ff] text-transparent bg-clip-text">
              My Stats
            </h1>
            <p className="text-gray-400 mt-1">Track your engagement and fan activity across platforms</p>
          </div>

          <div className="flex mt-12 items-center gap-4">
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
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center mb-8"
          >
            <TabsList className="bg-black/40 border border-white/10">
              <TabsTrigger value="overview" className="data-[state=active]:bg-[#00c3ff]/20">
                Overview
              </TabsTrigger>
              <TabsTrigger value="music" className="data-[state=active]:bg-[#00c3ff]/20">
                Music
              </TabsTrigger>
              <TabsTrigger value="movies" className="data-[state=active]:bg-[#00c3ff]/20">
                Movies & Shows
              </TabsTrigger>
              <TabsTrigger value="sports" className="data-[state=active]:bg-[#00c3ff]/20">
                Sports
              </TabsTrigger>
            </TabsList>
          </motion.div>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FuturisticCard className="p-6">
                <h3 className="text-lg font-semibold mb-4">Engagement Score</h3>
                <div className="flex items-center justify-between">
                  <div className="text-4xl font-bold text-[#00c3ff]">
                    {spotifyData?.engagementScore || 0}
                  </div>
                  <BarChart2 className="h-8 w-8 text-[#00c3ff]" />
                </div>
                <p className="text-sm text-gray-400 mt-2">Based on your activity across platforms</p>
              </FuturisticCard>

              <FuturisticCard className="p-6">
                <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {generateRecentActivities().map((activity) => (
                    <div key={activity.id} className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-[#00c3ff]/10">
                        {activity.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm">{activity.title}</p>
                        <p className="text-xs text-gray-400">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FuturisticCard>

              <FuturisticCard className="p-6">
                <h3 className="text-lg font-semibold mb-4">Achievements</h3>
                <div className="space-y-4">
                  {generateAchievements().map((achievement) => (
                    <div key={achievement.id} className="flex items-center gap-3">
                      <div
                        className="p-2 rounded-full"
                        style={{ backgroundColor: `${achievement.color}20` }}
                      >
                        {achievement.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{achievement.title}</p>
                        <p className="text-xs text-gray-400">{achievement.description}</p>
                        <div className="mt-1 h-1 rounded-full bg-black/20">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${achievement.progress}%`,
                              backgroundColor: achievement.color,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </FuturisticCard>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <FuturisticCard className="p-6">
                <h3 className="text-lg font-semibold mb-4">Platform Usage</h3>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={generateStreamingData()}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {generateStreamingData().map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            const data = payload[0].payload;
                            return (
                              <div className="bg-black/80 border border-white/10 p-2 rounded-lg">
                                <p className="text-sm font-medium">{data.name}</p>
                                <p className="text-xs text-gray-400">{data.value}% usage</p>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </FuturisticCard>

              <FuturisticCard className="p-6">
                <h3 className="text-lg font-semibold mb-4">Weekly Activity</h3>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={generateActivityData()}>
                      <defs>
                        <linearGradient id="activityGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#00c3ff" stopOpacity={0.3} />
                          <stop offset="100%" stopColor="#00c3ff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
                      <XAxis dataKey="day" stroke="#ffffff40" />
                      <YAxis stroke="#ffffff40" />
                      <Tooltip
                        content={({ active, payload, label }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="bg-black/80 border border-white/10 p-2 rounded-lg">
                                <p className="text-sm font-medium">{label}</p>
                                <p className="text-xs text-gray-400">
                                  {payload[0].value} hours
                                </p>
                              </div>
                            );
                          }
                          return null;
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="hours"
                        stroke="#00c3ff"
                        fill="url(#activityGradient)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </FuturisticCard>
            </div>
          </TabsContent>

          <TabsContent value="music" className="space-y-8">
            {!spotifyData ? (
              <FuturisticCard className="p-6 text-center">
                <Music className="h-12 w-12 mx-auto mb-4 text-[#00c3ff]" />
                <h3 className="text-xl font-semibold mb-2">Connect Spotify</h3>
                <p className="text-gray-400">
                  Connect your Spotify account to see your music stats
                </p>
              </FuturisticCard>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <FuturisticCard className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Top Artists</h3>
                    <div className="space-y-4">
                      {spotifyData.topArtists.slice(0, 5).map((artist: any, index: number) => (
                        <div key={artist.id} className="flex items-center gap-3">
                          <div className="text-2xl font-bold text-[#00c3ff]/50 w-8">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                          <div>
                            <p className="font-medium">{artist.name}</p>
                            {artist.genres && (
                              <p className="text-xs text-gray-400">
                                {artist.genres.slice(0, 2).join(', ')}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </FuturisticCard>

                  <FuturisticCard className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Genre Distribution</h3>
                    <div className="h-[200px]">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={generateGenreData()}
                            cx="50%"
                            cy="50%"
                            innerRadius={50}
                            outerRadius={70}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {generateGenreData().map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip
                            content={({ active, payload }) => {
                              if (active && payload && payload.length) {
                                const data = payload[0].payload;
                                return (
                                  <div className="bg-black/80 border border-white/10 p-2 rounded-lg">
                                    <p className="text-sm font-medium">{data.name}</p>
                                    <p className="text-xs text-gray-400">{data.value} tracks</p>
                                  </div>
                                );
                              }
                              return null;
                            }}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </FuturisticCard>

                  <FuturisticCard className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-400">Playlists</span>
                          <span>{spotifyData.playlistCount}</span>
                        </div>
                        <div className="h-1 rounded-full bg-black/20">
                          <div
                            className="h-full rounded-full bg-[#00c3ff]"
                            style={{ width: `${Math.min(100, (spotifyData.playlistCount / 10) * 100)}%` }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-400">Recent Listening Time</span>
                          <span>{Math.round(spotifyData.totalListeningTime)} mins</span>
                        </div>
                        <div className="h-1 rounded-full bg-black/20">
                          <div
                            className="h-full rounded-full bg-[#00c3ff]"
                            style={{ width: `${Math.min(100, (spotifyData.totalListeningTime / 300) * 100)}%` }}
                          />
                        </div>
                        <p className="text-xs text-gray-400 mt-1">Based on your last 50 tracks</p>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-400">Engagement Score</span>
                          <span>{spotifyData.engagementScore}</span>
                        </div>
                        <div className="h-1 rounded-full bg-black/20">
                          <div
                            className="h-full rounded-full bg-[#00c3ff]"
                            style={{ width: `${spotifyData.engagementScore}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </FuturisticCard>
                </div>

                <FuturisticCard className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Recent Tracks</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {spotifyData.recentlyPlayed.slice(0, 6).map((item: any) => (
                      <div
                        key={item.track.id}
                        className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <p className="font-medium truncate">{item.track.name}</p>
                        <p className="text-sm text-gray-400 truncate">
                          {item.track.artists.map((a: any) => a.name).join(', ')}
                        </p>
                        <p className="text-xs text-gray-500 mt-2">
                          {new Date(item.played_at).toLocaleDateString()}
                        </p>
                      </div>
                    ))}
                  </div>
                </FuturisticCard>
              </>
            )}
          </TabsContent>

          <TabsContent value="movies" className="space-y-8">
            <FuturisticCard className="p-6 text-center">
              <Film className="h-12 w-12 mx-auto mb-4 text-[#00c3ff]" />
              <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
              <p className="text-gray-400">
                Movies & Shows tracking will be available soon
              </p>
            </FuturisticCard>
          </TabsContent>

          <TabsContent value="sports" className="space-y-8">
            <FuturisticCard className="p-6 text-center">
              <Trophy className="h-12 w-12 mx-auto mb-4 text-[#00c3ff]" />
              <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
              <p className="text-gray-400">
                Sports tracking will be available soon
              </p>
            </FuturisticCard>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
