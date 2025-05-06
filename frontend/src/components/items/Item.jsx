import React from 'react'
import './item.css'
const Item = (props) => {
  return (
    <div className='item'>
   <img src={props.image}/>
   <p>{props.name}</p>
   <div className="item-prices">
     <div className="iteem-price-new">
      {props.new_price}
     </div>
     <div className="iteem-price-old">
     {props.old_price}
     </div>
   </div>
    </div>
  )
}

export default Item
