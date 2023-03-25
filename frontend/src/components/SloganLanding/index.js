import React, { useState } from "react";
import Button from "../Button/button";

const Slogan = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div>
      <div className="news-container">
        
        <ul className="news-list">
          <li>[Breaking News] Major software vulnerability discovered, affecting millions of devices worldwide. </li>
          
        </ul>
      </div>
      <div className="flex slogan column">
        <div>
          <p className="slogan-txt">Modern, smart<br />
            & extensible cloud <span>IDE</span></p>
        </div>
        <div>
          <p className="slogan-txt2"> PYTHONIC is powerful IDE with additional<br /> features only a cloud application can give you!</p></div>
        <div>
          <Button className="padding" onClick={handleClick} disabled={clicked}>Get Started</Button>
        </div>



      </div>
    </div>
  );
};

export default Slogan;
