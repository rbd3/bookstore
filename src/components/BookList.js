import React from 'react';
import PropTypes from 'prop-types';
import Book from './Home';

const BookList = ({ books }) => (
  <div>
    {books.map((book) => (
      <Book key={book.item_id} id={book.item_id} 
      title={book.title} author={book.author} category={book.category} />
    ))}
  </div>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      item_id: PropTypes.string,
      title: PropTypes.string,
      author: PropTypes.string,
      category: PropTypes.string,
    }),
  ),
};

BookList.defaultProps = {
  books: [],
};

export default BookList;
