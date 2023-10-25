import { createSlice } from '@reduxjs/toolkit';
import { fetchAPI } from './operations';

export const initialState = {
  adverts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

export const slice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(fetchAPI.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(fetchAPI.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAPI.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const catalogCarsReducer = slice.reducer;
