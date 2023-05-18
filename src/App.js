import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import ProductsListPage from "./pages/ProductsListPage/ProductsListPage";
import BookmarkPage from "./pages/BookmarkPage";
import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products?")
      .then((response) => setItems(response.data))
      .catch((error) => console.error(error));
  }, []);

  const sliceItems = items.slice(0, 4);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage sliceItems={sliceItems} />} />
        <Route
          path="/products/list"
          element={<ProductsListPage items={items} />}
        />
        <Route path="/bookmark" element={<BookmarkPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
