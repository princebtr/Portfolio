import React from "react";
import "./certificates.css";

const Certificates = () => {
  const certs = [
    { name: "Machine Learning – Coursera", link: "#" },
    { name: "Full Stack Bootcamp – Udemy", link: "#" },
    { name: "Git & GitHub – FreeCodeCamp", link: "#" },
  ];

  return (
    <div id="certificate" className="section-certs">
      <h2>Certificates</h2>
      <div className="cert-grid">
        {certs.map((cert, idx) => (
          <div key={idx} className="cert-card">
            <p>{cert.name}</p>
            <a href={cert.link} target="_blank" rel="noreferrer">
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
