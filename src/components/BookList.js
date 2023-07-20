import React from 'react';
import PropTypes from 'prop-types';
import Book from './Home';

const BookList = ({ books }) => (
  <div>
    {books.map((book) => (
      <Book key={book.item_id } item_id={book.item_id} title={book.title} author={book.author} />
    ))}
  </div>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      item_id: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
    }),
  ),
};

BookList.defaultProps = {
  books: [],
};

export default BookList;
