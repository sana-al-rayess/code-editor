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

    const debounceSearch = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(searchUsers, delay);
    };
    debounceSearch();

    return () => clearTimeout(timeoutId);

  }, [inputValue]);

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };


  return (
    <>
      <div id="search">
        <input id="u_search" type="text" value={inputValue} onChange={handleInputChange} placeholder="Search for users" />
      </div>
      <div className="cards">
        {users.map(user => (
          <div className="user_cards" key={user.id}>
            <p className="text_user"> {user.name}</p>
            <p className="text_user"> {user.email}</p>
            <Button id="chat" value={user.id} onClick={() => window.location.href = "http://localhost:3000/messages"}>Say Hello</Button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Search_bar;
