import React, { useState } from "react";
import {
  TbArrowBigLeftLinesFilled,
  TbArrowBigRightLinesFilled,
} from "react-icons/tb";
import { FaBars } from "react-icons/fa";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleMobileToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="sidebar-section">
      {/* Mobile Hamburger Icon */}
      <div className="mobile-menu-icon">
        <FaBars size={26} onClick={handleMobileToggle} />
      </div>

      {/* Background overlay for mobile */}
      {mobileMenuOpen && (
        <div className="overlay" onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Sidebar */}
      <div
        className={`${toggle ? "sidebar-toggle" : "sidebar"} ${
          mobileMenuOpen ? "open" : ""
        }`}
      >
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
      <div
        className={`container ${toggle ? "expanded" : "collapsed"}`}
        onClick={() => {
          if (mobileMenuOpen) setMobileMenuOpen(false);
        }}
      >
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
