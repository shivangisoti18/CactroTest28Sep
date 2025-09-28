import React from 'react';
import type { User } from '../types/Story';
import './StoryRing.css';

interface StoryRingProps {
  user: User;
  onClick: () => void;
}

const StoryRing: React.FC<StoryRingProps> = ({ user, onClick }) => {
  return (
    <div className="story-ring-container" onClick={onClick}>
      <div className={`story-ring ${user.hasUnviewedStories ? 'unviewed' : 'viewed'}`}>
        <img 
          src={user.avatarUrl} 
          alt={`${user.username}'s avatar`}
          className="story-avatar"
        />
      </div>
      <span className="story-username">{user.username}</span>
    </div>
  );
};

export default StoryRing;
