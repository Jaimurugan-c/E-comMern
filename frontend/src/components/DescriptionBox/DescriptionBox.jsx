import React from 'react';
import './Descript.css';

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigation">
        <div className="descriptionbox-nav-box active">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (130)</div>
      </div>
      <div className="descriptionbox-content">
        <p>
          This dress is crafted from high-quality, breathable fabric, offering both comfort and style. Its elegant design makes it perfect for any occasion, whether casual or formal. The dress features a flattering fit, modern silhouette, and attention to detail, ensuring you look your best wherever you go.
        </p>
        <p>
          The dress is available in a variety of colors and sizes, catering to different tastes and body types. Its versatile nature allows for easy pairing with various accessories, making it a must-have addition to your wardrobe. Experience the perfect blend of fashion and functionality with this stunning dress.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
