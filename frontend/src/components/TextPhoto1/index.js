import React, { useState } from "react";
import Image from "../../images/py1.png";




const textPhoto = () => {

    return (

        <div className="flex slogan2 ">
            <div className="flex column slogan2 container2">
                <div className="slogan-txt"><p>Languages Supported</p></div>
                <div><p className="slogan-txt1">Our online IDE supports Python<br /> but we will be adding multiple<br /> programming languages soon!</p></div>
            </div>
            {/* <div><img className="img" src={Image} alt="python1" /></div> */}

        </div>


    )
}
export default textPhoto;