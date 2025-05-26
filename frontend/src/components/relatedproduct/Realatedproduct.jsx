import React from 'react'
import './relectedproduct.css'
import Item from './../items/Item.jsx'
import data_product from '../assets/data.js'
const Realatedproduct = () => {
  return (
    <div className='realted-product'>
      <h1>Related Products</h1>
 
      <hr/>
      <div className="realtedproduct-item">
      {data_product.map((item,i) => {
        return  <Item key={item} id ={item.id} name ={item.name}
            image={item.image}
             new_price={item.new_price}
             old_price={item.old_price}/>
      })}
      </div>
    </div>
  )
}

export default Realatedproduct
