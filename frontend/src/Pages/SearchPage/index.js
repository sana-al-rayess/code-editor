import { Link } from "react-router-dom";
import React, { useState } from "react";
import './search.css';


const SearchPage = () => {

  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  return <div className="content">
    <div className="navbar">
      <div className="logo">Pythonic</div>
      <div className="links">
        <Link to="/" className="linking">Home</Link>
        <Link to="/reg" className="linking">Code Editor</Link>
        <Link to="/aaa" className="linking">Codes</Link>
        <Link to="/aaa" className="linking">Chat</Link>
        <button id="logout" className="linking">Logout</button>
      </div>
    </div>
  </div>
}

export default SearchPage; 