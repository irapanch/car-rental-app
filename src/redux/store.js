import { configureStore } from '@reduxjs/toolkit';
import { catalogCarsReducer } from './catalog/slice';

export const store = configureStore({
  reducer: {
    adverts: catalogCarsReducer,
  },
});
