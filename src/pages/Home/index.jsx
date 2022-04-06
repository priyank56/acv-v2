import React from "react";
import Hero from "components/widgets/Hero";
import ContentScroller from "components/widgets/ContentScroller";
import Cta from "components/widgets/Cta";
import Footer from "components/widgets/Footer";
import Header from "components/layout/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <ContentScroller />
      <Cta />
      <Footer />
    </div>
  );
};

export default Home;
