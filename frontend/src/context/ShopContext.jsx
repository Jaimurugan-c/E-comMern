import React, { createContext, useState, useEffect } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [all_product, setAllProduct] = useState([]);
  const [cartItems, setCartItems] = useState({});

  // Fetch products and initialize cart
  useEffect(() => {
    fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setAllProduct(data);
        const defaultCart = {};
        data.forEach((item) => {
          defaultCart[item.id] = 0;
        });
        setCartItems(defaultCart);
      })
      .catch((err) => console.error("Failed to fetch products:", err));

    // Fetch cart if user is logged in
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/getcart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setCartItems(data.cart || {});
        })
        .catch((err) => console.error("Failed to fetch user cart:", err));
    }
  }, []);

  // Add to cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/addtocart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
        body: JSON.stringify({ id: itemId }),
      })
        .then((res) => res.json())
        .then((data) => console.log("Item added to cart:", data))
        .catch((error) => console.error("Error adding item to cart:", error));
    }
  };

  // Remove from cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/removefromcart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
        body: JSON.stringify({ id: itemId }),
      })
        .then((res) => res.json())
        .then((data) => console.log("Item removed from cart:", data))
        .catch((error) => console.error("Error removing item from cart:", error));
    }
  };

  // Calculate total items in cart
  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((total, count) => total + count, 0);
  };

  // Provide context
  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
