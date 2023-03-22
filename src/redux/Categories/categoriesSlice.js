import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state, action) => {
      const newState = {
        ...state,
        categories: action.payload === 'Under construction'
          ? 'Under construction'
          : state.categories,
      };

      // return the new state object
      return newState;
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
