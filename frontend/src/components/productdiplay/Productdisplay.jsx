import React, { useContext } from 'react';
import './productdisplay.css';
import star_dull from '../assets/star_dull_icon.png';
import star_icon from '../assets/star_icon.png';
import { ShopContext } from '../../context/ShopContext';

const Productdisplay = (props) => {
  const { product } = props;
  const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="product" />
          <img src={product.image} alt="product" />
          <img src={product.image} alt="product" />
          <img src={product.image} alt="product" />
        </div>
        <div className="productdisplay-img">
          <img
            className='productdisplay-main-img'
            src={product.image}
            alt="main product"
          />
        </div>
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>

        <div className="productdisplay-right-star">
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_dull} alt="star dull" />
          <p>(143)</p>
        </div>

        <div className="product-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>

        <div className="productdisplay-right-des">
          A stylish and comfortable dress perfect for any occasion. Made from
          high-quality materials, it offers a flattering fit and elegant
          design, ensuring you look your best whether at a casual outing or a
          special event.
        </div>

        <div className="productdisplay-right-size">
          <h2>Select Size</h2>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>

        <button onClick={()=>{addToCart(product.id)}}>Add to cart</button>

        <p className='productdisplay-right-category'>
          <span>Category :</span> Women, T-shirt, CropTop
        </p>
        <p className='productdisplay-right-category'>
          <span>Tags :</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default Productdisplay;
