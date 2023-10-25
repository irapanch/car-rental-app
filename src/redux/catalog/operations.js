import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const searchApi = axios.create({
  baseURL: 'https://6536b8babb226bb85dd28cc5.mockapi.io/adverts',
});

export const fetchAPI = createAsyncThunk(
  'adverts/fetchAll',
  async ({ page, limit }, thunkApi) => {
    try {
      const { data } = await searchApi.get('/adverts', {
        params: {
          page,
          limit,
        },
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
