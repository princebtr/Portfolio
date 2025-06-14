import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="section-edu">
      <h2>About Me</h2>
      <div className="card">
        <p>
          Hello! I'm <strong>Prince Kumar</strong>, a passionate full-stack
          developer currently building projects with the MERN stack.
        </p>
        <ul className="about-highlights">
          <li>💻 MERN Stack Developer</li>
          <li>🚀 Passionate about Web & UI/UX</li>
          <li>🤝 Collaborative & Team Player</li>
          <li>📚 Always Learning New Tech</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
