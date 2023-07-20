import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/booksSlice';
import Book from './Home';

const BookList = () => {
  const showBook = useSelector((state) => state.bookstore.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <>
      {showBook.map((book) => (
        <Books key={book.item_id} id={book.item_id} title={book.title} author={book.author} />
      ))}
    </>
  );
}

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
