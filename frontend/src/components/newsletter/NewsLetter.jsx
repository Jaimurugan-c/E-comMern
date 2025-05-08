import React from 'react'
import './newsletter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
       
      <h2>Get Exclusive Offers On Your Email</h2>
      <p>Subscribe to our newsletter and stay update!</p>
        <div>
          <input type ="email" placeholder='Enter email id'/>
          <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter
