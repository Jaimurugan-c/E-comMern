import React, { useContext } from 'react'
import './css/shopcaterogry.css'
import Item from '../components/items/Item.jsx'
import dropdown_icon from '../components/assets/dropdown_icon.png'
import {ShopContext} from '../context/ShopContext.jsx'
const ShopCategory = (props) => {
  const {all_product}= useContext(ShopContext)
  return (
    <div className='Shop-Category'>
      <img src={props.banner}  />
      <div className="shopcategory-indexsort">
        <p><span>Showing 1-12</span>
        out of 36 products</p>
      <div className="shopcategory-sort">
        Sort by <img src ={dropdown_icon}/>
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,index)=>{
         if (props.category === item.category){
            return<Item key={index} id ={item.id} name ={item.name}
            image={item.image}
             new_price={item.new_price}
             old_price={item.old_price}/>
         }
         else{
          return null;
         }
        })}
      </div>
        <div className="shopcategory-loadmore">

        </div>
    </div>
  )
}

export default ShopCategory
