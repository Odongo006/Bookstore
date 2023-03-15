import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
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
