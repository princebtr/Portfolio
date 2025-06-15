import React, { useState } from "react";
import {
  TbArrowBigLeftLinesFilled,
  TbArrowBigRightLinesFilled,
} from "react-icons/tb";

import "./layout.css";
import Menu from "./menu";

import Home from "../pages/home";
import About from "../pages/about";
import Certificates from "../pages/certificates";
import WorkExperience from "../pages/workExperience";
import Skills from "../pages/skills";
import Education from "../pages/education";
import Contact from "../pages/contact";
import Projects from "../pages/project";

const Layout = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="sidebar-section">
      {/* Sidebar */}
      <div className={toggle ? "sidebar-toggle" : "sidebar"}>
        <div className="icon">
          <p onClick={handleToggle}>
            {toggle ? (
              <TbArrowBigLeftLinesFilled size={30} />
            ) : (
              <TbArrowBigRightLinesFilled size={30} />
            )}
          </p>
        </div>
        <Menu toggle={toggle} />
      </div>

      {/* Main content */}
      <div className={`container ${toggle ? "expanded" : "collapsed"}`}>
        <Home />
        <About />
        <Education />
        <WorkExperience />
        <Skills />

        <Projects />
        <Certificates />
        <Contact />
      </div>
    </div>
  );
};

export default Layout;
