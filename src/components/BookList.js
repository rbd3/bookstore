import React from 'react';
import PropTypes from 'prop-types';
import Book from './Home';

const BookList = ({ books }) => (
  <div>
    {books.map((book) => (
    <Book key={book.id} title={book.title} author={book.author} />
    ))}
  </div>
);

BookList.propTypes = {
    books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      author: PropTypes.string,
     }),
   ),
};

BookList.defaultProps = {
    books: [],
  };

export default BookList;
