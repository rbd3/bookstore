import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    console.log('remove f');
    dispatch(removeBook(id));
  };

  return (
    <div className="author-wrapper">
      <h3 className="athor-name">{title}</h3>
      <p>{author}</p>
      <Button name="Remove" onClick={handleRemoveBook} />
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  author: PropTypes.string,
};

Book.defaultProps = {
  title: 'Book title',
  author: 'Unknown Author',
};

export default Book;
