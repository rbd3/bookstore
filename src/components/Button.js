import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, onClick }) => (
  <button type='button' onClick={onClick}>
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  name: 'Button',
};

export default Button;
