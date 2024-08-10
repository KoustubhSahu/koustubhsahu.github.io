import React from "react";

const education = [
  {
    degree: "MS in Information Technology",
    university: "University of the Cumberlands",
    year: "Oct 2023 - Aug 2024",
    detail: "GPA: 4.0",
  },
  {
    degree: "MS in Computer Science",
    university: "New Jersey Institute of Technology",
    year: "Sept 2021 - May 2023",
    detail: "GPA: 3.9",
  },
  {
    degree: "BE in Elec. & Tele Comm. Engineering",
    university: "RTM Nagpur University",
    year: "Sept 2014 - May 2018",
    detail: "CGPA: 7.67/10",
  },
];

const Education = () => {
  return (
    <div className="timeline" id="education">
      <div className="timeline-container">

        {education.map((item, index) => (
          <div key={index} className={`timeline-row ${index%2===0 ? "timeline-left" : "timeline-right" }`}>
            <div className="timeline-content active">
            <h3 className="timeline-heading">{item.degree}</h3>
              <p className="timeline-subheading">{item.university}</p>
              <p className="timeline-duration">{item.year}</p>
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

export default Education;
