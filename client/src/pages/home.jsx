import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";
import Resume from "../assets/docs/PrinceResumeGemini.pdf"; // Assuming you have a resume file in the assets folder

const home = () => {
  return (
    <>
      <div id="home" className="container-fluid home-container">
        <div className="container home-content">
          <h2>Hello👋 I'm a</h2>
          <h1>
            <Typewriter
              options={{
                strings: [
                  "Mern Developer !",
                  "Java Developer !",
                  "Full Stack Developer !",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="home-button">
            <button className="btn-hire">Hire Me</button>
            <a
              className="btn-resume"
              href={Resume}
              download="Prince_Resume.pdf"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default home;
