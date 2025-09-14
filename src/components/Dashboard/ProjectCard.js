import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';

// This component receives a single `project` object as a prop
const ProjectCard = ({ project, onViewDetails }) => {
  return (
    <Card className="project-card h-100">
      {/* We link the entire card image to the project URL for easy access */}
      <a href={project.url || '#'} target="_blank" rel="noopener noreferrer">
        {/* If a project has an image, display it. Otherwise, show a placeholder. */}
        {project.image ? (
          <Card.Img variant="top" src={project.image} className="project-card-img" />
        ) : (
          <div className="image-placeholder">
            <span>No Image Available</span>
          </div>
        )}
      </a>
      <Card.Body className="d-flex flex-column">
        <Card.Title>{project.title}</Card.Title>
        <Card.Text className="flex-grow-1">
          {project.description}
        </Card.Text>
        {/* Display the project tags as badges */}
        <div className="mt-auto">
           <div className="mb-3">
          {project.tags.map((tag, index) => (
            <Badge pill bg="secondary" className="me-2 mb-2" key={index}>
              {tag}
            </Badge>
          ))}
        </div>
         <Button variant="outline-secondary" onClick={() => onViewDetails(project)}>
            View Details
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;