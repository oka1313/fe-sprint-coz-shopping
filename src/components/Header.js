import React from "react";
import logo from "../images/logo.png";
import hamburger from "../images/hamburger.png";
import Dropdown from "./Dropdown";

const Header = () => {
  return (
    <div className="header-section">
      <div className="header">
        <div className="header-logo">
          <img className="logo" src={logo} alt="logo" />
          <h1>COZ Shopping</h1>
        </div>
        <div className="dropdown-section">
          <img className="hamburger" src={hamburger} alt="hamburger" />
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default Header;