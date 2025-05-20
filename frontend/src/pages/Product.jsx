import { useContext } from 'react'
import React from 'react';
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext.jsx';
import Breadcrum from '../components/breadcrumb/Breadcrum.jsx'
import Productdisplay from '../components/productdiplay/Productdisplay.jsx';
const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams();
  const product = 
  all_product.find((e) => e.id === Number(productId))
  return (
    <div>
     <Breadcrum product ={product}/>
     <Productdisplay/>
    </div>
  )
}

export default Product
