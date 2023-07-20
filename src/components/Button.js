import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, name, onClick }) => (
  <button type={type} onClick={onClick}>
    {name}
  </button>
);

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'button']).isRequired,
  name: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  name: 'Button',
};

export default Button;
