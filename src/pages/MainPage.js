import React, { useState } from "react";
import Item from "../components/Item";
import Bookmark from "../components/Bookmark";

const MainPage = ({ items }) => {
  // 이전에 북마크된 항목들의 배열(bookmarkedButton)을 가져온다.
  const [bookmarkedButton, setBookmarkedButton] = useState([]);

  const handleBookmark = (item) => {
    setBookmarkedButton((bookmarkedButton) => {
      // 만약 이전에 북마크된 항목들의 배열에 현재 항목의 ID(itemId)가 포함되어 있다면,
      if (bookmarkedButton.includes(item)) {
        // 해당 항목을 배열에서 제거하여 북마크를 해제한다.
        return bookmarkedButton.filter((id) => id !== item);
      }
      // 그렇지 않으면 (현재 항목의 ID가 이전에 북마크된 항목들의 배열에 없다면),
      else {
        // 현재 항목의 ID를 배열에 추가하여 북마크를 설정합니다.
        return [...bookmarkedButton, item];
      }
    });
  };

  return (
    <div className="main-page">
      <section className="product-wrapper">
        <div className="product-list-title">상품 리스트</div>
        <Item
          key={items.id}
          items={items}
          bookmarkedButton={bookmarkedButton}
          handleBookmark={handleBookmark}
        />
      </section>
      <section className="bookmark-wrapper">
        <div className="bookmark-list-title">북마크 리스트</div>
        <Bookmark
          items={items}
          bookmarkedButton={bookmarkedButton}
          handleBookmark={handleBookmark}
        />
      </section>
    </div>
  );
};

export default MainPage;
