import { useState, useEffect, us } from "react";
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

import { AuthProvider } from "./userContext";
import ProtectedRoute from "./protectRoute";
import { SharedData } from "./sharedData";

function App() {
  const [fullname, setFullname] = useState(
    () => localStorage.getItem("fullname") || ""
  );
  const [emaill, setEmaill] = useState(
    () => localStorage.getItem("emaill") || ""
  );
  const [phone, setPhone] = useState(() => localStorage.getItem("phone") || "");
  const [address, setAddress] = useState(
    () => localStorage.getItem("address") || ""
  );

  useEffect(() => {
    localStorage.setItem("fullname", fullname);
  }, [fullname]);
  useEffect(() => {
    localStorage.setItem("emaill", emaill);
  }, [emaill]);
  useEffect(() => {
    localStorage.setItem("phone", phone);
  }, [phone]);
  useEffect(() => {
    localStorage.setItem("address", address);
  }, [address]);
  return (
    <SharedData
      value={{
        fullname,
        setFullname,
        emaill,
        setEmaill,
        phone,
        setPhone,
        address,
        setAddress,
      }}
    >
      <AuthProvider>
        <CartCountProvider>
          <div className="app-container">
            <Navbar />
            <Routes>
              <Route path="*" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/popular" element={<Popular />} />
              <Route path="/about" element={<About />} />
              <Route
                path="/cart"
                element={
                  <ProtectedRoute>
                    <Cart />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SigninPage />} />
            </Routes>
          </div>
        </CartCountProvider>
      </AuthProvider>
    </SharedData>
  );
}

export default App;
