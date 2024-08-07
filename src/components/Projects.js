import React from 'react';
import { Link as RouterLink, BrowserRouter as Router } from 'react-router-dom';
import './Projects.css';

// Create a context for images
const images = require.context('./images', false, /\.(png|jpe?g|svg)$/);
const icon = require.context('./images/icon', false, /\.(png|jpe?g|svg)$/);

const projects = [
  {
    title: 'Employer Hiring Dashboard',
    technologies: ['Javascript', 'Node.js', 'Postgre SQL'],
    summary: 'Developed a dynamic dashboard for tracking employer hiring trends, equiped with google authentication and role based access',
    screenshot: 'njit_hiring_outcomes_tracker_ss.png',
    github: 'https://github.com/njitcds/NJITHiringOutcomesTracker',
  },
  {
    title: 'Student Outcome Dashboard',
    technologies: ['Javascript', 'Node.js', 'Postgre SQL'],
    summary: 'Developed a dynamic dashboard for tracking student outcomes, custom tailored to provide real-time data visualization and analysis.',  
    screenshot: 'njit_student_outcomes_dashboard_ss.png',
    github: 'https://github.com/KoustubhSahu/NJIT-CDS-Career-Outcomes',    
  },
  {
    title: 'Career Fair Navigator',
    technologies: ['React.js', 'Google Sheet API'],
    summary: 'An interactive map and Employer dashbaord for Career Fair events, built using React.js and Google Sheet API to provide real-time updates and data visualization.',  
    screenshot: 'cfn_ss.png',
    github: 'https://github.com/KoustubhSahu/CFN',    
  },
  // {
  //   title: 'Smart Form',
  //   technologies: ['React.js', 'Google Sheet API'],
  //   summary: 'Designed and developed a dynamic and visually engaging web app utilising React.js to enhance user experience.',
    
  // },
  {
    title: 'Translate Call',
    technologies: ['Azure API', 'ScaleDrone toolkit'],
    summary: 'Engineered a web app supporting real-time messaging and video chat with live message translation for communication across language barriers.',
    screenshot: 'translate_call_ss.png',
    github: 'https://github.com/KoustubhSahu/translate_call',
    liveURL: 'https://koustubhsahu.github.io/translate_call/', 
  },
  {
    title: 'ice N fire',
    technologies: ['Python', 'Pygame'],
    summary: 'Developed a captivating game using Python and Pygame, featuring custom animations, an intuitive user input system, and an object-oriented approach to enhance gameplay and code organization.',
    screenshot: 'ice_n_fire_ss.png',
    github: 'https://github.com/KoustubhSahu/ice_N_fire',
  },
  {
    title: 'Weather App',
    technologies: ['Node.js', 'Express.js', 'EJS'],
    summary: 'Developed a responsive Weather App using Node.js, Express.js, and EJS, providing real-time weather updates based on user-input city names.',
    screenshot: 'weather_ss.png',
    github: 'https://github.com/KoustubhSahu/WeatherProject',
  },
  {
    title: 'To-Do List',
    technologies: ['Node.js', 'Express.js', 'EJS'],
    summary: 'Developed a Node.js to-do list app with task creation, viewing, completion, categorization, and responsive design.',
    screenshot: 'todo_list_ss.png',
    github: 'https://github.com/KoustubhSahu/todo-list',
  }
];

// function getProjectImage(imageName) {
//   // const obj = {backgroundImage: `url(./images/${imageName})`};
//   const obj = {backgroundImage: `url(${images(`./${imageName}`)})`};
//   return obj;
// }

const Projects = () => {
  return (
    <div className="projects section" id="projects">
      <h2>Projects</h2>
      <div className="project-container">

        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div 
              className="project-screenshot"
              style= {project.screenshot ? { backgroundImage: `url(${images(`./${project.screenshot}`)})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' } : {backgroundColor: 'rgba(240,240,240,0.5)'}}
              aria-label={project.title}
            >
              <h2>{project.screenshot ? "" : project.title}</h2>
              <span class="project-summary">{project.summary}
              <span class="project-links">
                <Router>
                  {project.liveURL ? <RouterLink to={project.liveURL} target="_blank"><img src={icon(`./live-link.svg`)} alt="live-link"/></RouterLink> : null}
                  {project.github ? <RouterLink to={project.github} target="_blank"><img src={icon(`./code.svg`)} alt="code"/></RouterLink> : null}
                  {/* <img src={icon(`./live-link.svg`)} alt="live-link"/> */}
                  {/* <img src={icon(`./code.svg`)} alt="code"/> */}
                  {/* <RouterLink to={project.live}><img src={icon(`./live-link.svg`)} alt="live-link"/></RouterLink>
                  <RouterLink to={project.live}><img src={icon(`./live-link.svg`)} alt="live-link"/></RouterLink> */}
                </Router>
              </span>
              </span>
              
            </div>
            <div className="project-content" >
              <h3 class="project-title">{project.title}</h3>
              {/* <p class="project-summary">{project.summary}</p> */}
              <div class="project-technologies">
                {project.technologies.map((technology, index) => (
                  <span key={index} class="project-technology">{technology}</span>
                ))}
              </div>            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
