"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

export default function SpotifyCallback() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleCallback = () => {
      try {
        // Get the hash fragment from the URL
        const hash = window.location.hash.substring(1);

        if (!hash) {
          console.error('No hash fragment in URL');
          setError('Invalid callback URL. Please try again.');
          setTimeout(() => router.push('/connected-accounts'), 2000);
          return;
        }

        const params = new URLSearchParams(hash);
        
        // Check for errors
        const error = params.get('error');
        if (error) {
          console.error('Spotify auth error:', error);
          setError('Authentication failed. Please try again.');
          setTimeout(() => router.push('/connected-accounts'), 2000);
          return;
        }

        // Get the access token
        const accessToken = params.get('access_token');
        if (!accessToken) {
          console.error('No access token received');
          setError('No access token received. Please try again.');
          setTimeout(() => router.push('/connected-accounts'), 2000);
          return;
        }

        // Store the token
        localStorage.setItem('spotify_access_token', accessToken);
        
        // Clear any existing data
        localStorage.removeItem('spotify_data');
        
        // Redirect to connected accounts
        router.push('/connected-accounts');
      } catch (error) {
        console.error('Error handling Spotify callback:', error);
        setError('Something went wrong. Please try again.');
        setTimeout(() => router.push('/dashboard'), 2000);
      }
    };

    handleCallback();
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center space-y-4">
        {error ? (
          <>
            <p className="text-red-500">{error}</p>
            <p className="text-sm text-muted-foreground">Redirecting to dashboard...</p>
          </>
        ) : (
          <>
            <Loader2 className="w-8 h-8 animate-spin mx-auto" />
            <h1 className="text-2xl font-bold">Connecting to Spotify...</h1>
            <p className="text-muted-foreground">Please wait while we complete the connection.</p>
          </>
        )}
      </div>
    </div>
  );
}
