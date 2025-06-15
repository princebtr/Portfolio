import React, { useState } from "react";
import "./education.css";
import Switch from "@mui/material/Switch";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FcApproval } from "react-icons/fc";

const Education = () => {
  const [roadmap, setRoadmap] = useState(false);

  const handleRoadmap = (event) => {
    setRoadmap(!roadmap);
  };
  return (
    <>
      <div id="education" className="section-edu">
        <h2>Education</h2>
        <h5>
          Roadmap View
          <Switch
            checked={roadmap}
            onChange={handleRoadmap}
            inputProps={{ "aria-label": "Roadmap" }}
          />
        </h5>
        {roadmap ? (
          <div className="roadmap-view">
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
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
                <h4 className="vertical-timeline-element-subtitle">
                  Miami, FL
                </h4>
                <p>
                  Creative Direction, User Experience, Visual Design, Project
                  Management, Team Leading
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
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
                <h4 className="vertical-timeline-element-subtitle">
                  Miami, FL
                </h4>
                <p>
                  Creative Direction, User Experience, Visual Design, Project
                  Management, Team Leading
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        ) : (
          <div className="card">
            <h3>B.Tech in CSE – GLA University</h3>
            <p>2022 – 2026</p>
            <p>GPA: 8.5</p>
            <p>Relevant Coursework:</p>
            <p>
              Learned data structures, DBMS, ML, and full-stack development.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Education;
