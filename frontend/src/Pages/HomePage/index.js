import React, { useState } from "react";
import Navbar from '../../components/Navbar/Navbar';
import SloganLanding from '../../components/SloganLanding';
import Video from '../../components/Video';
import TextPhoto1 from '../../components/TextPhoto1';
import Benefits from '../../components/Benefits';
import Footer from '../../components/Footer';
import Feedbacks from '../../components/Feedbacks';
import SuccessMetrics from '../../components/SuccessMetrics';
import Parallax from '../../components/Parallax';
import Image from "../../images/par1.jpg";
import Image1 from "../../images/par1.jpg";

import './landing.css';

const HomePage = () => {
  

  return (
    <div className="content">
      <Navbar className="navbar" />
      <SloganLanding /><br /><br />
      {/* <Video /> */}
      <TextPhoto1 />
      
      <Benefits />
      <SuccessMetrics />
      <Parallax backgroundImage={Image}>
        {/* <h1></h1> */}
      </Parallax>
      <Feedbacks />
      <Footer />
    </div>
  );
}

export default HomePage;