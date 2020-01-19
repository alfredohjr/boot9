import React from 'react';

function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button onClick={onDelete} type="button">Remover</button>
    </li>
  );
}

export default TechItem;


/*
        <li key={tech}>
          {tech}
          <button onClick={() => this.handleDelete(tech)} type="button">Remover</button>
        </li>

*/