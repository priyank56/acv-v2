import React from 'react';
import * as Icon from 'react-feather';
import CtaButton from 'components/blocks/CtaButton';

import './Cta.css';

const Cta = () => {
  return (
    <div className="Cta">
      <div className="row justify-content-center">
        <div className="col-9">
          <h1 className="">Upgrade your online teaching methods using acv</h1>
          <div className="mt-5">
            <CtaButton
              name="Sign up free"
              link="signup"
              icon={<Icon.ArrowRight className="ms-2" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
