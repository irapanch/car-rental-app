const { createSlice } = require('@reduxjs/toolkit');

export const slice = createSlice({
  name: 'favorites',
  initialState: {
    favoriteCarList: [],
  },
  reducers: {
    addFavorites: (state, action) => {
      state.favoriteCarList.push(action.payload);
    },
    deleteFavorites: (state, action) => {
      state.favoriteCarList = state.favoriteCarList.filter(
        car => car.id !== action.payload
      );
    },
  },
});

export const { addFavorites, deleteFavorites } = slice.actions;
export const favCarReducer = slice.reducer;
