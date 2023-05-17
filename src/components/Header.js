import React from "react";
import logo from "../images/logo.png";
import hamburger from "../images/hamburger.png";
import Dropdown from "./Dropdown";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header-wrapper">
      <div className="header-container">
        <div
          onClick={() => {
            navigate("/");
          }}
          className="header-logo"
        >
          <img className="header-logo-image" src={logo} alt="logo" />
          <h1 className="header-logo-title">COZ Shopping</h1>
        </div>
        <div className="header-dropdown">
          <img
            className="header-hamburger-icon"
            src={hamburger}
            alt="hamburger"
          />
          <Dropdown />
        </div>
      </div>
    </div>
  );
};

export default Header;
