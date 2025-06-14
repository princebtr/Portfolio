import React from "react";
import "./menu.css";
import { TbCertificate } from "react-icons/tb";
import {
  FcHome,
  FcAbout,
  FcInspection,
  FcBiotech,
  FcReading,
  FcBusinessContact,
  FcIdea,
} from "react-icons/fc";

function Menu({ toggle }) {
  return (
    <>
      {toggle ? (
        <div>
          <div className="profile-pic">
            <img
              src="https://img.freepik.com/premium-photo/profile-icon-white-background_941097-162371.jpg"
              alt="Profile"
              className="profile-pic"
            />
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <FcHome size={30} /> Home
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <FcAbout size={30} />
              About
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <FcInspection size={30} /> Work Experience
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <FcBiotech size={30} /> Skills
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <FcReading size={30} /> Education
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <FcIdea size={30} /> Projects
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <TbCertificate size={30} color="green" />
              Certifications
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <FcBusinessContact size={30} /> Contact
            </div>
          </div>
        </div>
      ) : (
        <div className="menu-collapsed">
          <div className="nav-item">
            <div className="nav-link">
              <FcHome title="Home" size={30} />
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <FcAbout title="About" size={30} />
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <FcInspection title="Work Experience" size={30} />
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <FcBiotech title="Tech Stack" size={30} />
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <FcReading title="Education" size={30} />
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <FcIdea title="Projects" size={30} />
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <TbCertificate title="Certificates" size={30} color="green" />
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <FcBusinessContact title="Contact" size={30} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Menu;
