import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import bookList from '../booksList';

const initialState = {
  books: bookList,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push({ ...action.payload, item_id: uuidv4() });
    },
    removeBook: (state, action) => {
      const bookIdToRemove = action.payload;
      state.books = state.books.filter((book) => book.item_id !== bookIdToRemove);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
