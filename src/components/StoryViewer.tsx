import React, { useState, useEffect, useCallback } from 'react';
import { User, Story } from '../types/Story';
import './StoryViewer.css';

interface StoryViewerProps {
  users: User[];
  currentUserIndex: number;
  currentStoryIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onUserChange: (userIndex: number) => void;
  onStoryChange: (storyIndex: number) => void;
}

const StoryViewer: React.FC<StoryViewerProps> = ({
  users,
  currentUserIndex,
  currentStoryIndex,
  isOpen,
  onClose,
  onUserChange,
  onStoryChange,
}) => {
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentUser = users[currentUserIndex];
  const currentStory = currentUser?.stories[currentStoryIndex];
  const totalStories = currentUser?.stories.length || 0;

  const nextStory = useCallback(() => {
    if (currentStoryIndex < totalStories - 1) {
      onStoryChange(currentStoryIndex + 1);
    } else if (currentUserIndex < users.length - 1) {
      onUserChange(currentUserIndex + 1);
      onStoryChange(0);
    } else {
      onClose();
    }
  }, [currentStoryIndex, totalStories, currentUserIndex, users.length, onStoryChange, onUserChange, onClose]);

  const prevStory = useCallback(() => {
    if (currentStoryIndex > 0) {
      onStoryChange(currentStoryIndex - 1);
    } else if (currentUserIndex > 0) {
      onUserChange(currentUserIndex - 1);
      const prevUser = users[currentUserIndex - 1];
      onStoryChange(prevUser.stories.length - 1);
    }
  }, [currentStoryIndex, currentUserIndex, users, onStoryChange, onUserChange]);

  // Auto-progress timer
  useEffect(() => {
    if (!isOpen || isPaused || !currentStory) return;

    setProgress(0);
    const duration = currentStory.duration;
    const interval = 50; // Update every 50ms for smooth progress
    const increment = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment;
        if (newProgress >= 100) {
          nextStory();
          return 0;
        }
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [currentStory, isOpen, isPaused, nextStory]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          prevStory();
          break;
        case 'ArrowRight':
          nextStory();
          break;
        case ' ':
          e.preventDefault();
          setIsPaused(!isPaused);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen, isPaused, nextStory, prevStory, onClose]);

  const handleClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const centerX = rect.width / 2;

    if (clickX < centerX) {
      prevStory();
    } else {
      nextStory();
    }
  };

  const formatTimeAgo = (timestamp: Date) => {
    const now = new Date();
    const diff = now.getTime() - timestamp.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor(diff / (1000 * 60));

    if (hours > 0) {
      return `${hours}h`;
    } else {
      return `${minutes}m`;
    }
  };

  if (!isOpen || !currentUser || !currentStory) {
    return null;
  }

  return (
    <div className="story-viewer-overlay">
      <div className="story-viewer">
        {/* Progress bars */}
        <div className="progress-container">
          {currentUser.stories.map((_, index) => (
            <div key={index} className="progress-bar-wrapper">
              <div 
                className="progress-bar"
                style={{
                  width: index === currentStoryIndex 
                    ? `${progress}%` 
                    : index < currentStoryIndex 
                      ? '100%' 
                      : '0%'
                }}
              />
            </div>
          ))}
        </div>

        {/* Header */}
        <div className="story-header">
          <div className="story-user-info">
            <img 
              src={currentUser.avatarUrl} 
              alt={currentUser.username}
              className="story-header-avatar"
            />
            <span className="story-header-username">{currentUser.username}</span>
            <span className="story-timestamp">{formatTimeAgo(currentStory.timestamp)}</span>
          </div>
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>

        {/* Story content */}
        <div 
          className="story-content"
          onClick={handleClick}
          onMouseDown={() => setIsPaused(true)}
          onMouseUp={() => setIsPaused(false)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <img 
            src={currentStory.imageUrl} 
            alt="Story content"
            className="story-image"
          />
        </div>

        {/* Navigation areas (invisible) */}
        <div className="nav-area nav-prev" onClick={prevStory} />
        <div className="nav-area nav-next" onClick={nextStory} />
      </div>
    </div>
  );
};

export default StoryViewer;
