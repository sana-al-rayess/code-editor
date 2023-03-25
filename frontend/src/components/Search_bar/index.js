import { useState } from "react";
import "../Search_bar/searchbar.css";


const Search_bar = () => {

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const [inputValue, setInputValue] = useState('');


  return (
    <div className="search">
      <input type='text' id="u_search" value={inputValue} onChange={handleInputChange} placeholder="Search For Users"></input>
    </div>
  )
}

export default Search_bar;

