import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, name, onClick }) => {
  let buttonType;
  if (type === 'submit') {
    buttonType = 'submit';
  } else {
    buttonType = 'button';
  }

  return (
    <button type={buttonType} onClick={onClick}>
      {name}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']),
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
