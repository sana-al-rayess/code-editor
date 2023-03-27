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

    const searchUsers = async () => {
      const url = 'http://127.0.0.1:8000/api/users';
      const response = await axios.get(url);
      const data = response.data;
      const filteredUsers = data.users.filter(user => user.name.includes(inputValue));
      setUsers(filteredUsers);
    };

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
