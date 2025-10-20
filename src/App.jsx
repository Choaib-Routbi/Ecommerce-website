import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, data } from "react-router-dom";
import "./index.css";

import Home from "./pages/home";
import Collections from "./pages/collections";
import Products from "./pages/products";
import Popular from "./pages/popular";
import About from "./pages/about";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
