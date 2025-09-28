import { User } from '../types/Story';

// Mock story data with placeholder images
export const mockUsers: User[] = [
  {
    id: '1',
    username: 'john_doe',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    hasUnviewedStories: true,
    stories: [
      {
        id: '1-1',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop',
        duration: 5000,
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
      },
      {
        id: '1-2',
        imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop',
        duration: 5000,
        timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000), // 1 hour ago
      },
    ],
  },
  {
    id: '2',
    username: 'jane_smith',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    hasUnviewedStories: true,
    stories: [
      {
        id: '2-1',
        imageUrl: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=600&fit=crop',
        duration: 5000,
        timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3 hours ago
      },
      {
        id: '2-2',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop',
        duration: 5000,
        timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
      },
      {
        id: '2-3',
        imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop',
        duration: 5000,
        timestamp: new Date(Date.now() - 15 * 60 * 1000), // 15 minutes ago
      },
    ],
  },
  {
    id: '3',
    username: 'travel_lover',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    hasUnviewedStories: false,
    stories: [
      {
        id: '3-1',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop',
        duration: 5000,
        timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
      },
    ],
  },
  {
    id: '4',
    username: 'foodie_adventures',
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    hasUnviewedStories: true,
    stories: [
      {
        id: '4-1',
        imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=600&fit=crop',
        duration: 5000,
        timestamp: new Date(Date.now() - 45 * 60 * 1000), // 45 minutes ago
      },
      {
        id: '4-2',
        imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=600&fit=crop',
        duration: 5000,
        timestamp: new Date(Date.now() - 20 * 60 * 1000), // 20 minutes ago
      },
    ],
  },
  {
    id: '5',
    username: 'nature_photographer',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    hasUnviewedStories: true,
    stories: [
      {
        id: '5-1',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop',
        duration: 5000,
        timestamp: new Date(Date.now() - 10 * 60 * 1000), // 10 minutes ago
      },
      {
        id: '5-2',
        imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop',
        duration: 5000,
        timestamp: new Date(Date.now() - 5 * 60 * 1000), // 5 minutes ago
      },
      {
        id: '5-3',
        imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=600&fit=crop',
        duration: 5000,
        timestamp: new Date(Date.now() - 2 * 60 * 1000), // 2 minutes ago
      },
    ],
  },
];
