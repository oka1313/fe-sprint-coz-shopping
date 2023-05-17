import React from "react";
import product from "../../images/product_icon.png";
import bookmark from "../../images/bookmark_icon.png";
import { useNavigate } from "react-router-dom";
import styles from "./Dropdown.module.css";

const Dropdown = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.dropdown}>
      <div className={styles.list}>김다미님, 안녕하세요!</div>
      <div
        onClick={() => {
          navigate("/products/list");
        }}
        className={styles.list}
      >
        <img className={styles.product_icon} src={product} alt="product" />
        상품리스트 페이지
      </div>
      <div
        onClick={() => {
          navigate("/bookmark");
        }}
        className={styles.list}
      >
        <img className={styles.bookmark_icon} src={bookmark} alt="bookmark" />
        북마크 페이지
      </div>
    </section>
  );
};

export default Dropdown;
