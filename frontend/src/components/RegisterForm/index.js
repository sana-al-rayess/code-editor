import React, { useState } from "react";
const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");

  const handleSignUpClick = () => {
    window.location.href = "/login";
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === "") {
      setError("Name cannot be empty");
      return;
    }

    if (email.trim() === "") {
      setError("Email cannot be empty");
      return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email address");
      return;
    }

    if (password === "") {
      setError("Password cannot be empty");
      return;
    } else if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

  
    if (age === "") {
      setError("Age cannot be empty");
      return;
    }

    if (location.trim() === "") {
      setError("Location cannot be empty");
      return;
    }

    if (gender === "") {
      setError("Gender cannot be empty");
      return;
    }

    console.log(
      `Name: ${name} Email: ${email}, Password: ${password}, Confirm Password: ${confirmPassword}, Age: ${age}, Location: ${location}, Gender: ${gender}`
    );

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setAge("");
    setLocation("");
    setGender("");
    setError("");
  };

  return (
    <div>
      <div className="container-signup flex">
        <div className="flex column center">
          <a href="/" className="login-title-main white flex text-decoration-none" >
            <span style={{ color: '#0DD99F' }}>PY</span>THONIC
          </a>
          <div id="signup-content" className="register-content round-edges">

            <div id="login-content" className="login-container1 flex column">
              <p className="login-title dark-purple">Register</p>
              <label htmlFor="name">Username</label>
              <input id="name" className="input round-edges" type="text" />
              <label htmlFor="email">Email</label>
              <input id="email" className="input round-edges" type="text" />
              <label htmlFor="password">Password</label>
              <input id="password" className="input round-edges" type="password" />
              <label htmlFor="gender">Gender:</label>
              <select className="round-edges input-border display-block" id="gender" name="gender" required>
                <option>Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select><br/>
              <label htmlFor="age">Age:</label>
              <input className="round-edges input-border display-block" type="number" id="age" name="age"
                required />
              
              <label htmlFor="location">Location:</label>
              <input className="round-edges input-border display-block" type="text" id="location" name="location"
                required></input>
            </div>

            {error && <p className="error">{error}</p>}
            <button id="signup-btn" className="round-edges btn-signup" onClick={handleSubmit}>
              Sign Up
            </button>
            <div className="flex row">
              <p className="dark-purple">Already have an account?</p>
              <a href="#" className="content-btn" id="signup-content-btn btn" onClick={handleSignUpClick}>Sign In</a>

            </div>
          </div>
        </div>
      </div></div>
  );
};


export default RegistrationForm;