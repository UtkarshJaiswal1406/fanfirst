import { SpotifyApi } from '@spotify/web-api-ts-sdk';

export interface SpotifyArtist {
  id: string;
  name: string;
  genres?: string[];
}

export interface SpotifyUserData {
  topArtists: SpotifyArtist[];
  recentlyPlayed: any[];
  topTracks: any[];
  playlistCount: number;
  totalListeningTime: number;
  engagementScore: number;
}

export class SpotifyError extends Error {
  constructor(message: string, public statusCode?: number) {
    super(message);
    this.name = 'SpotifyError';
  }
}

export async function fetchSpotifyData(accessToken: string): Promise<SpotifyUserData> {
  const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  
  if (!clientId) {
    throw new SpotifyError('Spotify client ID is not configured');
  }

  if (!accessToken) {
    throw new SpotifyError('No access token provided');
  }

  try {
    console.log('Initializing Spotify API with token:', accessToken.substring(0, 10) + '...');
    
    // Initialize the SDK with just the access token
    const api = SpotifyApi.withAccessToken(clientId, {
      access_token: accessToken,
      token_type: "Bearer",
      expires_in: 3600,
      refresh_token: null as any // SDK requires this but we don't use it with implicit flow
    });

    console.log('Making API requests...');
    
    // Test the token with a simple request first
    try {
      await api.currentUser.profile();
      console.log('Token validated successfully');
    } catch (error: any) {
      console.error('Token validation failed:', error);
      if (error.status === 401) {
        throw new SpotifyError('Token expired or invalid', 401);
      }
      throw error;
    }

    // Make all requests in parallel for better performance
    console.log('Fetching user data...');
    const [topArtists, recentlyPlayed, topTracks, playlists] = await Promise.all([
      api.currentUser.topItems('artists', 'long_term', 50).catch(error => {
        console.error('Error fetching top artists:', error);
        return { items: [] };
      }),
      api.player.getRecentlyPlayedTracks(50).catch(error => {
        console.error('Error fetching recently played:', error);
        return { items: [] };
      }),
      api.currentUser.topItems('tracks', 'long_term', 50).catch(error => {
        console.error('Error fetching top tracks:', error);
        return { items: [] };
      }),
      api.playlists.getUsersPlaylists('me', 50).catch(error => {
        console.error('Error fetching playlists:', error);
        return { total: 0 };
      })
    ]);

    console.log('All data fetched successfully');

    // Calculate approximate listening time from recently played tracks
    const totalListeningTime = recentlyPlayed.items.reduce((acc, item) => {
      return acc + (item.track.duration_ms / 1000 / 60); // Convert to minutes
    }, 0);

    const data = {
      topArtists: topArtists.items,
      recentlyPlayed: recentlyPlayed.items,
      topTracks: topTracks.items,
      playlistCount: playlists.total,
      totalListeningTime,
      engagementScore: 0
    };

    // Calculate engagement score
    data.engagementScore = calculateEngagementScore(data);
    console.log('Engagement score calculated:', data.engagementScore);

    return data;
  } catch (error: any) {
    console.error('Error in fetchSpotifyData:', error);
    
    // Handle specific API errors
    if (error.status === 401) {
      throw new SpotifyError('Your Spotify session has expired. Please reconnect.', 401);
    } else if (error.status === 403) {
      throw new SpotifyError('Missing required Spotify permissions. Please reconnect.', 403);
    } else if (error.status === 429) {
      throw new SpotifyError('Too many requests. Please try again later.', 429);
    }
    
    throw new SpotifyError(error.message || 'Failed to fetch Spotify data');
  }
}

export function calculateEngagementScore(data: SpotifyUserData): number {
  // Base score starts at 60 for connected users
  let score = 60;

  // Additional points based on activity (max 40 points)
  const activityPoints = [
    // Up to 10 points for number of top artists
    Math.min((data.topArtists.length / 50) * 10, 10),
    
    // Up to 10 points for recently played tracks
    Math.min((data.recentlyPlayed.length / 50) * 10, 10),
    
    // Up to 10 points for playlists
    Math.min((data.playlistCount / 50) * 10, 10),
    
    // Up to 10 points for listening time (max 300 minutes)
    Math.min((data.totalListeningTime / 300) * 10, 10)
  ];

  score += activityPoints.reduce((a, b) => a + b, 0);
  return Math.min(Math.round(score), 100);
}
