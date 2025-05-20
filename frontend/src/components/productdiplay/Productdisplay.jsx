import React from 'react'
import './productdisplay.css'
const Productdisplay = (props) => {
    const {product} = props
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

       </div>
    </div>
  )
}

export default Productdisplay
