import React from 'react';
import { User } from '../types/Story';
import StoryRing from './StoryRing';
import './StoriesList.css';

interface StoriesListProps {
  users: User[];
  onStoryClick: (userIndex: number) => void;
}

const StoriesList: React.FC<StoriesListProps> = ({ users, onStoryClick }) => {
  return (
    <div className="stories-list">
      <div className="stories-container">
        {users.map((user, index) => (
          <StoryRing
            key={user.id}
            user={user}
            onClick={() => onStoryClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default StoriesList;
