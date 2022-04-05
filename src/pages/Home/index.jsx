import React from 'react';
import Hero from 'components/widgets/Hero';
import ContentScroller from 'components/widgets/ContentScroller';
import Cta from 'components/widgets/Cta';
import Footer from 'components/widgets/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <ContentScroller />
      <Cta />
      <Footer />
    </div>
  );
};

export default Home;
