import React, { useState } from 'react';
import History from './History';
import Input from './Input';
import './Terminal.css';

const Terminal = () => {
  const [history, setHistory] = useState([
    { output: 'Welcome to my Interactive Portfolio!' },
    { output: "Type 'help' to see a list of available commands." },
    { output: <br /> }
  ]);

  // THIS IS THE CORE LOGIC WE ARE REBUILDING TODAY
  const handleCommandSubmit = (command) => {
    // 1. Clean up the user's command
    const cleanCommand = command.trim().toLowerCase();
    
    // 2. Prepare a variable for the new output
    let newOutput;

    // 3. The "Switchboard Operator" - our switch statement
    switch (cleanCommand) {
      case 'help':
        newOutput = (
          // Use a React Fragment to group multiple lines
          <>
            <p>Available commands:</p>
            <p>  help   - Shows this list of commands</p>
            <p>  whoami - Displays information about me</p>
            <p>  clear  - Clears the terminal screen</p>
            {/* We will add more commands later like 'projects', 'contact', etc. */}
          </>
        );
        break;
      
      case 'whoami':
        newOutput = 'My name is Divyashwor Hamal, Computer Engineering Student, a passionate developer who loves building things for the web. I specialize in the MERN stack and enjoy creating seamless user experiences.';
        // TODO: Replace the above string with your own bio!
        break;

      case 'clear':
        // This case is special. We don't add to history, we replace it.
        setHistory([]); // Set history to an empty array
        return; // Exit the function early

      default:
        // This is the "error department" for unknown commands
        newOutput = `'${cleanCommand}': command not found. Type 'help' for a list of commands.`;
        break;
    }

    // 4. Update the history state
    const newHistoryEntry = {
      command: command, // Show the original command the user typed
      output: newOutput,
    };

    // Use a function with the previous state to ensure it's up to date
    setHistory(prevHistory => [...prevHistory, newHistoryEntry]);
  };


  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="buttons">
          <span className="button red"></span>
          <span className="button yellow"></span>
          <span className="button green"></span>
        </div>
      </div>
      <div className="terminal-body">
        <History history={history} />
        <Input onCommandSubmit={handleCommandSubmit} />
      </div>
    </div>
  );
};

export default Terminal;