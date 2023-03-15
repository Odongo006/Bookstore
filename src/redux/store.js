import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/bookslice';
import categoriesReducer from './Categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});

export default store;
