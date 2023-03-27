import React from "react";
import Image from "../../images/img2.jpg";
import './textphoto.css';

const PhotoAndText = ({ photo, text1, text2 }) => {
    return (
      <div className="photo-text-container">
        <img className="photo-box" src={Image} alt="Photo" />
        <div className="text-box">
          <div style={{ marginBottom: "10px" }}>
            <p className="slogan-txt4">Languages Supported</p>
          </div>
          <div>
            <p className="slogan-txt1">
              Our online IDE supports <br/>Python but we will be adding<br /> multiple programming languages soon!
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default PhotoAndText;




