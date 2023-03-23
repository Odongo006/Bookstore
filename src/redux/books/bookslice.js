/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/hNgqcuwZELgkJT0cAZJB/books';

export const addBook = createAsyncThunk(
  'books/addBook',
  async (newBook) => {
    const response = await axios.post(url, newBook);
    return response.data;
  },
);

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async () => {
    const response = await axios(url);
    return response.data;
  },
);

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (id) => {
    const response = await axios.delete(`${url}/${id}`);
    return response.data;
  },
);

const initialState = {
  bookList: [],
  status: 'idle',
  error: null,
  newStatus: '',
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.bookList.push(action.payload);
    },
    removeBook: (state, action) => {
      state.bookList = state.bookList.filter((book) => book.item_id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.status = 'loading';
      })

      .addCase(getBooks.fulfilled, (state, action) => {
        const responseObject = action.payload;
        const newBookArr = Object.keys(responseObject).map((id) => {
          const bookObj = responseObject[id][0];
          bookObj.item_id = id;
          return bookObj;
        });
        state.status = 'succeeded';
        state.bookList = newBookArr;
      })

      .addCase(getBooks.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      })

      .addCase(addBook.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.newStatus = action.payload;
      })

      .addCase(removeBook.fulfilled, (state, action) => {
        state.status = 'succeded';
        state.newStatus = action.payload;
      });
  },
});

export const booksActions = booksSlice.actions;

export default booksSlice.reducer;
