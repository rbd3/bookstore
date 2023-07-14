import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Book = ({ title, author }) => (
  <div className='author-wrapper'>
    <h3 className='athor-name'>{title}</h3>
    <p>
      {author}
    </p>
    <Button name="Remove" />
  </div>
);

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};

Book.defaultProps = {
  title: 'Book title',
  author: 'Unknown Author',
};

export default Book;
