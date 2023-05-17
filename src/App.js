import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import ProductsListPage from "./pages/ProductsListPage";
import BookmarkPage from "./pages/BookmarkPage";
import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products?count=4")
      .then((response) => setItems(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage items={items} />} />
        <Route path="/products/list" element={<ProductsListPage />} />
        <Route path="/bookmark" element={<BookmarkPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
