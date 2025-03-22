"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Youtube, Music, Film, Tv, Gamepad2, Link2, Unlink } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function ConnectedAccounts() {
  const [accounts, setAccounts] = useState([
    {
      id: 1,
      name: "YouTube",
      icon: <Youtube className="h-5 w-5 text-white" />,
      bgColor: "bg-red-600",
      connected: true,
      lastSync: "2 hours ago",
      score: 92,
    },
    {
      id: 2,
      name: "Spotify",
      icon: <Music className="h-5 w-5 text-white" />,
      bgColor: "bg-green-600",
      connected: true,
      lastSync: "1 day ago",
      score: 78,
    },
    {
      id: 3,
      name: "Disney+ Hotstar",
      icon: <Film className="h-5 w-5 text-white" />,
      bgColor: "bg-blue-600",
      connected: true,
      lastSync: "3 days ago",
      score: 85,
    },
    {
      id: 4,
      name: "JioCinema",
      icon: <Tv className="h-5 w-5 text-white" />,
      bgColor: "bg-purple-600",
      connected: false,
      lastSync: null,
      score: 0,
    },
    {
      id: 5,
      name: "Prime Video",
      icon: <Film className="h-5 w-5 text-white" />,
      bgColor: "bg-blue-500",
      connected: false,
      lastSync: null,
      score: 0,
    },
    {
      id: 6,
      name: "Netflix",
      icon: <Film className="h-5 w-5 text-white" />,
      bgColor: "bg-red-700",
      connected: false,
      lastSync: null,
      score: 0,
    },
    {
      id: 7,
      name: "Apple Music",
      icon: <Music className="h-5 w-5 text-white" />,
      bgColor: "bg-pink-600",
      connected: false,
      lastSync: null,
      score: 0,
    },
    {
      id: 8,
      name: "PlayStation Network",
      icon: <Gamepad2 className="h-5 w-5 text-white" />,
      bgColor: "bg-blue-800",
      connected: false,
      lastSync: null,
      score: 0,
    },
  ])

  const toggleConnection = (id) => {
    setAccounts(
      accounts.map((account) => {
        if (account.id === id) {
          return {
            ...account,
            connected: !account.connected,
            lastSync: !account.connected ? "Just now" : null,
            score: !account.connected ? Math.floor(Math.random() * 30) + 60 : 0,
          }
        }
        return account
      }),
    )
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {accounts.map((account) => (
          <div key={account.id} className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-10 h-10 rounded-full ${account.bgColor} flex items-center justify-center`}>
                {account.icon}
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">{account.name}</h3>
                  {account.connected ? (
                    <Badge variant="outline" className="text-green-400 border-green-400">
                      Connected
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="text-gray-400 border-gray-600">
                      Not Connected
                    </Badge>
                  )}
                </div>
                {account.lastSync && <p className="text-xs text-gray-400">Last synced: {account.lastSync}</p>}
              </div>
            </div>

            {account.connected && (
              <div className="mb-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-400">Fan Score Contribution</span>
                  <span className="text-sm">{account.score}%</span>
                </div>
                <Progress value={account.score} className="h-1" />
              </div>
            )}

            <Button
              variant={account.connected ? "outline" : "default"}
              size="sm"
              className={account.connected ? "border-gray-700 w-full" : "w-full"}
              onClick={() => toggleConnection(account.id)}
            >
              {account.connected ? (
                <>
                  <Unlink className="h-4 w-4 mr-2" />
                  Disconnect
                </>
              ) : (
                <>
                  <Link2 className="h-4 w-4 mr-2" />
                  Connect
                </>
              )}
            </Button>
          </div>
        ))}
      </div>

      <Separator className="bg-gray-800" />

      <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-800 p-6">
        <h3 className="text-lg font-semibold mb-2">Boost Your Fan Score</h3>
        <p className="text-gray-300 mb-4">
          Connect more streaming platforms to increase your Fan Score and unlock better access to events. The more
          platforms you connect, the more accurate your Fan Score will be.
        </p>
        <div className="flex items-center gap-2 text-sm text-purple-300 mb-4">
          <div className="w-2 h-2 rounded-full bg-purple-500"></div>
          <p>Each connected platform can contribute up to 100 points to your Fan Score</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-purple-300">
          <div className="w-2 h-2 rounded-full bg-purple-500"></div>
          <p>Your data is securely processed and only used to calculate your Fan Score</p>
        </div>
      </div>
    </div>
  )
}

