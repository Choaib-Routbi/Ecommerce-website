import React, { useState, useContext } from "react";
import { cartContext } from "../cartContext";
import { useEffect } from "react";

const ProductCard = ({
  brand,
  category,
  currency,
  id,
  model,
  model_code,
  name,
  price,
  rating,
  short_description,
  createdAt,
  sales,
}) => {
  
  const [inCart, setInCart] = useState(false);
  const inCartTRUE = "in cart";
  const inCartTRUE_class = "card-addtocartBtn-inCART";
  const inCartFALSE = "add to cart";
  const inCartFALSE_class = "card-addtocartBtn";
  
  const { upCount, downCount , addToCart , removeFromCart} = useContext(cartContext);
  const cardBtnClicked = (product) => {
    setInCart((prev) => !prev);
    if (!inCart) {
      upCount();
    addToCart(product);
  } else {
    downCount();
    removeFromCart(product.id);
  }
    // inCart ? downCount() + removeFromCart() : upCount() + addToCart();
  };

  return (
    <div className="product-card">
      <div className="card-img">
        <div className="card-img-child"></div>
      </div>
      <div className="card-infos">
        <div className="card-text">
          <div className="card-titles">
            <div className="card-property">
              <div className="card-product-category card-property">
                {category + " " + `${createdAt ?? ""}` || "category"}
              </div>
              <div className="card-product-sales card-property">
                {sales ? `sales : ${sales ?? ""}` : ""}
              </div>
              <div className="card-product-rating card-property">
                {rating ? "rating :" : ""}
                <span className="card-product-rating-star">
                  {rating ? ` ${rating ?? ""} ` : ""}
                </span>
              </div>
            </div>
            {/* <div className="card-product-createdAt">
              {createdAt} 
            </div> */}
            <div className="card-product-name">
              {name == null ? "product name" : name}
            </div>
          </div>
          <div className="card-price">{price || "price"}$</div>
        </div>
        <div className="card-btns">
          <button
            onClick={cardBtnClicked}
            className={inCart ? inCartTRUE_class : inCartFALSE_class}
          >
            {inCart ? inCartTRUE : inCartFALSE}
          </button>
          <svg
            className="card-likeBtn"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
          >
            Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com
            License - https://fontawesome.com/license/free Copyright 2025
            Fonticons, Inc.
            <path d="M305 151.1L320 171.8L335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1L576 231.7C576 343.9 436.1 474.2 363.1 529.9C350.7 539.3 335.5 544 320 544C304.5 544 289.2 539.4 276.9 529.9C203.9 474.2 64 343.9 64 231.7L64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1z" />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
