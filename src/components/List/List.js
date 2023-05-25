import React from "react";
import bookmarkOn from "../../images/bookmark_icon_on.png";
import bookmarkOff from "../../images/bookmark_icon_off.png";
import styles from "./List.module.css";

const List = ({
  items,
  bookmarkedItems,
  handleBookmark,
  Brand,
  Product,
  Category,
  Exhibition,
}) => {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li className={styles.item} key={`product${item.id}`}>
          <section className={styles.container}>
            <img
              className={styles.image}
              src={item.type === Brand ? item.brand_image_url : item.image_url}
              alt={item.title}
            />
            <div
              className={styles.bookmark}
              onClick={() => handleBookmark(item)}
            >
              {bookmarkedItems.includes(item) ? (
                <img src={bookmarkOn} alt="bookmarkOn" />
              ) : (
                <img src={bookmarkOff} alt="bookmarkOff" />
              )}
            </div>
          </section>
          <section className={styles.info}>
            <div className={styles.info_top}>
              {item.type === Brand && (
                <>
                  <span className={styles.brand_name}>{item.brand_name}</span>
                  <span className={styles.client}>관심고객수</span>
                </>
              )}
              {[Category, Product, Exhibition].includes(item.type) && (
                <span className={styles.title}>
                  {item.type === Category && "# "}
                  {item.title}
                </span>
              )}
              {item.type === Product && (
                <span className={styles.discount}>
                  {item.discountPercentage}%
                </span>
              )}
            </div>
            <div className={styles.info_bottom}>
              {item.type === Product && (
                <span className={styles.price}>
                  {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  원
                </span>
              )}
              {item.type === Brand && (
                <span className={styles.follower}>
                  {item.follower.toLocaleString()}명
                </span>
              )}
              {item.type === Exhibition && (
                <span className={styles.exhibition}>{item.sub_title}</span>
              )}
            </div>
          </section>
        </li>
      ))}
    </ul>
  );
};

export default List;
