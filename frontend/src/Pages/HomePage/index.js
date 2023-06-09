import React, { useState } from "react";
import Navbar from '../../components/Navbar/Navbar';
import SloganLanding from '../../components/SloganLanding';
import TextPhoto1 from '../../components/TextPhoto1';
import Benefits from '../../components/Benefits';
import Footer from '../../components/Footer';
import Feedbacks from '../../components/Feedbacks';
import SuccessMetrics from '../../components/SuccessMetrics';
import Parallax from '../../components/Parallax';
import FlashNews from '../../components/FlashNews';
import Image from "../../images/afkham-sora.jpg";
import Image1 from "../../images/bg3.jpg";


import './landing.css';

const HomePage = () => {


  return (
    <div className="content">

      <div className="navbar component3" > <Navbar /></div>
      <div  ><FlashNews /></div>
      <div className="component" > <SloganLanding /></div>
      <br /><br />
      
      
      <div className="component">
        <Parallax backgroundImage={Image1}>
          <TextPhoto1 />
        </Parallax></div>

      <div ><Benefits /></div>
      
      <div><SuccessMetrics /></div>

      <div className="component" ><Parallax backgroundImage={Image}>
        {/* <h1></h1> */}
      </Parallax></div>

      <div className="component" ><Feedbacks /></div>
      <div className="component" ><Footer /></div>
    </div>
  );
}

export default HomePage;