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
          <div key={product.name} className="product-page-product-card">
            <div className="top">
              <div className="left">
                <div className="product-img"></div>
              </div>
              <div className="right">
                <span>{product.category}</span>
                <p className="product-page-name">name : {product.name}</p>
                <span>sales : {product.sales}</span>
                <span>rating : {product.rating}</span>
                <span>price : {product.price} $</span>
              </div>
            </div>
            <div className="down">
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla a
                doloremque repellendus, ab harum corrupti eligendi dignissimos
                ad ex mollitia provident optio exercitationem, debitis
                recusandae soluta eveniet atque temporibus sunt.
              </span>
            </div>
          </div>
        ))}
        <div className="product-page-info"></div>
      </div>
    </div>
  );
};
export default ProductPage;
