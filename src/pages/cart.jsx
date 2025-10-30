import React, { useContext } from "react";
import { cartContext } from "../cartContext";
import ProductCard from "../components/product-card";
import Products from "./products";

const Cart = () => {
  const { incartItems, removeFromCart , totalPrice , shipping , totalPriceARRAY } = useContext(cartContext);
  return (
    <div className="section cart">
      <div className="cart-container">
        <div className="cart-container-content">
          <p className="section-title">Your cart</p>
          <p className="section-subtitle">Review your gear before checkout</p>
          <div className="inCart-container">
            <div className="inCart-cards-container">
              {incartItems.length == 0 && (
                <p style={{ color: "#c1c1c1", fontSize: "12px" }}>
                  no items in cart
                </p>
              )}
              {incartItems.map((product) => (
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
            </div>
            <div className="inCart-text-container">
              <div className="inCart-text-container-left">
                <span>Sum :</span>
                <br />
                <span>Estimated Shipping :</span>
                <br />
                <span>Taxes :</span>
                <br />
                <span>Total :</span>
                <br />
                <span id="incart-NEED_HELP">
                  Need help? Contact our Support Team anytime.
                </span>
              </div>
              <div className="inCart-text-container-right">
                <span>
                {
                    totalPrice >= 0 ? totalPrice.toFixed(2) : 0.00
                }
                $
                </span>
                <br />
                <span>
                {
                    shipping == 0 ? "Free" : shipping 
                }
                </span>
                <br />
                <span>Calculated at checkout</span>
                <br />
                <span>
                {
                    totalPrice >= 0 ? totalPriceARRAY.reduce((a, b) => a + b ,0).toFixed(2  ) : 0.00
                }
                $
                </span>
                <br />
                <button>Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
