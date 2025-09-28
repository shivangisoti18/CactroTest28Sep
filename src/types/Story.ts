export interface Story {
  id: string;
  imageUrl: string;
  duration: number; // in milliseconds
  timestamp: Date;
}

export interface User {
  id: string;
  username: string;
  avatarUrl: string;
  stories: Story[];
  hasUnviewedStories: boolean;
}

export interface StoryViewerState {
  isOpen: boolean;
  currentUserIndex: number;
  currentStoryIndex: number;
}

// Export types for easier importing
export type { Story as StoryType, User as UserType, StoryViewerState as StoryViewerStateType };
