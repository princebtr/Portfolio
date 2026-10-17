import React from "react";
import "./menu.css";
import {
  TbHome,
  TbUser,
  TbSchool,
  TbBriefcase,
  TbCode,
  TbRocket,
  TbCertificate,
  TbMail,
} from "react-icons/tb";
import { Link } from "react-scroll";

const PROFILE_IMG =
  "https://res.cloudinary.com/djnerwn8s/image/upload/v1750268916/1737226346907_xfjod3.jpg";

const NAV_ITEMS = [
  { to: "home", label: "Home", Icon: TbHome },
  { to: "about", label: "About", Icon: TbUser },
  { to: "education", label: "Education", Icon: TbSchool },
  { to: "workexperience", label: "Work Experience", Icon: TbBriefcase },
  { to: "skills", label: "Skills", Icon: TbCode },
  { to: "project", label: "Projects", Icon: TbRocket },
  { to: "certificate", label: "Certifications", Icon: TbCertificate },
  { to: "contact", label: "Contact", Icon: TbMail },
];

function Menu({ toggle }) {
  return (
    <nav className={toggle ? "menu" : "menu menu-collapsed"}>
      {toggle && (
        <div className="profile">
          <img src={PROFILE_IMG} alt="Profile" className="profile-pic" />
          <span className="profile-name">Prince</span>
          <span className="profile-role">Portfolio</span>
        </div>
      )}

      {toggle && <span className="nav-heading">Menu</span>}

      {NAV_ITEMS.map(({ to, label, Icon }) => (
        <div className="nav-item" key={to}>
          <Link
            to={to}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={100}
          >
            <div className="nav-link" title={label}>
              <Icon size={22} strokeWidth={1.7} />
              {toggle && <span className="nav-label">{label}</span>}
            </div>
          </Link>
        </div>
      ))}
    </nav>
  );
}

export default Menu;
