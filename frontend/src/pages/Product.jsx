import { useContext } from 'react'
import React from 'react';
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext.jsx';
import Productdisplay from '../components/productdiplay/Productdisplay.jsx'
import Breadcrum from '../components/breadcrum/Breadcrum.jsx';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox.jsx';
import Realatedproduct from '../components/relatedproduct/Realatedproduct.jsx';
const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams();
  const product = all_product.find((e) => e.id ===  Number(productId))
  return (
    <div>
     <Breadcrum product={product}/>
     <Productdisplay product ={product}/>
     <DescriptionBox/>
     <Realatedproduct/>
    </div>
  )
}

export default Product
