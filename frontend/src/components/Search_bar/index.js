import { useState, useEffect } from "react";
import "../Search_bar/searchbar.css";
import axios from 'axios';
import Button from "../Button/button";


function Search_bar() {
  const [inputValue, setInputValue] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const delay = 500;
    let timeoutId;


  }, [inputValue]);


  return (
    <>
      <div id="search">
        <input id="u_search" type="text" value={inputValue} onChange={handleInputChange} placeholder="Search for users" />
      </div>
    </>
  );
}

export default Search_bar;
