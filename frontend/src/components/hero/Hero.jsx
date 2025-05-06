import React from 'react'
import hand_icon from '../assets/hand_icon.png'
import arrow from '../assets/arrow.png'
import hero_image from '../assets/hero_image.png'
 import './hero.css'
const Hero = () => {
  return (
    <div className='hero'>
     <div className="hero-left">
      <h2>New Arrivals Only</h2>
     <div>
      <div className="hero-hand-icon">
        <p>New</p>
        <img src={hand_icon} alt="img"  />
      </div>
      <p>Collection</p>
      <p>For Everyone</p>
     </div>
     <div className="hero-latest-btn">
      <div>
        Latest collection
      </div>
    <img src ={arrow}/>
     </div>
     </div>
     <div className="hero-right">
        <img src ={hero_image}/>
     </div>
    </div>
  )
}

export default Hero
