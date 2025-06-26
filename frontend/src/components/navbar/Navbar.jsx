import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';
import './navbar.css';
import { ShopContext } from '../../context/ShopContext.jsx';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const shopContext = useContext(ShopContext);
  const getTotalCartItems = shopContext?.getTotalCartItems || (() => 0);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.replace('/');
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Shopy Logo" />
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <p>shopy</p>
        </Link>
      </div>

      <ul className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            Shop
          </Link>
          {menu === "shop" && <hr />}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link to="/mens" style={{ textDecoration: 'none', color: 'black' }}>
            Men's
          </Link>
          {menu === "mens" && <hr />}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link to="/womens" style={{ textDecoration: 'none', color: 'black' }}>
            Women's
          </Link>
          {menu === "womens" && <hr />}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids" style={{ textDecoration: 'none', color: 'black' }}>
            Kid's
          </Link>
          {menu === "kids" && <hr />}
        </li>
      </ul>

      <div className="nav-login-cart">
        {localStorage.getItem("token") ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <button>Login</button>
          </Link>
        )}

        <Link to="/cart" style={{ textDecoration: 'none' }}>
          <img src={cart_icon} alt="Cart Icon" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
