import React, { useState } from "react";
import Home from "../pages/home";
import {
  TbArrowBigLeftLinesFilled,
  TbArrowBigRightLinesFilled,
} from "react-icons/tb";
import "./layout.css";
import Menu from "./menu";

const layout = () => {
  const [toggle, setToggle] = useState(true);
  //   change toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="sidebar-section">
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
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
};

export default layout;
