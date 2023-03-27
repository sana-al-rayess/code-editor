import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignUpClick = () => {
    window.location.href = "/reg";
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div>
      <div className="container flex">
        <div className="flex column center">
          <a  href="/" className="login-title-main white flex text-decoration-none" >
            <span style={{ color: '#0DD99F' }}>PY</span>THONIC
          </a>

          <div id="registercontent" className="register-content round-edges">

            <div id="login-content" className="login-container flex column">
              <p className="login-title dark-purple">Login</p>
              <label className="dark-purple" for="login-email">Email</label>
              <input type="email" className="input round-edges" value={email} onChange={handleEmailChange} />

              <label className="dark-purple" for="login-pass">Password</label>
              <input type="password" className="input round-edges" value={password} onChange={handlePasswordChange} /></div>

            <div className="flex">
              {error && <p className="error">{error}</p>}
            </div>
            <button type="button" className="login-btn round-edges btn" onClick={handleSubmit}>Log In</button>
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