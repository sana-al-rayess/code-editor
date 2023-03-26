
import React, { useState } from "react";
import Feedbacks from '../Feedbacks';
import Image from '../../images/dq.png';
import './feedbacks.css';


const feedback = () => {

return (
    <div className="space">
    <div className="feedback-title">FEEDBACKS</div>


   <div className="feedback">
        <div className="feedback-box">
            <div><img className="quotations" src={Image} alt="quot"/></div>
            <div>
                <p className="review">"Very intuitive and easy to use. The editor was well-organized and the layout was 
                clean and simple, which made it easy for me to focus on my code!"</p>
            </div>
        </div>
        <div className="feedback-box">
            <div><img className="quotations" src={Image}  alt="quot"/></div>
            <div>
                <p className="review">" I particularly liked about your editor was the ability to run my code directly within the editor. 
                This feature saved me a lot of time"</p>
            </div>
        </div>
        <div className="feedback-box">
            <div><img className="quotations" src={Image}  alt="quot"/></div>
            <div>
                <p className="review">"Very intuitive and easy to use. The editor was well-organized and the layout was 
                clean and simple, which made it easy for me to focus on my code!"</p>
            </div>
        </div>
</div> 
</div>
        );
}

        export default feedback;
