"use client";

import { useEffect, useState } from 'react';
import SpotifyConnect from '@/components/spotify-connect';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  BarChart2, 
  Star, 
  Ticket, 
  Music, 
  Film,
  Trophy,
  Loader2
} from 'lucide-react';
import { SpotifyUserData } from '@/lib/spotify';

export default function Dashboard() {
  const [fanScore, setFanScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Listen for Spotify data updates
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'spotify_data') {
        const data = e.newValue ? JSON.parse(e.newValue) as SpotifyUserData : null;
        if (data) {
          setFanScore(data.engagementScore);
        } else {
          setFanScore(0);
        }
        setIsLoading(false);
      }
    };

    // Check initial state
    const storedData = localStorage.getItem('spotify_data');
    if (storedData) {
      const data = JSON.parse(storedData) as SpotifyUserData;
      setFanScore(data.engagementScore);
    } else {
      setFanScore(0);
    }
    setIsLoading(false);

    // Listen for changes
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Your Fan Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SpotifyConnect />
        
        {fanScore > 0 && (
          <Card className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <Ticket className="w-8 h-8 text-primary" />
              <div>
                <h2 className="text-2xl font-semibold">Available Events</h2>
                <p className="text-muted-foreground">Based on your Fan Score</p>
              </div>
            </div>
            <div className="space-y-4">
              {fanScore >= 60 && (
                <div className="flex items-center gap-4 p-3 bg-secondary rounded-lg">
                  <Music className="w-6 h-6" />
                  <div>
                    <h3 className="font-semibold">Early Access Events</h3>
                    <p className="text-sm text-muted-foreground">Connect more platforms to see upcoming events</p>
                  </div>
                </div>
              )}
              <div className="flex items-center gap-4 p-3 bg-secondary rounded-lg">
                <Film className="w-6 h-6" />
                <div>
                  <h3 className="font-semibold">Standard Events</h3>
                  <p className="text-sm text-muted-foreground">Available to all users</p>
                </div>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
