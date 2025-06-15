import React, { useState } from "react";
import "./workExperience.css";
import Switch from "@mui/material/Switch";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FcApproval } from "react-icons/fc";

const WorkExperience = () => {
  const [roadmap, setRoadmap] = useState(false);

  const handleRoadmap = (event) => {
    setRoadmap(!roadmap);
  };

  return (
    <div id="workexperience" className="section-work">
      <h2>Work Experience</h2>
      <h5>
        Roadmap View
        <Switch
          checked={roadmap}
          onChange={handleRoadmap}
          inputProps={{ "aria-label": "Roadmap" }}
        />
      </h5>

      {roadmap ? (
        <div className="roadmap_view">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2011 - present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<FcApproval />}
            >
              <h3 className="vertical-timeline-element-title">
                Creative Director
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2011 - present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<FcApproval />}
            >
              <h3 className="vertical-timeline-element-title">
                Creative Director
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      ) : (
        <div className="experience-container">
          <div className="experience-card">
            <h3>Frontend Developer – Zidio Development</h3>
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
      )}
    </div>
  );
};

export default WorkExperience;
