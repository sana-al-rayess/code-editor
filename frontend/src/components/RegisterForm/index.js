import React, { useState } from "react";
import axios from 'axios';
import './register.css';


function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [locationError, setLocationError] = useState("");
  const [genderError, setGenderError] = useState("");


  const handleSignUpClick = () => {
    window.location.href = "/login";
  };

  const handleSubmit = async (e) => {
    const form = e.target;
    setEmailError("");
    setPasswordError("");
    setNameError("");
    setAgeError("");
    setLocationError("");
    setGenderError("");
    e.preventDefault();

    if (!name) {
      setNameError("Please enter your name");
      return;
    }

    if (!email) {
      setEmailError("Please enter your email");
      return;
    }

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    }

    if (!age) {
      setAgeError("Please enter your age");
      return;
    }

    if (!location) {
      setLocationError("Please enter your location");
      return;
    }

    if (!gender) {
      setGenderError("Please select your gender");
      return;
    }


    const formData = new FormData(form);


    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register', formData);
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
      <div className="container-signup flex">
        <div className="flex column center">
          <a href="/" className="login-title-main white flex text-decoration-none" >
            <span style={{ color: '#0DD99F' }}>PY</span>THONIC
          </a>
          <div id="signup-content" className="register-content round-edges">

            <form onSubmit={handleSubmit}>
              <div id="login-content" className="login-container1 flex column">
                <p className="login-title dark-purple">Register</p>
                <label htmlFor="name" required>Name</label>
                <input id="name"className="input round-edges"type="text"name="name"onChange={(e) => setName(e.target.value)} required/>
                {nameError && <p className="error">{nameError}</p>}
                <label htmlFor="email">Email</label>
                <input id="email" className="input round-edges" type="text" name="email" onChange={(e) => setEmail(e.target.value)}required  />
                {emailError && <p className="error">{emailError}</p>}
                <label htmlFor="password">Password</label>
                <input id="password" className="input round-edges" type="password" name="password" onChange={(e) => setPassword(e.target.value)}required/>
                {passwordError && <p className="error">{passwordError}</p>}

                <label htmlFor="age">Age:</label>
                <input className="round-edges input display-block" type="number" id="age" name="age" onChange={(e) => setAge(e.target.value)} required/>
                {ageError && <p className="error">{ageError}</p>}

                <label htmlFor="location">Location:</label>
                <input className="round-edges input display-block" type="text" id="location" name="location" onChange={(e) => setLocation(e.target.value)} required/>
                {locationError && <p className="error">{locationError}</p>}

                <label htmlFor="gender">Gender:</label>
                <select className="round-edges input display-block" id="gender" name="gender" onChange={(e) => setGender(e.target.value)} required>
                  <option>Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {genderError && <p className="error">{genderError}</p>}
              </div>
              <button id="signup-btn" className="round-edges btn-signup" type="submit">
                Sign Up
              </button>
            </form>


            <div className="flex row">
              <p className="dark-purple">Already have an account?</p>
              <a href="#" className="content-btn" id="signup-content-btn btn" onClick={handleSignUpClick}>Sign In</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;