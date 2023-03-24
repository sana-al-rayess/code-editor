import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
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
    <form onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
