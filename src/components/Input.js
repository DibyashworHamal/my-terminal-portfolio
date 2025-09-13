import React, { useState } from 'react'; // 1. Import useState

// 1. Accept the onCommandSubmit function as a prop
  const Input = ({ onCommandSubmit }) => {
  const [command, setCommand] = useState('');
  
   // 2. Create a handler for the key down event
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent the default form submission behavior
      onCommandSubmit(command); // Call the function from the parent
      setCommand(''); // Clear the input field for the next command
    }
  };

  return (
    <div className="terminal-input-line">
      <span className="prompt">&gt;</span>
      <input
        type="text"
        className="terminal-input"
        value={command} // The input's value is tied to our state
        onChange={(e) => setCommand(e.target.value)} // Update state on every keystroke
        onKeyDown={handleKeyDown}
        autoFocus // Automatically focus the input when the page loads
      />
      {/* Here's our blinking cursor from Part 1! */}
      <span className="cursor"></span>
    </div>
  );
};

export default Input;