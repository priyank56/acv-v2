import React from 'react';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider';
import './CompareSlider.css';

const CompareSwiper = () => {
  return (
    <div className="Swiper rounded-5 space-t">
      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage
            src="/assets/images/light-whiteboard.png"
            alt="Light Whiteboard"
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src="/assets/images/dark-whiteboard.png"
            alt="Dark Whiteboard"
            className="dark-image"
          />
        }
        position={46}
        handle={
          <div className="dragHandle">
            <img
              src={require('assets/icons/draggable.svg').default}
              className="dragger"
              alt="dragger"
            />
          </div>
        }
      />
    </div>
  );
};

export default CompareSwiper;
