import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, onClick }) => (
  <button type="button" onClick={onClick}>
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string,
};

Button.defaultProps = {
  name: 'Button',
};

export default Button;
