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

  BookList.prototypes = {
    books: PropTypes.string,
  }
  
  export default BookList;
  