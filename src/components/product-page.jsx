import React, { useState, useContext, useEffect } from "react";
import { cartContext } from "../cartContext";
import { BrowserRouter as Router, Routes, Route, data } from "react-router-dom";
import ProductCard from "./product-card";

const ProductPage = () => {
  const {
    incartItems,
    removeFromCart,
    totalPrice,
    shipping,
    totalPriceARRAY,
    productPageItem,
    setProductPageItem,
    displayProduct,
  } = useContext(cartContext);

  return (
    <div className="section product-page">
      <div className="product-page-container">
        <div className="section-title">Product Page</div>
        {productPageItem.map((product) => (
          <ProductCard
            key={product.name}
            id={product.id}
            category={product.category}
            sales={product.sales}
            rating={product.rating}
            name={product.name || ""}
            price={product.price}
          />
        ))}
        <div className="product-page-info"></div>
      </div>
    </div>
  );
};
export default ProductPage;
