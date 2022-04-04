import StaticImage from 'components/blocks/Image';
import React, { useState } from 'react';

import './ContentScroller.css';

const scrollHandler = () => {
  const elems = document.querySelectorAll('.section-wrapper');
  // console.dir(elems.);
  elems?.forEach((el) => {
    if (
      50 > el.getBoundingClientRect()?.top ||
      el.getBoundingClientRect()?.top > 500
    ) {
      el.classList.remove('active');
    } else {
      el.classList.add('active');

      const elm = el.getAttribute('itemID');
      document
        .getElementById(`img${elm.substring(0, 1)}`)
        .classList.add('effect');
      setTimeout(() => {
        document
          .getElementById(`img${elm.substring(0, 1)}`)
          .classList.remove('effect');
      }, 500);
      elm?.includes('1-') || false
        ? (document.getElementById(
            `img${elm.substring(0, 1)}`
          ).src = `/assets/images/contents/img${elm.substring(2, 3)}.png`)
        : elm.includes('2-')
        ? (document.getElementById(
            `img${elm.substring(0, 1)}`
          ).src = `/assets/images/contents/img${elm.substring(2, 3)}.png`)
        : elm.includes('3-')
        ? (document.getElementById(
            `img${elm.substring(0, 1)}`
          ).src = `/assets/images/contents/img${elm.substring(2, 3)}.png`)
        : (document.getElementById(`img1`).src = '');
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
        <div className="row scroller-container gx-5">
          <div className="text-start col-blocks">
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
          <div className="col col-imgs">
            <div className="block1 rounded-5 overflow-hidden">
              <StaticImage
                src="/assets/images/contents/img1.png"
                className="mt-5 ms-5"
                id="img1"
              />
            </div>
          </div>
        </div>
        <div className="row scroller-container gx-5">
          <div className="col-lg-6 col-md-10 mb-5 mt-5 col-imgs">
            <div className="block2 rounded-5 mb-5 overflow-visible">
              <StaticImage src="/assets/images/contents/img2.png" id="img2" />
            </div>
          </div>
          <div className="col-lg-6 col-md-10 mb-5 p-5 mt-5 text-start">
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
        <div className="row scroller-container gx-5">
          <div className="col-lg-6 col-md-10 mb-5 p-5 text-start col-blocks">
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
          <div className="col-lg-6 col-md-10 mb-5 col-imgs">
            <div className="block3 rounded-5 overflow-hidden">
              <StaticImage
                src="/assets/images/contents/img3.png"
                className="mt-5 mx-4"
                id="img3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentScroller;
