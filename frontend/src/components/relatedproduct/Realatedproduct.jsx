import React from 'react';
import './relectedproduct.css';
import Item from './../items/Item.jsx';
import data_product from '../assets/data.js';

const RelatedProduct = () => {
  return (
    <div className='related-product'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproduct-item">
        {data_product.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
