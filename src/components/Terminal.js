import React, { useState } from 'react'; 
import History from './History';
import Input from './Input';
import './Terminal.css';

const Terminal = () => {
  // 1. Create state to hold the command history
  // We'll give it an initial value to display a welcome message.
  const [history, setHistory] = useState([
    { output: 'Welcome to my Interactive Portfolio!' },
    { output: "Type 'help' to see a list of available commands." },
    { output: <br /> }
  ]);

  // 2. This function will be passed to the Input component
  const handleCommandSubmit = (command) => {
    // For now, let's just create a simple echo response
    const newHistory = [
      ...history, // Copy the old history
      { command: command, output: `Command received: ${command}` } // Add the new entry
    ];
    setHistory(newHistory); // Update the state
  };
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
        <History history={history} />
        <Input onCommandSubmit={handleCommandSubmit} />
      </div>

    </div>
  );
};

export default Terminal;