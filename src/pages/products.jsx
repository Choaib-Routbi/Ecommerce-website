import { useState, useEffect } from "react";
import ProductCard from "../components/product-card";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    // fetch("https://my.api.mockaroo.com/tech_products_json.json?key=dc8d0e20")
    fetch("https://mocki.io/v1/d82301eb-3c05-40dc-8c03-04af494527c8")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  const filtredProducts = products.filter((product) =>
    product.name?.toLowerCase().includes(input.toLowerCase())
  );

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
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="products-search-btn">search</button>
          </div>
        </div>
        <div className="products-grid">
          {filtredProducts.map((product) => (
            <ProductCard
              key={product.id}
              category={product.category}
              sales={product.sales}
              rating={product.rating}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Products;
