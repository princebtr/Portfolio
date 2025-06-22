import React from "react";
import "./certificates.css";
import { toast } from "react-toastify";

const Certificates = () => {
  const certs = [
    { name: "Software Engineering - NPTEL (IIT Kharagpur) ", link: "#" },
    {
      name: "ML & DS with Python - Coding Blocks",
      link: "https://drive.google.com/file/d/1tz0QahwWTCz3wUdj1jQ6h1PyfvUzwnod/view?usp=drive_link",
    },
    {
      name: "Java Programming Fundamentals - Infosys",
      link: "https://drive.google.com/file/d/1cEI4AMLavjkRwUDMNL-wcSXX5UHm_qcb/view?usp=drive_link",
    },
    {
      name: "Ethics in Engineering Practice - NPTEL (IIT Kharagpur)",
      link: "https://drive.google.com/file/d/1V6lXFU6d5eojj7lvUh4AyLdIFWY7c9Sn/view?usp=drive_link",
    },
    {
      name: "Management Information System - NPTEL (IIT Kharagpur)",
      link: "https://drive.google.com/file/d/11a_0WUUlJ15LP2qE0vP8Jg6_WQfPGhg7/view?usp=drive_link",
    },
    {
      name: "R - DataCamp",
      link: "https://drive.google.com/file/d/1EJmUIMmQkAxUSGFP7RlhB74JWGXV3YaI/view?usp=drive_link",
    },
  ];

  return (
    <div id="certificate" className="section-certs">
      <h2>Certificates</h2>
      <div className="cert-grid">
        {certs.map((cert, idx) => (
          <div key={idx} className="cert-card">
            <p>{cert.name}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              onClick={() => toast.info("Redirecting you to Certificates !!!")}
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
