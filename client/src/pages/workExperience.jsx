import React, { useState } from "react";
import "./workExperience.css";
import Switch from "@mui/material/Switch";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FcApproval } from "react-icons/fc";
import { toast } from "react-toastify";

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
                Frontend Developer <h6>February 2023 – March 2023</h6>
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Zidio Development
              </h4>
              <p>
                • Collaborated with international team members via GitHub to
                develop a full-stack project.
                <br /> • Gained hands-on experience in backend and frontend
                development, database integration.
                <br />• Enhanced teamwork, version control, and remote
                collaboration skills while working across different time zones.
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
                Coding Blocks <h6>Jan 2024 – July 2024</h6>
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Machine Learning & Data Science training
              </h4>
              <p>
                • Learned Python libraries: NumPy, Pandas, Matplotlib, Seaborn,
                Scikit-Learn, TensorFlow.
                <br />• Gained hands-on experience in data preprocessing,
                feature engineering, and model evaluation. <br />• Worked on
                real-world datasets for predictive analytics and data
                visualization.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      ) : (
        <div className="experience-container">
          <div className="experience-card">
            <h3>Frontend Developer – Zidio Development</h3>
            <p>February 2023 – March 2023</p>
            <p>
              • Collaborated with international team members via GitHub to
              develop a full-stack project.
              <br /> • Gained hands-on experience in backend and frontend
              development, database integration.
              <br />• Enhanced teamwork, version control, and remote
              collaboration skills while working across different time zones.
            </p>

            <a
              href="https://drive.google.com/file/d/1_wqGMQHkfApZ10Bdik47ibnqAdzfFJ9M/view"
              target="_blank"
              rel="noreferrer"
              onClick={() => toast.info("Redirecting you to Certificates !!!")}
            >
              View Certificate
            </a>
          </div>
          <div className="experience-card">
            <h3>Machine Learning & Data Science training – Coding Blocks</h3>
            <p>Jan 2024 – July 2024</p>
            <p>
              • Learned Python libraries: NumPy, Pandas, Matplotlib, Seaborn,
              Scikit-Learn, TensorFlow.
              <br />• Gained hands-on experience in data preprocessing, feature
              engineering, and model evaluation. <br />• Worked on real-world
              datasets for predictive analytics and data visualization.
            </p>
            <a
              href="https://drive.google.com/file/d/1uwT6VCyGvZPcuYVK0J1mDQI-UKjTyoJ9/view"
              target="_blank"
              rel="noreferrer"
              onClick={() => toast.info("Redirecting you to Certificates !!!")}
            >
              View Certificate
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkExperience;
