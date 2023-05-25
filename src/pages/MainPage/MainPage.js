import React, { useEffect, useState } from "react";
import Item from "../../components/Item/Item";
import Bookmark from "../../components/Bookmark/Bookmark";
import List from "../../components/List/List";
import styles from "./MainPage.module.css";

const MainPage = ({ sliceItems }) => {
  // 이전에 북마크된 항목들의 배열(bookmarkedItems)을 가져온다.
  const [bookmarkedItems, setBookmarkedItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const Brand = "Brand"; // 실수하기 쉬운 문자열 상수화하기
  const Product = "Product";
  const Category = "Category";
  const Exhibition = "Exhibition";

  const handleBookmark = (item) => {
    setBookmarkedItems((bookmarkedItems) => {
      // 만약 이전에 북마크된 항목들의 배열에 현재 항목의 item이 포함되어 있다면,
      if (bookmarkedItems.includes(item)) {
        // 해당 항목을 배열에서 제거하여 북마크를 해제한다.
        return bookmarkedItems.filter((id) => id !== item);
      }
      // 그렇지 않으면 (현재 항목의 item가 이전에 북마크된 항목들의 배열에 없다면),
      else {
        // 현재 항목의 item을 배열에 추가하여 북마크를 설정합니다.
        return [...bookmarkedItems, item];
      }
    });
  };

  useEffect(() => {
    const updatedItems = sliceItems.filter((item) =>
      bookmarkedItems.includes(item)
    );
    setFilteredItems(updatedItems);
    localStorage.setItem("filteredItems", JSON.stringify(updatedItems));
  }, [sliceItems, bookmarkedItems]);

  useEffect(() => {
    const storedItems = localStorage.getItem("filteredItems");
    if (storedItems) {
      const parsedItems = JSON.parse(storedItems);
      setFilteredItems(parsedItems);
    }
  }, []);

  return (
    <main>
      <section className={styles.product_container}>
        <div className={styles.product_list_title}>상품 리스트</div>
        <List
          key={sliceItems.id}
          items={sliceItems}
          bookmarkedItems={bookmarkedItems}
          handleBookmark={handleBookmark}
          Brand={Brand}
          Product={Product}
          Category={Category}
          Exhibition={Exhibition}
        />
      </section>
      <section className={styles.bookmark_container}>
        <div className={styles.bookmark_list_title}>북마크 리스트</div>
        <List
          key={filteredItems.id}
          items={filteredItems}
          bookmarkedItems={bookmarkedItems}
          handleBookmark={handleBookmark}
          Brand={Brand}
          Product={Product}
          Category={Category}
          Exhibition={Exhibition}
        />
      </section>
    </main>
  );
};

export default MainPage;
