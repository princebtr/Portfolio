import React from "react";
import "./project.css";

const Projects = () => {
  const projectData = [
    {
      title: "MoneyMaze",
      tech: "MERN",
      img: "https://www.crio.do/blog/content/images/2020/09/Sep_01.png",
      link: "#",
    },
    {
      title: "Brain Tumor Classifier",
      tech: "Python, CNN",
      img: "https://www.crio.do/blog/content/images/2020/09/Sep_01.png",
      link: "#",
    },
    {
      title: "Workout App",
      tech: "Node, Bootstrap",
      img: "https://www.crio.do/blog/content/images/2020/09/Sep_01.png",
      link: "#",
    },
    {
      title: "Quotes App",
      tech: "React + Express",
      img: "https://www.crio.do/blog/content/images/2020/09/Sep_01.png",
      link: "#",
    },
    {
      title: "Weather Dashboard",
      tech: "MERN",
      img: "https://www.crio.do/blog/content/images/2020/09/Sep_01.png",
      link: "#",
    },
  ];

  return (
    <div className="section-projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projectData.map((proj, idx) => (
          <div className="project-card" key={idx}>
            <img src={proj.img} alt={proj.title} />
            <h4>{proj.title}</h4>
            <p>{proj.tech}</p>
            <a href={proj.link} target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
