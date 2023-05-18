import React, { useState } from "react";
import styles from "./ProductsListPage.module.css";
import Nav from "../../components/Nav/Nav";
import ProductsList from "../../components/ProductsList/ProductsList";

const ProductsListPage = ({ items }) => {
  const [bookmarkedItems, setBookmarkedItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items); // 필터링된 아이템 상태 추가

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

  const handleFilter = (label) => {
    // 선택된 아이템으로 필터링된 아이템 업데이트
    if (label === "All") {
      setFilteredItems(items);
    } else {
      const filtered = items.filter((item) => item.type === label);

      setFilteredItems(filtered);
    }
  };

  return (
    <main>
      <section className={styles.nav_container}>
        <Nav handleFilter={handleFilter} />
      </section>
      <section className={styles.products_list_container}>
        <ProductsList
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

export default ProductsListPage;
