import React from 'react';
import * as Icon from 'react-feather';
import CtaButton from 'components/blocks/CtaButton';

import './MainHeading.css';

const MainHeading = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-7">
        <h1 className="main-heading">
          It is time to expand your{' '}
          <span className="text-brand">online classes</span>
        </h1>
      </div>
      <div className="col-md-10 mt-4">
        <p className="text-muted">
          ACV content blocks make creating beautiful online documentation
          simple. Format text as headers, to-do lists, images, code snippets and
          more – or just embed existing content seamlessly into your notes.
        </p>
      </div>
      <div className="col-md-5 mt-4">
        <CtaButton
          name="Sign up free"
          link="signup"
          icon={<Icon.ArrowRight className="ms-2" />}
        />
      </div>
    </div>
  );
};

export default MainHeading;
