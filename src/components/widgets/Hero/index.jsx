import React from 'react';
import CompareSwiper from 'components/widgets/CompareSwiper';
import MainHeading from 'components/widgets/MainHeading';

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
