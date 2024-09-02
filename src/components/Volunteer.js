import React from "react";
import { Link as RouterLink, BrowserRouter as Router } from "react-router-dom";

const icon = require.context("./images/icon", false, /\.(png|jpe?g|svg)$/);

const volunteer = [
  {
    icon: "7cups.png",
    organisation: "7Cups.com",
    role: "Listener",
    duration: "May 2020 - Present",
    detail: 
    `As a dedicated volunteer, I have actively contributed my time and skills to provide valuable support within an on-demand emotional health service and online therapy provider. In this role, I have honed my active listening abilities and established myself as a compassionate and empathetic listener.

    I engage with individuals seeking help through anonymous and confidential chat sessions, demonstrating a solid capacity to understand and address their unique emotional needs. With over 6,000 chats and assistance provided to more than 350 individuals, my experience extends beyond personal interactions to corporate settings. I have demonstrated adeptness in comprehending diverse requirements and responding with empathy and precision.

    This volunteering experience has enriched my interpersonal and empathetic communication skills and underscored my ability to identify and meet the unique emotional necessities of individuals, fostering productive communication and collaboration in various settings.
`,
    website: "https://www.7cups.com/@recoveryNpeace",
  },
];

const volunteer_organisation_icon = {
    width: "2rem",
    height: "2rem",
    marginRight: "5px",
    borderRadius: "20%",
    border: "2px solid white",
};

const center_align = {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
};

const Volunteer = () => {
  return (
    <div id="volunteer" style={{width: "70%"}}>
      <div className="volunteering-experiences">
        {volunteer.map((item, index) => (
          <div key={index} className="volunteering-experience">
            <Router>
              <RouterLink
                to={item.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="timeline-heading" style={center_align}>
                    <img src={icon(`./${item.icon}`)} alt={item.organisation} style={volunteer_organisation_icon}/>
                    {item.organisation}
                </h2>
                <h3 className="timeline-subheading" style={center_align}>{item.role}</h3>
              </RouterLink>
            </Router>
            
            <p className="timeline-duration">{item.duration}</p> <br/>
            <p className="timeline-detail">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Volunteer;
