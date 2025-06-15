import React, { useState, useEffect, useRef } from "react";
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

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const totalSlides = projectData.length;
  const visibleSlides = 3;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (totalSlides - visibleSlides + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? totalSlides - visibleSlides : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="project" className="section-projects">
      <h2>Projects</h2>
      <div className="carousel-wrapper">
        <button className="nav-btn left" onClick={prevSlide}>
          &lt;
        </button>
        <div className="carousel">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${
                currentSlide * (100 / visibleSlides)
              }%)`,
            }}
            ref={slideRef}
          >
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
        <button className="nav-btn right" onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Projects;
