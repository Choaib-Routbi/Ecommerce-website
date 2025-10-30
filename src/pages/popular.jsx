import { useState, useEffect , useRef } from "react";
import ProductCard from "../components/product-card";
import Products from "./products";

const Popular = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // fetch("https://my.api.mockaroo.com/tech_products_json.json?key=dc8d0e20")
    fetch("https://mocki.io/v1/e6889e03-1424-49ea-9332-44a42d20b677")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  //x-axis scroll carousel
    const sliderRef = useRef(null);
    const scroll = (direction) =>{
      const container = sliderRef.current;
      const scrollAmount = container.clientWidth * 0.2;
      container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
    }
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
          <div className="subsection-carousel-container">
          <svg
            onClick={() => scroll("left")}
            className="arrow left"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com
            License - https://fontawesome.com/license/free Copyright 2025
            Fonticons, Inc
            <path d="M73.4 297.4C60.9 309.9 60.9 330.2 73.4 342.7L233.4 502.7C245.9 515.2 266.2 515.2 278.7 502.7C291.2 490.2 291.2 469.9 278.7 457.4L173.3 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L173.3 288L278.7 182.6C291.2 170.1 291.2 149.8 278.7 137.3C266.2 124.8 245.9 124.8 233.4 137.3L73.4 297.3z" />
          </svg>
          <div className="subsection-cards" ref={sliderRef}>
            {products.map((product) =>
              (product.sales >= 1800 && product.rating == "★★★★☆") ||
              product.rating == "★★★★★" ? (
                <ProductCard
                  key={product.id}
                  category={product.category}
                  sales={product.sales}
                  rating={product.rating}
                  name={product.name || ""}
                  price={product.price}
                />
              ) : null
            )}
          </div>
          <svg
            onClick={() => scroll("right")}
            className="arrow right"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com
            License - https://fontawesome.com/license/free Copyright 2025
            Fonticons, Inc
            <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" />
          </svg>
          </div>
          <span className="carousel-swip-msg">swip left or right to discover</span>
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
              product.rating == "★★★★☆" || product.rating == "★★★★★" ? (
                <ProductCard
                  key={product.id}
                  category={product.category}
                  sales={product.sales}
                  rating={product.rating}
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
                const createdAt = new Date(product.createdAT);
                const now = new Date();
                const diffInMs = now - createdAt;
                const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
                return diffInDays <= 300; // created in last x days
              })
              .map((product) =>
                product.sales <= 300 ? (
                  <ProductCard
                    key={product.id}
                    category={product.category}
                    createdAt={" - new"}
                    sales={product.sales}
                    name={product.name}
                    price={product.price}
                  />
                ) : null
              )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Popular;
