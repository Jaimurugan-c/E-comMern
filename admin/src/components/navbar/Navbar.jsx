import React from 'react'
import './navbar.css'
import navlogo from '../../assets/nav-logo.svg'
import navprofile from '../../assets/nav-profile.svg'
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={navlogo} alt="logo" className='navlogo' />
      <img src={navprofile} alt="logo" className='navprofile' />
    </div>
  )
}

export default Navbar
