// src/components/Dashboard/Dashboard.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import projects from '../../projectsData';
import ProjectCard from './ProjectCard';
import FilterButtons from './FilterButtons';
import ProjectModal from './ProjectModal'; 

const allTags = ['All', ...new Set(projects.flatMap(project => project.tags))];

const Dashboard = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // 2. STATE FOR MODAL
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(projects);
    } else {
      const newFilteredProjects = projects.filter(project =>
        project.tags.includes(activeFilter)
      );
      setFilteredProjects(newFilteredProjects);
    }
  }, [activeFilter]);

  const handleFilterChange = (tag) => {
    setActiveFilter(tag);
  };

  // 3. HANDLER FUNCTIONS FOR MODAL
  const handleShowModal = (project) => {
    setSelectedProject(project); // Set which project to show
    setShowModal(true);        // Open the modal
  };

  const handleCloseModal = () => {
    setShowModal(false);       // Close the modal
    setSelectedProject(null);  // Clear the selected project
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
              {/* 4. Pass the handler function down to each ProjectCard */}
              <ProjectCard project={project} onViewDetails={handleShowModal} />
            </Col>
          ))}
        </Row>
      </Container>

      {/* 5. Render the ProjectModal component */}
      <ProjectModal
        project={selectedProject}
        show={showModal}
        onHide={handleCloseModal}
      />
    </div>
  );
};

export default Dashboard;