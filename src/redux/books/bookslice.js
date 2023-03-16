import { createSlice } from '@reduxjs/toolkit';
import bookList from './bookList';

const initialState = {
  bookList,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newState = { ...state };
      newState.books.push(action.payload);
      return newState;
    },
    removeBook: (state, action) => {
      const newState = { ...state };
      newState.books = newState.books.filter((book) => book.id !== action.payload);
      return newState;
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
