import React ,{ useState } from 'react';

const icon = require.context('./images/icon', false, /\.(png|jpe?g|svg)$/);

const experience = [
  {
    position: 'Software Engineer - MIS',
    company: 'Career Development Services at NJIT, Newark, NJ',
    duration: 'Jan 2023 - Present',
    detail: 
    ` Developed an interactive Student Outcome Dashboard using Node.js, Express.js, PostgreSQL, and Chart.js, saving 50 human hours per semester, processing 6000+ records, and enabling efficient data analysis.
    
    Created a full-stack Career Fair Navigator application using Node.js, Express.js, and various RESTful APIs, including the Google API and DYMO Web API, leading to a 20% increase in student engagement by facilitating efficient navigation and interaction during career fairs.
    
    Engineered an Employer Hiring Dashboard using the abovementioned technologies, enabling automated data processing and visualisation with user-selectable parameters and secure access permissions, including premium data manipulation and maintenance access.`
},
 {
    position: 'MIS Assistant',
    company: 'Career Development Services at NJIT, Newark, NJ',
    duration: 'Oct 2021 - Dec 2022',
    detail: 
    ` Authored Python scripts in Google Colab utilising Pandas and NumPy for tailored data analysis, saving 6 human hours per week and pioneering integration of OpenAI libraries for enhanced data processing.
    
    Established and managed a student database system, implementing a streamlined data pipeline for processing and conditioning 3,000+ records annually. 
    
    Implemented standard data norms to ensure integrity and accuracy.`
  },
  {
    position: 'Software Engineer',
    company: 'Vidarbha Essence & Gas Mart, MH, India',
    duration: 'Feb 2019 - Jul 2021',
    detail:
    ` Implemented an Inventory Management web system using Node.js and Express.js, synchronising warehouse and outlet inventory.
    
    Constructed a Sales Software web app with automated inventory updates to track daily sales efficiently, improving sales management and accuracy.
    
    Engineered a Sales Analysis web app using Node.js and Express.js to analyse sales patterns over time, providing insights into category-wise sales trends.`
  }
];

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleExperienceClick = (experience) => {
    setSelectedExperience(experience);
  };

  const handleBackClick = () => {
    setSelectedExperience(null);
  };

  return (

    <div id="experience">
      
      <div className={`timeline ${!selectedExperience ? "expereince-timeline-show": "expereince-timeline-hide"}`}>
        <div className="timeline-container">

          {experience.map((item, index) => (
            <div key={index} className={`timeline-row ${index%2===0 ? "timeline-left" : "timeline-right" }`} >
              <div className="timeline-content active" onClick={() => handleExperienceClick(item)}>
                <h3 className="timeline-heading">{item.position}</h3>
                <p className="timeline-subheading">{item.company}</p>
                <p className="timeline-duration">{item.duration}</p>
              </div>

              <div className="timeline-content" />
            </div>
          ))}
        </div>
        <div className="timneline-spine"> </div>
      </div>
      <ExperienceDetail data={selectedExperience} onBackClick={handleBackClick} transitionClass={selectedExperience ? "expereince-detial-show": "expereince-detial-hide"}/>
      
    </div>
  );
}

const ExperienceDetail = (props) => {
  return (
    <div className={`experience-detail ${props.transitionClass}`}>
      {!props.data ? null : (
        <div>
          <button className="expereince-detial-back" onClick={props.onBackClick}><img src={icon(`./back.svg`)} alt={"<="}/></button>
          <h3 className="timeline-heading">{props.data.position}</h3>
          <p className="timeline-subheading">{props.data.company}</p>
          <p className="timeline-duration">{props.data.duration}</p> <br/>
          <p className="timeline-detail">{props.data.detail}</p> 
        </div>
      )}
      
    </div>
  );
};

export default Experience;
