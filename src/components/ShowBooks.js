import React from 'react';
import { useSelector } from 'react-redux';
import Form from './Form';
import BookList from './BookList';

const ShowBooks = () => {
  const books = useSelector(state => state.books.books);
  console.log("test", books);

  return (
    <div>
      <BookList books={books} />
      <Form />
    </div>
  );
};

export default ShowBooks;
