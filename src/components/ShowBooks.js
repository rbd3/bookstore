import React from 'react';
import Form from './Form';
import BookList from './BookList';

const books = [
  { id: 1, title: 'The Hunger Games', author: 'Suzanne Collins' },
  { id: 2, title: 'Dune', author: 'Frank Herbert' },
  { id: 2, title: 'Capital in the Twenty-First Century', author: 'Suzanne Collins' },
];

const ShowBooks = () => (
  <div>
    <BookList books={books} />
    <Form />
  </div>
);

export default ShowBooks;
