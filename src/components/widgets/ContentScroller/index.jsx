import StaticImage from 'components/blocks/Image';
import React from 'react';

import './ContentScroller.css';

const imageHandler = (elm) => {
  document
    .querySelectorAll(`.wrap${elm.substring(0, 1)} .block`)
    .forEach((itag) => {
      if (itag.classList.contains('active')) itag?.classList?.remove('active');
    });
  document
    .querySelector(`.wrap${elm.substring(0, 1)} .b${elm.substring(2, 3)}`)
    ?.classList?.add('active');
};
const scrollHandler = () => {
  const elems = document.querySelectorAll('.section-wrapper');
  const vh = Math.round(window.innerHeight / 100);
  elems?.forEach((el) => {
    if (
      vh / 2 > el.getBoundingClientRect()?.top ||
      el.getBoundingClientRect()?.top > 600
    ) {
      if (el.classList.contains('active')) el.classList.remove('active');
    } else {
      if (!el.classList.contains('active')) {
        el.classList.add('active');
        const elm = el.getAttribute('itemID');
        imageHandler(elm);
      }
    }
  });
};

document.querySelector('body').onscroll = scrollHandler;

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
        <div className="row scroller-container gx-2">
          <div className="text-start col-blocks col-md-5">
            <div className="section">
              <div className="section-wrapper" itemID="1-1">
                <h3>Organize whiteboards lectures</h3>
                <p className="text-muted">
                  ACV content blocks make creating beautiful online
                  documentation simple. Format text as headers, to-do lists,
                  images, code snippets and more – or just embed existing
                  content seamlessly into your notes.
                </p>
              </div>
            </div>
            <div className="section">
              <div className="section-wrapper" itemID="1-2">
                <h3>Organize whiteboards lectures</h3>
                <p className="text-muted">
                  ACV content blocks make creating beautiful online
                  documentation simple. Format text as headers, to-do lists,
                  images, code snippets and more – or just embed existing
                  content seamlessly into your notes.
                </p>
              </div>
            </div>
            <div className="section">
              <div className="section-wrapper" itemID="1-3">
                <h3>Organize whiteboards lectures</h3>
                <p className="text-muted">
                  ACV content blocks make creating beautiful online
                  documentation simple. Format text as headers, to-do lists,
                  images, code snippets and more – or just embed existing
                  content seamlessly into your notes.
                </p>
              </div>
            </div>
          </div>
          <div className="col col-imgs wrap1">
            <div className="block b1 active rounded-5 overflow-visible">
              <StaticImage src="/assets/images/contents/img1.png" />
            </div>
            <div className="block b2 rounded-5 overflow-visible">
              <StaticImage src="/assets/images/contents/img2.png" />
            </div>
            <div className="block b3 rounded-5 overflow-visible">
              <StaticImage src="/assets/images/contents/img3.png" />
            </div>
          </div>
        </div>
        <div className="row scroller-container gx-2">
          <div className="col col-imgs wrap2">
            <div className="block b1 active rounded-5 overflow-visible">
              <StaticImage src="/assets/images/contents/img1.png" />
            </div>
            <div className="block b2 rounded-5 overflow-visible">
              <StaticImage src="/assets/images/contents/img2.png" />
            </div>
            <div className="block b3 rounded-5 overflow-visible">
              <StaticImage src="/assets/images/contents/img3.png" />
            </div>
          </div>
          <div className="text-start col-blocks">
            <div className="section">
              <div className="section-wrapper" itemID="2-1">
                <h3>Organize whiteboards lectures</h3>
                <p className="text-muted">
                  ACV content blocks make creating beautiful online
                  documentation simple. Format text as headers, to-do lists,
                  images, code snippets and more – or just embed existing
                  content seamlessly into your notes.
                </p>
              </div>
            </div>
            <div className="section">
              <div className="section-wrapper" itemID="2-2">
                <h3>Organize whiteboards lectures</h3>
                <p className="text-muted">
                  ACV content blocks make creating beautiful online
                  documentation simple. Format text as headers, to-do lists,
                  images, code snippets and more – or just embed existing
                  content seamlessly into your notes.
                </p>
              </div>
            </div>
            <div className="section">
              <div className="section-wrapper" itemID="2-3">
                <h3>Organize whiteboards lectures</h3>
                <p className="text-muted">
                  ACV content blocks make creating beautiful online
                  documentation simple. Format text as headers, to-do lists,
                  images, code snippets and more – or just embed existing
                  content seamlessly into your notes.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row scroller-container gx-2">
          <div className="text-start col-blocks">
            <div className="section">
              <div className="section-wrapper" itemID="3-1">
                <h3>Organize whiteboards lectures</h3>
                <p className="text-muted">
                  ACV content blocks make creating beautiful online
                  documentation simple. Format text as headers, to-do lists,
                  images, code snippets and more – or just embed existing
                  content seamlessly into your notes.
                </p>
              </div>
            </div>
            <div className="section">
              <div className="section-wrapper" itemID="3-2">
                <h3>Organize whiteboards lectures</h3>
                <p className="text-muted">
                  ACV content blocks make creating beautiful online
                  documentation simple. Format text as headers, to-do lists,
                  images, code snippets and more – or just embed existing
                  content seamlessly into your notes.
                </p>
              </div>
            </div>
            <div className="section">
              <div className="section-wrapper" itemID="3-3">
                <h3>Organize whiteboards lectures</h3>
                <p className="text-muted">
                  ACV content blocks make creating beautiful online
                  documentation simple. Format text as headers, to-do lists,
                  images, code snippets and more – or just embed existing
                  content seamlessly into your notes.
                </p>
              </div>
            </div>
          </div>
          <div className="col col-imgs wrap3">
            <div className="block b1 active rounded-5 overflow-visible">
              <StaticImage src="/assets/images/contents/img1.png" />
            </div>
            <div className="block b2 rounded-5 overflow-visible">
              <StaticImage src="/assets/images/contents/img2.png" />
            </div>
            <div className="block b3 rounded-5 overflow-visible">
              <StaticImage src="/assets/images/contents/img3.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentScroller;
