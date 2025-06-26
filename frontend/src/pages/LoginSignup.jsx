import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/loginsignup.css';

const LoginSignup = () => {
  const [authMode, setAuthMode] = useState("Login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    if (!formData.email || !formData.password) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify({ email: formData.email }));
        alert("Login successful!");
        window.location.href = "/";
      } else {
        alert(data.message || "Login failed.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const signup = async () => {
    if (!formData.name || !formData.email || !formData.password) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem("token", data.token);
        alert("Signup successful!");
        window.location.href = "/";
      } else {
        alert(data.message || "Signup failed.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{authMode}</h1>
        <div className="loginsignup-fields">
          {authMode === "signup" && (
            <input
              name='name'
              value={formData.name}
              onChange={changeHandler}
              type="text"
              placeholder='Your Name'
            />
          )}
          <input
            name='email'
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder='Email'
          />
          <input
            name='password'
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder='Password'
          />
        </div>

        <button onClick={() => {
          authMode === "Login" ? login() : signup();
        }}>
          {authMode === "Login" ? "Login" : "Sign Up"}
        </button>

        <p className="loginsignup-login">
          {authMode === "signup"
            ? <>Have an account? <span onClick={() => setAuthMode("Login")}>Login</span></>
            : <>Create an account <span onClick={() => setAuthMode("signup")}>Click Here</span></>}
        </p>

        <div className="loginsignup-agree">
          <input type="checkbox" required />
          <p>
            By continuing, you agree to our <Link to="/">Terms of Service</Link> and
            <Link to="/"> Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
