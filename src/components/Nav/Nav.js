import React, { useState } from "react";
import styles from "./Nav.module.css";
import { navItems } from "./NavData";

const Nav = ({ handleFilter }) => {
  const [activeLabel, setActiveLabel] = useState(null);

  const handleLabelClick = (label) => {
    setActiveLabel(label);
    handleFilter(label); // 선택된 아이템을 부모 컴포넌트로 전달
  };

  return (
    <nav>
      {navItems.map((item) => (
        <div
          key={item.id}
          className={`${styles.item} ${
            activeLabel === item.alt ? styles.active : ""
          }`}
          onClick={() => handleLabelClick(item.alt)}
        >
          <img className={styles.icon} src={item.icon} alt={item.alt} />
          <div className={styles.label}>{item.label}</div>
        </div>
      ))}
    </nav>
  );
};

export default Nav;
