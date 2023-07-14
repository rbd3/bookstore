import React from "react";
import Book from "./Home";

const BookList = ({ books }) => (
    <div>
      {books.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} />
      ))}
    </div>
  );
  
  export default BookList;
  