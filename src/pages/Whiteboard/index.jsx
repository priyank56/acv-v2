import React from 'react';
import Hero from 'components/widgets/Hero';
import ContentScroller from 'components/widgets/ContentScroller';
import Cta from 'components/widgets/Cta';
import Footer from 'components/widgets/Footer';
import Header from 'components/layout/Header';
import './whiteboard';
import './Whiteboard.css';

const Whiteboard = () => {
  return (
    <div className="whiteboard">
      <Header />
      <Hero />
      {/* <canvas style={{ width: '500px', height: '500px' }}></canvas> */}
      <div id="force" className="d-none"></div>
      <div id="touches" className="d-none"></div>
      <canvas style={{ width: '100%', height: '100%' }}>
        Sorry, your browser is too old for this demo.
      </canvas>
      <ContentScroller />
      <Cta />
      <Footer />
    </div>
  );
};

export default Whiteboard;
