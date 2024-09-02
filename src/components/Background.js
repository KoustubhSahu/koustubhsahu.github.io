import React, {useState} from 'react';
import Experience from './Experience';
import Education from './Education';
import Volunteer from './Volunteer';
import Animation from './Animation';
import './Background.css';

  
  const Background = () => {
    const [activeView, setActiveView] = useState("experience");
    const componentMap = {
      education: <Education />,
      experience: <Experience />,
      volunteer: <Volunteer />,
    };
    const move_right = {transform: "translateX(0.6rem)"};
    const move_left = {transform: "translateX(-0.6rem)"};

    return (
      <div className="background section" id="background">
        <span class="background-marker" />
        <div className="background-container">
          <div className="background-nav">
            <button style={activeView==="volunteer"? move_right:{}} className={activeView === "education" ? "selected" : ""} onClick={() => setActiveView("education")}>Education</button>
            <button className={activeView === "experience" ? "selected" : ""} onClick={() => setActiveView("experience")}>Experience</button>
            <button style={activeView==="education"? move_left:{}} className={activeView === "volunteer" ? "selected" : ""} onClick={() => setActiveView("volunteer")}>Volunteer</button>
            
          </div>
          <div className="background-content">
            <div className="background-view">
              {componentMap[activeView]}
            </div>
            <div className="background-animation">
              <Animation fileName="contact" />
            </div>
          </div>
          
        </div>
      </div>
    );

  };
  
  export default Background;
  
  