import React, { useContext } from 'react';
import './css/shopcaterogry.css'; // ✅ ensure this filename is correct
import Item from '../components/items/Item.jsx';
import dropdown_icon from '../components/assets/dropdown_icon.png';
import { ShopContext } from '../context/ShopContext.jsx';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  const filteredProducts = all_product?.filter(
    (item) => item.category === props.category
  );

  return (
    <div className='Shop-Category'>
      <img src={props.banner} alt={`${props.category} banner`} className="shopcategory-banner" />

      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-{filteredProducts.length}</span> out of {all_product.length} products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="sort dropdown" />
        </div>
      </div>

      <div className="shopcategory-products">
        {filteredProducts.map((item, index) => (
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

      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
