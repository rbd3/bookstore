import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/books/booksSlice';
import Form from './Form';
import BookList from './BookList';

const ShowBooks = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div>
      <BookList books={books} />
      <Form />
    </div>
  );
};

export default ShowBooks;
