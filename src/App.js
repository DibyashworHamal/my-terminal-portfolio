// src/App.js
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import Terminal from './components/Terminal';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  // For testing, we'll keep it on dashboard for now.
  const [viewMode, setViewMode] = useState('dashboard'); // 'terminal' or 'dashboard'
  return (
    <Container fluid className="app-container">
      
      {/* 
        This is the new, improved conditional rendering.
        It's a ternary operator. It reads like this:
        "IF viewMode is 'terminal', THEN render <Terminal />, OTHERWISE render <Dashboard />"
        This is much safer because it ALWAYS returns one of the two components.
      */}
      {viewMode === 'terminal' ? <Terminal /> : <Dashboard />}

    </Container>
  );
}

export default App;