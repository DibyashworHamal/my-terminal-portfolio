import React from 'react';
import { Button } from 'react-bootstrap';

// This component receives the list of tags, the active filter, and the handler function
const FilterButtons = ({ tags, activeFilter, onFilterChange }) => {
   return (
    <div className="text-center mb-4 filter-buttons"> 
      {tags.map(tag => (
        <Button
          key={tag}
          variant={activeFilter === tag ? 'primary' : 'outline-secondary'}
          onClick={() => onFilterChange(tag)}
          className="m-1"
        >
          {tag}
        </Button>
      ))}
    </div>
  );
};

export default FilterButtons;