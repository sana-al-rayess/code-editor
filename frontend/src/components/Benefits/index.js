import React, { useState } from "react";
import Image2 from "../../images/chat.png";
import Image3 from "../../images/collab.png";
import Image4 from "../../images/save.png";
import './benefits.css';


const benefits = () => {

    return (
        <div className="space">
            <p className="slogan-txt-benefits">What are the benefits of Pythonic?</p>
           
                <div className="icon-box">
                    <div className="box"><img src={Image2} alt="icon" />Chat</div>
                    <div className="box"><img src={Image3} alt="icon" />Save</div>
                    <div className="box"><img src={Image4} alt="icon" />Collab</div>
                </div>             

            </div>
            
            )
}
            export default benefits;