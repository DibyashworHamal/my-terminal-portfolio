import React from 'react';
import { Modal, Button, Badge } from 'react-bootstrap';

const ProjectModal = ({ project, show, onHide }) => {
  // If no project is selected, don't render anything.
  // This prevents errors when the app first loads.
  if (!project) {
    return null;
  }

  return (
    <Modal show={show} onHide={onHide} size="lg" centered dialogClassName="project-modal">
      <Modal.Header closeButton closeVariant="white">
        <Modal.Title>{project.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {project.image ? (
          <img src={project.image} alt={project.title} className="img-fluid mb-3" />
        ) : (
          <div className="image-placeholder-modal mb-3">
            <span>No Image Available</span>
          </div>
        )}
        <p>{project.description}</p>
        <hr />
        <div>
          <strong>Technologies Used:</strong>
          <div className="mt-2">
            {project.tags.map((tag, index) => (
              <Badge pill bg="secondary" className="me-2 mb-2" key={index}>
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        {project.url && project.url !== '#' && (
          <Button variant="primary" href={project.url} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </Button>
        )}
        <Button variant="outline-secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectModal;