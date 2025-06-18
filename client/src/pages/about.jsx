import React from "react";
import "./about.css";

const About = () => {
  return (
    <section id="about" className="section-edu">
      <h2>About Me</h2>
      <div className="card">
        <p>
          Hello! I'm <strong>Prince Kumar</strong>, a passionate and
          goal-oriented Computer Science Engineering student at GLA University,
          Mathura. With hands-on experience in full-stack development and a
          strong foundation in machine learning and data science, I thrive on
          building practical and impactful tech solutions..
          <br />
          I'm always eager to learn, build, and contribute—whether it's through
          coding challenges on LeetCode, group projects, or self-initiated
          development. Let’s innovate and solve meaningful problems together!
        </p>
        <ul className="about-highlights">
          <li>💻 MERN Stack Developer</li>
          <li>🧠 Problem Solver at Heart</li>
          <li>🤝 Collaborative & Team Player</li>
          <li>📚 Always Learning New Tech</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
