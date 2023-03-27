import React, { useState } from "react";
import axios from 'axios';

function LoginForm() {

  const handleSignUpClick = () => {
    window.location.href = "/reg";
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', formData);
      const { user, authorisation } = response.data;
      localStorage.setItem('token', authorisation.token);
      localStorage.setItem("name", response.data.user.name);
      localStorage.setItem("user_id", response.data.user.id);
      localStorage.setItem("email", response.data.user.email);
      console.log('User created successfully:', user);

      window.location.href = "/Home";
    } catch (error) {
      console.error(error);
    }
    
  }
  return (
    <div>
      <div className="container flex">
        <div className="flex column center">
          <a  href="/" className="login-title-main white flex text-decoration-none" >
            <span style={{ color: '#0DD99F' }}>PY</span>THONIC
          </a>

          <div id="registercontent" className="register-content round-edges">
          <form onSubmit={handleSubmit}>
            <div id="login-content" className="login-container flex column">
              <p className="login-title dark-purple">Login</p>
              <label className="dark-purple" htmlFor="login-email">Email</label>
              <input type="email" className="input round-edges" id="email" name="email"/>

              <label className="dark-purple" htmlFor="login-pass">Password</label>
              <input type="password" className="input round-edges" id="password" name="password"/></div>

            <div className="flex">
              {/* {error && <p className="error">{error}</p>} */}
            </div>
            <button type="submit" className="login-btn round-edges btn">Log In</button>
            </form>
            <div className="flex row">
              <p className="dark-purple">Don't have an account?</p>
              <a href="#" className="content-btn" id="signup-content-btn btn" onClick={handleSignUpClick}>SignUp</a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
