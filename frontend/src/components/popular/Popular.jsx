import React, { useEffect, useState } from 'react';
import './popular.css';
import Item from '../items/Item.jsx';

const Popular = () => {
  const [popularItems, setPopularItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/popularinwomen')
      .then((res) => res.json())
      .then((data) => {
        setPopularItems(data);
      })
      .catch((err) => console.error("Error fetching popular items:", err));
  }, []);

  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN'S</h1>
      <hr />
      <div className="popular-item">
        {popularItems.map((item) => (
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

export default Popular;
