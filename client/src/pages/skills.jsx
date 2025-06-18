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
  FaJava,
  FaGithub,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiMysql } from "react-icons/si";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

const skillIcons = [
  { icon: <FaJava />, label: "Java" },
  { icon: <FaReact />, label: "React" },
  { icon: <FaPython />, label: "Python" },
  { icon: <FaGitAlt />, label: "Git" },
  { icon: <FaGithub />, label: "GitHub" },
  { icon: <FaHtml5 />, label: "HTML5" },
  { icon: <FaCss3Alt />, label: "CSS3" },
  { icon: <FaJs />, label: "JavaScript" },
  { icon: <FaNode />, label: "Node.js" },
  { icon: <SiExpress />, label: "Express.js" },
  { icon: <SiMongodb />, label: "MongoDB" },
  { icon: <SiTailwindcss />, label: "Tailwind" },
  { icon: <VscVscode />, label: "VS Code" },
  { icon: <SiMysql />, label: "MySQL" },
  { icon: <FaPython />, label: "Flask" },
  { icon: <FaPython />, label: "Django" },
];

const Skills = () => {
  return (
    <div id="skills" className="section-skills">
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
