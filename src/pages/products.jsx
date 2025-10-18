import { useState } from "react";
import ProductCard from "../components/product-card";

const Products = () => {
  return (
    <div className="section products">
      <div className="products-container">
        <div className="products-section-banner">
          <span className="section-title">Our Products</span>
          <p className="section-subtitle">High-performance gear built for gamers, creators, and everyday legends.</p>
          <div className="products-search-container">
            <input
              placeholder="search for products ... "
              className="pruducts-search-input"
              id="pruducts-search-input"/>
            <button className="products-search-btn">search</button>
          </div>
        </div>
        <div className="products-grid">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </div>
    </div>
  );
};
export default Products;
