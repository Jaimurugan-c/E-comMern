import React from 'react'
import './popular.css'
import Item from '../items/Item.jsx'
import data from '../assets/data.js'
const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN's</h1>
      <hr/>
      <div className="popular-item">
        {data.map((item)=>{
          return <Item key={item} id ={item.id} name ={item.name}
           image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular
