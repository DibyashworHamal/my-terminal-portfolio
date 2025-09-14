import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// 1. Import your project data and the new components
import projects from '../../projectsData';
import ProjectCard from './ProjectCard';
import './Dashboard.css'; // Don't forget to import the CSS

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Container>
        {/* Header Section */}
        <Row className="text-center mb-5">
          <Col>
            <h1>My Projects</h1>
            <p className="lead text-muted">A collection of my work. (Filtering coming soon!)</p>
          </Col>
        </Row>

        {/* 2. The Project Grid */}
        <Row xs={1} md={2} lg={3} className="g-4">
          {/* 3. Map over the imported projects array */}
          {projects.map(project => (
            // 4. For each project, render a Column and a ProjectCard
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