import React, { useContext } from 'react';
import './cartitems.css';
import Remove_icon from '../assets/cart_cross_icon.png';
import { ShopContext } from '../../context/ShopContext.jsx';

const Cartitems = () => {
  const { all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className='cartitems'>
      <div className="cart-item-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className=" cartitems-format cart-item-format-main">
                <img src={e.image} alt='img' className='cart-icon-producticon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='item-quantity'>{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img src={Remove_icon} alt='img' onClick={() => removeFromCart(e.id)} />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
    </div>
  );clea
  r
};

export default Cartitems;
