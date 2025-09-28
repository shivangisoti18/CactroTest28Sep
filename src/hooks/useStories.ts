import { useState, useEffect } from 'react';
import type { User } from '../types/Story';

interface StoriesResponse {
  users: Array<Omit<User, 'stories'> & {
    stories: Array<Omit<User['stories'][0], 'timestamp'> & {
      timestamp: string;
    }>;
  }>;
}

export const useStories = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch('/stories-data.json');
        if (!response.ok) {
          throw new Error(`Failed to fetch stories: ${response.statusText}`);
        }
        
        const data: StoriesResponse = await response.json();
        
        // Convert string timestamps to Date objects
        const usersWithDateTimestamps: User[] = data.users.map(user => ({
          ...user,
          stories: user.stories.map(story => ({
            ...story,
            timestamp: new Date(story.timestamp)
          }))
        }));
        
        setUsers(usersWithDateTimestamps);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch stories');
        console.error('Error fetching stories:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  return { users, loading, error };
};
