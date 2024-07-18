import React from 'react';
import './Experience.css';

const experience = [
  {
    position: 'MIS Systems Developer',
    company: 'Career Development Services at NJIT, Newark, NJ',
    duration: 'Jan 2023 - Present',
    details: [
      'Developed an interactive Student Outcome Dashboard using Node.js, Express.js, PostgreSQL, and Chart.js.',
      'Created a full-stack Career Fair Navigator application using Node.js, Express.js, and various RESTful APIs.',
      'Engineered an Employer Dashboard using the abovementioned technologies.'
    ]
  },
  {
    position: 'MIS Assistant',
    company: 'Career Development Services at NJIT, Newark, NJ',
    duration: 'Oct 2021 - Dec 2022',
    details: [
      'Authored Python scripts in Google Colab utilising Pandas and NumPy for tailored data analysis.',
      'Established and managed a student database system, implementing a streamlined data pipeline.'
    ]
  },
  {
    position: 'Software Engineer',
    company: 'Vidarbha Essence & Gas Mart, MH, India',
    duration: 'Feb 2019 - Jul 2021',
    details: [
      'Implemented an Inventory Management web system using Node.js and Express.js.',
      'Constructed a Sales Software web app with automated inventory updates to track daily sales efficiently.',
      'Engineered a Sales Analysis web app using Node.js and Express.js to analyse sales patterns over time.'
    ]
  }
];

const Experience = () => {
  return (
    <div className="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {experience.map((item, index) => (
          <div key={index} className="experience-item">
            <h3>{item.position}</h3>
            <p>{item.company}</p>
            <p>{item.duration}</p>
            <ul>
              {item.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
