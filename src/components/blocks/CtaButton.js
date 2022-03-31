import React from 'react';
import { useHistory } from 'react-router-dom';

const CtaButton = (props) => {
  const { name, link, icon } = props;
  const history = useHistory();
  const btnClickHandler = () => {
    history.push(link);
  };
  return (
    <button className="btn btn-danger brand-btn" onClick={btnClickHandler}>
      {name} {icon}
    </button>
  );
};

export default CtaButton;
