import React, { useState, useEffect, useRef } from "react";
import "./project.css";

const Projects = () => {
  const projectData = [
    {
      title: "SpendWise - Finance Tracker",
      tech: "MERN",
      img: "https://res.cloudinary.com/djnerwn8s/image/upload/v1750269441/c447e2ad-4351-4503-9c09-5fc2faf4c7f2_mvktsm.jpg",
      link: "https://github.com/princebtr/SpendWise-FinanceTracker",
    },
    {
      title: "Brain Tumor Classifier",
      tech: "Python, CNN",
      img: "https://res.cloudinary.com/djnerwn8s/image/upload/v1750269592/e1a5c1cc-5f4f-487c-a1b9-145c1d2bd2b2_ibqdoo.jpg",
      link: "https://github.com/princebtr/Brain_Tumor_WebApp",
    },
    {
      title: "ATM Simulator",
      tech: "Java, Swing",
      img: "https://res.cloudinary.com/djnerwn8s/image/upload/v1750269722/ebd24c11-f60e-458c-ba4c-48f521bc4ee5_geka2a.jpg",
      link: "https://github.com/princebtr/ATM-Simulator-JAVA",
    },
    {
      title: "Rock Paper Scissors Game",
      tech: "Python, Tkinter",
      img: "https://res.cloudinary.com/djnerwn8s/image/upload/v1750269790/494eaed4-cd04-4c9a-b17d-484b0d8dba6c_bhdjna.jpg",
      link: "https://github.com/princebtr/Rock-Paper-Scissor-game-Tkinter-Python",
    },
    {
      title: "Echos - Social Media App",
      tech: "MERN",
      img: "https://res.cloudinary.com/djnerwn8s/image/upload/v1750269949/05fc9be4-15b5-4c77-b0bd-15a34323d959_pg9a57.jpg",
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
    const interval = setInterval(nextSlide, 4000);
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
