import React, { useState } from "react";
import "./education.css";
import Switch from "@mui/material/Switch";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { TbSchool } from "react-icons/tb";

const Education = () => {
  const [roadmap, setRoadmap] = useState(false);

  const handleRoadmap = () => {
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
                date="2020"
                icon={<TbSchool />}
              >
                <h3 className="vertical-timeline-element-title">
                  High School and Intermediate
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  LBPS, Aurangabad
                </h4>
                <p>
                  Completed High School in 2020 with 76% and Intermediate with
                  74%.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2022 - 2026"
                icon={<TbSchool />}
              >
                <h3 className="vertical-timeline-element-title">
                  BTech in Computer Science and Engineering
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  GLA University, Mathura
                </h4>
                <p>
                  B.Tech in Computer Science Engineering with a GPA of 8.5,
                  focusing on data structures, databases, machine learning, and
                  full-stack development.
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        ) : (
          <div className="card">
            <h3>B.Tech in Computer Science Engineering - GLA University</h3>
            <p>2022 - 2026</p>
            <p>GPA: 8.5</p>
            <p>Relevant Coursework:</p>
            <p>
              Data Structures &amp; Algorithms, Object-Oriented Programming,
              Database Management Systems, Operating Systems, Computer Networks,
              Machine Learning, Mathematical Foundations of Computer Science
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Education;
