import React from 'react';
import { useHistory } from 'react-router-dom';

const CtaButton = (props) => {
  const { name, link, icon, className } = props;
  const history = useHistory();
  const btnClickHandler = () => {
    history.push(link);
  };
  return (
    <button
      className={
        className
          ? `btn btn-danger brand-btn ${className}`
          : 'btn btn-danger brand-btn'
      }
      onClick={btnClickHandler}
    >
      {name} {icon}
    </button>
  );
};

export default CtaButton;
