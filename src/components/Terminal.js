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

  const handleCommandSubmit = (command) => {
    const cleanCommand = command.trim().toLowerCase();
    let newOutput;

    switch (cleanCommand) {
      case 'help':
        newOutput = (
          <>
            <p>Available commands:</p>
            <p>  help      - Shows this list of commands</p>
            <p>  whoami    - Displays information about me</p>
            <p>  skills    - Lists my technical skills</p>
            <p>  projects  - Shows my recent projects</p>
            <p>  experiences - Lists of my experiences</p>
            <p>  education - Displays my educational background</p>
            <p>  resume    - Opens my resume in a new tab</p>
            <p>  clear     - Clears the terminal screen</p>
          </>
        );
        break;
      
      case 'whoami':
        newOutput = 'My name is Dibyashwor Hamal, a passionate Computer Engineering student who loves building impactful software solutions. I specialize in Java, Spring Boot, Thymeleaf, React, Node.Js and Android development, and enjoy creating seamless applications for both web and mobile. With experience in projects like an Event Booking System and Smart E/I Manager, I thrive on solving problems, learning new technologies, and turning ideas into reality.';
        break;

      case 'skills':
        newOutput = (
          <>
            <p>My Technical Skills:</p>
            <p>  Languages: JavaScript, PHP, Python, HTML5, CSS3, C, C++, Java and Advance Java, C#</p>
            <p>  Front-End: Thymeleaf, React, Bootstrap, Redux</p>
            <p>  Back-End:  Node.js, Express.js, Springboot</p>
            <p>  Database:  MySQL, MongoDB</p>
            <p>  Tools:     Git, GitHub, VS Code, Docker, Dev C++, Eclipse, Postman, Android Studio</p>
            <p>My Other Skills:</p>
            <p>  Communication, Teamwork, Problem-Solving, Time Management, Adaptability</p>
            <p>  Languages: Nepali (Native), English (Fluent), Hindi (Conversational)</p>
            {/* TODO: Customize with your own skills! */}
          </>
        );
        break;

      case 'projects':
        newOutput = (
          <>
            <p>My Projects:</p>
            <p>  1. A Software mini project on Gym Management System - A web app that helps to gym business by managing all the system. Built by using C# and HTML on Visual Studio</p>
            <p>  2. A hardware mini project on FireFightingRoboticSystem - An embeddeb system project built with Aurdino IDE</p>
            <p>  3. An Android app Project named as Smart E/I manager - A mobile app that helps to manage daily expanse and income. Built with Android Studio by using Java programming Language</p>
            <p>  4. A Software major Project on Event Booking System - A web and mobile app that helps to book any event that can be added by any organizer through mobile app. Built with Spring boot, Thymeleaf, Android Studio by using Java, HTML, Javascript, CSS</p>
            <p>  5. Awesome Project Five - A web app that does amazing things. Built with React and Node.js.</p>
            {/* TODO: Customize with your own projects! */}
          </>
        );
        break;

      case 'experiences':
        newOutput = (
          <>
            <p>My Experiences:</p>
            <p>  1. A Three Day Workshop on Git and GitHub</p>
            <p>  2. A Three Day Workshop on GIS System</p>
          </>
        );
        break; 

      case 'education':
        newOutput = (
          <>
            <p>My Education:</p>
            <p>  Secondary Education Examination - SEE (2018)</p>
            <p>  Higher Secondary Education on Computer Science - NEB (2018 - 2021)</p>
            <p>  Bachelor of Engineering on Computer - Pokhara University (2021 - 2025)</p>
            {/* TODO: Customize with your own education! */}
          </>
        );
        break;

      case 'resume':
        // This opens the resume PDF from the public folder in a new browser tab.
        window.open('/resume.pdf', '_blank');
        newOutput = 'Opening resume...';
        break;

      case 'clear':
        setHistory([]);
        return;

      default:
        newOutput = `'${cleanCommand}': command not found. Type 'help' for a list of commands.`;
        break;
    }

    const newHistoryEntry = {
      command: command,
      output: newOutput,
    };

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