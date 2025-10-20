import { useState } from "react";
import ProductCard from "../components/product-card";


const Popular = () => {
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
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            
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
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            
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
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default Popular;
