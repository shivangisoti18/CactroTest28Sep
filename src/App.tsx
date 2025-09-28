import { useState } from 'react'
import StoriesList from './components/StoriesList'
import StoryViewer from './components/StoryViewer'
import { mockUsers } from './data/mockData'
import { StoryViewerState } from './types/Story.js'
import './App.css'

function App() {
  const [viewerState, setViewerState] = useState<StoryViewerState>({
    isOpen: false,
    currentUserIndex: 0,
    currentStoryIndex: 0,
  })

  const handleStoryClick = (userIndex: number) => {
    setViewerState({
      isOpen: true,
      currentUserIndex: userIndex,
      currentStoryIndex: 0,
    })
  }

  const handleCloseViewer = () => {
    setViewerState(prev => ({ ...prev, isOpen: false }))
  }

  const handleUserChange = (userIndex: number) => {
    setViewerState(prev => ({ ...prev, currentUserIndex: userIndex }))
  }

  const handleStoryChange = (storyIndex: number) => {
    setViewerState(prev => ({ ...prev, currentStoryIndex: storyIndex }))
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Instagram Stories</h1>
      </header>
      
      <StoriesList 
        users={mockUsers} 
        onStoryClick={handleStoryClick}
      />
      
      <StoryViewer
        users={mockUsers}
        currentUserIndex={viewerState.currentUserIndex}
        currentStoryIndex={viewerState.currentStoryIndex}
        isOpen={viewerState.isOpen}
        onClose={handleCloseViewer}
        onUserChange={handleUserChange}
        onStoryChange={handleStoryChange}
      />
    </div>
  )
}

export default App
