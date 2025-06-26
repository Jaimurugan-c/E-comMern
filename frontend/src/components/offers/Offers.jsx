import React from 'react';
import './offer.css';
import exclusive_image from '../assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h2>EXCLUSIVE</h2>
        <h2>Offers for You</h2>
        <p>Only on Bestsellers</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="Exclusive offers banner" />
      </div>
    </div>
  );
};

export default Offers;
