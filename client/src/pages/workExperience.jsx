import React from "react";
import "./workExperience.css";

const WorkExperience = () => {
  return (
    <div className="section-work">
      <h2>Work Experience</h2>
      <div className="experience-container">
        <div className="experience-card">
          <h3>Frontend Developer – Company A</h3>
          <p>June 2023 – Aug 2023</p>
          <p>Worked on developing UI components using React and Tailwind.</p>
          <button>View Certificate</button>
        </div>
        <div className="experience-card">
          <h3>Full Stack Intern – Company B</h3>
          <p>Jan 2024 – Mar 2024</p>
          <p>Built APIs and integrated frontend with backend services.</p>
          <button>View Certificate</button>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
