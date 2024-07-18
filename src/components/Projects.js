import React from 'react';
import './Projects.css';

const projects = [
  {
    name: 'Smart Form',
    description: 'Designed and developed a dynamic and visually engaging web app utilising React.js to enhance user experience.',
    technologies: ['React.js', 'Google Sheet API']
  },
  {
    name: 'Translate Call',
    description: 'Engineered a web app supporting real-time messaging and video chat with live message translation for communication across language barriers.',
    technologies: ['Azure API', 'ScaleDrone toolkit']
  }
];

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-cards">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
