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
        state.adverts.items = action.payload;
        state.adverts.isLoading = false;
        state.adverts.error = false;
      })
      .addCase(fetchAPI.pending, state => {
        state.adverts.isLoading = true;
        state.adverts.error = null;
      })
      .addCase(fetchAPI.rejected, (state, action) => {
        state.adverts.isLoading = false;
        state.adverts.error = action.payload;
      });
  },
});

export const catalogCarsReducer = slice.reducer;
