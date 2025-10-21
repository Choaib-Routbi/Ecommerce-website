import { useState, useEffect } from "react";
import ProductCard from "../components/product-card";
import Products from "./products";

const Popular = () => {
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
    <div className="section topSales">
      <div className="topSales-container">
        <div className="subsection BestSellers-container">
          <div className="subsection-heading">
            <span className="title">Best Sellers</span>
            <p className="subtitle">
              Our most popular products — trusted by thousands of customers
            </p>
          </div>
          <div className="subsection-cards">
            {products.map((product) =>
              product.sales >= 1800 ? (
                <ProductCard
                  category={product.category}
                  sales={product.sales}
                  name={product.name || ""}
                  key={product.id}
                  price={product.price}
                />
              ) : null
            )}
          </div>
        </div>
        <div className="subsection TopRated-container">
          <div className="subsection-heading">
            <span className="title">Top Rated</span>
            <p className="subtitle">
              Highest-rated products, loved by real customers
            </p>
          </div>
          <div className="subsection-cards">
            {products.map((product) =>
              product.rating >= 4.5 ? (
                <ProductCard
                  category={product.category}
                  rating={product.rating}
                  key={product.id}
                  name={product.name}
                  price={product.price}
                />
              ) : null
            )}
          </div>
        </div>
        <div className="subsection NewArrivals-container">
          <div className="subsection-heading">
            <span className="title">New Arrivals</span>
            <p className="subtitle">
              Just dropped — discover the latest in our collection
            </p>
          </div>
          <div className="subsection-cards">
            {products
              .filter((product) => {
                const createdAt = new Date(product.createdAt);
                const now = new Date();
                const diffInMs = now - createdAt;
                const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
                return diffInDays
              })
              .map((product) => (
                diffInDays <= 10   ?
                <ProductCard
                  key={product.id}
                  createdAt={product.createdAt}
                  category={product.category}
                  rating={product.rating}
                  name={product.name}
                  price={product.price}
                /> : <div>!!!!!!!</div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Popular;
