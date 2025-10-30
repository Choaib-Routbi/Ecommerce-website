import React, { useState, useEffect, useContext, createContext } from "react";

export const cartContext = createContext();

export function CartCountProvider({ children }) {
    const [incartItems, setIncartItems] = useState(() => {
      const saved = localStorage.getItem("incartItems");
      return saved ? JSON.parse(saved) : [];
    });
    const incartCount = incartItems.length;
    let shipping  
    if (incartItems.length <= 1) {
        shipping = 0
    }else if(incartItems.length <= 5){
        shipping = 10
    }else if(incartItems.length <= 10){
        shipping = 20
    }else {
        shipping = 30
    }
    const [totalPrice, setTotalPrice] = useState(() => {
        const saved = localStorage.getItem("totalPrice");
        return saved ? JSON.parse(saved) : 0;
    });
    
    //   localStorage.clear()

    const totalPriceARRAY = [shipping, totalPrice]
    
  useEffect(() => {
    localStorage.setItem("incartItems", JSON.stringify(incartItems));
  }, [incartItems]);

  useEffect(() => {
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
  }, [totalPrice]);

  const ADDtotalPriceCount = (price) =>{
    setTotalPrice(prev => prev + price )
  }

  const REMOVEtotalPriceCount = (price) =>{
    setTotalPrice(prev => prev - price )
  }

  const addToCart = (product) => {
    setIncartItems((prev) => {
        const exists = prev.find((item) => item.name === product.name )
        
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
          ADDtotalPriceCount,
          REMOVEtotalPriceCount,
          totalPrice,
          shipping,
          totalPriceARRAY
        };
  return (
    <cartContext.Provider value={contextValue}>{children}</cartContext.Provider>
  );
}
