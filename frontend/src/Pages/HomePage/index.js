import React, { useState } from "react";
import Navbar from '../../components/Navbar/Navbar';
import SloganLanding from '../../components/SloganLanding';
import './landing.css';

const HomePage = () => {
  

  return (
    <div className="content">
      <Navbar className="navbar" />
      <SloganLanding />
    </div>
  );
}

export default HomePage;