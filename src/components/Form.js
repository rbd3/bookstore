import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook, postBook } from '../redux/books/booksSlice';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBook = {
      id: uuidv4(),
      title,
      author,
      category,
    };

    dispatch(addBook(newBook));
    await dispatch(postBook(newBook));

    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h3>ADD NEW BOOK</h3>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="Book title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <select
            name="Category"
            value={category}
            onChange={(e) => setCategory(e.target.category)}
          >
            <option value="" defaultValue="Category" disabled>
              Category
            </option>
            <option value="Fiction">Fiction</option>
            <option value="Nonfiction">Action</option>
            <option value="Biography">Biography</option>
            <option value="LoveStory">LoveStory</option>
          </select>
          <button type="submit" name="Submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
