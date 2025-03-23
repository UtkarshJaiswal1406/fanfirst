"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Youtube, Music, Film, Tv, Gamepad2, Link2, Unlink, Loader2 } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { fetchSpotifyData } from '@/lib/spotify'

export default function ConnectedAccounts() {
  const [accounts, setAccounts] = useState([
    {
      id: 1,
      name: "YouTube",
      icon: <Youtube className="h-5 w-5 text-white" />,
      bgColor: "bg-red-600",
      connected: false,
      lastSync: null,
      score: 0,
    },
    {
      id: 2,
      name: "Spotify",
      icon: <Music className="h-5 w-5 text-white" />,
      bgColor: "bg-green-600",
      connected: false,
      lastSync: null,
      score: 0,
    },
    {
      id: 3,
      name: "Apple Music",
      icon: <Music className="h-5 w-5 text-white" />,
      bgColor: "bg-pink-600",
      connected: false,
      lastSync: null,
      score: 0,
    },
  ])

  useEffect(() => {
    const checkConnection = async () => {
      const token = localStorage.getItem('spotify_access_token');
      const spotifyAccount = accounts.find(a => a.name === 'Spotify');
      if (token && spotifyAccount) {
        try {
          const data = await fetchSpotifyData(token);
          updateSpotifyStatus(true, data);
          // Store the data for other components
          localStorage.setItem('spotify_data', JSON.stringify(data));
          // Trigger storage event for other components
          window.dispatchEvent(new StorageEvent('storage', {
            key: 'spotify_data',
            newValue: JSON.stringify(data)
          }));
        } catch (error) {
          console.error('Error checking Spotify connection:', error);
          localStorage.removeItem('spotify_access_token');
          localStorage.removeItem('spotify_data');
          updateSpotifyStatus(false, null);
        }
      }
    };

    checkConnection();
  }, [accounts]);

  const updateSpotifyStatus = (connected, data) => {
    setAccounts(prev => prev.map(account => {
      if (account.name === 'Spotify') {
        return {
          ...account,
          connected,
          lastSync: connected ? 'Connected' : null,
          score: connected ? (data?.engagementScore || 0) : 0,
        };
      }
      return account;
    }));
  }

  const toggleConnection = async (id) => {
    const account = accounts.find(a => a.id === id);
    if (!account) return;

    if (account.name === 'Spotify') {
      const SPOTIFY_CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
      const SPOTIFY_REDIRECT_URI = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI;

      if (!SPOTIFY_CLIENT_ID || !SPOTIFY_REDIRECT_URI) {
        console.error('Spotify credentials not configured');
        return;
      }

      if (!account.connected) {
        try {
          // Validate Client ID format (should be 32 characters)
          if (!/^[0-9a-f]{32}$/i.test(SPOTIFY_CLIENT_ID)) {
            console.error('Invalid Client ID format:', SPOTIFY_CLIENT_ID);
            return;
          }

          // Validate Redirect URI format
          try {
            const url = new URL(SPOTIFY_REDIRECT_URI);
            if (!url.pathname.endsWith('/spotify-callback')) {
              throw new Error('Invalid redirect URI path');
            }
          } catch (e) {
            console.error('Invalid Redirect URI format:', SPOTIFY_REDIRECT_URI);
            return;
          }

          const scope = [
            'user-read-private',
            'user-read-email',
            'user-top-read',
            'user-read-recently-played',
            'user-library-read',
            'playlist-read-private'
          ].join(' ');

          const params = new URLSearchParams({
            response_type: 'token',
            client_id: SPOTIFY_CLIENT_ID,
            scope: scope,
            redirect_uri: SPOTIFY_REDIRECT_URI,
            show_dialog: 'true' // Always show the auth dialog
          });

          window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`;
        } catch (error) {
          console.error('Error initiating Spotify login:', error);
        }
      } else {
        // Disconnect from Spotify
        localStorage.removeItem('spotify_access_token');
        localStorage.removeItem('spotify_data');
        updateSpotifyStatus(false, null);
        window.dispatchEvent(new StorageEvent('storage', {
          key: 'spotify_data',
          newValue: null
        }));
      }
    } else if (account.name === 'YouTube') {
      // Add logic to connect/disconnect YouTube
    } else if (account.name === 'Apple Music') {
      // Add logic to connect/disconnect Apple Music
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {accounts.map((account) => (
          <div key={account.id} className="bg-muted/50 rounded-lg p-4">
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
                {account.lastSync && <p className="text-xs text-muted-foreground">Last synced: {account.lastSync}</p>}
              </div>
            </div>

            {account.connected && (
              <div className="mb-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-muted-foreground">Fan Score Contribution</span>
                  <span className="text-sm">{account.score}%</span>
                </div>
                <Progress value={account.score} className="h-1" />
              </div>
            )}

            <Button
              variant={account.connected ? "outline" : "default"}
              size="sm"
              className={account.connected ? "border-muted w-full" : "w-full"}
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

      <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-800/30 p-6">
        <h3 className="text-lg font-semibold mb-2">Boost Your Fan Score</h3>
        <p className="text-muted-foreground mb-4">
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
