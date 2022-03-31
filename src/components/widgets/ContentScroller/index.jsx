import StaticImage from 'components/blocks/Image';
import React from 'react';

import './ContentScroller.css';

const ContentScroller = () => {
  return (
    <div className="scroller bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2 className="sub-heading space-x">
              Everything you need to
              <span className="text-brand"> collaborate</span> online
            </h2>
          </div>
        </div>
        <div className="row scroller-sec">
          <div className="col-md-6 mb-5"></div>
          <div className="col-md-6 w-50 mb-5">
            <div className="block1 rounded-5 overflow-hidden">
              <StaticImage
                src="/assets/images/contents/img1.png"
                className="mt-5 ms-5"
              />
            </div>
          </div>
          <div className="col-md-6 w-50 mb-5">
            <div className="block2 rounded-5 mb-5 overflow-visible">
              <StaticImage src="/assets/images/contents/img2.png" />
            </div>
          </div>
          <div className="col-md-6"></div>
          <div className="col-md-6 mb-5"></div>
          <div className="col-md-6 w-50 mb-5">
            <div className="block3 rounded-5 overflow-hidden">
              <StaticImage
                src="/assets/images/contents/img3.png"
                className="mt-5 mx-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentScroller;
