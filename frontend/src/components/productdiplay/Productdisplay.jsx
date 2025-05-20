import React from 'react'
import './productdisplay.css'
import star_dull from '../assets/star_dull_icon.png'
import star_icon from '../assets/star_icon.png'
const Productdisplay = (props) => {
    const {product} = props;
  return (
    <div className='productdisplay'>   
       <div className="productdisplay-left">
           <div className="productdisplay-img-list">
            <img src={product.image}/>
              <img src={product.image}/>
                <img src={product.image}/>
                  <img src={product.image}/>
           </div>
              <div className="productdisplay-img">
                <img className='productdisplay-main-img' 
                src={product.image}/>
                </div>
       </div>
       <div className="productdisplay-right">
          <h1>{product.name}</h1>
          <div className="productdisplay-right-star">
            <img src={star_icon}/>
              <img src={star_icon}/>
                <img src={star_icon}/>
                  <img src={star_icon}/>
                  <img src= {star_dull}/>
                  <p>(143)</p>
          </div>
       </div>
    </div>
  )
}

export default Productdisplay
