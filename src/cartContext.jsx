import React, { useState, useEffect, useContext, createContext } from "react";

export const cartContext = createContext();

export function CartCountProvider({ children }) {
    const [incartItems, setIncartItems] = useState(() => {
      const saved = localStorage.getItem("incartItems");
      return saved ? JSON.parse(saved) : [];
    });
  const incartCount = incartItems.length;

//   localStorage.clear()

  useEffect(() => {
    localStorage.setItem("incartItems", JSON.stringify(incartItems));
  }, [incartItems]);

  

  const addToCart = (product) => {
      setIncartItems((prev) => {
          const exists = prev.find((item) => item.name === product.name);
          if (exists) return prev; // already added
          return [...prev, product];
        });
        console.log("added");
  };

  const removeFromCart = (productID) => {
      setIncartItems((prev) => prev.filter((item) => item.name !== productID));
      console.log("removed");
  };
  const isInCart = (name) => {
        return incartItems.some((item) => item.name === name);
    };
      const contextValue = {
          incartCount,
          incartItems,
          addToCart,
          removeFromCart,
          isInCart,
        };
  return (
    <cartContext.Provider value={contextValue}>{children}</cartContext.Provider>
  );
}
