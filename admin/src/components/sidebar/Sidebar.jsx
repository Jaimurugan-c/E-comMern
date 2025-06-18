import React from 'react';
import list_product_icon from '../../assets/Product_list_icon.svg';
import add_product_icon from '../../assets/Product_Cart.svg';
import { Link } from 'react-router-dom';
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/addproduct" className="sidebar-link">
        <div className="sidebar-item">
          <img src={add_product_icon} alt="Add Product" />
          <p>Add Product</p>
        </div>
      </Link>

      <Link to="/listproduct" className="sidebar-link">
        <div className="sidebar-item">
          <img src={list_product_icon} alt="Product List" />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
