import { useState } from 'react'
import StoriesList from './components/StoriesList'
import StoryViewer from './components/StoryViewer'
import { useStories } from './hooks/useStories'
import type { StoryViewerState } from './types/Story'
import './App.css'

function App() {
  const { users, loading, error } = useStories()
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

  if (loading) {
    return (
      <div className="app">
        <header className="app-header">
          <h1>Instagram Stories</h1>
        </header>
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading stories...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="app">
        <header className="app-header">
          <h1>Instagram Stories</h1>
        </header>
        <div className="error-container">
          <p>Error loading stories: {error}</p>
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Instagram Stories</h1>
      </header>
      
      <StoriesList 
        users={users} 
        onStoryClick={handleStoryClick}
      />
      
      <StoryViewer
        users={users}
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
