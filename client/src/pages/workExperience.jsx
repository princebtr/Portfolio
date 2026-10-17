import React, { useState } from "react";
import "./workExperience.css";
import Switch from "@mui/material/Switch";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { TbBriefcase } from "react-icons/tb";
import { toast } from "react-toastify";

const experiences = [
  {
    role: "SDE 1",
    company: "CompUp (YC S22)",
    dates: "August 2026 - Present",
    location: "Bengaluru, India",
    points: [
      "Contribute to backend development using Python, Django, SQL, and REST APIs for a production compensation management platform.",
      "Build and maintain scalable product features across appraisal, compensation planning, simulation, and user management workflows.",
      "Optimize backend APIs and database operations to improve application performance and scalability.",
      "Work with large datasets and asynchronous workflows for data imports, exports, and bulk user operations.",
      "Design business logic involving compensation rules, guardrails, formulas, relationships, and configurable workflows.",
      "Collaborate with frontend engineers, QA, and other team members to deliver production-ready features.",
      "Debug production issues, investigate performance bottlenecks, and improve reliability through testing and monitoring.",
    ],
  },
  {
    role: "SDE Intern",
    company: "CompUp (YC S22)",
    dates: "February 2026 - August 2026",
    location: "Bengaluru, India",
    points: [
      "Worked on backend development using Django, Python, SQL, and REST APIs.",
      "Contributed to production features and backend workflows across the compensation management platform.",
      "Implemented API enhancements, data processing workflows, and performance optimizations.",
      "Worked with asynchronous tasks, database queries, serializers, and business logic.",
      "Collaborated with the engineering team to debug issues, review changes, and deliver features across development and production environments.",
    ],
  },
  {
    role: "Trainee",
    company: "Capgemini",
    dates: "December 2025 - February 2026",
    location: "Mathura, India",
    points: [
      "Completed intensive training focused on Java development and backend engineering.",
      "Built a strong foundation in Java OOP, Spring Boot, SQL, Git, and GitHub.",
      "Practiced developing backend applications using object-oriented programming and Spring Boot.",
      "Collaborated with fellow trainees on development exercises and projects.",
    ],
  },
  {
    role: "ML & Data Science Training",
    company: "Coding Blocks",
    dates: "June 2024 - July 2024",
    location: "Delhi, India",
    points: [
      "Worked with Python libraries including NumPy, Pandas, Matplotlib, Seaborn, Scikit-Learn, and TensorFlow.",
      "Gained hands-on experience in data preprocessing, feature engineering, and model evaluation.",
      "Worked with real-world datasets for predictive analytics and data visualization.",
      "Developed a practical understanding of machine learning workflows and data analysis.",
    ],
  },
  {
    role: "Web Developer",
    company: "Zidio Development",
    dates: "February 2024 - March 2024",
    location: "Remote",
    points: [
      "Collaborated with international team members through GitHub to develop a full-stack web project.",
      "Worked across frontend and backend development with database integration.",
      "Gained practical experience with web development, version control, and collaborative software development.",
      "Worked effectively with a distributed team across different time zones.",
    ],
    certificate:
      "https://drive.google.com/file/d/1_wqGMQHkfApZ10Bdik47ibnqAdzfFJ9M/view",
  },
];

const ExperienceDetails = ({ experience }) => (
  <>
    <h3 className="vertical-timeline-element-title">{experience.role}</h3>
    <h4 className="vertical-timeline-element-subtitle">
      {experience.company}
    </h4>
    <p>{experience.dates} · {experience.location}</p>
    <ul>
      {experience.points.map((point) => <li key={point}>{point}</li>)}
    </ul>
  </>
);

const WorkExperience = () => {
  const [roadmap, setRoadmap] = useState(false);

  const handleRoadmap = () => setRoadmap(!roadmap);

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
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={`${experience.company}-${experience.role}`}
                className="vertical-timeline-element--work"
                date={experience.dates}
                icon={<TbBriefcase />}
              >
                <ExperienceDetails experience={experience} />
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      ) : (
        <div className="experience-container">
          {experiences.map((experience) => (
            <div className="experience-card" key={`${experience.company}-${experience.role}`}>
              <h3>{experience.role} - {experience.company}</h3>
              <p>{experience.dates} · {experience.location}</p>
              <ul>
                {experience.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
              {experience.certificate && (
                <a
                  href={experience.certificate}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => toast.info("Redirecting you to Certificates !!!")}
                >
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkExperience;