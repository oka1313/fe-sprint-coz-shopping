import React from "react";
import product from "../images/product_icon.png";
import bookmark from "../images/bookmark_icon.png";
import { useNavigate } from "react-router-dom";

const Dropdown = () => {
  const navigate = useNavigate();

  return (
    <section className="dropdown">
      <div className="dropdown-list">김다미님, 안녕하세요!</div>
      <div
        onClick={() => {
          navigate("/products/list");
        }}
        className="dropdown-list"
      >
        <img className="product-dropdown-icon" src={product} alt="product" />
        상품리스트 페이지
      </div>
      <div
        onClick={() => {
          navigate("/bookmark");
        }}
        className="dropdown-list"
      >
        <img className="bookmark-dropdown-icon" src={bookmark} alt="bookmark" />
        북마크 페이지
      </div>
    </section>
  );
};

export default Dropdown;
