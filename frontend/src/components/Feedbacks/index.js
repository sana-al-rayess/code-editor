
import React, { useState } from "react";
import Feedbacks from '../Feedbacks';
import Image from '../../images/dq.png';


const feedback = () => {

return (
    <div className="space">
    <div class="feedback-title">FEEDBACKS</div>


   <div class="feedback">
        <div class="feedback-box">
            <div><img class="quotations" src={Image} alt="quot"/></div>
            <div>
                <p class="review">"Very intuitive and easy to use. The editor was well-organized and the layout was 
                clean and simple, which made it easy for me to focus on my code!"</p>
            </div>
        </div>
        <div class="feedback-box">
            <div><img class="quotations" src={Image}  alt="quot"/></div>
            <div>
                <p class="review">" I particularly liked about your editor was the ability to run my code directly within the editor. 
                This feature saved me a lot of time"</p>
            </div>
        </div>
        <div class="feedback-box">
            <div><img class="quotations" src={Image}  alt="quot"/></div>
            <div>
                <p class="review">"Very intuitive and easy to use. The editor was well-organized and the layout was 
                clean and simple, which made it easy for me to focus on my code!"</p>
            </div>
        </div>
</div> 
</div>
        );
}

        export default feedback;
