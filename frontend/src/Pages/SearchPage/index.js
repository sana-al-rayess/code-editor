import { Link, useSearchParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/button';
import Search_bar from "../../components/Search_bar";

import './search.css';


const SearchPage = () => {

  const [isVisible, setIsVisible] = useState(false);
  let timeoutId;


  //copy link
  const handleWeblink = (event) => {
    setIsVisible(true);

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
    <Search_bar />
    <div className="result">
      <p id="search_result">Help us in building our community</p>
      <Button id="invite" onClick={handleWeblink}>Invite a Friend</Button>
      <div>
        {isVisible && (<div className="alert_mess">Linked Coppied Successfully</div>)}
      </div>
    </div>
  </div>
}
export default SearchPage; 