import React, { useState } from "react";
import logo from "../../images/logo.png";
import hamburger from "../../images/hamburger.png";
import Dropdown from "./Dropdown";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header>
      <div className={styles.container}>
        <div
          onClick={() => {
            navigate("/");
          }}
          className={styles.logo}
        >
          <img className={styles.logo_image} src={logo} alt="logo" />
          <h1 className={styles.logo_title}>COZ Shopping</h1>
        </div>
        <div
          className={styles.hamburger_dropdown}
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <img
            className={styles.hamburger_icon}
            src={hamburger}
            alt="hamburger"
          />
          {isDropdownOpen && <Dropdown />}
        </div>
      </div>
    </header>
  );
};

export default Header;
