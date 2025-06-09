import React, { useContext } from 'react';
import './cartitems.css';
import Remove_icon from '../assets/cart_cross_icon.png';
import { ShopContext } from '../../context/ShopContext.jsx';

const Cartitems = () => {
  const { all_product, cartItems, removeFromCart } = useContext(ShopContext);

  // Calculate subtotal
  const subtotal = all_product.reduce((acc, product) => {
    return acc + (cartItems[product.id] > 0 ? product.new_price * cartItems[product.id] : 0);
  }, 0);

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
              <div className="cartitems-format cart-item-format-main">
                <img src={e.image} alt='product' className='cart-icon-producticon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='item-quantity'>{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  src={Remove_icon}
                  alt='remove'
                  className='remove-icon'
                  onClick={() => removeFromCart(e.id)}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      <div className="cartitems-down">
        <div className="cartitemtotal">
          <h2>Cart Totals</h2>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${subtotal.toFixed(2)}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>

        <div className="cartitems-promocode">
          <p>If you have a promo code, enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="Enter your promo code" />
            <button>Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitems;
