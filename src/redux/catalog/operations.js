import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const searchApi = axios.create({
  baseURL: 'https://662b9468de35f91de158c264.mockapi.io/',
  
});

export const fetchAPI = createAsyncThunk(
  'adverts/catalog',
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
