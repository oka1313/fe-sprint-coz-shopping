import React from "react";
import product from "../images/product_icon.png";
import bookmark from "../images/bookmark_icon.png";

const Dropdown = () => {
  return (
    <div className="dropdown">
      <div className="dropdown-list">김다미님, 안녕하세요!</div>
      <div className="dropdown-list">
        <img className="product" src={product} alt="product" />
        상품리스트 페이지
      </div>
      <div className="dropdown-list">
        <img className="bookmark" src={bookmark} alt="bookmark" />
        북마크 페이지
      </div>
    </div>
  );
};

export default Dropdown;
