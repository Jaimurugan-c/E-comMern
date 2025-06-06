import React, { createContext, useState } from "react";
import all_product from '../components/assets/all_product.js';

export const ShopContext = createContext(null);
   const getDefaultCart = () => {
        let cart ={};
        for(let index= 0; index < all_product.length+1; index++){
            cart[index]= 0;
             
        }
        return cart;
     }
export const ShopContextProvider = (props) => {
     const [cartItems,setCartItems] = useState(getDefaultCart()); ;
  
      

    const addToCart =(itemId)=>{
            setCartItems
            ((prev)=>({...prev,[itemId]: prev[itemId] + 1}));
           
        }

    const removeFromCart =(itemId)=>{
            setCartItems
            ((prev)=>({...prev,[itemId]: prev[itemId] - 1}));
    }
      const contextValue = 
      { all_product,cartItems,addToCart,removeFromCart };
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

