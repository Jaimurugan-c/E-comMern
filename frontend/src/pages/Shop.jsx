import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/hero/Hero'
import Popular from '../components/popular/Popular'
import Offers from '../components/offers/Offers'
import NewCollections from '../components/NewCollections/NewCollections'
import NewsLetter from '../components/newsletter/NewsLetter'

const Shop = () => {
  return (
    <div>
     <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
     <NewsLetter/>
   </div>
  )
}

export default Shop
