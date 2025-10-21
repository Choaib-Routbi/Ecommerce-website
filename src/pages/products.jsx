import { useState, useEffect } from "react";
import ProductCard from "../components/product-card";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://my.api.mockaroo.com/tech_products_json.json?key=dc8d0e20")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  return (
    <div className="section products">
      <div className="products-container">
        <div className="products-section-banner">
          <span className="section-title">Our Products</span>
          <p className="section-subtitle">
            High-performance gear built for gamers, creators, and everyday
            legends.
          </p>
          <div className="products-search-container">
            <input
              placeholder="search for products ... "
              className="pruducts-search-input"
              id="pruducts-search-input"
            />
            <button className="products-search-btn">search</button>
          </div>
        </div>
        <div className="products-grid">
          {products.length == 0 ? (
            <p>Loading ...</p>
          ) : (
            products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                category={product.category}
                price={product.price}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export default Products;
