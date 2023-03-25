import React, { useState } from "react";
import Image2 from "../../images/chat.png";
import Image3 from "../../images/collab.png";
import Image4 from "../../images/save.png";



const benefits = () => {

    return (
        <div className="space">
            <p className="slogan-txt">What are the benefits of Pythonic?</p>
           
                <div class="icon-box flex">
                    <div><img src={Image2} alt="icon" />Chat</div>
                    <div><img src={Image3} alt="icon" />Save</div>
                    <div><img src={Image4} alt="icon" />Collab</div>
                </div>             

            </div>
            
            )
}
            export default benefits;