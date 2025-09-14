// src/components/Dashboard/Dashboard.js
import React, { useState, useEffect } from 'react'; 
import { Container, Row, Col } from 'react-bootstrap';

import projects from '../../projectsData';
import ProjectCard from './ProjectCard';
import FilterButtons from './FilterButtons';
import './Dashboard.css';

const allTags = ['All', ...new Set(projects.flatMap(project => project.tags))];

const Dashboard = () => {

  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

    useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(projects); // If 'All' is selected, show all projects
    } else {
      // Otherwise, filter the projects array
      const newFilteredProjects = projects.filter(project =>
        project.tags.includes(activeFilter) // Keep projects whose tags array includes the active filter
      );
      setFilteredProjects(newFilteredProjects);
    }
  }, [activeFilter]); // The dependency array: this effect depends on `activeFilter`

  const handleFilterChange = (tag) => {
    setActiveFilter(tag);
  };

  return (
    <div className="dashboard">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h1>My Projects</h1>
            <p className="lead text-muted">A collection of my work. Click a tag to filter!</p>
          </Col>
        </Row>

        <FilterButtons
          tags={allTags}
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
        />

        <Row xs={1} md={2} lg={3} className="g-4">
          {filteredProjects.map(project => (
            <Col key={project.id}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;