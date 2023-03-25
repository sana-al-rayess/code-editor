import { Link, useSearchParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Navbar from '../../components/Navbar/Navbar';
import './search.css';


const SearchPage = () => {

  const [inputValue, setInputValue] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  let timeoutId;
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  // const [weblink,setWebLink] = useState('');
  const handleWeblink = (event) => {
    setIsVisible(true);

    //copy link
    event.preventDefault();
    const url = "http://localhost:3000/"
    navigator.clipboard.writeText(url);
  }

  //message
  useEffect(() => {

    if (isVisible) {
      timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, 1000)
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isVisible]);



  return <div className="content">
    <Navbar className="navbar" />
    <div className="search">
      <input type='text' id="u_search" value={inputValue} onChange={handleInputChange} placeholder="Search For Users"></input>
    </div>
    <div className="result">
      <p id="search_result">Help us in building our community</p>
      <button id="invite" onClick={handleWeblink}>Invite a Friend</button>
      <div>
        {isVisible && (<div>Linked Coppied Successfully</div>)}
      </div>
    </div>
  </div>
}
export default SearchPage; 