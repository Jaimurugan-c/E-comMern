import React, { useEffect, useState } from 'react';
import './listproduct.css';
import Cross_icon from '../../assets/cross_icon.png';

const Listproduct = () => {
  const [allproducts, setAllproducts] = useState([]);

  const fetchInfo = async () => {
    try {
      const res = await fetch('http://localhost:4000/allproducts');
      const data = await res.json();
      setAllproducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeProduct = async (id) => {
    try {
      await fetch('http://localhost:4000/removeproduct', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
      });
      await fetchInfo();
    } catch (error) {
      console.error('Error removing product:', error);
    }
  };

  return (
    <div className="listproduct">
      <h1>All Products List</h1>

      <div className="listproduct-format">
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>

      <div className="listproduct-allproduct">
        <hr />
        {allproducts.map((product, index) => (
          <React.Fragment key={index}>
            <div className="listproduct-format-main listproduct-format">
              <img src={product.image} alt="product" className="listproduct-product" />
              <p>{product.name}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p>{product.category}</p>
              <img
                src={Cross_icon}
                alt="remove"
                className="listproduct-remove-icon"
                onClick={() => removeProduct(product.id)}
              />
            </div>
            <hr />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Listproduct;
