import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Employer Hiring Dashboard',
    technologies: ['Javascript', 'Node.js', 'Postgre SQL'],
    summary: 'Developed a dynamic dashboard for tracking employer hiring trends, equiped with google authentication and role based access',
  },
  {
    title: 'Student Outcome Dashboard',
    technologies: ['Javascript', 'Node.js', 'Postgre SQL'],
    summary: 'Developed a dynamic dashboard for tracking student outcomes, custom tailored to provide real-time data visualization and analysis.',  
  },
  {
    title: 'Career Fair Navigator',
    technologies: ['React.js', 'Google Sheet API'],
    summary: 'An interactive map and Employer dashbaord for Career Fair events, built using React.js and Google Sheet API to provide real-time updates and data visualization.',  
  },
  {
    title: 'Smart Form',
    technologies: ['React.js', 'Google Sheet API'],
    summary: 'Designed and developed a dynamic and visually engaging web app utilising React.js to enhance user experience.',
    
  },
  {
    title: 'Translate Call',
    technologies: ['Javascript', 'Azure API', 'ScaleDrone toolkit'],
    summary: 'Engineered a web app supporting real-time messaging and video chat with live message translation for communication across language barriers.',
    
  },
  {
    title: 'ice N fire',
    technologies: ['Python', 'Pygame'],
    summary: 'Developed a captivating game using Python and Pygame, featuring custom animations, an intuitive user input system, and an object-oriented approach to enhance gameplay and code organization.',
    
  },
  {
    title: 'Weather App',
    technologies: ['Node.js', 'Express.js', 'EJS'],
    summary: 'Developed a responsive Weather App using Node.js, Express.js, and EJS, providing real-time weather updates based on user-input city names.',
    
  }
];

const Projects = () => {
  return (
    <div className="projects section" id="projects">
      <h2>Projects</h2>
      <div className="project-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 class="project-title">{project.title}</h3>
            <p class="project-summary">{project.summary}</p>
            <div class="project-technologies">
              {project.technologies.map((technology, index) => (
                <span key={index} class="project-technology">{technology}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// const Projects = () => {
//   return (
//     <div className="projects section" id="projects">
//       <h2>Projects</h2>
//       <div className="project-cards">
//         {projects.map((project, index) => (
//           <div key={index} className="project-card">
//             <h3>{project.name}</h3>
//             <p>{project.description}</p>
//             <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

export default Projects;
