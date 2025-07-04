import React, { useContext } from 'react';
import './productdisplay.css';
import star_dull from '../assets/star_dull_icon.png';
import star_icon from '../assets/star_icon.png';
import { ShopContext } from '../../context/ShopContext';

const Productdisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);

  if (!product) return <div>Loading product...</div>;

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {[1, 2, 3, 4].map((i) => (
            <img key={i} src={product.image} alt={`product view ${i}`} />
          ))}
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
          {[1, 2, 3, 4].map((i) => (
            <img key={i} src={star_icon} alt="star" />
          ))}
          <img src={star_dull} alt="star dull" />
          <p>(143)</p>
        </div>

        <div className="productdisplay-right-prices">
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
          design—ensuring you look your best whether at a casual outing or a
          special event.
        </div>

        <div className="productdisplay-right-size">
          <h2>Select Size</h2>
          <div className="productdisplay-right-sizes">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <div key={size}>{size}</div>
            ))}
          </div>
        </div>

        <button onClick={() => addToCart(product.id)}>Add to cart</button>

        <p className='productdisplay-right-category'>
          <span>Category :</span> {product.category || "Women, T-shirt, CropTop"}
        </p>
        <p className='productdisplay-right-category'>
          <span>Tags :</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default Productdisplay;
