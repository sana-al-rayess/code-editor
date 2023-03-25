import React, { useState } from "react";
import Navbar from '../../components/Navbar/Navbar';
import SloganLanding from '../../components/SloganLanding';
import Video from '../../components/Video';
import TextPhoto1 from '../../components/TextPhoto1';
import Benefits from '../../components/Benefits';

import './landing.css';

const HomePage = () => {
  

  return (
    <div className="content">
      <Navbar className="navbar" />
      <SloganLanding /><br /><br />
      {/* <Video /> */}
      <TextPhoto1 />
      <Benefits />
    </div>
  );
}

export default HomePage;