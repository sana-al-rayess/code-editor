import React, { useState } from "react";
import Video from "../../videos/vid2.mp4";
import Image from "../../images/img3.PNG";


const myVideo = () => {
    
    return (
        
        <div className="video-container">
            {/* <video src={Video} controls autoPlay muted loop/> */}
            {/* <div><img className="img2" src={Image} alt="python2" /></div> */}
        </div>
    )
}

const VideoBackground = () => {
    return (
      <div className="video-background">
        <video autoPlay muted loop>
          <source src={Video} type="video/mp4" />
          
        </video>
        <div className="content">
          <p>This is some text over the video background.</p>
        </div>
      </div>
    );
  };
  
  export default VideoBackground;