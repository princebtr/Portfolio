import React from "react";
import "./skills.css";
import {
  FaReact,
  FaNode,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

const skillIcons = [
  { icon: <FaHtml5 />, label: "HTML5" },
  { icon: <FaCss3Alt />, label: "CSS3" },
  { icon: <FaJs />, label: "JavaScript" },
  { icon: <FaReact />, label: "React" },
  { icon: <FaNode />, label: "Node.js" },
  { icon: <SiExpress />, label: "Express.js" },
  { icon: <SiMongodb />, label: "MongoDB" },
  { icon: <SiTailwindcss />, label: "Tailwind" },
  { icon: <FaGitAlt />, label: "Git" },
  { icon: <FaPython />, label: "Python" },
];

const Skills = () => {
  return (
    <div className="section-skills">
      <h2>Tech Stack & Skills</h2>
      <div className="skills-grid">
        {skillIcons.map((skill, idx) => (
          <div className="skill-box" key={idx}>
            {skill.icon}
            <span>{skill.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
