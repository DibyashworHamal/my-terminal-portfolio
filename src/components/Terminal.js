import React from 'react';

// Import the new components and the CSS file
import History from './History';
import Input from './Input';
import './Terminal.css';

const Terminal = () => {
  return (
    // The main container with the 'terminal' class for styling
    <div className="terminal">
    
      {/* The fake window header */}
      <div className="terminal-header">
        <div className="buttons">
          <span className="button red"></span>
          <span className="button yellow"></span>
          <span className="button green"></span>
        </div>
      </div>

      {/* The main content area */}
      <div className="terminal-body">
        {/* We are now using our new components here */}
        <History />
        <Input />
      </div>

    </div>
  );
};

export default Terminal;