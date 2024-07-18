import React from 'react';
import './Education.css';

const education = [
  { degree: 'MS in Information Technology', institution: 'University of the Cumberlands', year: 'Aug 2024', gpa: '4.0' },
  { degree: 'MS in Computer Science', institution: 'New Jersey Institute of Technology', year: 'May 2023', gpa: '3.9' },
];

const Education = () => {
  return (
    <div className="education">
      <h2>Education</h2>
      <div className="education-list">
        {education.map((item, index) => (
          <div key={index} className="education-item">
            <h3>{item.degree}</h3>
            <p>{item.institution}</p>
            <p>{item.year}</p>
            <p>GPA: {item.gpa}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
