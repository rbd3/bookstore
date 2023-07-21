import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import Button from './Button';
import { removeBook, deleteBook } from '../redux/books/booksSlice';

const Book = ({
  id, title, author, category
 }) => {
  const dispatch = useDispatch();

  const handleRemoveBook = async () => {
    dispatch(removeBook(id));
    await dispatch(deleteBook({ id }));
  };

  const randomProgress = Math.round(Math.random() * 100);
  const randomChapter = Math.round(Math.random() * 20 + 1);


  return (
    <div className="book-card">
      <div className="book-card-left-container">
      <div className="book-category">{category}</div>
      <h3 className="book-title">{title}</h3>
      <p className="book-author">{author}</p>
      <div className="book-card-button-container">
      <button type="button">
            Comments
          </button>
          <div className="vertical-divider" />
         <Button type="button" name="Remove" onClick={handleRemoveBook} />
         <div className="vertical-divider" />
          <button type="button">
            Edit
          </button>
      </div>
      </div>
      <div className="book-card-right-container">
        <div className="book-progressbar">
          <CircularProgressbar
            value={randomProgress}
            styles={{
              trail: {
                stroke: '#d6d6d6',
                strokeLinecap: 'butt',
                transformOrigin: 'center center',
              },
              path: {
                stroke: '#0290ff',
                strokeLinecap: 'butt',
                transition: 'stroke-dashoffset 0.5s ease 0s',
                transformOrigin: 'center center',
              },
            }}
          />
        </div>
        <div className="" style={{ fontSize: '30px' }}>
          {`${randomProgress}%`}
          <div style={{ fontSize: '15px' }}>Completed</div>
        </div>
        <div className="vertical-divider" />
        <div className="current-progress-container">
          <div className="current-chapter">CURRENT CHAPTER</div>
          <div className="chapter">{`Chapter ${randomChapter}`}</div>
          <button className="book-update-progress-button" type="button">
            Update Progress
          </button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
};

Book.defaultProps = {
  title: 'Book title',
  author: 'Unknown Author',
  category: 'Fiction',
};

export default Book;
