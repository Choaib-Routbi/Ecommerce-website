import React, { useState, useEffect, useContext, createContext } from "react";
import { useAuth } from "./userContext";
import { login } from "./auth/authServices";

import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

export const cartContext = createContext();

export function CartCountProvider({ children }) {
const {user} = useAuth()
// console.log(user.uid);

const userId = user?.uid || "guest";

  const [incartItems, setIncartItems] = useState(() => {
    const saved = localStorage.getItem(`incartItems_${userId}`); 
    return saved ? JSON.parse(saved) : [];
  });


      useEffect(() => {
    if (!user) return;

    const cartRef = doc(db, "carts", user.uid);

    const loadAndSyncCart = async () => {
      try {
        const snap = await getDoc(cartRef);
        if (snap.exists()) {
          const data = snap.data();
          if (data.items) setIncartItems(data.items);
          if (data.totalPrice) setTotalPrice(data.totalPrice);
        } else {
          await setDoc(cartRef, { items: [], totalPrice: 0 });
        }
      } catch (err) {
        console.error("Error syncing cart:", err);
      }
    };

    loadAndSyncCart();
  }, [user]);


  const incartCount = incartItems.length;

  let shipping;
  if (incartItems.length <= 1) {
    shipping = 0;
  } else if (incartItems.length <= 5) {
    shipping = 10;
  } else if (incartItems.length <= 10) {
    shipping = 20;
  } else {
    shipping = 30;
  }
   const [totalPrice, setTotalPrice] = useState(() => {
    const saved = localStorage.getItem(`totalPrice_${userId}`); 
    return saved ? JSON.parse(saved) : 0;
  });

    // localStorage.clear()

  const totalPriceARRAY = [shipping, totalPrice];

  useEffect(() => {
    localStorage.setItem(`incartItems_${userId}`, JSON.stringify(incartItems)); 
  }, [incartItems, userId]);

  useEffect(() => {
    localStorage.setItem(`totalPrice_${userId}`, JSON.stringify(totalPrice)); 
  }, [totalPrice, userId]);

useEffect(() => {
  if (!user) return;

  //guard values
  const safeItems = Array.isArray(incartItems) ? incartItems : [];
  const safeTotal = typeof totalPrice === "number" ? totalPrice : 0;

  const cartRef = doc(db, "carts", user.uid);

  setDoc(cartRef, { items: safeItems, totalPrice: safeTotal }, { merge: true })
    .catch((err) => console.error("Error saving cart:", err));
}, [incartItems, totalPrice, user]);



deleteDoc 


  const ADDtotalPriceCount = (price) => {
    setTotalPrice((prev) => prev + price);
  };

  const REMOVEtotalPriceCount = (price) => {
    setTotalPrice((prev) => prev - price);
  };

  const addToCart = (product) => {
    setIncartItems((prev) => {
      const exists = prev.find((item) => item.name === product.name);

      if (exists) return prev; 
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
    totalPriceARRAY,
  };
  return (
    <cartContext.Provider value={contextValue}>{children}</cartContext.Provider>
  );
}
