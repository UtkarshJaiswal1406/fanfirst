"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Music, Loader2, RefreshCcw, AlertCircle } from "lucide-react";
import { fetchSpotifyData, type SpotifyUserData, SpotifyError } from '@/lib/spotify';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Alert, AlertDescription } from "@/components/ui/alert";

// Get environment variables
const SPOTIFY_CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const SPOTIFY_REDIRECT_URI = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI;

const SpotifyConnect = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [spotifyData, setSpotifyData] = useState<SpotifyUserData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isRetrying, setIsRetrying] = useState(false);

  const validateConfig = () => {
    if (!SPOTIFY_CLIENT_ID || !SPOTIFY_REDIRECT_URI) {
      console.error('Missing environment variables:', {
        SPOTIFY_CLIENT_ID: !!SPOTIFY_CLIENT_ID,
        SPOTIFY_REDIRECT_URI: !!SPOTIFY_REDIRECT_URI
      });
      throw new Error('Spotify credentials are not configured. Please check your .env.local file.');
    }

    // Validate Client ID format (should be 32 characters)
    if (!/^[0-9a-f]{32}$/i.test(SPOTIFY_CLIENT_ID)) {
      console.error('Invalid Client ID format:', SPOTIFY_CLIENT_ID);
      throw new Error('Invalid Spotify Client ID format. Please check your .env.local file.');
    }

    // Validate Redirect URI format
    try {
      const url = new URL(SPOTIFY_REDIRECT_URI);
      if (!url.pathname.endsWith('/spotify-callback')) {
        throw new Error('Invalid redirect URI path');
      }
    } catch (e) {
      console.error('Invalid Redirect URI format:', SPOTIFY_REDIRECT_URI);
      throw new Error('Invalid Spotify Redirect URI format. Please check your .env.local file.');
    }
  };

  const fetchData = async (token: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await fetchSpotifyData(token);
      setSpotifyData(data);
      setIsConnected(true);
      // Store the data for other components
      localStorage.setItem('spotify_data', JSON.stringify(data));
      // Trigger storage event for other components
      window.dispatchEvent(new StorageEvent('storage', {
        key: 'spotify_data',
        newValue: JSON.stringify(data)
      }));
    } catch (error) {
      console.error('Error checking Spotify connection:', error);
      if (error instanceof SpotifyError) {
        setError(error.message);
        if (error.statusCode === 401) {
          // Token expired, clear it
          localStorage.removeItem('spotify_access_token');
          localStorage.removeItem('spotify_data');
          setIsConnected(false);
        }
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
      // Clear data on error
      localStorage.removeItem('spotify_data');
      setIsConnected(false);
      // Trigger storage event to clear data
      window.dispatchEvent(new StorageEvent('storage', {
        key: 'spotify_data',
        newValue: null
      }));
    } finally {
      setIsLoading(false);
      setIsRetrying(false);
    }
  };

  useEffect(() => {
    const checkConnection = async () => {
      const token = localStorage.getItem('spotify_access_token');
      if (token) {
        await fetchData(token);
      } else {
        setIsLoading(false);
      }
    };

    // Check connection on mount and when token changes
    checkConnection();

    // Also check when the component gains focus
    const handleFocus = () => {
      const token = localStorage.getItem('spotify_access_token');
      if (token) {
        checkConnection();
      }
    };

    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, []);

  const handleLogin = () => {
    try {
      // Validate configuration before proceeding
      validateConfig();

      const scope = [
        'user-read-private',
        'user-read-email',
        'user-top-read',
        'user-read-recently-played',
        'user-library-read',
        'playlist-read-private'
      ].join(' ');

      // Store the current URL to redirect back after login
      localStorage.setItem('spotify_auth_redirect', window.location.pathname);

      const params = new URLSearchParams({
        response_type: 'token',
        client_id: SPOTIFY_CLIENT_ID!,
        scope: scope,
        redirect_uri: SPOTIFY_REDIRECT_URI!,
        show_dialog: 'true' // Always show the auth dialog
      });

      window.location.href = `https://accounts.spotify.com/authorize?${params.toString()}`;
    } catch (error) {
      console.error('Error initiating Spotify login:', error);
      if (error instanceof Error) {
        if (error.message.includes('OAuth')) {
          setError(
            'This Spotify app is in development mode. Please either:\n' +
            '1. Wait for Extended Quota Mode approval, or\n' +
            '2. Add your Spotify email as a test user in the Developer Dashboard'
          );
        } else {
          setError(error.message);
        }
      } else {
        setError('Failed to connect to Spotify. Please try again.');
      }
    }
  };

  const handleLogout = () => {
    try {
      localStorage.removeItem('spotify_access_token');
      localStorage.removeItem('spotify_data');
      setIsConnected(false);
      setSpotifyData(null);
      setError(null);
      // Trigger storage event for other components
      window.dispatchEvent(new StorageEvent('storage', {
        key: 'spotify_data',
        newValue: null
      }));
    } catch (error) {
      console.error('Error during logout:', error);
      setError('Failed to disconnect. Please try again.');
    }
  };

  const handleRetry = async () => {
    const token = localStorage.getItem('spotify_access_token');
    if (token) {
      setIsRetrying(true);
      await fetchData(token);
    } else {
      handleLogin();
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-card min-h-[400px] justify-center">
        <Loader2 className="w-6 h-6 animate-spin" />
        <p>Loading Spotify data...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-center gap-4 p-6 rounded-lg bg-card">
        <div className="flex items-center gap-2">
          <Music className="w-6 h-6" />
          <h3 className="text-xl font-semibold">Spotify Connection</h3>
        </div>
        
        {error && (
          <Alert variant="destructive" className="text-left">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="ml-2 whitespace-pre-line">
              {error}
              {error.includes('development mode') && (
                <div className="mt-2 text-sm">
                  <p className="font-medium mb-1">Quick Fix:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Go to the <a href="https://developer.spotify.com/dashboard" target="_blank" rel="noopener noreferrer" className="underline">Spotify Developer Dashboard</a></li>
                    <li>Select your app</li>
                    <li>Click "Settings"</li>
                    <li>Under "User Management", add your Spotify email</li>
                    <li>Save changes and try connecting again</li>
                  </ul>
                  <p className="mt-2 font-medium">For Production:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Request "Extended Quota Mode" in your app settings</li>
                    <li>This will allow any Spotify user to connect</li>
                  </ul>
                </div>
              )}
              {error.includes('Client ID') && (
                <div className="mt-2 text-sm">
                  Please check:
                  <ul className="list-disc list-inside mt-1">
                    <li>Your Client ID in .env.local matches your Spotify Dashboard</li>
                    <li>The app is registered in your Spotify Developer Dashboard</li>
                    <li>You're using the correct Spotify account</li>
                  </ul>
                </div>
              )}
            </AlertDescription>
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleRetry}
              disabled={isRetrying}
              className="mt-2"
            >
              {isRetrying ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Retrying...
                </>
              ) : (
                <>
                  <RefreshCcw className="w-4 h-4 mr-2" />
                  Retry
                </>
              )}
            </Button>
          </Alert>
        )}

        {isConnected ? (
          <div className="flex flex-col items-center gap-2 w-full">
            <p className="text-green-500">Connected to Spotify</p>
            <Button variant="destructive" onClick={handleLogout}>
              Disconnect Spotify
            </Button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <p className="text-muted-foreground">Connect your Spotify account to boost your Fan Score</p>
            <Button onClick={handleLogin}>
              Connect Spotify
            </Button>
          </div>
        )}
      </div>

      {spotifyData && (
        <Card className="p-6">
          <h4 className="text-lg font-semibold mb-4">Your Spotify Stats</h4>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Top Artists</p>
              <ScrollArea className="h-[100px] w-full rounded-md border p-2">
                <div className="space-y-1">
                  {spotifyData.topArtists.slice(0, 5).map((artist: any) => (
                    <p key={artist.id} className="text-sm">
                      {artist.name}
                    </p>
                  ))}
                </div>
              </ScrollArea>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Recently Played</p>
              <ScrollArea className="h-[100px] w-full rounded-md border p-2">
                <div className="space-y-1">
                  {spotifyData.recentlyPlayed.slice(0, 5).map((item: any) => (
                    <p key={item.track.id} className="text-sm">
                      {item.track.name} - {item.track.artists[0].name}
                    </p>
                  ))}
                </div>
              </ScrollArea>
            </div>

            <div className="flex justify-between text-sm">
              <span>Playlists: {spotifyData.playlistCount}</span>
              <span>Listening Time: {Math.round(spotifyData.totalListeningTime)} minutes</span>
            </div>

            <div className="mt-4">
              <p className="text-sm font-medium">Engagement Score</p>
              <p className="text-2xl font-bold text-primary">
                {spotifyData.engagementScore}
              </p>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default SpotifyConnect;
