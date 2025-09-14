import React, { useState } from 'react'; // Import useState
import { Container } from 'react-bootstrap';

// Import our two main components
import Terminal from './components/Terminal';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  // 1. Create a state variable to manage the current view
  // Default view is 'terminal'
  const [viewMode, setViewMode] = useState('terminal');

  // 2. The Conditional Rendering Logic
  const renderView = () => {
    if (viewMode === 'terminal') {
      return <Terminal />;
    } else if (viewMode === 'dashboard') {
      return <Dashboard />;
    }
  };

  return (
    // The 'fluid' prop makes the container full-width.
    // We add a class for potential global styling.
    <Container fluid className="app-container">
      
      {/* 3. Call the function to render the correct view */}
      {renderView()}

    </Container>
  );
}

export default App;