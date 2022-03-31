import React from 'react';
import CompareSwiper from '../CompareSwiper';
import MainHeading from '../MainHeading';

import './hero.css';

const Hero = () => {
  return (
    <div className="hero space-x">
      <div className="container">
        <MainHeading />
        <CompareSwiper />
      </div>
    </div>
  );
};

export default Hero;
