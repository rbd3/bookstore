import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, name, onClick }) => {
  // Ensure that the 'type' prop is a valid string
  if (typeof type !== 'string') {
    throw new Error("Button component: 'type' prop must be a valid string.");
  }

  return (
    <button type={type} onClick={onClick}>
      {name}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']).isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
