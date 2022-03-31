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
        <div className="row scroller-sec gx-5">
          <div className="col-lg-6 col-md-10 mb-5 p-5 text-start">
            <h3>Organize whiteboards lectures</h3>
            <p className="text-muted">
              ACV content blocks make creating beautiful online documentation
              simple. Format text as headers, to-do lists, images, code snippets
              and more – or just embed existing content seamlessly into your
              notes.
            </p>
          </div>
          <div className="col-lg-6 col-md-10 mb-5">
            <div className="block1 rounded-5 overflow-hidden">
              <StaticImage
                src="/assets/images/contents/img1.png"
                className="mt-5 ms-5"
              />
            </div>
          </div>
        </div>
        <div className="row scroller-sec gx-5">
          <div className="col-lg-6 col-md-10 mb-5 mt-5">
            <div className="block2 rounded-5 mb-5 overflow-visible">
              <StaticImage src="/assets/images/contents/img2.png" />
            </div>
          </div>
          <div className="col-lg-6 col-md-10 mb-5 p-5 mt-5 text-start">
            <h3>Organize whiteboards lectures</h3>
            <p className="text-muted">
              ACV content blocks make creating beautiful online documentation
              simple. Format text as headers, to-do lists, images, code snippets
              and more – or just embed existing content seamlessly into your
              notes.
            </p>
          </div>
        </div>
        <div className="row scroller-sec gx-5">
          <div className="col-lg-6 col-md-10 mb-5 p-5 text-start">
            <h3>Organize whiteboards lectures</h3>
            <p className="text-muted">
              ACV content blocks make creating beautiful online documentation
              simple. Format text as headers, to-do lists, images, code snippets
              and more – or just embed existing content seamlessly into your
              notes.
            </p>
          </div>
          <div className="col-lg-6 col-md-10 mb-5">
            <div className="block3 rounded-5 overflow-hidden">
              <StaticImage
                src="/assets/images/contents/img3.png"
                className="mt-5 mx-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentScroller;
