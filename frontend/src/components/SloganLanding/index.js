import React, { useState } from "react";
import Button from "../Button/button";

import './sloganlanding.css';

const Slogan = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    window.location.href = "/reg";
  };

  return (
    <div>
     
      <div className="flex slogan column">
        <div>
          <p className="slogan-txt">Modern, smart<br />
            & extensible cloud <span>IDE</span></p>
        </div>
        <div>
          <p className="slogan-txt2"> PYTHONIC is powerful IDE with additional<br /> features only a cloud application can give you!</p></div>
        <div>
          <Button  onClick={handleClick}>Get Started</Button>
                   
        </div>



      </div>
    </div>
  );
};

export default Slogan;
