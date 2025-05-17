import React from 'react'
import { Link } from 'react-router-dom'
import './css/loginsignup.css'
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Signup</h1>
        <div className="loginsignup-fiel">
          <input type="text" placeholder='YourName' />
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Have a account ? <span>Loginin</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" />
          <p>
            By continuing, you agree to our <Link to="/home">Terms of Service</Link> and
            <Link to="/home">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
