import React from "react";
import "./home.css";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import Resume from "../assets/docs/PrinceResumeGemini.pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useTheme } from "../context/ThemeContext.jsx";
import { toast } from "react-toastify";

const Home = () => {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <>
      <div id="home" className="container-fluid home-container">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
          <p className="home-kicker">SOFTWARE ENGINEER / BACKEND DEVELOPER <span /></p>
          <h2>Hello, I&apos;m Prince.</h2>
          <h1>
            <Typewriter
              options={{
                strings: [
                  "Software Engineer",
                  "Backend Developer",
                  "Python & Django Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="home-intro">
            I build reliable, scalable software with a focus on backend
            engineering, clean architecture, and practical problem-solving.
          </p>

          <div className="home-button">
            <Link
              to="contact"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
              onClick={() =>
                toast.info(
                  "Type your details in Contact Us — I’ll reach you soon or use my social infos!"
                )
              }
            >
              <button className="btn-hire">Let&apos;s work together <span>↗</span></button>
            </Link>

            <a
              className="btn-resume"
              href={Resume}
              download="Prince_Resume.pdf"
              onClick={() => toast.success("Resume has been Downloaded !!!")}
            >
              Download Resume <span>↓</span>
            </a>
          </div>
          <div className="home-meta">
            <span><b>01</b> Based in India</span>
            <span><b>02</b> Backend &amp; Full-stack focused</span>
          </div>
        </div>
        <div className="hero-console" aria-label="Current engineering focus">
          <div className="console-topbar">
            <span className="console-dots"><i /><i /><i /></span>
            <span>prince@portfolio ~/focus</span>
            <span className="console-live">LIVE</span>
          </div>
          <div className="console-body">
            <p><span className="console-prompt">$</span> cat current-focus.txt</p>
            <p className="console-heading">building systems that hold up.</p>
            <div className="console-row"><span>primary</span><strong>Python / Django / SQL</strong></div>
            <div className="console-row"><span>craft</span><strong>APIs · data · architecture</strong></div>
            <div className="console-row"><span>mode</span><strong className="console-status"><i /> shipping thoughtfully</strong></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
