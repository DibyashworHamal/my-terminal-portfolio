import React from 'react';

// 1. Accept the history array as a prop
const History = ({ history }) => {
  return (
    <div>
      {/* 2. Map over the history array to display each entry */}
      {history.map((entry, index) => (
        <div key={index}>
          {/* If the entry has a command, display it with the prompt */}
          {entry.command && (
            <div className="terminal-input-line">
              <span className="prompt">&gt;</span>
              <span>{entry.command}</span>
            </div>
          )}
          {/* Display the output */}
          <div>{entry.output}</div>
        </div>
      ))}
    </div>
  );
};

export default History;