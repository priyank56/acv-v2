import React from 'react';
import MainHeading from 'components/widgets/MainHeading';
import ContentScroller from 'components/widgets/ContentScroller';
import Cta from 'components/widgets/Cta';
import Footer from 'components/widgets/Footer';
import Header from 'components/layout/Header';
import ImgToggler from 'components/widgets/ImgToggler';

const Dashboard = (props) => {
  return (
    <div>
      <Header />
      <div className="space-x">
        <div className="container">
          <MainHeading />
          <ImgToggler />
        </div>
      </div>
      <ContentScroller />
      <Cta />
      <Footer />
    </div>
  );
};

export default Dashboard;
