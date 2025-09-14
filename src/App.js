import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import Terminal from './components/Terminal';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  // The default view should be the terminal
  const [viewMode, setViewMode] = useState('terminal');

  // 1. CREATE THE HANDLER FUNCTION
  // This function will be passed down to both children components.
  // It can accept 'terminal' or 'dashboard' as an argument.
  const handleViewChange = (mode) => {
    setViewMode(mode);
  };

  return (
    <Container fluid className="app-container">
      {/*
        2. PASS THE HANDLER DOWN AS A PROP
        We use a different prop name for each component for clarity.
      */}
      {viewMode === 'terminal' ? (
        <Terminal onSwitchView={handleViewChange} />
      ) : (
        <Dashboard onSwitchView={handleViewChange} />
      )}
    </Container>
  );
}

export default App;