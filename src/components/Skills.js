import React from 'react';
import './Skills.css';

const skills = [
  'Java', 'Python', 'JavaScript', 'HTML', 'CSS', 'React.js', 
  'Node.js', 'Express.js', 'npm', 'EJS', 'MySQL', 'PostgreSQL', 
  'MongoDB', 'MS Access', 'Git', 'GitHub', 'Google Colab', 
  'Pandas', 'NumPy', 'MS Excel', 'MS Power BI'
];

const Skills = () => {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
