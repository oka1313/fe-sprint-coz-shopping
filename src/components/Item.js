import React from "react";
import bookmarkOn from "../images/bookmark_icon_on.png";
import bookmarkOff from "../images/bookmark_icon_off.png";

const Item = ({ items, bookmarkedButton, handleBookmark }) => {
  return (
    <div>
      <ul className="item-list">
        {items.map((item) => (
          <li className="item" key={item.id}>
            <section className="item-container">
              <img
                className="item-image"
                src={
                  item.type === "Brand" ? item.brand_image_url : item.image_url
                }
                alt={item.title}
              />
              <div
                className="item-bookmark"
                onClick={() => handleBookmark(item)}
              >
                {bookmarkedButton.includes(item) ? (
                  <img src={bookmarkOn} alt="bookmarkOn" />
                ) : (
                  <img src={bookmarkOff} alt="bookmarkOff" />
                )}
              </div>
            </section>
            <section className="item-info">
              <div className="item-info-top">
                {item.type === "Brand" ? (
                  <span className="item-brand-name">{item.brand_name}</span>
                ) : item.type === "Category" ? (
                  <span className="item-title"># {item.title}</span>
                ) : (
                  <span className="item-title">{item.title}</span>
                )}
                {item.type === "Brand" ? (
                  <span className="item-client">관심고객수</span>
                ) : null}
                {item.type === "Product" ? (
                  <span className="item-discount">
                    {item.discountPercentage}%
                  </span>
                ) : null}
              </div>
              <div className="item-info-bottom">
                {item.type === "Product" ? (
                  <span className="item-price">
                    {item.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    원
                  </span>
                ) : null}
                {item.type === "Brand" ? (
                  <span className="item-follower">
                    {item.follower.toLocaleString()}명
                  </span>
                ) : null}
                {item.type === "Exhibition" ? (
                  <span className="item-exhibition">{item.sub_title}</span>
                ) : null}
              </div>
            </section>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Item;
