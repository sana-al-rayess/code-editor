import React, { useState } from "react";
import LoginForm from "../../components/LoginForm";
import RegistrationForm from "../../components/RegisterForm";

const LoginPage = () => {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);

  const handleFormToggle = () => {
    setIsLoginFormVisible(!isLoginFormVisible);
  };

  return (
    <div>
      <h1>Login or Register</h1>
      <nav>
        <ul>
          <li>
            <a href="#" onClick={handleFormToggle}>
              {isLoginFormVisible ? "Register" : "Log In"}
            </a>
          </li>
        </ul>
      </nav>
      {isLoginFormVisible ? <LoginForm /> : <RegistrationForm />}
    </div>
  );
};

export default LoginPage;

