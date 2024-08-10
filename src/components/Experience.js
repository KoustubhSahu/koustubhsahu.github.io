import React from 'react';

const experience = [
  {
    position: 'Software Engineer - MIS',
    company: 'Career Development Services at NJIT, Newark, NJ',
    duration: 'Jan 2023 - Present',
    detail: 'Developed interactive dashboards and applications using Node.js, Express.js, PostgreSQL, and Chart.js.'
  },
  {
    position: 'MIS Assistant',
    company: 'Career Development Services at NJIT, Newark, NJ',
    duration: 'Oct 2021 - Dec 2022',
    detail: 'Authored Python scripts for data analysis and managed a student database system.'
  },
  {
    position: 'Software Engineer',
    company: 'Vidarbha Essence & Gas Mart, MH, India',
    duration: 'Feb 2019 - Jul 2021',
    detail: 'Implemented web systems for inventory management and sales analysis using Node.js and Express.js.'
  }
];

const Experience = () => {
  return (
    <div className="timeline" id="experience">
      <div className="timeline-container">

        {experience.map((item, index) => (
          <div key={index} className={`timeline-row ${index%2===0 ? "timeline-left" : "timeline-right" }`}>
            <div className="timeline-content active">
              <h3 className="timeline-heading">{item.position}</h3>
              <p className="timeline-subheading">{item.company}</p>
              <p className="timeline-duration">{item.duration}</p>
              <p className="timeline-detail">{item.detail}</p>
            </div>

            <div className="timeline-content" />
          </div>
        ))}
      </div>
      <div className="timneline-spine"> </div>
    </div>
  );
}

export default Experience;
