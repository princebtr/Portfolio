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
                  High School and Intermediate
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  LBPS, Aurangabad
                </h4>
                <p>
                  Completed High School in 2020 with 76% and Intermediate with
                  74%
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
                  BTech in Computer Science and Engineering
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  GLA University, Mathura
                </h4>
                <p>
                  Pre final year student with a GPA of 8.5, focusing on data
                  structures, DBMS, machine learning, and full-stack.
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
              Mathematical Foundations of Computer Science, Introduction to
              Algorithms, Data Structures and Algorithms, Object Oriented
              Programming, Database Management System, Machine Learning,
              Operating Systems, Computer Network
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Education;
