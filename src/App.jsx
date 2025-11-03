import { useState, useEffect, useContext } from "react";
import { CartCountProvider } from "./cartContext";
import { BrowserRouter as Router, Routes, Route, data } from "react-router-dom";
import "./index.css";

import Navbar from "./components/navbar";
import Home from "./pages/home";
import Collections from "./pages/collections";
import Products from "./pages/products";
import Popular from "./pages/popular";
import About from "./pages/about";
import Cart from "./pages/cart";
import Profile from "./pages/profile";
import LoginPage from "./pages/loginPage";
import SigninPage from "./pages/signupPage";

function App() {
  return (
    <CartCountProvider>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SigninPage />} />
        </Routes>
      </div>
    </CartCountProvider>
  );
}

export default App;
