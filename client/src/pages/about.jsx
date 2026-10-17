import React from "react";
import "./about.css";

const About = () => {
  return (
    <section id="about" className="section-edu">
      <h2>About Me</h2>
      <div className="card">
        <p>
          I&apos;m <strong>Prince Kumar</strong>, a Software Engineer and Computer
          Science Engineering graduate with hands-on experience building and
          optimizing production software.
          <br />
          Currently, I&apos;m working as an <strong>SDE 1 at CompUp (YC S22)</strong>,
          where I contribute to backend systems and scalable product features
          using Python, Django, SQL, and REST APIs. My work involves designing
          new features, optimizing application performance, working with large
          datasets, and collaborating closely with frontend and backend teams.
          <br />
          I enjoy understanding problems deeply, writing maintainable code,
          debugging complex issues, and continuously improving the systems I
          work on. Alongside backend development, I have experience with
          full-stack development, Java, Spring Boot, machine learning, and data
          science.
        </p>
        <ul className="about-highlights">
          <li>💻 Backend &amp; Full-Stack Developer</li>
          <li>🐍 Python &amp; Django</li>
          <li>🗄️ SQL &amp; Database Engineering</li>
          <li>🧩 Problem Solver</li>
          <li>🤝 Collaborative Team Player</li>
          <li>🚀 Always Learning &amp; Building</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
