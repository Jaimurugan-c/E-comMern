import React, { useEffect, useState } from 'react';
import './NewCollections.css';
import Item from '../items/Item.jsx';

const NewCollections = () => {
  const [new_collection, setNew_Collection] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/newcollections')
      .then((res) => res.json())
      .then((data) => {
        setNew_Collection(data);
      })
      .catch((err) => console.error("Failed to fetch new collections:", err));
  }, []);

  return (
    <div className='new-collections'>
      <h2>New Collections</h2>
      <hr />
      <div className='collections'>
        {new_collection.map((item) => (
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

export default NewCollections;
