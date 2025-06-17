import React from 'react'
import './navbar.css'
import navlogo from'../../assets/nav-logo.svg' 
import navprofile from '../../assets/nav-profile.svg'
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={navlogo} className='nav-logo' alt="logo" srcset="" />
     <img src ={navprofile} className='nav-profile' />
    </div>
  )
}

export default Navbar
