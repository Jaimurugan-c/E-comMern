import React from 'react'
import './NewCollections.css'
import new_collections from "../assets/new_collections.js"
import Item from '../items/Item.jsx'
const NewCollections = () => {
  return (
    <div className='new-collections'>
      <h2>New Collections</h2>
      <hr/>
        <div className='collections'>
        {new_collections.map((item,index)=>{
            return <Item key={item} id ={item.id} name ={item.name}
            image={item.image}
             new_price={item.new_price}
             old_price={item.old_price}/>
        })}
        </div>
    </div>
  )
}

export default NewCollections
